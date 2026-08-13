import Header from '@/components/Header';
import WhyAvenoxSection from '@/components/WhyAvenoxSection';
import Footer from '@/components/Footer';

export default function WhyAvenox() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <WhyAvenoxSection />
      </main>
      <Footer />
    </div>
  );
}
