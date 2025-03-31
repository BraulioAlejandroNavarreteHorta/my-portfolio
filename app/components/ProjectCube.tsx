"use client";

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Vector3 } from 'three';
import { colors, projectCubeConfig } from '../utils/three-config';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface ProjectCubeProps {
  projects: Project[];
}

const CubeFace = ({ position, rotation, project, onClick, isHovered, setIsHovered }: any) => {
  const scale = isHovered ? projectCubeConfig.hoverScale : 1;

  return (
    <group position={position} rotation={rotation}>
      <mesh
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        onClick={onClick}
        scale={[scale, scale, scale]}
      >
        <boxGeometry args={[2, 2, 0.1]} />
        <meshStandardMaterial
          color={colors.secondary}
          metalness={0.8}
          roughness={0.2}
          emissive={colors.primary}
          emissiveIntensity={isHovered ? projectCubeConfig.emissiveIntensity : 0.2}
        />
      </mesh>
      <Html
        position={[0, 0, 0.06]}
        center
        style={{
          color: colors.text,
          fontSize: '16px',
          fontWeight: 'bold',
          textAlign: 'center',
          width: '150px',
          pointerEvents: 'none',
          userSelect: 'none',
          transform: `scale(${scale})`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        {project.title}
      </Html>
    </group>
  );
};

const RotatingCube = ({ projects, onProjectSelect }: any) => {
  const groupRef = useRef(null);
  const [hoveredFace, setHoveredFace] = useState<number | null>(null);
  const targetRotation = useRef(new Vector3(0, 0, 0));
  const currentRotation = useRef(new Vector3(0, 0, 0));

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Rotación automática cuando no hay cara seleccionada
    if (hoveredFace === null) {
      targetRotation.current.y += delta * projectCubeConfig.rotationSpeed;
    }

    // Interpolación suave de la rotación actual
    currentRotation.current.lerp(targetRotation.current, projectCubeConfig.transitionSpeed);
    groupRef.current.rotation.x = currentRotation.current.x;
    groupRef.current.rotation.y = currentRotation.current.y;
    groupRef.current.rotation.z = currentRotation.current.z;
  });

  const faces = [
    { position: [0, 0, 1], rotation: [0, 0, 0] },
    { position: [0, 0, -1], rotation: [0, Math.PI, 0] },
    { position: [1, 0, 0], rotation: [0, Math.PI / 2, 0] },
    { position: [-1, 0, 0], rotation: [0, -Math.PI / 2, 0] },
    { position: [0, 1, 0], rotation: [-Math.PI / 2, 0, 0] },
    { position: [0, -1, 0], rotation: [Math.PI / 2, 0, 0] },
  ];

  return (
    <group ref={groupRef}>
      {faces.map((face, index) => (
        <CubeFace
          key={index}
          position={face.position}
          rotation={face.rotation}
          project={projects[index % projects.length]}
          onClick={() => onProjectSelect(projects[index % projects.length])}
          isHovered={hoveredFace === index}
          setIsHovered={(hovered: boolean) => setHoveredFace(hovered ? index : null)}
        />
      ))}
    </group>
  );
};

export default function ProjectCube({ projects }: ProjectCubeProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <RotatingCube projects={projects} onProjectSelect={setSelectedProject} />
      
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#112240] p-8 rounded-lg max-w-2xl mx-4">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">{selectedProject.title}</h3>
            <p className="text-gray-300 mb-6">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm text-teal-400 border border-teal-400 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 text-gray-300 hover:text-teal-400 transition-colors"
              >
                Cerrar
              </button>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-teal-400 text-gray-900 rounded-lg hover:bg-teal-300 transition-colors"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 