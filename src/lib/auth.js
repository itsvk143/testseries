import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
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
            }
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
});
