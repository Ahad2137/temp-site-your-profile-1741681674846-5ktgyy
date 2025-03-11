
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import KeyAchievements from '../components/KeyAchievements';
import { setupScrollAnimations } from '../lib/animations';

const Index = () => {
  useEffect(() => {
    // Set up scroll animations
    const cleanupAnimations = setupScrollAnimations();
    return () => {
      cleanupAnimations();
    };
  }, []);

  return <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      
      <main>
        <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-lg mb-4 leading-relaxed">
              I am a dedicated and results-driven professional with over seven years of experience in Procurement, Commercial, and Contract Management, demonstrating a proven track record of success.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Possessing deep expertise in evaluating, negotiating, and managing contracts across diverse industries, I excel at identifying and mitigating commercial risks, driving margin enhancement initiatives, and ensuring strict compliance with contractual obligations.
            </p>
            <p className="text-lg leading-relaxed">
              With strong negotiation and problem-solving abilities, I consistently deliver value and achieve optimal outcomes for stakeholders. My effective communication skills and collaborative approach make me a valuable team player, committed to driving project success and surpassing organizational goals.
            </p>
          </div>
        </section>
        
        <KeyAchievements />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      
      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Abdul Ahad. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Procurement and Contract Specialist | Riyadh, Saudi Arabia
          </p>
        </div>
      </footer>
    </div>;
};

export default Index;
