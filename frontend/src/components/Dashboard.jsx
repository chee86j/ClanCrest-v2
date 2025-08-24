import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    // Placeholder for logout functionality
    console.log("Logout clicked");
    navigate("/");
  };

  const handleSave = () => {
    // Placeholder for save functionality
    console.log("Save clicked");
    alert("Save functionality - placeholder");
  };

  const handleAddPerson = () => {
    // Placeholder for add person functionality
    console.log("Add person clicked");
    alert("Add person functionality - placeholder");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Family Tree Dashboard</h1>
        </div>
        <div className="header-right">
          <button className="btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="welcome-section">
            <h2>Welcome to ClanCrest</h2>
            <p>Your family tree management dashboard</p>
          </div>

          <div className="actions-section">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <button className="btn-primary" onClick={handleAddPerson}>
                Add Person
              </button>
              <button className="btn-secondary" onClick={handleSave}>
                Save Tree
              </button>
            </div>
          </div>

          <div className="placeholder-section">
            <h3>Family Tree Visualization</h3>
            <div className="placeholder-content">
              <p>Interactive family tree visualization will be displayed here</p>
              <div className="placeholder-tree">
                <div className="placeholder-node">👨</div>
                <div className="placeholder-node">👩</div>
                <div className="placeholder-node">👶</div>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h3>Tree Statistics</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">0</div>
                <div className="stat-label">Family Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">0</div>
                <div className="stat-label">Generations</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">0</div>
                <div className="stat-label">Relationships</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
  