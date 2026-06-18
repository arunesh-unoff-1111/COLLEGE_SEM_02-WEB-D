import Sidebar from "./Sidebar";
import Metrics from "./Metrics";
import Schedule from "./Schedule";
import FocusTimer from "./FocusTimer";
import UpcomingExams from "./UpcomingExams";
import WeeklyProgress from "./WeeklyProgress";
function App() {
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar-layout">
        <Sidebar />
      </aside>

      {/* Main Content Dashboard */}
      <main className="main-content">
        <header className="dashboard-header">
          <div className="welcome-text">
            <h1>Welcome back, Student! 👋</h1>
            <p>Here's what's happening with your semester.</p>
          </div>
          <div className="header-actions">
            <button className="notif-btn">🔔</button>
            <select className="semester-select">
              <option>Spring 2024</option>
              <option>Fall 2024</option>
            </select>
          </div>
        </header>

        {/* Top Analytics Metrics */}
        <Metrics />

        {/* Dynamic Bento Grid Layout */}
        <div className="dashboard-grid">
          <Schedule />
          <UpcomingExams />
          <WeeklyProgress />
          <FocusTimer />
        </div>

        {/* Bottom Banner Quote */}
        <footer className="dashboard-footer">
          <p>⚡ Small steps every day lead to big results.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;