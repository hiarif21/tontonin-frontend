/** @type {import('next').NextConfig} */

const domain_image = process.env.NEXT_PUBLIC_DOMAIN_IMAGE.split(' ');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: domain_image,
  },
};

module.exports = nextConfig;
