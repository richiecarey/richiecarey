/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        domains: ["via.placeholder.com"],
        deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
};

module.exports = nextConfig;
