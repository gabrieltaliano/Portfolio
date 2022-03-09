/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}
const withTM = require('next-transpile-modules')(['p5']); // pass the modules you would like to see transpiled
module.exports = withTM(nextConfig);
