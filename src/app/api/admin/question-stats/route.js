import clientPromise from '@/lib/mongodb';

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db();

        // Aggregate counts from questionBank grouped by subject, chapter, subTopic, and question type
        const stats = await db.collection('questionBank').aggregate([
            {
                $project: {
                    subject: '$subject',
                    chapter: '$chapter',
                    subTopic: { $ifNull: ['$subTopic', { $ifNull: ['$subtopic', ''] }] },
                    resolvedType: {
                        $cond: [
                            {
                                $or: [
                                    { $regexMatch: { input: { $ifNull: ['$questionType', ''] }, regex: /assertion/i } },
                                    { $regexMatch: { input: { $ifNull: ['$type', ''] }, regex: /assertion/i } }
                                ]
                            },
                            'ASSERTION_REASON',
                            {
                                $cond: [
                                    {
                                        $or: [
                                            { $regexMatch: { input: { $ifNull: ['$questionType', ''] }, regex: /numeric/i } },
                                            { $regexMatch: { input: { $ifNull: ['$type', ''] }, regex: /numeric/i } }
                                        ]
                                    },
                                    'NUMERICAL',
                                    'MCQ'
                                ]
                            }
                        ]
                    }
                }
            },
            {
                $group: {
                    _id: {
                        subject: '$subject',
                        chapter: '$chapter',
                        subTopic: '$subTopic',
                        type: '$resolvedType'
                    },
                    count: { $sum: 1 }
                }
            }
        ]).toArray();

        // Format to a client-friendly structure with backward compatibility:
        // formatted[subject] = { _total, _uncategorized, _types, _chapters, [chapterName]: count }
        const formatted = {};
        stats.forEach(item => {
            const subject = item._id.subject || 'Unknown';
            const chapter = (item._id.chapter || '').trim();
            const subTopic = (item._id.subTopic || '').trim();
            const type = item._id.type || 'MCQ';
            const count = item.count;

            if (!formatted[subject]) {
                formatted[subject] = {
                    _total: 0,
                    _uncategorized: 0,
                    _types: { MCQ: 0, NUMERICAL: 0, ASSERTION_REASON: 0 },
                    _chapters: {}
                };
            }

            formatted[subject]._total += count;
            formatted[subject]._types[type] = (formatted[subject]._types[type] || 0) + count;

            if (!chapter) {
                formatted[subject]._uncategorized += count;
            } else {
                // Backward-compatibility: formatted[subject][chapter] = count
                formatted[subject][chapter] = (formatted[subject][chapter] || 0) + count;

                if (!formatted[subject]._chapters[chapter]) {
                    formatted[subject]._chapters[chapter] = {
                        total: 0,
                        types: { MCQ: 0, NUMERICAL: 0, ASSERTION_REASON: 0 },
                        subtopics: {}
                    };
                }
                formatted[subject]._chapters[chapter].total += count;
                formatted[subject]._chapters[chapter].types[type] = (formatted[subject]._chapters[chapter].types[type] || 0) + count;

                const subKey = subTopic || '__uncategorized__';
                if (!formatted[subject]._chapters[chapter].subtopics[subKey]) {
                    formatted[subject]._chapters[chapter].subtopics[subKey] = {
                        total: 0,
                        types: { MCQ: 0, NUMERICAL: 0, ASSERTION_REASON: 0 }
                    };
                }
                formatted[subject]._chapters[chapter].subtopics[subKey].total += count;
                formatted[subject]._chapters[chapter].subtopics[subKey].types[type] = (formatted[subject]._chapters[chapter].subtopics[subKey].types[type] || 0) + count;
            }
        });

        return Response.json(formatted);
    } catch (error) {
        console.error('Failed to aggregate question bank stats:', error);
        return Response.json({ error: error.message || 'Internal server error' }, { status: 500 });
    }
}

