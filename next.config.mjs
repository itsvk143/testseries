import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Explicitly define project root for Turbopack to prevent scanning parent/home folder lockfiles
    turbopack: {
        root: __dirname,
    },

    // Compress responses with gzip
    compress: true,

    // Allow question/diagram images from common upload sources
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com', // Google avatars
            },
            {
                protocol: 'https',
                hostname: '**.vercel.app',             // Vercel-hosted assets
            },
        ],
        // Serve images in modern formats (WebP/AVIF) where supported
        formats: ['image/avif', 'image/webp'],
    },

    // Strict React mode for catching bugs early
    reactStrictMode: true,

    // Experimental optimizations
    experimental: {
        // Optimise CSS delivery (inlines critical CSS)
        optimizeCss: false, // set true only if you install critters: npm i critters
    },
};

export default nextConfig;
