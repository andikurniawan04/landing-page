import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import styles from "./styles.module.scss";
import pricingData from "../../../data/pricing.json";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },

]

const Pricing = () => {
    const [data, setData] = useState(pricingData);
    const [arrow, setArrow] = useState(false);



    useEffect(() => {
        showArrow();
    }, []);

    const showArrow = () => {
        if (window.innerWidth <= 700) {
            setArrow(false);
        } else {
            setArrow(true);
        }
        console.log(window.innerWidth)
    }

    window.addEventListener('resize', showArrow);

    return (
        <div className={styles.container} id="price">
            <h1 className={styles.title}>Our Pricing</h1>
            <div className={styles.cardContainer}>
                <Carousel breakPoints={breakPoints} showArrows={arrow}>
                    {data.map((row, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.cardBody}>
                                <h2 className={styles.cardTitle}>{row.title}</h2>
                                <div className={styles.cardDescription}>
                                    <p>{row.description}</p>
                                </div>
                                <div className={styles.price}>
                                    <p>{row.price}</p>
                                </div>
                                <div className={styles.cardButton}>
                                    <button type="submit">See Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>



            </div>

        </div>
    )
}

export default Pricing;