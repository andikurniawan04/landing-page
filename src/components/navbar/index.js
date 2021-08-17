import React, { useState } from "react";
import "./style.scss";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => { setClick(!click) };

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", changeBackground);
    return (
        <>
            <nav className={navbar ? "navbar scroll" : "navbar"}>
                <div className="navbar-container">
                    <a href="#" className={navbar ? "logo scroll" : "logo"}>LOGO</a>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <a className={navbar ? "nav-links scroll" : "nav-links"} href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className={navbar ? "nav-links scroll" : "nav-links"} href="#">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className={navbar ? "nav-links scroll" : "nav-links"} href="#">PRICES</a>
                        </li>
                        <li className="nav-item">
                            <a className={navbar ? "nav-links scroll" : "nav-links"} href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="coba">

            </div>
            {/* <div className="header">
                <div className="header-left">
                    <h1>Logo</h1>
                </div>
                <div className="header-right">
                    <a href="#">HOME</a>
                    <a href="#">SERVICES</a>
                    <a href="#">PRICES</a>
                    <a href="#">CONTACT</a>
                </div>
            </div> */}



            {/* <div className="header-content">
                <h1>SOCIAL MEDIA FOR BUSINESS</h1>
                <p>PERFOMANCE BASED SOCIAL MEDIA AGENCY WE ARE LOREM MEDIA</p>
                <button type="submit">GET STARTED</button>
                <div>
                    <img src="/img/social-ideas.svg" />
                </div>
               
            </div> */}

        </>

    )
}

export default Navbar;