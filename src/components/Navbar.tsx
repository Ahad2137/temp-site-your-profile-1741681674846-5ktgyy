import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Experience',
    href: '#experience'
  },
  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Education',
    href: '#education'
  },
  {
    name: 'Contact',
    href: '#contact'
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'py-2 glass shadow-sm' : 'py-4 bg-transparent')}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-foreground font-bold text-xl relative group" onClick={e => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }}>
          <span>Abdul Ahad</span>
          <span className="text-primary">.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground/80 hover:text-foreground text-sm font-medium relative group transition-colors" onClick={e => {
          e.preventDefault();
          scrollToSection(item.href);
        }}>
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>)}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <nav className="md:hidden glass absolute top-full left-0 right-0 py-4 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground/80 hover:text-foreground font-medium py-2 border-b border-muted last:border-0" onClick={e => {
          e.preventDefault();
          scrollToSection(item.href);
        }}>
                {item.name}
              </a>)}
          </div>
        </nav>}
    </header>;
};

export default Navbar;
