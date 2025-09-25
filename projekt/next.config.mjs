/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '5mb'
        }
    },
    images: {
        remotePatterns: [new URL('http://localhost:4000/**')],
        qualities: [30, 100]
    }
};

export default nextConfig;
