import React from "react";
import "./Dashboard.css";
import { dashboardData } from "../../data/dashboard.data";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-title-container">
          <h2>Données globales (2022-2023)</h2>
        </div>

        <div className="dashboard-data-flex">
          {dashboardData.map((item) => (
            <div className="dashboard-data-container">
              <div className="dashboard-text-content">
                <span>{item.percentage.toString()}%</span>
                <p>{item.title}</p>
              </div>
              <svg
                width="240"
                height="240"
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="120"
                  cy="120"
                  r="100"
                  className="dashboard-svg-background"
                />
                <circle
                  cx="120"
                  cy="120"
                  r="100"
                  className="dashboard-svg-filled"
                  pathLength="1"
                  style={{ strokeDashoffset: (item.percentage - 100) / 100 }}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
