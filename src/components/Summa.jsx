import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { TiLocationArrow, TiHome } from "react-icons/ti";
import { IoMdContacts } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { RiAccountCircleLine, RiMenu3Fill } from "react-icons/ri";
import { FaSearchLocation } from "react-icons/fa";
import "./css/Summa.css";

const Summa = () => {
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
                <ul className="nav flex-column ">
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
            </div>

            {/* Main Content */}
            <div className={`content ${collapsed ? "collapsed" : ""}`}>
                {/* Navbar */}
                <nav className={`navbar navbar-expand-md navbar_row ${collapsed ? "collapsed-navbar" : ""}`}>
                    <div className="container-fluid g-0 navbar-width">
                        <div className="navbar_top">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <img className="navbar_img" src="logo.jpg" alt="Logo" />
                                </Link>
                            </div>

                            <div className="text-white navbar-brand">Tourist</div>

                            <div>
                                <button
                                    className="navbar-toggler navbar_btn"
                                    type="button"
                                    onClick={toggleNavbar}
                                >
                                    <RiMenu3Fill />
                                </button>
                            </div>
                        </div>

                        {/* 👇 Moved here outside navbar_top */}
                        <div className={`navbar-collapse custom-collapse ${isNavbarOpen ? "show" : ""}`}>
                            <ul className="navbar-nav">
                                <li className="nav-item w-100">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <span className="input-group-text">
                                            <FaSearchLocation />
                                        </span>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">
                                        <RiAccountCircleLine />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Route Content */}
                <div className="page-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, atque.
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Summa;
