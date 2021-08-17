import React from 'react';

import HeroSection from './heroSection';
import Biography from './biography';
import Service from './services';
import Pricing from './pricing';

export const Content = () => {
    return (
        <div>
            <HeroSection />
            <Biography />
            <Service />
            {/* <Pricing /> */}
        </div>
    )
}

export default Content;
