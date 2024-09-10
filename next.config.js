import { defineConfig } from '@archoleat/next-define-config';

export default defineConfig({
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: '',
        pathname: '',
        protocol: 'https',
      },
      {
        hostname: '',
        pathname: '',
        protocol: 'https',
      },
    ],
  },
});
