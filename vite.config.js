// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // --- UBAH BASE MENJADI RELATIF ---
  base: './', 
  // ---------------------------------
  plugins: [react()],
});