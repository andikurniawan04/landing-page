import React, { useState } from "react";
import styles from "./style.module.scss";

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
            <nav className={navbar ? `${styles.navbar} ${styles.scroll}` : styles.navbar}>
                <div className={styles.navbarContainer}>
                    <div className={navbar ? `${styles.logo} ${styles.scroll}` : styles.logo}>
                        <a href="/landing-page" ><i className={`fas fa-vector-square`}> Lorem</i></a>
                    </div>
                    <div className={`${styles.menuIcon} ${styles.icon}`} onClick={handleClick}>
                        <i className={click ? `fas fa-times` : `fas fa-bars `} />
                    </div>
                    <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
                        <li className={styles.navItem}>
                            <a className={navbar ? `${styles.navLinks} ${styles.scroll}` : styles.navLinks} href="/landing-page">HOME</a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={navbar ? `${styles.navLinks} ${styles.scroll}` : styles.navLinks} href="#service">SERVICES</a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={navbar ? `${styles.navLinks} ${styles.scroll}` : styles.navLinks} href="#price">PRICES</a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={navbar ? `${styles.navLinks} ${styles.scroll}` : styles.navLinks} href="#contact">CONTACT</a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={navbar ? `${styles.navLinks} ${styles.scroll}` : styles.navLinks} href="#about">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="coba">

            </div>

        </>

    )
}

export default Navbar;