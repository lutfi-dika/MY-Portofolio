import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // PENTING: GANTI DENGAN NAMA REPOSITORY GITHUB ANDA
  // (Asumsi nama repository Anda adalah 'portofolio')
  base: '/MY-Portofolio/', 
  
  // Jangan lupa sertakan .glb
  assetsInclude: ['**/*.glb'], 
});