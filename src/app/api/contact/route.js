import clientPromise from '@/lib/mongodb';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, exam, subject, message } = body;

        if (!name || !email || !message) {
            return Response.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        const contactEntry = {
            name: String(name).trim(),
            email: String(email).trim().toLowerCase(),
            phone: phone ? String(phone).trim() : '',
            exam: exam ? String(exam).trim() : 'General',
            subject: subject ? String(subject).trim() : 'Inquiry',
            message: String(message).trim(),
            status: 'NEW',
            createdAt: new Date(),
        };

        const result = await db.collection('contactMessages').insertOne(contactEntry);

        return Response.json({
            success: true,
            message: 'Your message has been received! Our support team will get back to you shortly.',
            id: result.insertedId
        });
    } catch (error) {
        console.error('Contact API error:', error);
        return Response.json(
            { error: 'An error occurred while sending your message. Please reach us directly via WhatsApp or Phone.' },
            { status: 500 }
        );
    }
}
