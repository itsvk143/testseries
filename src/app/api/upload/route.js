import { NextResponse } from 'next/server';
import path from 'path';
import { writeFile } from 'fs/promises';
import { auth } from '@/lib/auth';

export const POST = async (req) => {
    const session = await auth();
    if (!session?.user?.isAdmin) {
        return NextResponse.json({ error: "Unauthorized. Admin access required." }, { status: 403 });
    }

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    // Validate mime type to only allow images
    if (!file.type || !file.type.startsWith('image/')) {
        return NextResponse.json({ error: "Only image files are allowed." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + "_" + file.name.replaceAll(" ", "_");

    try {
        await writeFile(
            path.join(process.cwd(), "public/uploads/" + filename),
            buffer
        );
        return NextResponse.json({ success: true, url: `/uploads/${filename}` });
    } catch (error) {
        console.log("Error uploading file: ", error);
        return NextResponse.json({ success: false, error: "Upload failed" }, { status: 500 });
    }
};
