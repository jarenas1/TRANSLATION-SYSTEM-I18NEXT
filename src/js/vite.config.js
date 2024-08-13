import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/<TRANSLATION-SYSTEM-I18NEXT>/', 
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
