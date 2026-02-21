import './style.css';
import { Viewer } from '@photo-sphere-viewer/core';
import { VisibleRangePlugin } from '@photo-sphere-viewer/visible-range-plugin';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/virtual-tour-plugin/index.css';

// Import images
import img1 from '../assets/360image.jpg';
import img2 from '../assets/360image2.jpg';

const viewerElement = document.querySelector<HTMLDivElement>('#viewer');

if (viewerElement) {
  const viewer = new Viewer({
    container: viewerElement,
    loadingTxt: 'Menyiapkan Virtual Tour...',
    plugins: [
      [VisibleRangePlugin, {
        verticalRange: [-Math.PI / 2, Math.PI / 2],
      }],
      [VirtualTourPlugin, {
        positionMode: 'manual',
        renderMode: '3d',
      }],
    ],
    navbar: [
      'autorotate',
      'zoom',
      'caption',
      'fullscreen',
    ],
  });

  const virtualTour = viewer.getPlugin(VirtualTourPlugin) as VirtualTourPlugin;

  if (virtualTour) {
    virtualTour.setNodes([
      {
        id: 'ruangan-1',
        panorama: img1,
        name: 'Ruangan 1 (Panorama HP)',
        panoData: {
          fullWidth: 14208,
          fullHeight: 7104,
          croppedWidth: 14208,
          croppedHeight: 2320,
          croppedX: 0,
          croppedY: 2392,
        },
        links: [
          { nodeId: 'ruangan-2', position: { yaw: 0, pitch: 0 } },
        ],
      },
      {
        id: 'ruangan-2',
        panorama: img2,
        name: 'Ruangan 2 (Full 360 AI)',
        links: [
          { nodeId: 'ruangan-1', position: { yaw: Math.PI, pitch: 0 } },
        ],
      },
    ], 'ruangan-1');
  }

  virtualTour?.addEventListener('node-changed', ({ node }) => {
    console.log('Sekarang di:', node.name);
    
    const visibleRange = viewer.getPlugin(VisibleRangePlugin) as VisibleRangePlugin;
    if (visibleRange) {
      if (node.id === 'ruangan-1') {
        visibleRange.setVerticalRange([-0.35, 0.35]);
      } else {
        visibleRange.setVerticalRange([-Math.PI / 2, Math.PI / 2]);
      }
    }
  });
}
