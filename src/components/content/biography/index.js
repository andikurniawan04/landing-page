import React from 'react';

import styles from "./style.module.scss";

export const Biography = () => {
    return (
        <div className={styles.container} id="about">
            <div className={styles.icon}>
                <img className={styles.bioImg} src="/landing-page/img/biography.svg" />
            </div>
            <div className={styles.biography}>
                <h1 className={styles.title}>Who We Are</h1>
                <p className={styles.description}>Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
                    Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience in real time.
                </p>
                <button>SEE MORE</button>
            </div>
        </div>
    )
}

export default Biography;
