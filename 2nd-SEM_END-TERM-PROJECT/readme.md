# 🎓 Student Academic Dashboard

A sleek, responsive, and dark-themed academic bento grid dashboard designed to help students track their schedules, assignments, study hours, and exam preparations. Inspired by the UI layout in **image_d428d9.jpg**.

## 🚀 Features

*   **Bento Grid Layout:** Clean, modern UI organizing complex information into easily scannable components.
*   **Live Pomodoro Timer:** A functional 25-minute focus timer component built with React hooks to track study sessions.
*   **Fully Responsive:** Fluid layouts that seamlessly shift between multi-column desktop views and stack vertically on mobile screens.
*   **Modular Component Architecture:** Clean, decoupled React components (`Sidebar`, `Metrics`, `Schedule`, `UpcomingExams`, `WeeklyProgress`, `FocusTimer`) for simple scaling.
*   **Custom Dark Theme:** Uses structured CSS variables for uniform color palettes and sleek typography transitions.

---

## 📂 Project Structure

Following the modern Vite + React pattern shown in **image_d42519.png**, the project is organized as follows:

```text
src/
├── assets/             # Images, SVGs, static graphical elements
├── components/         # Modular layout blocks
│   ├── Sidebar.jsx        # Left-side navigation menu & motivational quote
│   ├── Metrics.jsx        # Header statistic display blocks
│   ├── Schedule.jsx       # Daily timeline schedule items
│   ├── UpcomingExams.jsx  # Categorized calendar reminders
│   ├── WeeklyProgress.jsx # Customized CSS analytics chart
│   ├── FocusTimer.jsx     # Live React-state Pomodoro countdown timer
│   └── components.css     # Local CSS styling rules for all sub-components
├── App.css             # Main layout configuration grids and responsive breakpoints
├── App.jsx             # Core structural component orchestration mapping
├── index.css           # Global theme colors, typography resets, and scrollbars
└── main.jsx            # React root application mounting context