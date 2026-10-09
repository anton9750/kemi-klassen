import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Cylinder, Sphere, Cone } from '@react-three/drei';
import useGameStore from '../hooks/useGameStore';
import Vial from './Vial';
import Burner from './Burner';
import Stand from './Stand';
import ReagentHolder from './ReagentHolder';

function Table() {
  return (
    <group position={[0, 0, 0]}>
      {/* Table top */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[6, 0.15, 3]} />
        <meshStandardMaterial color="#5D4037" roughness={0.7} />
      </mesh>
      {/* Table legs */}
      {[[-2.5, -0.6, -1.2], [2.5, -0.6, -1.2], [-2.5, -0.6, 1.2], [2.5, -0.6, 1.2]].map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <boxGeometry args={[0.15, 1.1, 0.15]} />
          <meshStandardMaterial color="#3E2723" />
        </mesh>
      ))}
      {/* Table edge highlight */}
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[6.05, 0.02, 3.05]} />
        <meshStandardMaterial color="#8D6E63" />
      </mesh>
    </group>
  );
}

function AlchemyMat() {
  return (
    <mesh position={[0, 0.09, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <circleGeometry args={[1.2, 32]} />
      <meshStandardMaterial color="#37474F" roughness={0.9} />
    </mesh>
  );
}

export default function Scene() {
  const mixture = useGameStore(s => s.mixture);
  const currentEffect = useGameStore(s => s.currentEffect);
  const showExplosion = useGameStore(s => s.showExplosion);
  const burner = useGameStore(s => s.burner);
  const isPouring = useGameStore(s => s.isPouring);
  const pourProgress = useGameStore(s => s.pourProgress);
  const reagentGlasses = useGameStore(s => s.reagentGlasses);
  const activeGlassId = useGameStore(s => s.activeGlassId);

  return (
    <group>
      <Table />
      <AlchemyMat />
      
      {/* Main stand + vial in center */}
      <group position={[0, 0.1, 0]}>
        <Stand />
        <Vial
          position={[0, 0.9, 0]}
          color={mixture.color}
          volume={mixture.volume}
          effect={currentEffect}
          isPouring={isPouring}
          pourProgress={pourProgress}
        />
      </group>
      
      {/* Burner - can be dragged conceptually via UI */}
      <Burner
        position={burner.underGlass ? [0, 0.15, 0.6] : [1.5, 0.15, 0.8]}
        active={burner.active}
        level={burner.level}
      />
      
      {/* Extra reagent glasses on the side */}
      <ReagentHolder glasses={reagentGlasses} activeId={activeGlassId} />
      
      {/* Explosion effect */}
      {showExplosion && <ExplosionEffect />}
      
      {/* Particle effects based on currentEffect */}
      {currentEffect && <EffectParticles effect={currentEffect} />}
    </group>
  );
}

function ExplosionEffect() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime;
      ref.current.scale.setScalar(1 + Math.sin(t * 20) * 0.3);
    }
  });
  
  return (
    <group ref={ref} position={[0, 1.2, 0]}>
      <Sphere args={[0.8, 16, 16]}>
        <meshBasicMaterial color="#FF5722" transparent opacity={0.6} />
      </Sphere>
      <Sphere args={[1.2, 16, 16]}>
        <meshBasicMaterial color="#FFEB3B" transparent opacity={0.3} />
      </Sphere>
      <pointLight color="#FF5722" intensity={5} distance={5} />
    </group>
  );
}

function EffectParticles({ effect }) {
  const ref = useRef();
  const count = 20;
  
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.children.forEach((child, i) => {
      const speed = 0.5 + (i % 5) * 0.1;
      child.position.y = 1.2 + Math.abs(Math.sin(t * speed + i)) * 0.8;
      child.position.x = Math.sin(t * 0.5 + i) * 0.3;
      child.position.z = Math.cos(t * 0.5 + i) * 0.3;
    });
  });
  
  const color = {
    bubbles: '#4FC3F7',
    steam: '#ECEFF1',
    smoke: '#78909C',
    fizz: '#81C784',
    spark: '#FFEB3B',
    bright_light: '#FFFFFF',
    gas: '#B0BEC5',
    blue_flame: '#2196F3',
    glow: '#FF5722',
    caramel: '#FF8A65',
  }[effect] || '#FFFFFF';
  
  return (
    <group ref={ref}>
      {Array.from({ length: count }).map((_, i) => (
        <Sphere key={i} args={[0.03, 8, 8]} position={[0, 1.2, 0]}>
          <meshBasicMaterial color={color} transparent opacity={0.7} />
        </Sphere>
      ))}
    </group>
  );
}
