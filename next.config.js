const headers = require("./headers");

const next_config = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi", "jp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["@styled-icons/bootstrap"],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      // Disable Fast Refresh in production
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
    }
    return config;
  },
};

module.exports = next_config;
