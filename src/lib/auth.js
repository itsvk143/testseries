import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

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
        async createUser(user) {
            const client = await clientPromise;
            const db = client.db();
            
            const counter = await db.collection('counters').findOneAndUpdate(
                { _id: 'studentCode' },
                { $inc: { seq: 1 } },
                { returnDocument: 'after', upsert: true }
            );
            
            const seq = counter?.value?.seq ?? counter?.seq ?? 1;
            const studentCode = `S${String(seq).padStart(10, '0')}`;
            
            user.studentCode = studentCode;
            user.createdAt = new Date();
            user.paymentStatus = 'PENDING';
            user.accountStatus = 'PENDING_APPROVAL';
            user.authorizationStartDate = null;
            user.authorizationExpiryDate = null;
            user.paymentConfirmedAt = null;
            user.approvedAt = null;
            user.approvedBy = null;
            user.authorizationHistory = [];
            user.approvals = { mock: false, live: false, subject: false, chapter: false, subtopic: false };
            
            return await adapter.createUser(user);
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
            // Students can always log in to view dashboard, profile, and status
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
    },
});
