import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

// Extender Three.js con geometrías adicionales
extend({ TextGeometry });

// Función para cargar fuentes
export const loadFont = async (url: string): Promise<any> => {
  const loader = new FontLoader();
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (font) => resolve(font),
      undefined,
      (error) => reject(error)
    );
  });
};

// Configuración de colores
export const colors = {
  primary: '#64ffda',
  secondary: '#112240',
  text: '#ccd6f6',
  background: '#0a192f',
};

// Configuración de partículas del fondo
export const particleConfig = {
  count: 3000,
  size: 0.02,
  radius: 5,
  branches: 3,
  spin: 1,
  randomnessPower: 3,
  speed: 0.5,
};

// Configuración de la galaxia de experiencia
export const galaxyConfig = {
  animationSpeed: 0.5,
};

// Configuración del cubo de proyectos
export const projectCubeConfig = {
  rotationSpeed: 0.5,
  transitionSpeed: 0.1,
  hoverScale: 1.1,
  emissiveIntensity: 1,
};

// Configuración de la cámara
export const cameraConfig = {
  fov: 75,
  near: 0.1,
  far: 100,
  position: [0, 0, 3],
};

// Configuración de la luz
export const lightConfig = {
  ambient: {
    intensity: 0.3,
    color: '#ffffff',
  },
  directional: {
    intensity: 1.5,
    color: '#ffffff',
    position: [5, 5, 5],
  },
  point: {
    intensity: 1,
    color: '#64ffda',
    position: [10, 10, 10],
  },
  spot: {
    intensity: 2,
    color: '#64ffda',
    position: [0, 10, 0],
    angle: Math.PI / 4,
    penumbra: 0.1,
  },
};

// Configuración de postprocesamiento
export const postProcessingConfig = {
  bloom: {
    intensity: 1,
    threshold: 0.6,
    radius: 0.4,
  },
  glitch: {
    delay: [1.5, 3.5],
    duration: [0.6, 1.0],
    strength: [0.3, 1.0],
  },
  noise: {
    opacity: 0.02,
  },
}; 