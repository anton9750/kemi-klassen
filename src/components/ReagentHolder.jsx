import React from 'react';
import { Cylinder } from '@react-three/drei';
import useGameStore from '../hooks/useGameStore';

function SmallVial({ position, color, active, symbols }) {
  const fill = Math.max(0.05, (symbols.length / 4) * 0.4);
  
  return (
    <group position={position}>
      {/* Glass */}
      <mesh>
        <cylinderGeometry args={[0.1, 0.08, 0.5, 16, 1, true]} />
        <meshPhysicalMaterial
          color={active ? '#BBDEFB' : '#E3F2FD'}
          transparent
          opacity={0.3}
          roughness={0.1}
          transmission={0.85}
        />
      </mesh>
      {/* Liquid */}
      {symbols.length > 0 && (
        <mesh position={[0, -0.2 + fill / 2, 0]}>
          <cylinderGeometry args={[0.08, 0.07, fill, 16]} />
          <meshStandardMaterial color={color || '#4FC3F7'} transparent opacity={0.8} />
        </mesh>
      )}
      {/* Bottom */}
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.03, 16]} />
        <meshPhysicalMaterial color="#E3F2FD" transparent opacity={0.4} />
      </mesh>
      {/* Active indicator */}
      {active && (
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#4CAF50" />
        </mesh>
      )}
    </group>
  );
}

export default function ReagentHolder({ glasses, activeId }) {
  const setActiveGlass = useGameStore(s => s.setActiveGlass);
  
  return (
    <group position={[-2, 0.1, 0.3]}>
      {/* Holder base */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <boxGeometry args={[1.4, 0.1, 0.5]} />
        <meshStandardMaterial color="#5D4037" />
      </mesh>
      
      {/* Holes / slots */}
      {glasses.map((glass, i) => (
        <group key={glass.id}>
          <mesh
            position={[-0.45 + i * 0.35, 0.12, 0]}
            onClick={(e) => {
              e.stopPropagation();
              setActiveGlass(glass.id);
            }}
          >
            <cylinderGeometry args={[0.12, 0.12, 0.05, 16]} />
            <meshStandardMaterial color="#3E2723" />
          </mesh>
          <SmallVial
            position={[-0.45 + i * 0.35, 0.4, 0]}
            color={glass.color}
            active={glass.id === activeId}
            symbols={glass.symbols}
          />
        </group>
      ))}
    </group>
  );
}
