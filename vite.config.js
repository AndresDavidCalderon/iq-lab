import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        app: './index.html',
        service_worker: './public/service_worker.js',
      },
      output: {
        entryFileNames: (assetInfo) => (assetInfo.name === 'service_worker'
          ? '[name].js'
          : 'assets/js/[name]-[hash].js'),
      },
    },
  },
});
