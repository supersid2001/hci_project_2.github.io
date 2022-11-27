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
  basePath: "/hci_project_2",
  assetPrefix: "/hci_project_2",
}


