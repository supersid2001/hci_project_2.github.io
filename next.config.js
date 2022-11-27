/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
}


