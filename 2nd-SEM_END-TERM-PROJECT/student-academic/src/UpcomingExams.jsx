import React from 'react';

export default function UpcomingExams() {
  const exams = [
    { date: 'MAY 15', subject: 'Data Structures', daysLeft: '2 Days Left', color: 'purple' },
    { date: 'MAY 20', subject: 'Operating Systems', daysLeft: '7 Days Left', color: 'blue' },
    { date: 'MAY 28', subject: 'Database Management', daysLeft: '15 Days Left', color: 'green' }
  ];

  return (
    <div className="dashboard-card">
      <h3>Upcoming Exams</h3>
      <div className="exam-list">
        {exams.map((exam, idx) => (
          <div key={idx} className="exam-item">
            <div className={`date-badge ${exam.color}`}>
              {exam.date}
            </div>
            <div className="exam-details">
              <h4>{exam.subject}</h4>
              <p className={exam.color}>{exam.daysLeft}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All Exams</button>
    </div>
  );
}