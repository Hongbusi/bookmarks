/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oss.hongbusi.com',
        port: '',
        pathname: '/icons/**',
      },
    ],
  },
}

export default nextConfig
