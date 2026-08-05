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

        // Format to a client-friendly structure:
        // { [subject]: { _total: N, _uncategorized: N, [chapter]: count, ... } }
        const formatted = {};
        stats.forEach(item => {
            const subject = item._id.subject || 'Unknown';
            const chapter = (item._id.chapter || '').trim();
            if (!formatted[subject]) {
                formatted[subject] = { _total: 0, _uncategorized: 0 };
            }
            formatted[subject]._total += item.count;

            if (!chapter) {
                // empty chapter — uncategorized
                formatted[subject]._uncategorized += item.count;
            } else {
                formatted[subject][chapter] = (formatted[subject][chapter] || 0) + item.count;
            }
        });

        return Response.json(formatted);
    } catch (error) {
        console.error('Failed to aggregate question bank stats:', error);
        return Response.json({ error: error.message || 'Internal server error' }, { status: 500 });
    }
}
