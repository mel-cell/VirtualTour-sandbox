# 🌐 360 Virtual Tour Simulation

A modern web-based virtual tour application designed to simulate immersive environments using standard smartphone cameras and AI enhancements.

## 🚀 Fitur Utama

- **Multi-Room Navigation**: Berpindah antar ruangan menggunakan sistem _hotspot_ (node-based).
- **Adaptive View Control**: Sistem otomatis mendeteksi jika gambar adalah panorama HP (terpotong) atau foto 360 penuh.
- **"Anti-Jebol" Protection**: Menggunakan `VisibleRangePlugin` untuk membatasi pandangan vertikal pada foto panorama HP agar tidak terlihat area hitam/kosong.
- **High Performance**: Dibangun di atas **Three.js** untuk rendering 3D yang mulus.

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla TypeScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Viewer Engine**: [Photo Sphere Viewer v5](https://photo-sphere-viewer.js.org/)
- **3D Graphics**: Three.js
- **360 Photo cam App**

## 📸 Alur Produksi Aset

Projek ini membuktikan bahwa kita tidak butuh kamera 360 mahal untuk membuat virtual tour berkualitas:

1. **Pengambilan Gambar**: Menggunakan aplikasi **360 Photo Cam** atau fitur Panorama bawaan smartphone.
2. **AI Enhancement (Optional)**: Menggunakan teknik _AI Outpainting_ (seperti Adobe Firefly atau Stable Diffusion) untuk mengisi area langit dan lantai agar menjadi foto 360 derajat yang utuh.
3. **Integration**: Aset dimasukkan ke dalam folder `assets/` dan dikonfigurasi melalui `src/main.ts`.

## ⚙️ Cara Menjalankan Project

1. Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/).
2. Berikan perintah berikut di terminal:

   ```bash
   # Install dependensi
   npm install

   # Jalankan server lokal
   npm run dev
   ```

3. Buka link yang muncul (biasanya `http://localhost:5173`) di browser Anda.

## 📁 Struktur Folder

- `assets/`: Tempat menyimpan file foto panorama (`.jpg`).
- `src/main.ts`: File utama untuk mengatur titik ruangan, arah panah, dan logika tour.
- `src/style.css`: Pengaturan tampilan dan antarmuka viewer.

---

_Dikembangkan dengan ❤️ sebagai konsep rancangan Virtual Tour berbasis Smartphone._
