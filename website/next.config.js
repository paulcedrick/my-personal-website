/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   fontLoaders: [
  //     {
  //       loader: "@next/font/google",
  //       options: { subsets: [] },
  //     },
  //   ],
  //   appDir: true,
  // },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
};

module.exports = nextConfig;
