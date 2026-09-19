import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }) {
    const session = await auth();

    if (!session) {
        redirect('/auth/signin?callbackUrl=/admin');
    }

    if (!session.user?.isAdmin) {
        redirect('/dashboard');
    }

    return <>{children}</>;
}
