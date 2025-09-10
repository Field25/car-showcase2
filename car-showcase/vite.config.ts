import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import '@vitejs/plugin-react';
import t from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), t()],
});
