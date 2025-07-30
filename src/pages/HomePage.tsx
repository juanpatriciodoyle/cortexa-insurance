import React from 'react';
import HeroSection from '../components/home/HeroSection';
import OfferSection from '../components/home/OfferSection';
import PerksSection from '../components/home/PerksSection';
import StatsSection from '../components/home/StatsSection';

function HomePage() {
    return (
        <>
            <HeroSection/>
            <OfferSection/>
            <PerksSection/>
            <StatsSection/>
        </>
    );
}

export default HomePage;