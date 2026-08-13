import Header from '@/components/Header';
import IndustriesSection from '@/components/IndustriesSection';
import Footer from '@/components/Footer';

export default function Industries() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <IndustriesSection />
      </main>
      <Footer />
    </div>
  );
}
