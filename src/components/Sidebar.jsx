import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Sidebar.css";
import { TiLocationArrow } from "react-icons/ti";
import { IoMdContacts } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { TiHome } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    if (!isMobile) {
      setCollapsed(!collapsed);
    }
  };

  const handleResize = () => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    setCollapsed(mobile);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-layout">
      {/* Sidebar */}
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <button className="toggle-btn nav-link" onClick={toggleSidebar} disabled={isMobile}>
            <CgMenuGridR className="fonticon" />
            {!collapsed && <span className="link-text">Menu</span>}
          </button>
        </div>
        <hr />

        <ul className="nav flex-column mt-1">
          <li className="nav-item">
            <Link to="/" className="nav-link" end>
              <TiHome className="fonticon" />
              {!collapsed && <span className="link-text">Home</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <IoMdContacts className="fonticon" />
              {!collapsed && <span className="link-text">About</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              <TiLocationArrow className="fonticon" />
              {!collapsed && <span className="link-text">Contact</span>}
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="content">

        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
