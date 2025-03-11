
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import Section from './Section';
import { cn } from '@/lib/utils';

// Education data
const education = [
  {
    id: 1,
    degree: 'Master of Business Management',
    field: 'Supply Chain & Logistics',
    institution: 'Institute of Business Management',
    location: 'Karachi, Pakistan',
    dates: 'Jan 2020 - Dec 2023',
    description: 'Advanced education in supply chain management, logistics, and business operations with focus on procurement strategies and contract management principles.',
    achievements: ['Research focus on procurement optimization', 'Supply chain analytics specialization', 'Graduate with distinction']
  },
  {
    id: 2,
    degree: 'Bachelor of Engineering',
    field: 'Industrial Engineering',
    institution: 'Dawood University of Engineering & Technology',
    location: 'Karachi, Pakistan',
    dates: 'Jan 2013 - Dec 2016',
    description: 'Comprehensive education in industrial engineering principles, operations management, and process optimization methodologies.',
    achievements: ['Engineering excellence award', 'Industrial process optimization project lead', 'Technical publication contributor']
  },
  {
    id: 3,
    degree: 'Professional Accreditation Certificate',
    institution: 'Saudi Council of Engineers',
    location: 'Saudi Arabia',
    dates: 'May 2024',
    description: 'Professional engineering accreditation recognized by the Saudi Council of Engineers, validating expertise in engineering practices within Saudi Arabia.',
    achievements: ['Certified engineering professional', 'Recognized technical qualification', 'Professional standing in Saudi engineering community']
  }
];

const EducationCard = ({ 
  edu, 
  isLast = false 
}: { 
  edu: typeof education[0]; 
  isLast?: boolean;
}) => {
  return (
    <div className="relative animate-on-scroll">
      {/* Timeline */}
      {!isLast && (
        <div className="absolute top-8 bottom-0 left-4 md:left-5 w-px bg-border z-0" />
      )}
      
      <div className="relative z-10 flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center">
            <GraduationCap size={20} />
          </div>
        </div>
        
        <div className="glass rounded-xl p-6 shadow-sm flex-1 hover:shadow-md transition-shadow">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              {edu.field && <p className="text-primary font-medium">{edu.field}</p>}
              <p className="text-muted-foreground flex items-center gap-1 mt-1">
                <Calendar size={14} className="inline-block" />
                {edu.dates}
              </p>
            </div>
            <div className="text-sm flex items-center gap-1 bg-secondary/50 px-3 py-1 rounded-full">
              <MapPin size={14} className="inline-block text-primary" />
              {edu.location}
            </div>
          </div>
          
          <div>
            <div className="mb-4 font-medium text-lg">
              {edu.institution}
            </div>
            <p className="text-muted-foreground mb-4">
              {edu.description}
            </p>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-primary">Achievements</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-foreground/80">
                {edu.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <Section id="education" title="Education">
      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <EducationCard 
            key={edu.id} 
            edu={edu} 
            isLast={index === education.length - 1} 
          />
        ))}
      </div>
    </Section>
  );
};

export default Education;
