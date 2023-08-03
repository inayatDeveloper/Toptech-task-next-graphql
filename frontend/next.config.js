/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_APP_END_POINT: process.env.NEXT_APP_END_POINT,
    }
}

module.exports = nextConfig
