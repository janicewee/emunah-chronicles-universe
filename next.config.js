const path = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    };
    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slelguoygbfzlpylpxfs.supabase.co',
        pathname: '/storage/v1/render/image/public/**',
      },
    ],
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [
          path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js"),
        ],
      },
    },
  },
};

module.exports = nextConfig;
