import React from 'react';

export default function Stand() {
  return (
    <group>
      {/* Base ring */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.45, 0.03, 8, 32]} />
        <meshStandardMaterial color="#455A64" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Three legs */}
      {[0, 120, 240].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <mesh
            key={i}
            position={[Math.cos(rad) * 0.4, 0.4, Math.sin(rad) * 0.4]}
            rotation={[0.3, 0, rad]}
          >
            <cylinderGeometry args={[0.02, 0.02, 0.85, 8]} />
            <meshStandardMaterial color="#607D8B" metalness={0.6} roughness={0.4} />
          </mesh>
        );
      })}
      
      {/* Top ring holding the vial */}
      <mesh position={[0, 0.85, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.22, 0.025, 8, 32]} />
        <meshStandardMaterial color="#455A64" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Cross support */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.8, 0.02, 0.02]} />
        <meshStandardMaterial color="#607D8B" metalness={0.6} />
      </mesh>
    </group>
  );
}
