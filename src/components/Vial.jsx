import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Sphere } from '@react-three/drei';

export default function Vial({ position, color, volume, effect, isPouring, pourProgress }) {
  const liquidRef = useRef();
  const fillHeight = Math.max(0.05, (volume / 100) * 0.7);
  
  useFrame((state) => {
    if (liquidRef.current && effect === 'bubbles') {
      liquidRef.current.position.y = 0.15 + fillHeight / 2 + Math.sin(state.clock.elapsedTime * 3) * 0.02;
    }
  });
  
  return (
    <group position={position}>
      {/* Glass body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.18, 0.15, 0.9, 32, 1, true]} />
        <meshPhysicalMaterial
          color="#E3F2FD"
          transparent
          opacity={0.25}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
          thickness={0.5}
        />
      </mesh>
      
      {/* Glass bottom */}
      <mesh position={[0, -0.45, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshPhysicalMaterial
          color="#E3F2FD"
          transparent
          opacity={0.4}
          roughness={0.1}
        />
      </mesh>
      
      {/* Liquid */}
      {volume > 0 && (
        <mesh
          ref={liquidRef}
          position={[0, -0.4 + fillHeight / 2, 0]}
        >
          <cylinderGeometry args={[0.14, 0.13, fillHeight, 32]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.85}
            roughness={0.3}
          />
        </mesh>
      )}
      
      {/* Pour stream */}
      {isPouring && (
        <mesh position={[0.3, 0.6 - (pourProgress / 100) * 0.8, 0]}>
          <cylinderGeometry args={[0.02, 0.03, 0.3, 8]} />
          <meshStandardMaterial color={color} transparent opacity={0.8} />
        </mesh>
      )}
      
      {/* Rim */}
      <mesh position={[0, 0.45, 0]}>
        <torusGeometry args={[0.18, 0.02, 8, 32]} />
        <meshStandardMaterial color="#B0BEC5" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
}
