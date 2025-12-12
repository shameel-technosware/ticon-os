import PageHeader from '../components/PageHeader';
import ContactSection from '../components/landing/ContactSection';
import SupportSection from '../components/landing/SupportSection';

export default function ContactPage() {
    return (
        <main>
            <PageHeader
                title="Contact Us"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact' }
                ]}
            />

            <ContactSection />
            <SupportSection />
        </main>
    );
}
