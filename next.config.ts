import { type ImageConfigComplete } from 'next/dist/shared/lib/image-config';
import createNextIntlPlugin from 'next-intl/plugin';
import { withPlausibleProxy } from 'next-plausible';

import { env } from '@/env';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: env.IMAGE_HOST,
        port: '',
        pathname: '/**',
      },
    ] as ImageConfigComplete['remotePatterns'],
  },
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://eu.i.posthog.com/:path*',
      },
      {
        source: '/ingest/decide',
        destination: 'https://eu.i.posthog.com/decide',
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

const nextIntlPlugin = createNextIntlPlugin();

const withNextIntl = nextIntlPlugin(nextConfig);

const withPlausible = withPlausibleProxy({
  subdirectory: '',
  scriptName: 'scriptName',
  customDomain: env.PLAUSIBLE_URL,
})(withNextIntl);

export default withPlausible;
