/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/mockups', destination: '/mockups/index.html' },
      { source: '/mockups/', destination: '/mockups/index.html' },
    ]
  },
}

export default nextConfig
