import React from "react";

import "./style.scss";

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-left">
                <h1>
                    <span>SOCIAL </span>
                    <span>MEDIA FOR BUSINESS</span>
                </h1>
                <p>PERFOMANCE BASED SOCIAL MEDIA AGENCY</p>
                <p> WE ARE LOREM MEDIA</p>
                <button type="submit" className="active">GET STARTED</button>
            </div>
            <div className="hero-right">
                <img className="hero-img" src="/img/social-media.svg" />
            </div>
            <button type="submit" className="disabled">GET STARTED</button>
        </div>
    )
}

export default HeroSection
