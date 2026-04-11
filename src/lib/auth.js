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
            user.createdAt = new Date(); // Guarantee createdAt for 800-day policy
            
            return await adapter.createUser(user);
        }
    };
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
    adapter: CustomMongoDBAdapter(clientPromise),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // Hard expiry check: 800 days
            if (user?.createdAt) {
                const isAdmin = process.env.ADMIN_EMAILS?.split(',').includes(user.email) || false;
                if (!isAdmin) {
                    const daysSinceCreation = (Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24);
                    if (daysSinceCreation > 800) {
                        console.warn(`Blocking login for expired account: ${user.email} (${Math.floor(daysSinceCreation)} days old)`);
                        return false; // This triggers an AccessDenied error
                    }
                }
            }
            return true;
        },
        async session({ session, user }) {
            if (session.user && user) {
                session.user.isAdmin = process.env.ADMIN_EMAILS?.split(',').includes(user.email) || false;
                session.user.id = user.id;
                if (user.studentCode) {
                    session.user.studentCode = user.studentCode;
                }
            }
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
});
