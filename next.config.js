/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "googleusercontent.com",
        pathname: "/file_content/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blob.v0.dev",
        pathname: "/**",
      },
    ],
    unoptimized: false, // keep Next.js image optimizations enabled
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect non-www to www (HTTPS)
      {
        source: "/:path*",
        has: [{ type: "host", value: "join2campus.com" }],
        destination: "https://www.join2campus.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.join2campus.com" }],
        destination: "https://www.join2campus.com/:path*",
        permanent: true,
      },
      // Redirect HTTP (handled by Vercel automatically, but added for safety)
      {
        source: "/:path*",
        has: [{ type: "host", value: "http://www.join2campus.com" }],
        destination: "https://www.join2campus.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "http://join2campus.com" }],
        destination: "https://www.join2campus.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
