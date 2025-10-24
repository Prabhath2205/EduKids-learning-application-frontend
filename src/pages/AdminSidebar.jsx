import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUsers, FaComment, FaThLarge, FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "../style/AdminSidebar.css"; // ✅ make sure this path matches your folder

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can clear auth tokens or session storage here
    localStorage.removeItem("adminToken");
    navigate("/about"); // Redirect to login page after logout
  };

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

        {/* Bottom Section */}
        <div className="admin-sidebar-bottom">
              <button className="admin-nav-item logout-btn" onClick={handleLogout}>
            <FaSignOutAlt className="admin-nav-icon" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminSidebar;
