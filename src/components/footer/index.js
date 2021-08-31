import React from 'react';

import styles from "./style.module.scss"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerLinks} >
                <div className={styles.footerLinkWrapper}>
                    <div className={styles.footerLinkItems}>
                        <h2>Quick Links</h2>
                        <div className={styles.Link}><a href="/">Home </a></div>
                        <div className={styles.Link}><a href="#service">Services </a></div>
                        <div className={styles.Link}><a href="#price">Price </a></div>
                        <div className={styles.Link}><a href="#contact">Contact </a></div>
                        <div className={styles.Link}><a href="#about">About </a></div>

                    </div>
                    <div className={styles.footerLinkItems}>
                        <h2>Hours</h2>
                        <p>Monday: 9:00 - 18:00</p>
                        <p>Tuesday: 9:00 - 18:00</p>
                        <p>Wednesday: 9:00 - 18:00</p>
                        <p>Thursday: 9:00 - 18:00</p>
                        <p>Friday: 9:00 - 18:00</p>
                    </div>
                    <div className={styles.footerLinkItems} id="contact">
                        <h2>Contact</h2>
                        <div>
                            <p className={`fas fa-phone-alt`}> 000-000-0000</p>
                        </div>

                        <div>
                            <p className={`fas fa-envelope`}> info@email.com</p>
                        </div>
                        <div>
                            <p className={`fas fa-map-marker-alt`}> Jakarta, Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.socialMedia}>
                <div className={styles.socialMediaWrap}>
                    <div className={styles.footerLogo}>
                        <li className={`fas fa-vector-square`} />
                        <a href="/"> Lorem</a>
                    </div>
                    <small className={styles.copyright}>Lorem © 2021</small>
                    <div className={styles.socialIcons}>
                        <a className={`fab fa-facebook-f ${styles.socialIconLink}`} href="#"></a>
                        <a className={`fab fa-instagram ${styles.socialIconLink}`} href="#"></a>
                        <a className={`fab fa-twitter ${styles.socialIconLink}`} href="#"></a>
                        <a className={`fab fa-linkedin ${styles.socialIconLink}`} href="#"></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
