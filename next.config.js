/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  webpack: (config, { isServer }) => {
    // Add Bundle Analyzer Plugin
    if (process.env.ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(new BundleAnalyzerPlugin());
    }

    // Customize optimization settings
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000, // Minimum size for a chunk to be generated
      maxSize: 70000, // Maximum size for a chunk to be generated
      minChunks: 1,   // Minimum number of chunks that must share a module
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const match = module.context.match(/[\\/]node_modules[\\/](.+?)([\\/]|$)/);
            const packageName = match ? match[1] : 'vendor'; // Fallback to 'vendor' if no match
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    };

    return config; // Return the modified config
  },
};

module.exports = nextConfig;
