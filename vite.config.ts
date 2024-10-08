import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { UserConfig as VitestUserConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.ts'],
  } as VitestUserConfig['test'],
});
