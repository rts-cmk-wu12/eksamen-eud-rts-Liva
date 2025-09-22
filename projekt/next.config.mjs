/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('http://localhost:4000/**')],
        qualities: [30, 100]
    }
};

export default nextConfig;
