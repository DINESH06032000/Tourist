import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiAccountCircleLine } from "react-icons/ri";
import { RiMenu3Fill } from 'react-icons/ri';
import { FaSearchLocation } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-md navbar_row">
            <div className="container-fluid g-0">

                <div className='navbar_top'>
                    <div className="navbar-brand">
                        <Link to="/" >
                            <img className='navbar_img' src="logo.jpg" alt="" />
                        </Link>
                    </div>


                    <div className='text-white navbar-brand '>Tourist</div>
                    <div className='d-flex align-item-center' >

                        <button
                            className="navbar-toggler navbar_btn"
                            type="button"
                            aria-expanded={isOpen ? 'true' : 'false'}
                            aria-label="Toggle navigation"
                            onClick={toggleNavbar}
                        >
                            <RiMenu3Fill />
                        </button>
                    </div>

                </div>

                <div className={`navbar-collapse custom-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
                                <span className="input-group-text" id="basic-addon1"><FaSearchLocation/></span>
                            </div>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/page4"><RiAccountCircleLine/> </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/page4"> </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
