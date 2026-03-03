import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Architecture from '../components/Architecture/Architecture';
import TechStack from '../components/TechStack/TechStack';
import CallToAction from '../components/CallToAction/CallToAction';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home: React.FC = () => {
    useScrollReveal();

    return (
        <>
            <Hero />
            <Features />
            <Architecture />
            <TechStack />
            <CallToAction />
        </>
    );
};

export default Home;
