import './style.css';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';

// Import image pakai Vite asset management
import panoramaUrl from '../assets/360image.jpg';

const viewerElement = document.querySelector<HTMLDivElement>('#viewer');

if (viewerElement) {
  const viewer = new Viewer({
    container: viewerElement,
    panorama: panoramaUrl,
    loadingTxt: 'Memuat Tour Virtual...',
    caption: 'Simulasi Panorama HP ke 360',
    
    // DETAIL PENTING: Mengatur data panorama yang terpotong (Panorama HP)
    // Dimensi gambar asli: 14208 x 2320
    // Kita asumsikan gambar ini adalah 360 derajat horizontal penuh.
    // Jika 360 derajat penuh, maka lebar bola (fullWidth) = 14208
    // Maka tinggi bola ideal (fullHeight) harus 1/2 dari lebar = 7104
    panoData: {
      fullWidth: 14208,
      fullHeight: 7104,
      croppedWidth: 14208,
      croppedHeight: 2320,
      croppedX: 0,
      croppedY: 2392,
    },
    // Batasi zoom
    minFov: 30,
    maxFov: 70,
    defaultPitch: 0,
    navbar: [
      'autorotate',
      'zoom',
      'caption',
      'fullscreen',
    ],
  });

  // Kita kunci kamera supaya tidak bisa lihat area hitam
  viewer.addEventListener('position-updated', ({ position }) => {
    const limit = 0.35; // Batas kemiringan leher (Radian)
    if (position.pitch > limit) {
      viewer.rotate({ pitch: limit, yaw: position.yaw });
    } else if (position.pitch < -limit) {
      viewer.rotate({ pitch: -limit, yaw: position.yaw });
    }
  });

  viewer.addEventListener('ready', () => {
    console.log('Virtual Tour Siap!');
  });
}
