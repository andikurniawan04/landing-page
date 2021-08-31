import React from 'react';

import HeroSection from './heroSection';
import Biography from './biography';
import Service from './services';
import Pricing from './pricing';
import Subscription from './subscription';

export const Content = () => {
    return (
        <div>
            <HeroSection />
            <Biography />
            <Service />
            <Pricing />
            <Subscription />
        </div>
    )
}

export default Content;
