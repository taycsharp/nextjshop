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
};

module.exports = next_config;
