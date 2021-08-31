import React, { useState, useEffect } from 'react';

import styles from "./style.module.scss";
import serviceData from "../../../data/service.json";


const Service = () => {
    const [data, setData] = useState(serviceData);

    // useEffect(() => {
    //     console.log(data);
    // }, [])

    return (
        <div className={styles.serviceContainer} id="service">
            <h1 className={styles.title}>Our Service</h1>
            <div className={styles.cardContainer}>
                {data.map((row, index) => (
                    <div className={styles.card} key={index}>
                        {console.log(row)}
                        <img className={styles.cardImg} src={`/img/service/${row.image}`} />
                        <h4 className={styles.cardTitle}>{row.title}</h4>
                        <div className={styles.cardBody}>
                            <div className={styles.cardButton}>
                                <button type="submit">SEE MORE</button>
                            </div>
                            <div className={styles.cardDescription}>
                                <p>{row.description}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service;