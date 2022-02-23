/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'nodejs',
  },
  compiler: {
    relay: {
      src: './src',
      artifactDirectory: './src/__generated__',
      language: 'typescript',
      schema: './schema.graphql',
      exclude: ['**/node_modules/**', '**/__generated__/**'],
    },
  },
};

module.exports = nextConfig;
