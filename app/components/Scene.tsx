"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, GradientTexture, Float } from '@react-three/drei';
import { MotionValue } from 'framer-motion';
import * as THREE from 'three';

interface SceneProps {
  scrollProgress: MotionValue<number>;
}

export default function Scene({ scrollProgress }: SceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Crear geometría de partículas
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 150; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push({ x, y, z });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;

    // Rotación suave del fondo
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;

    // Movimiento de partículas
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    
    // Efecto de mouse
    const mouseX = (state.mouse.x * state.viewport.width) / 2;
    const mouseY = (state.mouse.y * state.viewport.height) / 2;
    groupRef.current.position.x += (mouseX - groupRef.current.position.x) * 0.02;
    groupRef.current.position.y += (mouseY - groupRef.current.position.y) * 0.02;
  });

  return (
    <>
      {/* Luz ambiental */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />

      {/* Fondo distorsionado */}
      <mesh ref={meshRef} scale={[15, 15, 1]} position={[0, 0, -5]}>
        <planeGeometry args={[1, 1, 32, 32]} />
        <MeshDistortMaterial speed={5} distort={0.3}>
          <GradientTexture
            stops={[0, 0.5, 1]}
            colors={['#0a192f', '#112240', '#233554']}
          />
        </MeshDistortMaterial>
      </mesh>

      {/* Grupo de partículas */}
      <group ref={groupRef}>
        {particles.map((particle, i) => (
          <Float
            key={i}
            speed={2}
            rotationIntensity={2}
            floatIntensity={2}
            position={[particle.x, particle.y, particle.z]}
          >
            <mesh>
              <sphereGeometry args={[0.02, 16, 16]} />
              <meshStandardMaterial
                color="#64ffda"
                emissive="#64ffda"
                emissiveIntensity={0.5}
                transparent
                opacity={0.8}
              />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Esferas decorativas */}
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-4, 2, -2]} scale={1.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#64ffda"
            speed={2}
            distort={0.4}
            transparent
            opacity={0.1}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[4, -2, -3]} scale={2}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#9d4edd"
            speed={3}
            distort={0.5}
            transparent
            opacity={0.1}
          />
        </mesh>
      </Float>
    </>
  );
} 