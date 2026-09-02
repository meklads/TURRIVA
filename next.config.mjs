/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Lint runs in GitHub CI; skip during Docker/Coolify build to save memory.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Typecheck runs in GitHub CI (`tsc --noEmit`); skip during constrained builds.
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: false,
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
    // Keep recently visited marketing pages warm so menu clicks feel instant.
    staleTimes: {
      dynamic: 60,
      static: 300,
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
