import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import Scene from './components/Scene';
import PeriodicTable from './components/PeriodicTable';
import Teacher from './components/Teacher';
import Controls from './components/Controls';
import EffectOverlay from './components/EffectOverlay';
import useGameStore from './hooks/useGameStore';
import './App.css';

function App() {
  const effectMessage = useGameStore(s => s.effectMessage);
  
  return (
    <div className="app">
      <header className="header">
        <h1>🧪 Kemi Spil – Folkeskolen 2.-4. klasse</h1>
        <p>Bland stoffer, tænd blusset og lær om kemi!</p>
      </header>
      
      <div className="main-content">
        {/* Left: Periodic Table */}
        <div className="left-panel">
          <PeriodicTable />
        </div>
        
        {/* Center: 3D Scene */}
        <div className="center-panel">
          <Canvas
            camera={{ position: [0, 2.5, 5], fov: 45 }}
            shadows
            gl={{ antialias: true }}
          >
            <color attach="background" args={['#1a1a2e']} />
            <ambientLight intensity={0.4} />
            <directionalLight
              position={[5, 8, 5]}
              intensity={1.2}
              castShadow
              shadow-mapSize={[1024, 1024]}
            />
            <pointLight position={[-3, 3, -2]} intensity={0.5} color="#4fc3f7" />
            
            <Scene />
            
            <ContactShadows
              position={[0, -0.01, 0]}
              opacity={0.5}
              scale={12}
              blur={2}
            />
            
            <OrbitControls
              enablePan={false}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2.2}
              minDistance={3}
              maxDistance={8}
              target={[0, 0.8, 0]}
            />
          </Canvas>
          
          {effectMessage && (
            <div className="effect-banner">
              {effectMessage}
            </div>
          )}
          
          <EffectOverlay />
        </div>
        
        {/* Right: Teacher + Controls */}
        <div className="right-panel">
          <Teacher />
          <Controls />
        </div>
      </div>
    </div>
  );
}

export default App;
