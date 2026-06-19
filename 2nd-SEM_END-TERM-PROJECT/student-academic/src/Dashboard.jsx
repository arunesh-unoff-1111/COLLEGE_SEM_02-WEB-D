import React, { useState } from 'react';

const Dashboard = ({ darkMode, toggleTheme }) => {
  // --- STATE MANAGEMENT ---
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Stateful assignments data so users can toggle completion
  const [assignments, setAssignments] = useState([
    { id: 1, name: 'React Components', due: 'May 20, 2026', left: '2 days left', type: 'danger', status: 'Pending' },
    { id: 2, name: 'JavaScript Functions', due: 'May 22, 2026', left: '4 days left', type: 'warning', status: 'Pending' },
    { id: 3, name: 'Node JS API', due: 'May 25, 2026', left: '7 days left', type: 'success', status: 'Completed' },
  ]);

  const courses = [
    { name: 'JavaScript Basics', progress: 75, code: 'JS', color: '#e0f2fe', textColor: '#0369a1' },
    { name: 'React JS', progress: 60, code: 'R', color: '#dcfce7', textColor: '#15803d' },
    { name: 'Node JS', progress: 40, code: 'N', color: '#f3e8ff', textColor: '#7e22ce' },
    { name: 'MongoDB Basics', progress: 50, code: 'M', color: '#ffedd5', textColor: '#c2410c' },
  ];

  // --- FUNCTIONAL FILTERS & HANDLERS ---
  
  // Real-time course filtering
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Assignment completion toggler
  const handleToggleComplete = (id) => {
    setAssignments(prev => prev.map(item => {
      if (item.id === id) {
        const nextStatus = item.status === 'Completed' ? 'Pending' : 'Completed';
        return { ...item, status: nextStatus, left: nextStatus === 'Completed' ? 'Done' : item.left };
      }
      return item;
    }));
  };

  // Filter assignments based on tabs
  const filteredAssignments = assignments.filter(item => {
    if (activeTab === 'All') return true;
    return item.status === activeTab;
  });

  // Derived dashboard metrics computation
  const pendingCount = assignments.filter(a => a.status === 'Pending').length;

  return (
    <main className="main-content">
      {/* HEADER SECTION */}
      <header className="header">
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Dashboard</h2>
        </div>
        
        <div className="header-right">
          {/* Functional Search */}
          <input 
            type="text" 
            placeholder="Search courses..." 
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>

          {/* Stateful Dropdown Menu */}
          <div className="user-profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <div className="avatar">J</div>
            <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>Hello, John ▾</span>
          </div>

          {dropdownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-item" onClick={() => alert('Profile settings setup coming soon!')}>My Profile</div>
              <div className="dropdown-item" onClick={() => alert('Account settings link active.')}>Settings</div>
              <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '4px 0' }} />
              <div className="dropdown-item" style={{ color: '#ef4444' }}>Logout</div>
            </div>
          )}
        </div>
      </header>

      {/* METRICS ROW */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="icon-wrapper" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>📘</div>
          <div className="stat-info">
            <h3>{courses.length}</h3>
            <p>My Courses</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-wrapper" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>📋</div>
          <div className="stat-info">
            <h3>{pendingCount}</h3>
            <p>Pending Tasks</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-wrapper" style={{ backgroundColor: '#fffbeb', color: '#d97706' }}>⭐</div>
          <div className="stat-info">
            <h3>85%</h3>
            <p>Average Grade</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-wrapper" style={{ backgroundColor: '#faf5ff', color: '#7e22ce' }}>📅</div>
          <div className="stat-info">
            <h3>3</h3>
            <p>Upcoming Events</p>
          </div>
        </div>
      </section>

      {/* DUAL WORKSPACE LAYOUT */}
      <div className="dashboard-sections">
        
        {/* COURSE GRID (WITH SEARCH EFFECT) */}
        <section className="section-card">
          <div className="section-header">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>My Courses</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Showing {filteredCourses.length} entries
            </span>
          </div>
          <div className="list-container">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, idx) => (
                <div key={idx} className="list-item">
                  <div className="item-left">
                    <div className="course-icon" style={{ backgroundColor: course.color, color: course.textColor }}>
                      {course.code}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: '600' }}>{course.name}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Progress: {course.progress}%</p>
                    </div>
                  </div>
                  <div className="progress-container">
                    <div className="progress-text">{course.progress}%</div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: `${course.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)' }}>No courses match your search.</p>
            )}
          </div>
        </section>

        {/* INTERACTIVE ASSIGNMENTS TAB SHEET */}
        <section className="section-card">
          <div className="section-header">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Upcoming Assignments</h3>
          </div>

          {/* Functional Navigation Tabs */}
          <div className="tab-container">
            {['All', 'Pending', 'Completed'].map((tab) => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="list-container">
            {filteredAssignments.length > 0 ? (
              filteredAssignments.map((task) => (
                <div key={task.id} className="list-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <input 
                      type="checkbox" 
                      className="assignment-checkbox"
                      checked={task.status === 'Completed'}
                      onChange={() => handleToggleComplete(task.id)}
                    />
                    <div>
                      <h4 className={task.status === 'Completed' ? 'completed-text' : ''} style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                        {task.name}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Due: {task.due}</p>
                    </div>
                  </div>
                  <span className={`badge ${task.status === 'Completed' ? 'success' : task.type}`}>
                    {task.left}
                  </span>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)' }}>No assignments found in this view.</p>
            )}
          </div>
        </section>
      </div>

      {/* ANNOUNCEMENTS BAR */}
      <section className="announcement-box">
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Recent Announcements</h3>
        <p>Welcome to your enhanced Student Dashboard! You can now filter assignments by state, search courses, change modes, and toggle interactive tasks effortlessly.</p>
        <span className="announcement-date">May 15, 2026</span>
      </section>
    </main>
  );
};

export default Dashboard;