import React, { useState } from 'react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: '🏠' },
    { name: 'My Courses', icon: '📖' },
    { name: 'Assignments', icon: '📄' },
    { name: 'Grades', icon: '📊' },
    { name: 'Calendar', icon: '📅' },
    { name: 'Profile', icon: '👤' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span>🎓</span>
        <span>Student</span>
      </div>
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className={`sidebar-item ${activeItem === item.name ? 'active' : ''}`}
                onClick={() => setActiveItem(item.name)}
                style={{ background: 'none', border: 'none', width: '100%', textLeft: 'left', textAlign: 'left' }}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
        
        {/* Logout at the bottom */}
        <button className="sidebar-item logout" style={{ background: 'none', border: 'none', textAlign: 'left', marginTop: 'auto' }}>
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;