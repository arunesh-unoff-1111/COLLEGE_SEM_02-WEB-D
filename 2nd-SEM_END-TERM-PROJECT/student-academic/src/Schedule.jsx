import React from 'react';

export default function Schedule() {
  const scheduleData = [
    { time: '09:00 AM', subject: 'Data Structures', room: 'Room 301', color: 'purple' },
    { time: '11:00 AM', subject: 'Operating Systems', room: 'Room 204', color: 'blue' },
    { time: '02:00 PM', subject: 'Database Management', room: 'Room 105', color: 'green' },
    { time: '04:00 PM', subject: 'Machine Learning', room: 'Lab 1', color: 'purple' }
  ];

  return (
    <div className="dashboard-card">
      <h3>Today's Schedule</h3>
      <div className="timeline">
        {scheduleData.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="time-col">{item.time}</div>
            <div className="status-marker"><span className={`dot ${item.color}`}></span></div>
            <div className="details-col">
              <h4>{item.subject}</h4>
              <p>{item.room}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View Full Calendar</button>
    </div>
  );
}