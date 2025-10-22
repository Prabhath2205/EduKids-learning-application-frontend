import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUsers, FaComment, FaThLarge, FaHome } from "react-icons/fa";
import "../style/AdminSidebar.css"; // ✅ make sure this path matches your folder

const AdminSidebar = () => {
  return (
    <div className="admin-page-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-sidebar-title">EduKids Admin</h2>

        <nav className="admin-sidebar-nav">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `admin-nav-item ${isActive ? "active" : ""}`
            }
          >
            <FaHome className="admin-nav-icon" /> Dashboard
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `admin-nav-item ${isActive ? "active" : ""}`
            }
          >
            <FaUsers className="admin-nav-icon" /> Users
          </NavLink>

          <NavLink
            to="/admin/feedback"
            className={({ isActive }) =>
              `admin-nav-item ${isActive ? "active" : ""}`
            }
          >
            <FaComment className="admin-nav-icon" /> Feedback
          </NavLink>

          <NavLink
            to="/admin/content"
            className={({ isActive }) =>
              `admin-nav-item ${isActive ? "active" : ""}`
            }
          >
            <FaThLarge className="admin-nav-icon" /> Content Management
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminSidebar;
