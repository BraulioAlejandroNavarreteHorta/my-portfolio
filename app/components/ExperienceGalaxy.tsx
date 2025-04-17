/* eslint-disable */
"use client";

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Trail, Float } from '@react-three/drei';
import { Vector3 } from 'three';
import { colors, galaxyConfig } from '../utils/three-config';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

interface ExperienceGalaxyProps {
  experiences: Experience[];
}

const ExperienceNode = ({ experience, position, onClick, isSelected }: any) => {
  const nodeRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scale = isHovered ? 1.2 : 1;

  useFrame((state) => {
    if (!nodeRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Movimiento orbital suave
    //@ts-ignore
    nodeRef.current.position.x = position[0] + Math.sin(time * 0.5) * 0.2;
    //@ts-ignore
    nodeRef.current.position.y = position[1] + Math.cos(time * 0.5) * 0.2;
    //@ts-ignore
    nodeRef.current.position.z = position[2];
  });

  return (
    <group ref={nodeRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Trail
          width={2}
          length={4}
          color={colors.primary}
          attenuation={(t) => t * t}
        >
          <mesh
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            onClick={onClick}
            scale={[scale, scale, scale]}
          >
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial
              color={isSelected ? colors.primary : colors.secondary}
              emissive={colors.primary}
              emissiveIntensity={isHovered ? 2 : 0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Trail>
        <Html
          position={[0.3, 0, 0]}
          style={{
            color: colors.text,
            fontSize: '14px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
            transform: `scale(${scale})`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          {experience.company}
        </Html>
      </Float>
    </group>
  );
};

const ExperienceField = ({ experiences, onExperienceSelect, selectedExperience }: any) => {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    //@ts-ignore
    groupRef.current.rotation.y += galaxyConfig.animationSpeed * 0.001;
  });

  // Organizar los nodos en una espiral
  const nodes = experiences.map((exp: Experience, index: number) => {
    const angle = (index / experiences.length) * Math.PI * 4;
    const radius = 1 + index * 0.5;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = index * -0.5;

    return {
      experience: exp,
      position: [x, y, z],
    };
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node: any, index: number) => (
        <ExperienceNode
          key={node.experience.company}
          experience={node.experience}
          position={node.position}
          onClick={() => onExperienceSelect(node.experience)}
          isSelected={selectedExperience === node.experience}
        />
      ))}
    </group>
  );
};

export default function ExperienceGalaxy({ experiences }: ExperienceGalaxyProps) {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <>
      <ExperienceField
        experiences={experiences}
        onExperienceSelect={setSelectedExperience}
        selectedExperience={selectedExperience}
      />

      {selectedExperience && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#112240] p-8 rounded-lg max-w-2xl mx-4">
            <h3 className="text-2xl font-bold text-teal-400 mb-2">
              {selectedExperience.title}
            </h3>
            <h4 className="text-xl text-gray-300 mb-2">{selectedExperience.company}</h4>
            <p className="text-sm text-gray-400 mb-4">{selectedExperience.period}</p>
            <p className="text-gray-300 mb-6">{selectedExperience.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedExperience.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm text-teal-400 border border-teal-400 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedExperience(null)}
                className="px-6 py-2 text-gray-300 hover:text-teal-400 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 