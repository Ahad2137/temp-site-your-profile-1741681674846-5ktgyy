import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import Section from './Section';
import { cn } from '@/lib/utils';

const socialLinks = [
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/abdul-ahad/' },
];

const ContactItem = ({ 
  icon, 
  label, 
  value, 
  href 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  href?: string;
}) => {
  return (
    <div className="flex items-start gap-3 group">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        {href ? (
          <a 
            href={href} 
            className="font-medium hover:text-primary transition-colors group-hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="font-medium">{value}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6 mb-8">
            <ContactItem 
              icon={<Mail />} 
              label="Email" 
              value="mailtoabdulahad@gmail.com" 
              href="mailto:mailtoabdulahad@gmail.com" 
            />
            <ContactItem 
              icon={<Phone />} 
              label="Phone" 
              value="+966538035492" 
              href="tel:+966538035492" 
            />
            <ContactItem 
              icon={<MapPin />} 
              label="Location" 
              value="Riyadh, Saudi Arabia" 
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect on Social</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          
          {isSubmitted ? (
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-center animate-fade-in">
              <p className="font-medium text-primary">
                Thank you for your message! I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-3 px-6 rounded-lg bg-primary text-white font-medium transition-all",
                  "hover:bg-primary/90 focus:ring-4 focus:ring-primary/20 focus:outline-none",
                  "relative overflow-hidden",
                  isSubmitting && "cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <span className="opacity-0">Send Message</span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
