import React, { useState } from 'react';

import "./styles.scss";
import pricingData from "../../../data/pricing.json";

const Pricing = () => {
    const [data, setData] = useState(pricingData);

    return (
        <div>
            <h1>Our Pricing</h1>
            <div className="card-container">
                {data.map((row) => (
                    <div className="card">
                        {console.log(row)}
                        <img className="card-img" src={`/img/service/${row.image}`} />
                        <h4 className="card-title">{row.title}</h4>
                        <div className="card-body">
                            <div className="card-button">
                                <button type="submit" className="card-button">SEE MORE</button>
                            </div>
                            <div className="card-description">
                                <p>{row.description}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing;