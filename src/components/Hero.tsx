
import { ArrowDown } from 'lucide-react';
import ProfileImage from './ProfileImage';
import ResumeButton from './ResumeButton';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Delay to make sure the entrance animation is visible
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-background" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      <div 
        className={cn(
          "container mx-auto px-4 py-20 flex flex-col items-center text-center transition-opacity duration-1000",
          visible ? "opacity-100" : "opacity-0"
        )}
      >
        <ProfileImage 
          src="/lovable-uploads/f1b8c040-16e4-4ab4-9f17-01c80070bc43.png" 
          alt="Abdul Ahad"
          className="mb-8"
        />
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-balance">
          <span className="block">Abdul Ahad</span>
          <span className="text-gradient mt-2 block">Procurement and Contract Specialist</span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          A dedicated and results-driven professional with over seven years of experience in Procurement, 
          Commercial, and Contract Management, based in Riyadh, Saudi Arabia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <ResumeButton url="#" />
          
          <a 
            href="#about"
            className="group inline-flex items-center justify-center px-6 py-3 border border-primary/30 rounded-full text-foreground hover:bg-primary/5 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn more
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary/70" />
      </div>
    </section>
  );
};

// Import the cn function
import { cn } from '@/lib/utils';

export default Hero;
