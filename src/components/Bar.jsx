import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router'
import { TiLocationArrow, TiHome } from "react-icons/ti";
import { IoMdContacts } from "react-icons/io";

function Bar() {
    const [collapsed, setCollapsed] = useState(false);
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
        const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    
        const toggleSidebar = () => {
            if (!isMobile) setCollapsed(!collapsed);
        };
    
        const toggleNavbar = () => {
            setIsNavbarOpen(!isNavbarOpen);
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
    <>
                    <ul className="nav flex-column mt-1">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
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
                <Outlet/>

      
    </>
  )
}

export default Bar
