import React, { useState, useEffect } from 'react';

export default function FocusTimer() {
  const [seconds, setSeconds] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="dashboard-card centered-content">
      <h3>Focus Timer</h3>
      <div className="timer-circle-wrapper">
        <div className="timer-display">
          <h2>{formatTime(seconds)}</h2>
          <p>{isActive ? 'Keep grinding!' : 'Press start to begin'}</p>
        </div>
      </div>
      <button 
        className="action-btn-primary" 
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? 'Pause Session' : 'Start Focus Session'}
      </button>
    </div>
  );
}