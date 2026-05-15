import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import PainPoints from '../components/PainPoints';
import HowItWorks from '../components/HowItWorks';
import PlatformOverview from '../components/PlatformOverview';
import AIAssistantFeature from '../components/AIAssistantFeature';
import InsuranceABHATeaser from '../components/InsuranceABHATeaser';
import EarlyAccessCTA from '../components/EarlyAccessCTA';

const Home = () => {
    return (
        <main>
            <Hero />
            <TrustStrip />
            <PainPoints />
            <HowItWorks />
            <InsuranceABHATeaser />
            <PlatformOverview />
            <AIAssistantFeature />
            <EarlyAccessCTA />
        </main>
    );
};

export default Home;
