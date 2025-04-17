/** @type {import('next').NextConfig} */
import type { Config } from 'tailwindcss'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    ignoreDuringDevMode: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config: { resolve: { extensions: any[]; }; }) => {
    config.resolve.extensions = ['.ts', '.tsx', ...config.resolve.extensions];
    return config;
  },
};

export default nextConfig;
