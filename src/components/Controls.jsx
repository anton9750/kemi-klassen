import React from 'react';
import useGameStore from '../hooks/useGameStore';
import './Controls.css';

export default function Controls() {
  const burner = useGameStore(s => s.burner);
  const toggleBurner = useGameStore(s => s.toggleBurner);
  const setBurnerLevel = useGameStore(s => s.setBurnerLevel);
  const setBurnerUnderGlass = useGameStore(s => s.setBurnerUnderGlass);
  const addReagentGlass = useGameStore(s => s.addReagentGlass);
  const resetMixture = useGameStore(s => s.resetMixture);
  const reagentGlasses = useGameStore(s => s.reagentGlasses);
  const maxGlasses = useGameStore(s => s.maxGlasses);
  
  return (
    <div className="controls">
      <h3>🔥 Brænder</h3>
      
      <div className="burner-controls">
        <button
          className={`btn-toggle ${burner.active ? 'on' : 'off'}`}
          onClick={toggleBurner}
        >
          {burner.active ? '🔥 Tændt' : '⭕ Slukket'}
        </button>
        
        <div className="level-buttons">
          {['lav', 'medium', 'høj'].map(lvl => (
            <button
              key={lvl}
              className={`lvl-btn ${burner.level === lvl ? 'active' : ''} ${lvl}`}
              onClick={() => setBurnerLevel(lvl)}
              disabled={!burner.active}
            >
              {lvl === 'lav' ? '🔵 Lav' : lvl === 'medium' ? '🟠 Medium' : '🔴 Høj'}
            </button>
          ))}
        </div>
        
        <label className="under-check">
          <input
            type="checkbox"
            checked={burner.underGlass}
            onChange={(e) => setBurnerUnderGlass(e.target.checked)}
          />
          Sæt brænder under stativet
        </label>
      </div>
      
      <h3>🧪 Reagensglas</h3>
      <p className="info">Du har {reagentGlasses.length} / {maxGlasses} glas</p>
      <button
        className="btn-add"
        onClick={addReagentGlass}
        disabled={reagentGlasses.length >= maxGlasses}
      >
        + Tilføj nyt reagensglas
      </button>
      
      <button className="btn-reset" onClick={resetMixture}>
        🔄 Nulstil alt
      </button>
      
      <div className="tips">
        <h4>💡 Tips</h4>
        <ul>
          <li>Vælg stoffer → Hæld i glas</li>
          <li>Tænd brænderen og sæt den under</li>
          <li>Højt blus kan give eksplosion!</li>
          <li>Spørg lærer Kemius om hjælp</li>
          <li>Dobbeltklik på stof for forklaring</li>
        </ul>
      </div>
    </div>
  );
}
