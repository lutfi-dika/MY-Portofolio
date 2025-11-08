import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // PENTING: Menambahkan aset 3D (.glb) ke dalam daftar file yang diizinkan untuk diimpor.
  assetsInclude: ['**/*.glb', '**/*.png'], 
  
  // Catatan: Saya juga menambahkan '*.png' di sini untuk berjaga-jaga,
  // meskipun Vite biasanya menangani file gambar secara default.
  // Jika Anda menggunakan TypeScript, pastikan file src/global.d.ts Anda
  // juga mendeklarasikan modul *.glb dan *.png.
});