import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest, res: NextResponse) {
    // if (req.method !== 'POST') {
    //     return res.status(405).json({ message: 'Method not allowed' });
    // }

    try {
        const { file } = await req.json();
        console.log({ file })
        const uploadResponse = await cloudinary.uploader.upload(file, {
            resource_type: 'auto',
        });

        console.log({ uploadResponse })
        return NextResponse.json({ url: uploadResponse.secure_url });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ message: 'Failed to upload file' });
    }
}
