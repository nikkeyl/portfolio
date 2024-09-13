import { defineConfig } from '@archoleat/next-define-config';

export default defineConfig({
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: 'nikkeyl.vercel.app',
        pathname: '/images/**',
        protocol: 'https',
      },
    ],
  },
});
