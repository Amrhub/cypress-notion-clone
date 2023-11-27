/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`${process.env.SUPABASE_PROJECT_REFERENCE}.supabase.co`],
  },
};

module.exports = nextConfig;
