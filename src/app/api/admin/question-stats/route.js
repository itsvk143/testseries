import clientPromise from '@/lib/mongodb';

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db();

        // Aggregate counts from questionBank grouped by subject and chapter
        const stats = await db.collection('questionBank').aggregate([
            {
                $group: {
                    _id: {
                        subject: "$subject",
                        chapter: "$chapter"
                    },
                    count: { $sum: 1 }
                }
            }
        ]).toArray();

        // Format to a client-friendly structure: { [subject]: { [chapter]: count } }
        const formatted = {};
        stats.forEach(item => {
            const subject = item._id.subject || 'Unknown';
            const chapter = item._id.chapter || 'General';
            if (!formatted[subject]) {
                formatted[subject] = {};
            }
            formatted[subject][chapter] = item.count;
        });

        return Response.json(formatted);
    } catch (error) {
        console.error('Failed to aggregate question bank stats:', error);
        return Response.json({ error: error.message || 'Internal server error' }, { status: 500 });
    }
}
