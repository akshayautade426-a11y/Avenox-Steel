import Header from '@/components/Header';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
