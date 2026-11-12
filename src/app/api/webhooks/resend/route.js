import clientPromise from '@/lib/mongodb';
import { getEmailConfig } from '@/lib/email/resend';
import { Resend } from 'resend';

export async function POST(request) {
    try {
        const rawBody = await request.text();
        const { webhookSecret, apiKey } = getEmailConfig();

        let body;
        if (webhookSecret) {
            const svixId = request.headers.get('svix-id');
            const svixTimestamp = request.headers.get('svix-timestamp');
            const svixSignature = request.headers.get('svix-signature');

            if (!svixId || !svixTimestamp || !svixSignature) {
                return Response.json({ error: 'Missing Svix webhook signature headers' }, { status: 400 });
            }

            try {
                const resend = new Resend(apiKey || 're_webhook_verify');
                body = resend.webhooks.verify({
                    payload: rawBody,
                    headers: {
                        id: svixId,
                        timestamp: svixTimestamp,
                        signature: svixSignature
                    },
                    webhookSecret
                });
            } catch (verifyErr) {
                console.error('Resend webhook signature verification failed:', verifyErr?.message);
                return Response.json({ error: 'Invalid webhook signature' }, { status: 400 });
            }
        } else {
            body = JSON.parse(rawBody || '{}');
        }

        const { type, data } = body || {};

        if (!data?.email_id) {
            return Response.json({ message: 'No email_id in event payload' }, { status: 200 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        const statusMap = {
            'email.delivered': 'DELIVERED',
            'email.bounced': 'BOUNCED',
            'email.complained': 'COMPLAINED',
            'email.delivery_delayed': 'DELAYED',
            'email.sent': 'SENT'
        };

        const deliveryStatus = statusMap[type] || type;

        await db.collection('emailNotifications').updateOne(
            { providerMessageId: data.email_id },
            {
                $set: {
                    deliveryStatus,
                    lastWebhookAt: new Date(),
                    updatedAt: new Date()
                },
                $push: {
                    providerEvents: {
                        type,
                        timestamp: new Date(),
                        payload: data
                    }
                }
            }
        );

        return Response.json({ success: true, processed: type });
    } catch (error) {
        console.error('Error handling Resend webhook:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
