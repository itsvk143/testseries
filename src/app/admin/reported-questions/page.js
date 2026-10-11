'use client';

import Navbar from '@/components/Navbar';
import AdminReportedQuestions from '@/components/AdminReportedQuestions';

export default function ReportedQuestionsAdminPage() {
    return (
        <div style={{ minHeight: '100vh', background: '#0a0f1d' }}>
            <Navbar />
            <main style={{ padding: '24px 16px' }}>
                <AdminReportedQuestions />
            </main>
        </div>
    );
}
