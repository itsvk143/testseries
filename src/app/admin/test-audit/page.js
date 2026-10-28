'use client';

import Navbar from '@/components/Navbar';
import AdminTestAudit from '@/components/AdminTestAudit';

export default function TestAuditAdminPage() {
    return (
        <div style={{ minHeight: '100vh', background: '#0a0f1d' }}>
            <Navbar />
            <main style={{ padding: '24px 16px' }}>
                <AdminTestAudit />
            </main>
        </div>
    );
}
