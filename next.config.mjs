/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy slugs - permanently moved.
      { source: '/product', destination: '/how-it-works', permanent: true },
      { source: '/why', destination: '/why-invest', permanent: true },
    ];
  },
};

export default nextConfig;
