import PageHeader from '../components/PageHeader';
import AboutSection from '../components/landing/AboutSection';
import TeamSection from '../components/landing/TeamSection';
import WhyChooseUsSection from '../components/landing/WhyChooseUsSection';

export default function AboutPage() {
    return (
        <main>
            <PageHeader
                title="About Us"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'About Us' }
                ]}
            />

            {/* Reusing existing sections */}
            <AboutSection />
            <WhyChooseUsSection />
            <TeamSection />
        </main>
    );
}
