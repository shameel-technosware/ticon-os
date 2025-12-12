'use client';

import StickyHeader from './components/landing/StickyHeader';
import HeroSection from './components/landing/HeroSection';
import StrategySection from './components/landing/StrategySection';
import AboutSection from './components/landing/AboutSection';
import ServiceSection from './components/landing/ServiceSection';
import SupportSection from './components/landing/SupportSection';
import SpecialitySection from './components/landing/SpecialitySection';
import WhyChooseUsSection from './components/landing/WhyChooseUsSection';
import TeamSection from './components/landing/TeamSection';
import TestimonialSection from './components/landing/TestimonialSection';
import BrandSection from './components/landing/BrandSection';
import ContactSection from './components/landing/ContactSection';
import BlogSection from './components/landing/BlogSection';
import NewsletterSection from './components/landing/NewsletterSection';
import Footer from './components/landing/Footer';
import ScrollTop from './components/landing/ScrollTop';

export default function Home() {
    return (
        <>
            <StickyHeader />
            <HeroSection />
            <StrategySection />
            <AboutSection />
            <ServiceSection />
            <SupportSection />
            <SpecialitySection />
            <WhyChooseUsSection />
            <TeamSection />
            <TestimonialSection />
            <BrandSection />
            <ContactSection />
            <BlogSection />
            <NewsletterSection />
            <Footer />
            <ScrollTop />
        </>
    );
}
