import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import InstallGuide from '../components/InstallGuide/InstallGuide';
import Architecture from '../components/Architecture/Architecture';
import TechStack from '../components/TechStack/TechStack';
import TechDocs from '../components/TechDocs/TechDocs';
import Changelog from '../components/Changelog/Changelog';
import CallToAction from '../components/CallToAction/CallToAction';
import { useRole } from '../context/RoleContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home: React.FC = () => {
    const { role } = useRole();
    const isDev = role === 'developer';

    useScrollReveal();

    return (
        <>
            <Hero />
            <Features />
            {!isDev && <InstallGuide />}
            <Architecture />
            <TechStack />
            {isDev && <TechDocs />}
            {isDev && <Changelog />}
            <CallToAction />
        </>
    );
};

export default Home;
