import PageHeader from '../components/PageHeader';
import ServiceSection from '../components/landing/ServiceSection';
import SpecialitySection from '../components/landing/SpecialitySection';

export default function ServicesPage() {
    return (
        <main>
            <PageHeader
                title="Our Services"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'Services' }
                ]}
            />

            <ServiceSection />
            <SpecialitySection />
        </main>
    );
}
