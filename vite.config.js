import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  kit: {
    vite: {
      server: {
        https: true
      },
      optimizeDeps: {
        include: ['axios'],
      },
    },
  },
};

export default config;
