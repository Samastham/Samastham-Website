import React, { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import ServicesShowcase from '../components/ServicesShowcase';
import ProvidersTeaser from '../components/ProvidersTeaser';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import ConsultationFeatures from '../components/ConsultationFeatures';
import DoctorCTA from '../components/DoctorCTA';
import AuthModal from '../components/AuthModal';

const Home = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const openAuthModal = () => setIsAuthModalOpen(true);
    const closeAuthModal = () => setIsAuthModalOpen(false);

    return (
        <main>
            <Hero />
            <Features />
            <Showcase />
            <ConsultationFeatures onConsultClick={openAuthModal} />
            <ServicesShowcase onConsultClick={openAuthModal} onOrderClick={openAuthModal} />
            <ProvidersTeaser />
            <DoctorCTA />
            <Testimonials />
            <CallToAction />

            <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
        </main>
    );
};

export default Home;
