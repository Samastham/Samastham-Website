import React from 'react';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import InstantConsultFeature from '../components/InstantConsultFeature';
import ProvidersShowcase from '../components/ProvidersShowcase';
import AIAssistantFeature from '../components/AIAssistantFeature';
import EarlyAccessCTA from '../components/EarlyAccessCTA';

const Home = () => {
    return (
        <main>
            <Hero />
            <Showcase />
            <InstantConsultFeature />
            <ProvidersShowcase />
            <AIAssistantFeature />
            <EarlyAccessCTA />
        </main>
    );
};

export default Home;
