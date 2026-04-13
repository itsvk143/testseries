export async function generateMetadata({ params }) {
    // Determine exact param value early
    const { exam } = await params;
    
    // Format exam name: "jee-mains" -> "JEE Mains", "neet" -> "NEET"
    const formatName = (str) => {
        if (!str) return 'Exams';
        if (str.toLowerCase() === 'neet') return 'NEET';
        if (str.toLowerCase() === 'jee-mains') return 'JEE Mains';
        if (str.toLowerCase() === 'jee-advance') return 'JEE Advanced';
        // Auto fallback
        return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };
    
    const formatted = formatName(exam);
    
    return {
        title: `${formatted} Mock Tests & PYQ | TestSeries`,
        description: `Access premium topic-wise, chapter-wise, and full-length tests for ${formatted}. Track your progress and master your exams.`,
        openGraph: {
            title: `${formatted} Premium Test Series`,
            description: `Boost your score in ${formatted} with real-time test analysis!`,
        }
    };
}

// Pass children gracefully. Next.js natively wraps page.js within this.
export default function ExamLayout({ children }) {
    return <>{children}</>;
}
