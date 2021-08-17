import React from 'react';

import "./style.scss";

export const Biography = () => {
    return (
        <div className="container">
            <div className="icon">
                <img className="bio-img" src="/img/biography.svg" />
            </div>
            <div className="biography">
                <h1>Who We Are</h1>
                <p>Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
                    Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience in real time.
                </p>
                <button>SEE MORE</button>
            </div>
        </div>
    )
}

export default Biography;
