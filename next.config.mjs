/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Lint runs in GitHub CI; skip during Docker/Coolify build to save memory.
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.r2.cloudflarestorage.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.oppeinhome.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/proposals",
        destination: "/workspace/proposals",
        permanent: false,
      },
      {
        source: "/proposals/:path*",
        destination: "/workspace/proposals/:path*",
        permanent: false,
      },
      {
        source: "/settings/:path*",
        destination: "/workspace/settings/:path*",
        permanent: false,
      },
      {
        source: "/admin/:path*",
        destination: "/workspace/admin/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
