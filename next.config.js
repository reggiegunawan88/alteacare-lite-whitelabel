/* eslint-disable import/no-extraneous-dependencies */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    mode: 'production',
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.APP_ENV === 'local'
  },
  eslint: {
    dirs: ['.']
  },
  poweredByHeader: false,
  trailingSlash: false,
  basePath: '',
  images: {
    domains: ['cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com']
  },
  reactStrictMode: true
});
