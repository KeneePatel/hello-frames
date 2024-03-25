/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/youknowit",
        destination: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        permanent: false,
      },
      {
        source: "/pinatacloud",
        destination: "https://pinata.cloud/blog",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
