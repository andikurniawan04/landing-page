import React from 'react';

import styles from "./style.module.scss";

const Subscription = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inputAreas}>
                <h1>Do You Want To Get Special News?</h1>
                <form className={styles.inputForm}>
                    <input
                        className={styles.input}
                        name="email"
                        type="email"
                        placeholder="Your Email"

                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Subscription
