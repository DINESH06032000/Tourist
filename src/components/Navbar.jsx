import React, { useState } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import { TiLocationArrow } from 'react-icons/ti';
import { RiMenu3Fill } from 'react-icons/ri';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-md navbar_row">
            <div className="container-fluid g-0">
                <Link to="/" className="navbar-brand">
                    <TiLocationArrow />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={toggleNavbar}
                >
                    <RiMenu3Fill />
                </button>

                <div className={`navbar-collapse custom-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/page1">Lorem 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/page2">Lorem 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/page3">Lorem 3</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/page4">Lorem 4</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
