import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      Src: path.resolve(__dirname, 'src'),
      Components: path.resolve(__dirname, 'src/components'),
      Pages: path.resolve(__dirname, 'src/pages'),
      Assets: path.resolve(__dirname, 'src/assets'),
      Layout: path.resolve(__dirname, 'src/layout'),
      Hooks: path.resolve(__dirname, 'src/hooks'),
      'tailwind.config': path.resolve(__dirname, 'tailwind.config.js')
    }
  }
});
