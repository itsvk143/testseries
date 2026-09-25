import { auth } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { normalizeCouponCode } from '@/lib/couponService';

export async function PATCH(request, { params }) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;
        if (!id || !ObjectId.isValid(id)) {
            return Response.json({ error: 'Invalid coupon ID' }, { status: 400 });
        }

        const body = await request.json().catch(() => ({}));
        const client = await clientPromise;
        const db = client.db('testseries');

        const currentCoupon = await db.collection('teacherCoupons').findOne({ _id: new ObjectId(id) });
        if (!currentCoupon) {
            return Response.json({ error: 'Coupon not found' }, { status: 404 });
        }

        const updates = { updatedAt: new Date() };

        if (body.teacherName !== undefined) {
            const trimmedName = (body.teacherName || '').trim();
            if (!trimmedName) {
                return Response.json({ error: 'Teacher Name cannot be empty.' }, { status: 400 });
            }
            updates.teacherName = trimmedName;
        }

        if (body.couponCode !== undefined) {
            const normalizedCode = normalizeCouponCode(body.couponCode);
            if (!normalizedCode) {
                return Response.json({ error: 'Coupon Code cannot be empty.' }, { status: 400 });
            }

            // Check if coupon code already taken by ANOTHER record
            const duplicate = await db.collection('teacherCoupons').findOne({
                _id: { $ne: new ObjectId(id) },
                couponCode: { $regex: new RegExp(`^${normalizedCode}$`, 'i') }
            });

            if (duplicate) {
                return Response.json({
                    error: 'Coupon code already exists. Please use a different coupon code.'
                }, { status: 400 });
            }

            updates.couponCode = normalizedCode;
        }

        if (body.status !== undefined) {
            updates.status = body.status === 'Inactive' ? 'Inactive' : 'Active';
        }

        await db.collection('teacherCoupons').updateOne(
            { _id: new ObjectId(id) },
            { $set: updates }
        );

        const updated = await db.collection('teacherCoupons').findOne({ _id: new ObjectId(id) });

        return Response.json({
            success: true,
            coupon: {
                ...updated,
                _id: updated._id.toString()
            }
        });
    } catch (error) {
        console.error('Error updating teacher coupon:', error);
        return Response.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const session = await auth();
        if (!session?.user?.isAdmin) {
            return Response.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 });
        }

        const { id } = await params;
        if (!id || !ObjectId.isValid(id)) {
            return Response.json({ error: 'Invalid coupon ID' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('testseries');

        const result = await db.collection('teacherCoupons').deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return Response.json({ error: 'Coupon not found' }, { status: 404 });
        }

        return Response.json({ success: true, message: 'Coupon deleted successfully.' });
    } catch (error) {
        console.error('Error deleting teacher coupon:', error);
        return Response.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
