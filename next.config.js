/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'se'],
    defaultLocale: 'en'
  },
  reactStrictMode: true,
  env: {
    GOOGLE_API: process.env.NEXT_PUBLIC_GOOGLE_API
  }
}

module.exports = nextConfig
