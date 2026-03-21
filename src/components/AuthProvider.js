'use client';
import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({ children }) {
    // Silently handle auth errors to prevent app crashes
    const handleError = (error) => {
        console.warn('Auth session error (non-critical):', error.message || error);
    };

    return (
        <SessionProvider
            refetchOnWindowFocus={false}
            refetchInterval={0}
        >
            {children}
        </SessionProvider>
    );
}
