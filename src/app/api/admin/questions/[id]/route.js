import { auth } from '@/lib/auth';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { canonicalizeLatex } from '@/lib/questionFormatter';

function isUserAdmin(session) {
    if (!session?.user) return false;
    if (session.user.isAdmin === true || session.user.role === 'admin') return true;
    const adminEmails = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
    return adminEmails.includes(session.user.email?.toLowerCase());
}

export async function GET(request, { params }) {
    try {
        const session = await auth();
        if (!isUserAdmin(session)) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;
        if (!id) {
            return Response.json({ error: 'Question ID required' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        let filter = null;
        if (ObjectId.isValid(id) && String(id).length === 24) {
            filter = { _id: new ObjectId(id) };
        } else {
            filter = { $or: [{ id }, { questionId: id }] };
        }

        const question = await db.collection('questionBank').findOne(filter);
        if (!question) {
            return Response.json({ error: 'Question not found' }, { status: 404 });
        }

        return Response.json({ question });
    } catch (error) {
        console.error('Error fetching question:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PATCH(request, { params }) {
    try {
        const session = await auth();
        if (!isUserAdmin(session)) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;
        if (!id) {
            return Response.json({ error: 'Question ID required' }, { status: 400 });
        }

        const body = await request.json();
        const client = await clientPromise;
        const db = client.db('testseries');

        let filter = null;
        if (ObjectId.isValid(id) && String(id).length === 24) {
            filter = { _id: new ObjectId(id) };
        } else {
            filter = { $or: [{ id }, { questionId: id }] };
        }

        const existing = await db.collection('questionBank').findOne(filter);
        if (!existing) {
            return Response.json({ error: 'Question not found in database' }, { status: 404 });
        }

        const now = new Date();
        const updatePayload = {
            updatedAt: now
        };

        if (body.question !== undefined) {
            updatePayload.question = canonicalizeLatex(body.question);
        }
        if (body.explanation !== undefined) {
            updatePayload.explanation = canonicalizeLatex(body.explanation);
        }
        if (body.image !== undefined) {
            updatePayload.image = body.image;
        }

        if (Array.isArray(body.options)) {
            updatePayload.options = body.options.map(opt => {
                if (typeof opt === 'object' && opt !== null) {
                    return {
                        text: canonicalizeLatex(opt.text || ''),
                        ...(opt.image ? { image: opt.image } : {})
                    };
                }
                return canonicalizeLatex(String(opt || ''));
            });
        }

        if (body.correctOption !== undefined) {
            updatePayload.correctOption = String(body.correctOption).trim().toLowerCase();
            const map = { a: 0, b: 1, c: 2, d: 3 };
            if (map[updatePayload.correctOption] !== undefined && body.correctAnswer === undefined) {
                updatePayload.correctAnswer = map[updatePayload.correctOption];
            }
        }

        if (body.correctAnswer !== undefined) {
            updatePayload.correctAnswer = body.correctAnswer;
        }

        await db.collection('questionBank').updateOne(filter, { $set: updatePayload });
        const updated = await db.collection('questionBank').findOne(filter);

        return Response.json({
            success: true,
            message: 'Question successfully updated in Question Bank',
            question: updated
        });
    } catch (error) {
        console.error('Error updating question:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
