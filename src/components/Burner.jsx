import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Cone, Sphere } from '@react-three/drei';

export default function Burner({ position, active, level }) {
  const flameRef = useRef();
  const flame2Ref = useRef();
  
  const heights = { lav: 0.25, medium: 0.45, høj: 0.7 };
  const colors = { lav: '#FF9800', medium: '#FF5722', høj: '#FFEB3B' };
  const intens = { lav: 1, medium: 2, høj: 4 };
  
  useFrame((state) => {
    if (!active || !flameRef.current) return;
    const t = state.clock.elapsedTime;
    const h = heights[level] || 0.3;
    flameRef.current.scale.y = 1 + Math.sin(t * 12) * 0.15;
    flameRef.current.scale.x = 1 + Math.sin(t * 15) * 0.1;
    if (flame2Ref.current) {
      flame2Ref.current.scale.y = 0.8 + Math.sin(t * 18) * 0.2;
    }
  });
  
  return (
    <group position={position}>
      {/* Base */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.3, 0.1, 16]} />
        <meshStandardMaterial color="#37474F" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.18, 0.25, 16]} />
        <meshStandardMaterial color="#546E7A" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Top ring */}
      <mesh position={[0, 0.35, 0]}>
        <torusGeometry args={[0.14, 0.025, 8, 24]} />
        <meshStandardMaterial color="#263238" metalness={0.8} />
      </mesh>
      
      {/* Flame */}
      {active && (
        <group position={[0, 0.4, 0]}>
          <mesh ref={flameRef}>
            <coneGeometry args={[0.08, heights[level], 8]} />
            <meshBasicMaterial color={colors[level]} transparent opacity={0.85} />
          </mesh>
          <mesh ref={flame2Ref} position={[0, 0.05, 0]}>
            <coneGeometry args={[0.04, heights[level] * 0.7, 8]} />
            <meshBasicMaterial color="#FFF59D" transparent opacity={0.9} />
          </mesh>
          <pointLight
            color={colors[level]}
            intensity={intens[level]}
            distance={3}
            decay={2}
          />
        </group>
      )}
      
      {/* Gas valve indicator */}
      <mesh position={[0.2, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 8]} />
        <meshStandardMaterial color={active ? '#4CAF50' : '#F44336'} />
      </mesh>
    </group>
  );
}
