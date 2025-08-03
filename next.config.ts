/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next.js to build a static site.
  output: 'export',

  // This disables the Image Optimization API.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;