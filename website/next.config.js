/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: [] },
      },
    ],
    appDir: true,
  },
};

module.exports = nextConfig;
