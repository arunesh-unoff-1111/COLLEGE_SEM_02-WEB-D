import React from 'react';

export default function WeeklyProgress() {
  const data = [
    { day: 'Mon', hours: 6 },
    { day: 'Tue', hours: 8 },
    { day: 'Wed', hours: 10 },
    { day: 'Thu', hours: 9 },
    { day: 'Fri', hours: 7 },
    { day: 'Sat', hours: 4 },
    { day: 'Sun', hours: 0 }
  ];

  const maxHours = 12;

  return (
    <div className="dashboard-card">
      <h3>Weekly Study Progress</h3>
      <div className="chart-container">
        <div className="y-axis">
          <span>12h</span>
          <span>8h</span>
          <span>4h</span>
          <span>0h</span>
        </div>
        <div className="bars-wrapper">
          {data.map((item, idx) => (
            <div key={idx} className="bar-column">
              <div 
                className="bar" 
                style={{ height: `${(item.hours / maxHours) * 100}%` }}
              ></div>
              <span className="day-label">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}