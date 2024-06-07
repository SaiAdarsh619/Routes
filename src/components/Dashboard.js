// src/components/Dashboard.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './styles.css'

const Dashboard = () => (
  <div className="dashboard">
    <h2>Dashboard</h2>
    <nav>
      <Link to="profile">Profile</Link>
      <Link to="settings">Settings</Link>
    </nav>
    <Outlet />
  </div>
);

export default Dashboard;
