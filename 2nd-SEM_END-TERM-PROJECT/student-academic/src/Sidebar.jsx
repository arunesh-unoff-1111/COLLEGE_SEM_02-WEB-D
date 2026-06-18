import React from 'react';
import './components.css'; // Global components stylesheet layout styling

export default function Sidebar() {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '📅', label: 'Calendar' },
    { icon: '✅', label: 'Tasks' },
    { icon: '📚', label: 'Subjects' },
    { icon: '📝', label: 'Exams' },
    { icon: '🗒️', label: 'Notes' },
    { icon: '📂', label: 'Resources' },
    { icon: '📈', label: 'Progress' },
    { icon: '⚙️', label: 'Settings' }
  ];

  return (
    <div className="sidebar-wrapper">
      <div className="logo-section">
        <span className="logo-icon">🎓</span>
        <h2>STUDY DASHBOARD</h2>
      </div>
      
      <nav className="nav-menu">
        {menuItems.map((item, idx) => (
          <button key={idx} className={`nav-item ${item.active ? 'active' : ''}`}>
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-quote">
        <p className="quote-mark">“</p>
        <p className="quote-text">Discipline today, freedom tomorrow.</p>
      </div>
    </div>
  );
}