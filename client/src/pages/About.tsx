import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
