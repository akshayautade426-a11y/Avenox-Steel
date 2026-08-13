import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
