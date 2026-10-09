import React from 'react';
import useGameStore from '../hooks/useGameStore';
import './Teacher.css';

export default function Teacher() {
  const teacherMessage = useGameStore(s => s.teacherMessage);
  const teacherTalking = useGameStore(s => s.teacherTalking);
  const askTeacher = useGameStore(s => s.askTeacher);
  const clearTeacher = useGameStore(s => s.clearTeacher);
  const mixture = useGameStore(s => s.mixture);
  
  return (
    <div className="teacher">
      <div className="teacher-avatar">
        <div className="avatar-face">
          <div className="eyes">
            <span className="eye">👁</span>
            <span className="eye">👁</span>
          </div>
          <div className="mouth">{teacherTalking ? '🗣️' : '😊'}</div>
        </div>
        
        <button
          className="question-btn"
          onClick={askTeacher}
          title="Spørg læreren om blandingen"
        >
          ?
        </button>
      </div>
      
      <div className="teacher-name">Lærer Kemius</div>
      
      <div className={`speech-bubble ${teacherTalking ? 'active' : ''}`}>
        <p>{teacherMessage}</p>
        {teacherTalking && (
          <button className="close-speech" onClick={clearTeacher}>
            Forstået!
          </button>
        )}
      </div>
      
      {mixture.symbols.length > 0 && (
        <div className="current-mix">
          <strong>I glasset nu:</strong>
          <div className="mix-symbols">
            {mixture.symbols.map(s => (
              <span key={s} className="mix-chip">{s}</span>
            ))}
          </div>
          {mixture.reaction && (
            <div className="reaction-name">
              → {mixture.reaction.name} ({mixture.reaction.formula})
            </div>
          )}
        </div>
      )}
    </div>
  );
}
