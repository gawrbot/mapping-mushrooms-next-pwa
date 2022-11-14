/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'outforia.com',
        port: '',
        pathname: '/wp-content/uploads/2021/12/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dvobwyzci/image/upload/**',
      },
    ],
  },
};

// /** @type {import('next').NextConfig} */
// const prod = process.env.NODE_ENV === 'production';

// // const withPWA = require('next-pwa')({
// //   disable: prod ? false : true,
// //   dest: 'public',
// // });

// module.exports = withPWA({
//   // config
// });
