/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // output: 'export',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  env:{
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  }
};

module.exports = nextConfig;
