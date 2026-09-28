import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { calculate732DayExpiry } from "@/lib/authorization";

// ── Startup validation — logs clearly which env vars are missing on Vercel ────
const missing = [];
if (!process.env.AUTH_SECRET && !process.env.NEXTAUTH_SECRET) missing.push('AUTH_SECRET');
if (!process.env.GOOGLE_CLIENT_ID)     missing.push('GOOGLE_CLIENT_ID');
if (!process.env.GOOGLE_CLIENT_SECRET) missing.push('GOOGLE_CLIENT_SECRET');
if (!process.env.MONGODB_URI)          missing.push('MONGODB_URI');
if (missing.length > 0) {
    console.error('❌ NextAuth Configuration Error — missing env vars:', missing.join(', '));
}

// next-auth v5 uses AUTH_SECRET; fall back to NEXTAUTH_SECRET for compatibility
if (!process.env.AUTH_SECRET && process.env.NEXTAUTH_SECRET) {
    process.env.AUTH_SECRET = process.env.NEXTAUTH_SECRET;
}

// next-auth v5 requires AUTH_TRUST_HOST=true behind Vercel's reverse proxy
if (process.env.VERCEL || process.env.VERCEL_URL) {
    process.env.AUTH_TRUST_HOST = 'true';
}

function CustomMongoDBAdapter(clientPromise) {
    const adapter = MongoDBAdapter(clientPromise);

    return {
        ...adapter,

        /**
         * Look up a user by linked OAuth provider account.
         * Self-healing: If an orphaned account document is found (meaning the account
         * exists in `accounts` but its associated user in `users` was deleted),
         * delete the orphaned account record so it NEVER causes OAuthAccountNotLinked errors.
         */
        async getUserByAccount({ provider, providerAccountId }) {
            const client = await clientPromise;
            const db = client.db('testseries');

            const account = await db.collection('accounts').findOne({ provider, providerAccountId });
            if (!account) return null;

            let user = null;
            try {
                if (ObjectId.isValid(account.userId)) {
                    user = await db.collection('users').findOne({ _id: new ObjectId(account.userId) });
                }
            } catch (err) {
                console.error('[Auth] Error looking up user for account:', err);
            }

            if (!user) {
                // Orphaned account found! The user was deleted, but account remained.
                console.warn(`[Auth] Self-healing: Cleared orphaned OAuth account (${provider}:${providerAccountId}) pointing to deleted user ${account.userId}`);
                await db.collection('accounts').deleteOne({ _id: account._id });
                return null;
            }

            const { _id, ...rest } = user;
            return { id: _id.toString(), ...rest };
        },

        /**
         * Normalized, case-insensitive email lookup to ensure student@gmail.com and Student@Gmail.com
         * always match the same user record.
         */
        async getUserByEmail(email) {
            if (!email) return null;
            const client = await clientPromise;
            const db = client.db('testseries');
            const normalizedEmail = email.toLowerCase().trim();
            const escaped = normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            const user = await db.collection('users').findOne({
                email: { $regex: new RegExp(`^${escaped}$`, 'i') }
            });

            if (!user) return null;
            const { _id, ...rest } = user;
            return { id: _id.toString(), ...rest };
        },

        /**
         * Creates a new student user record with account recovery.
         * If the user previously paid (a verified payment exists in `payments`),
         * their account status, 732-day access, and confirmed payment status are
         * immediately restored so they are NEVER required to pay again.
         */
        async createUser(user) {
            const client = await clientPromise;
            const db = client.db('testseries');

            const normalizedEmail = user.email ? user.email.toLowerCase().trim() : '';

            // Guard against duplicate user creation if race condition occurs
            if (normalizedEmail) {
                const escaped = normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const existing = await db.collection('users').findOne({
                    email: { $regex: new RegExp(`^${escaped}$`, 'i') }
                });
                if (existing) {
                    const { _id, ...rest } = existing;
                    return { id: _id.toString(), ...rest };
                }
            }

            // Sequence generator for unique studentCode
            const counter = await db.collection('counters').findOneAndUpdate(
                { _id: 'studentCode' },
                { $inc: { seq: 1 } },
                { returnDocument: 'after', upsert: true }
            );

            const seq = counter?.seq ?? 1;
            const studentCode = `S${String(seq).padStart(10, '0')}`;

            user.studentCode = studentCode;
            user.email = normalizedEmail || user.email;
            user.createdAt = new Date();

            // Check if this student previously paid (historical payment recovery)
            let historicalPayment = null;
            if (normalizedEmail) {
                const escaped = normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                historicalPayment = await db.collection('payments').findOne({
                    email: { $regex: new RegExp(`^${escaped}$`, 'i') },
                    $or: [
                        { paymentStatus: { $in: ['PAID', 'CONFIRMED'] } },
                        { status: { $in: ['paid', 'CONFIRMED'] } },
                        { amountVerified: true }
                    ]
                }, { sort: { createdAt: -1 } });
            }

            if (historicalPayment) {
                console.log(`[Auth] Recovering paid access for recreated student ${normalizedEmail} (Payment: ${historicalPayment.razorpayPaymentId || historicalPayment._id})`);
                const startDate = new Date();
                const expiryDate = calculate732DayExpiry(startDate);

                user.paymentStatus = 'CONFIRMED';
                user.accountStatus = 'ACTIVE';
                user.isApproved = true;
                user.approvals = { mock: true, live: true, subject: true, chapter: true, subtopic: true };
                user.authorizationStartDate = startDate.toISOString();
                user.authorizationExpiryDate = expiryDate.toISOString();
                user.paymentConfirmedAt = historicalPayment.paidAt || startDate;
                user.approvedAt = startDate;
                user.hasPaidAccess = true;
                user.paidExam = historicalPayment.exam || 'NEET';
                if (historicalPayment.exam) {
                    user.exam = historicalPayment.exam;
                    user.examPreparingFor = historicalPayment.exam;
                }
                user.authorizationHistory = [{
                    action: 'AUTO_RESTORED_ON_GOOGLE_RELOGIN',
                    paymentId: historicalPayment.razorpayPaymentId || historicalPayment._id?.toString(),
                    orderId: historicalPayment.razorpayOrderId,
                    amount: historicalPayment.finalAmount || historicalPayment.amount,
                    exam: historicalPayment.exam,
                    timestamp: startDate,
                    note: 'Account recreated via Google sign-in. Verified payment history detected and 732-day access restored.'
                }];
            } else {
                user.paymentStatus = 'PENDING';
                user.accountStatus = 'PENDING_APPROVAL';
                user.authorizationStartDate = null;
                user.authorizationExpiryDate = null;
                user.paymentConfirmedAt = null;
                user.approvedAt = null;
                user.approvedBy = null;
                user.authorizationHistory = [];
                user.approvals = { mock: false, live: false, subject: false, chapter: false, subtopic: false };
            }

            const result = await db.collection('users').insertOne(user);
            const createdUserId = result.insertedId;

            // Re-link payment records to this new student user ID and studentCode
            if (normalizedEmail) {
                const escaped = normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                await db.collection('payments').updateMany(
                    { email: { $regex: new RegExp(`^${escaped}$`, 'i') } },
                    { $set: { studentId: createdUserId, studentCode: user.studentCode, updatedAt: new Date() } }
                );
            }

            return { id: createdUserId.toString(), ...user };
        },

        /**
         * Links an OAuth provider account to a user ID.
         * Ensures atomicity and removes any conflicting accounts to prevent duplicate key errors.
         */
        async linkAccount(account) {
            const client = await clientPromise;
            const db = client.db('testseries');

            const userIdObj = ObjectId.isValid(account.userId) ? new ObjectId(account.userId) : account.userId;

            // Clean up any stale account rows for this provider + providerAccountId or user
            await db.collection('accounts').deleteMany({
                $or: [
                    { provider: account.provider, providerAccountId: account.providerAccountId },
                    { userId: userIdObj, provider: account.provider }
                ]
            });

            const accountToInsert = {
                ...account,
                userId: userIdObj
            };

            await db.collection('accounts').insertOne(accountToInsert);
            return account;
        },

        /**
         * Delete user cascading to accounts and sessions.
         */
        async deleteUser(userId) {
            const client = await clientPromise;
            const db = client.db('testseries');
            const uId = ObjectId.isValid(userId) ? new ObjectId(userId) : userId;

            await Promise.all([
                db.collection('accounts').deleteMany({ userId: uId }),
                db.collection('sessions').deleteMany({ userId: uId }),
                db.collection('users').deleteOne({ _id: uId }),
            ]);
        }
    };
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    trustHost: true,
    secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
    adapter: CustomMongoDBAdapter(clientPromise),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // Self-healing: if an existing user signs in and has a verified payment in payments collection,
            // ensure their access and confirmed status are active!
            if (user?.email) {
                try {
                    const client = await clientPromise;
                    const db = client.db('testseries');
                    const normalizedEmail = user.email.toLowerCase().trim();
                    const escaped = normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

                    const historicalPayment = await db.collection('payments').findOne({
                        email: { $regex: new RegExp(`^${escaped}$`, 'i') },
                        $or: [
                            { paymentStatus: { $in: ['PAID', 'CONFIRMED'] } },
                            { status: { $in: ['paid', 'CONFIRMED'] } },
                            { amountVerified: true }
                        ]
                    }, { sort: { createdAt: -1 } });

                    if (historicalPayment) {
                        const existingUser = await db.collection('users').findOne({
                            email: { $regex: new RegExp(`^${escaped}$`, 'i') }
                        });

                        if (existingUser && (existingUser.paymentStatus !== 'CONFIRMED' && existingUser.paymentStatus !== 'PAID')) {
                            const startDate = new Date();
                            const expiryDate = calculate732DayExpiry(startDate);
                            await db.collection('users').updateOne(
                                { _id: existingUser._id },
                                {
                                    $set: {
                                        paymentStatus: 'CONFIRMED',
                                        accountStatus: 'ACTIVE',
                                        isApproved: true,
                                        approvals: { mock: true, live: true, subject: true, chapter: true, subtopic: true },
                                        authorizationStartDate: startDate.toISOString(),
                                        authorizationExpiryDate: expiryDate.toISOString(),
                                        hasPaidAccess: true,
                                        paidExam: historicalPayment.exam || existingUser.exam || 'NEET',
                                        updatedAt: startDate
                                    }
                                }
                            );
                        }
                    }
                } catch (e) {
                    console.error('[Auth] Error in signIn payment reconciliation:', e);
                }
            }
            return true;
        },
        async session({ session, user }) {
            if (session.user && user) {
                const adminEmails = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
                session.user.isAdmin = user.role === 'admin' || (user.email && adminEmails.includes(user.email.toLowerCase()));
                session.user.id = user.id;
                if (user.role) {
                    session.user.role = user.role;
                }
                if (user.studentCode) {
                    session.user.studentCode = user.studentCode;
                }
                session.user.paymentStatus = user.paymentStatus || 'PENDING';
                session.user.accountStatus = user.accountStatus || 'PENDING_APPROVAL';
                session.user.authorizationExpiryDate = user.authorizationExpiryDate || null;
            }
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
        error: '/auth/signin',
    },
});
