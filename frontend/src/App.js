import Metrics from "./components/PostMetrics/Metrics";
import UserMetrics from "./components/UserMetrics/UserMetrics"
import Sidebar from "./components/PostMetrics/Sidebar";
import Download from "./components/Download/DownloadPage";
import { Routes, Route, Link } from 'react-router-dom'
import React from "react";


import "./scss/Styles.scss";

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true)
  console.log('parent'+sidebarOpen)
  return (
    <div className="dashboard" style={{ gridTemplateColumns: sidebarOpen ? "17% 83%" : "5% 95%" }}>
      <Sidebar sidebarState={setSidebarOpen} />
      <Routes>
        <Route path="/" element={<Metrics />} />
        <Route path="/usermetrics" element={<UserMetrics />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </div>
  );
}

export default App;
