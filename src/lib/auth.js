import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

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
            
            return await adapter.createUser(user);
        }
    };
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: CustomMongoDBAdapter(clientPromise),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            // Add custom fields to session
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
