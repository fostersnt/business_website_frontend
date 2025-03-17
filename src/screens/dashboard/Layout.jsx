import React from "react";
import "../../assets/styles/Layout.css";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="layout_container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>My Dashboard</h2>
        </div>
        <ul className="sidebar-nav">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/documents">Documents</Link>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="navbar">
          <div className="navbar-left">
            <h1>Dashboard</h1>
          </div>
          <div className="navbar-right">
            <span>Welcome, User</span>
          </div>
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
