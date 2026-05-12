/** @type {import('next').NextConfig} */
const nextConfig = {

   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        // port: '',
        // pathname: '/my-bucket/**',
        // search: '',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;

