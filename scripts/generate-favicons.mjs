import { execSync } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

const FAVICON_SIZES = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'favicon-192x192.png': 192,
  'favicon-512x512.png': 512,
  'apple-touch-icon.png': 180
};

async function generateFavicons() {
  try {
    // Asegurarse de que el directorio public/favicon existe
    await fs.mkdir('public/favicon', { recursive: true });

    // Generar el SVG optimizado
    const svgContent = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="#112240"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
            font-family="Arial, sans-serif" font-size="280" font-weight="bold" fill="#64ffda">
        BN
      </text>
    </svg>`;

    await fs.writeFile('public/favicon/favicon.svg', svgContent);
    console.log('✅ SVG favicon generado');

    // Generar el safari-pinned-tab.svg (versión monocromática)
    const safariSvgContent = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
            font-family="Arial, sans-serif" font-size="280" font-weight="bold" fill="#000000">
        BN
      </text>
    </svg>`;

    await fs.writeFile('public/favicon/safari-pinned-tab.svg', safariSvgContent);
    console.log('✅ Safari pinned tab SVG generado');

    // Generar el favicon.ico usando el SVG original
    execSync('convert public/favicon/favicon.svg -resize 32x32 public/favicon/favicon.ico');
    console.log('✅ ICO favicon generado');

    console.log('✅ Todos los favicons han sido generados exitosamente');
  } catch (error) {
    console.error('❌ Error generando favicons:', error);
    process.exit(1);
  }
}

generateFavicons(); 