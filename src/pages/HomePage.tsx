import React from 'react';
import HeroSection from '../components/home/HeroSection';
import OfferSection from '../components/home/OfferSection';
import PerksSection from '../components/home/PerksSection';
import StatsSection from '../components/home/StatsSection';
import ProcessSection from '../components/home/ProcessSection';

function HomePage() {
    return (
        <>
            <HeroSection/>
            <OfferSection/>
            <PerksSection/>
            <StatsSection/>
            <ProcessSection/>
        </>
    );
}

export default HomePage;