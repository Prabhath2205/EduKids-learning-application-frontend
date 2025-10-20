/*import React, { useState } from 'react';
import { FaUsers, FaComment, FaThLarge, FaHome } from 'react-icons/fa';
import './AdminSidebar.css';
import Dashboard from '../components/Dashboard';
import Users from '../components/Users';
import Feedback from '../components/Feedback';
import ContentManagement from '../components/ContentManagement';
import Header from "../components/Header";

const AdminSidebar = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'feedback':
        return <Feedback />;
      case 'content':
        return <ContentManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="admin-page-container">
        <Header />
      <div className="admin-sidebar">
        <h2 className="admin-sidebar-title">EduKids Admin</h2>
        <nav className="admin-sidebar-nav">
          <button
            className={`admin-nav-item ${activeSection === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveSection('dashboard')}
          >
            <FaHome className="admin-nav-icon" /> Dashboard
          </button>
          <button
            className={`admin-nav-item ${activeSection === 'users' ? 'active' : ''}`}
            onClick={() => setActiveSection('users')}
          >
            <FaUsers className="admin-nav-icon" /> Users
          </button>
          <button
            className={`admin-nav-item ${activeSection === 'feedback' ? 'active' : ''}`}
            onClick={() => setActiveSection('feedback')}
          >
            <FaComment className="admin-nav-icon" /> Feedback
          </button>
          <button
            className={`admin-nav-item ${activeSection === 'content' ? 'active' : ''}`}
            onClick={() => setActiveSection('content')}
          >
            <FaThLarge className="admin-nav-icon" /> Content Management
          </button>
        </nav>
      </div>

      <div className="admin-content">{renderContent()}</div>
    </div>
  );
};

export default AdminSidebar;*/
// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { FaUsers, FaComment, FaThLarge, FaHome } from "react-icons/fa";
// import "../style/AdminSidebar.css";
// //import Header from "../components/Header";

// const AdminSidebar = () => {
//   return (
//     <div className="admin-page-container">
//       {/* Header at the top */}
//       <Header />

//       <div className="admin-layout">
//         {/* Sidebar */}
//         <div className="admin-sidebar">
//           <h2 className="admin-sidebar-title">EduKids Admin</h2>
//           <nav className="admin-sidebar-nav">

//             <NavLink
//               to="/admin/dashboard"
//               className={({ isActive }) =>
//                 `admin-nav-item ${isActive ? "active" : ""}`
//               }
//             >
//               <FaHome className="admin-nav-icon" /> Dashboard
//             </NavLink>

//             <NavLink
//               to="/admin/users"
//               className={({ isActive }) =>
//                 `admin-nav-item ${isActive ? "active" : ""}`
//               }
//             >
//               <FaUsers className="admin-nav-icon" /> Users
//             </NavLink>

//             <NavLink
//               to="/admin/feedback"
//               className={({ isActive }) =>
//                 `admin-nav-item ${isActive ? "active" : ""}`
//               }
//             >
//               <FaComment className="admin-nav-icon" /> Feedback
//             </NavLink>

//             <NavLink
//               to="/admin/content"
//               className={({ isActive }) =>
//                 `admin-nav-item ${isActive ? "active" : ""}`
//               }
//             >
//               <FaThLarge className="admin-nav-icon" /> Content Management
//             </NavLink>

//           </nav>
//         </div>

//         {/* Main Content (Outlet renders the page based on route) */}
//         <div className="admin-content">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminSidebar;

import React from "react";
import { Link, Outlet } from "react-router-dom";

function AdminSidebar() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: "250px", backgroundColor: "#cbfaf4ff" }}>
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="users">Users</Link></li>
          <li><Link to="feedback">Feedback</Link></li>
          <li><Link to="content">Content</Link></li>
          
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet /> {/* <--- This is where nested admin pages will render */}
      </div>
    </div>
  );
}

export default AdminSidebar;
