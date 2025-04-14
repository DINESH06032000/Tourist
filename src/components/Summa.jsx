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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates modi autem nobis vero. Dolor vitae vel aliquam fugiat tempora deserunt quam officia nihil aperiam expedita! Sapiente minus distinctio officia ex eum ipsa quia aperiam odit, delectus fugiat repellat iste pariatur eveniet laudantium? Asperiores harum quae exercitationem sint, ea consectetur ex fugiat ullam, ratione temporibus odit perferendis. Voluptates facere unde cumque, obcaecati ex ipsa culpa animi recusandae reprehenderit veritatis maiores voluptatem asperiores qui quae, aliquid distinctio. Ex laudantium excepturi quod quo veritatis alias ducimus perspiciatis recusandae nobis consectetur explicabo, accusamus obcaecati in cupiditate? At quis tempora ipsum voluptas voluptatibus aperiam expedita sunt enim dolore molestiae, incidunt architecto vel nulla neque cumque alias veritatis consectetur quibusdam dolores odit. Id cum maxime, eos iste harum necessitatibus distinctio nostrum voluptatem nobis qui rem ex a ullam ducimus, iusto reprehenderit et fuga sint officia laudantium dolore porro! Deleniti, eos ab accusamus quos animi in sapiente, quis delectus fuga voluptatem, deserunt minus fugiat! Nulla quos repudiandae in quo numquam quae nisi deserunt? Enim voluptate distinctio accusantium nostrum consequatur fuga vel temporibus quisquam deleniti veritatis rerum ad, minima voluptates dolore. Doloremque tempore laborum obcaecati cupiditate iusto id quibusdam, tempora, odio ab qui sint autem eveniet labore!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates modi autem nobis vero. Dolor vitae vel aliquam fugiat tempora deserunt quam officia nihil aperiam expedita! Sapiente minus distinctio officia ex eum ipsa quia aperiam odit, delectus fugiat repellat iste pariatur eveniet laudantium? Asperiores harum quae exercitationem sint, ea consectetur ex fugiat ullam, ratione temporibus odit perferendis. Voluptates facere unde cumque, obcaecati ex ipsa culpa animi recusandae reprehenderit veritatis maiores voluptatem asperiores qui quae, aliquid distinctio. Ex laudantium excepturi quod quo veritatis alias ducimus perspiciatis recusandae nobis consectetur explicabo, accusamus obcaecati in cupiditate? At quis tempora ipsum voluptas voluptatibus aperiam expedita sunt enim dolore molestiae, incidunt architecto vel nulla neque cumque alias veritatis consectetur quibusdam dolores odit. Id cum maxime, eos iste harum necessitatibus distinctio nostrum voluptatem nobis qui rem ex a ullam ducimus, iusto reprehenderit et fuga sint officia laudantium dolore porro! Deleniti, eos ab accusamus quos animi in sapiente, quis delectus fuga voluptatem, deserunt minus fugiat! Nulla quos repudiandae in quo numquam quae nisi deserunt? Enim voluptate distinctio accusantium nostrum consequatur fuga vel temporibus quisquam deleniti veritatis rerum ad, minima voluptates dolore. Doloremque tempore laborum obcaecati cupiditate iusto id quibusdam, tempora, odio ab qui sint autem eveniet labore!
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Summa;
