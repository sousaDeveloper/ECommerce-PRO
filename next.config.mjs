/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }, { hostname: "d26lpennugtm8s.cloudfront.net" }],
  },
};

export default nextConfig;
