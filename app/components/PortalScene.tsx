"use client";

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  useGLTF, 
  useTexture, 
  MeshDistortMaterial, 
  GradientTexture,
  Environment,
  PerspectiveCamera,
  Text3D,
  Float,
  Sparkles
} from '@react-three/drei';
import { Vector3, Group, Mesh, Color } from 'three';
import { colors, postProcessingConfig } from '../utils/three-config';
import { EffectComposer, Bloom, Noise, Glitch } from '@react-three/postprocessing';

function Portal() {
  const portalRef = useRef<Group>(null);
  const materialRef = useRef<any>(null);
  const { viewport } = useThree();

  useFrame(({ clock, mouse }) => {
    if (!portalRef.current || !materialRef.current) return;

    const time = clock.getElapsedTime();
    
    // Movimiento suave del portal
    portalRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
    portalRef.current.rotation.x = Math.cos(time * 0.3) * 0.1;
    
    // Efecto de distorsión
    materialRef.current.distort = Math.sin(time) * 0.3 + 0.5;
    materialRef.current.speed = 0.5 + Math.sin(time * 0.2) * 0.2;

    // Seguimiento suave del mouse
    const targetX = (mouse.x * viewport.width) / 4;
    const targetY = (mouse.y * viewport.height) / 4;
    portalRef.current.position.x += (targetX - portalRef.current.position.x) * 0.1;
    portalRef.current.position.y += (targetY - portalRef.current.position.y) * 0.1;
  });

  return (
    <group ref={portalRef}>
      {/* Portal Ring */}
      <mesh>
        <torusGeometry args={[2, 0.2, 32, 100]} />
        <meshStandardMaterial
          color={colors.primary}
          emissive={colors.primary}
          emissiveIntensity={2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Portal Interior */}
      <mesh>
        <circleGeometry args={[1.8, 64]} />
        <MeshDistortMaterial
          ref={materialRef}
          color={colors.secondary}
          roughness={0}
          metalness={1}
          distort={0.5}
          speed={0.5}
        >
          <GradientTexture
            stops={[0, 1]}
            colors={[colors.primary, colors.secondary]}
          />
        </MeshDistortMaterial>
      </mesh>

      {/* Texto Flotante */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        position={[0, 0, 0.5]}
      >
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.4}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          BRAULIO
          <meshStandardMaterial
            color={colors.text}
            emissive={colors.primary}
            emissiveIntensity={1}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Float>

      {/* Partículas brillantes */}
      <Sparkles
        count={50}
        scale={4}
        size={2}
        speed={0.5}
        color={colors.primary}
      />
    </group>
  );
}

export default function PortalScene() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <Environment preset="night" />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <spotLight
          position={[0, 10, 0]}
          angle={Math.PI / 4}
          penumbra={0.1}
          intensity={2}
          color={colors.primary}
        />

        <Portal />

        <EffectComposer>
          <Bloom
            intensity={postProcessingConfig.bloom.intensity}
            luminanceThreshold={postProcessingConfig.bloom.threshold}
            luminanceSmoothing={postProcessingConfig.bloom.radius}
          />
          <Noise opacity={postProcessingConfig.noise.opacity} />
          <Glitch
            delay={postProcessingConfig.glitch.delay}
            duration={postProcessingConfig.glitch.duration}
            strength={postProcessingConfig.glitch.strength}
          />
        </EffectComposer>
      </Canvas>

      {/* Overlay de texto */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6 p-8 bg-navy-light/20 backdrop-blur-lg rounded-lg border border-teal-400/20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
            <span className="text-teal-400">Desarrollador Full Stack</span>
            <br />& Creador de Experiencias Digitales
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Transformando ideas en experiencias digitales inmersivas y memorables
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-teal-400 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-teal-300 transition-colors"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="border-2 border-teal-400 text-teal-400 px-8 py-3 rounded-full font-medium hover:bg-teal-400/10 transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 