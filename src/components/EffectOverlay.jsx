import React from 'react';
import useGameStore from '../hooks/useGameStore';
import './EffectOverlay.css';

export default function EffectOverlay() {
  const showExplosion = useGameStore(s => s.showExplosion);
  const currentEffect = useGameStore(s => s.currentEffect);
  
  if (!showExplosion && !currentEffect) return null;
  
  return (
    <div className={`effect-overlay ${showExplosion ? 'explosion' : currentEffect || ''}`}>
      {showExplosion && (
        <div className="explosion-text">💥 BOOM! 💥</div>
      )}
    </div>
  );
}
