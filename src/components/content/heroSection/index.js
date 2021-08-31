import React from "react";

import styles from "./style.module.scss";

const HeroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heroLeft}>
                <h1>
                    <span>SOCIAL </span>
                    <span>MEDIA FOR BUSINESS</span>
                </h1>
                <p>PERFOMANCE BASED SOCIAL MEDIA AGENCY</p>
                <p> WE ARE LOREM MEDIA</p>
                <button type="submit" className={styles.active}>GET STARTED</button>
            </div>
            <div className={styles.heroRight}>
                <img className={styles.heroImg} src='/landing-page/img/social-media.svg' />
            </div>
            <button type="submit" className={styles.disabled}>GET STARTED</button>
        </div>
    )
}

export default HeroSection
