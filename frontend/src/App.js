import PostMetrics from "./components/PostMetrics/PostMetrics";
import UserMetrics from "./components/UserMetrics/UserMetrics";
import Sidebar from "./components/PostMetrics/Sidebar";
import Navbar from "./components/PostMetrics/Navbar";
import Download from "./components/Download/DownloadPage";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [selectedYear, setSelectedYear] = React.useState(2021);

  return (
    <div
      className="dashboard"
      style={{ gridTemplateColumns: sidebarOpen ? "17% 83%" : "5% 95%" }}
    >
      <Sidebar sidebarState={setSidebarOpen} />{" "}
      <div>
        <Navbar setGlobalSelectedYearState={setSelectedYear} />
        <Routes>
          <Route
            path="/"
            element={<PostMetrics selectedYear={selectedYear} />}
          />{" "}
          <Route
            path="/usermetrics"
            element={<UserMetrics selectedYear={selectedYear} />}
          />{" "}
          <Route path="/download" element={<Download />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
