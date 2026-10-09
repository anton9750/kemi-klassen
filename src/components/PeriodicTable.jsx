import React from 'react';
import { elements, categories } from '../data/elements';
import useGameStore from '../hooks/useGameStore';
import './PeriodicTable.css';

export default function PeriodicTable() {
  const selectedElements = useGameStore(s => s.selectedElements);
  const selectElement = useGameStore(s => s.selectElement);
  const explainElement = useGameStore(s => s.explainElement);
  const pourIntoVial = useGameStore(s => s.pourIntoVial);
  const clearSelection = useGameStore(s => s.clearSelection);
  const isPouring = useGameStore(s => s.isPouring);
  
  return (
    <div className="periodic-table">
      <h2>Periodiske System</h2>
      <p className="hint">Klik for at vælge (op til 4). Dobbeltklik for forklaring.</p>
      
      <div className="elements-grid">
        {elements.map((el) => {
          const isSelected = selectedElements.includes(el.symbol);
          const cat = categories[el.category] || { color: '#666' };
          
          return (
            <button
              key={el.symbol}
              className={`element-btn ${isSelected ? 'selected' : ''} danger-${el.danger}`}
              style={{
                backgroundColor: isSelected ? '#e94560' : cat.color + '33',
                borderColor: cat.color,
              }}
              onClick={() => selectElement(el.symbol)}
              onDoubleClick={() => explainElement(el.symbol)}
              title={`${el.danish} (${el.name})`}
            >
              <span className="atomic">{el.atomicNumber}</span>
              <span className="symbol">{el.symbol}</span>
              <span className="name">{el.danish}</span>
            </button>
          );
        })}
      </div>
      
      <div className="selection-bar">
        <div className="selected-list">
          {selectedElements.length === 0 ? (
            <span className="empty">Ingen stoffer valgt</span>
          ) : (
            selectedElements.map(s => (
              <span key={s} className="chip" onClick={() => selectElement(s)}>
                {s} ×
              </span>
            ))
          )}
        </div>
        
        <div className="actions">
          <button
            className="btn pour"
            disabled={selectedElements.length < 1 || isPouring}
            onClick={pourIntoVial}
          >
            {isPouring ? 'Hælder...' : '🧪 Hæld i glas'}
          </button>
          <button className="btn clear" onClick={clearSelection}>
            Ryd
          </button>
        </div>
      </div>
      
      <div className="legend">
        {Object.entries(categories).map(([key, val]) => (
          <span key={key} className="legend-item">
            <span className="dot" style={{ background: val.color }} />
            {val.label}
          </span>
        ))}
      </div>
    </div>
  );
}
