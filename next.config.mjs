/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@next/font'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/rocket-web.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=36000", // cache for 1 hour
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [];
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize font loading
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.fonts = {
        name: 'fonts',
        test: /[\\/]node_modules[\\/]@next[\\/]font[\\/]/,
        chunks: 'all',
        priority: 10,
        enforce: true
      };
    }
    
    return config;
  }
};

export default nextConfig;