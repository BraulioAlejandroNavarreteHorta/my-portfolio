"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { colors, particleConfig } from '../utils/three-config';

function ParticleField() {
  const points = useRef<any>();
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particleConfig.count * 3);
    
    for (let i = 0; i < particleConfig.count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * particleConfig.radius;
      const spinAngle = radius * particleConfig.spin;
      const branchAngle = (i % particleConfig.branches) / particleConfig.branches * Math.PI * 2;
      
      const randomX = Math.pow(Math.random(), particleConfig.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
      const randomY = Math.pow(Math.random(), particleConfig.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
      const randomZ = Math.pow(Math.random(), particleConfig.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    
    const time = state.clock.getElapsedTime() * particleConfig.speed;
    points.current.rotation.y = time * 0.1;
    
    // Efecto de mouse
    const mouseX = state.mouse.x * 0.1;
    const mouseY = state.mouse.y * 0.1;
    points.current.rotation.x = mouseY;
    points.current.rotation.z = mouseX;
  });

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={colors.primary}
        size={particleConfig.size}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0" style={{ background: colors.background }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={['transparent']} />
        <fog attach="fog" args={[colors.background, 0, 15]} />
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  );
} 