import React from 'react';

export default function Metrics() {
  const cards = [
    { title: 'Classes', value: '5', sub: 'This Week', color: 'purple', icon: '📅' },
    { title: 'Tasks', value: '12', sub: 'Pending', color: 'blue', icon: '✔️' },
    { title: 'Study Hours', value: '24h', sub: 'This Week', color: 'green', icon: '📖' },
    { title: 'Progress', value: '75%', sub: 'Overall', color: 'orange', icon: '🎯' }
  ];

  return (
    <div className="metrics-row">
      {cards.map((card, idx) => (
        <div key={idx} className={`metric-card ${card.color}`}>
          <div className="metric-header">
            <span className="metric-icon">{card.icon}</span>
            <span className="metric-title">{card.title}</span>
          </div>
          <h2 className="metric-value">{card.value}</h2>
          <p className="metric-sub">{card.sub}</p>
        </div>
      ))}
    </div>
  );
}