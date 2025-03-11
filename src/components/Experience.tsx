
import { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import Section from './Section';

// Work experience data
const experiences = [
  {
    id: 1,
    title: 'Lead Contract Engineer',
    company: 'Powerchina Huadong Engineering Corporation Limited',
    location: 'Riyadh, Saudi Arabia',
    dates: 'Dec 2023 - Present',
    description: 'Currently spearheading Subcontracts Management for the 1254MW SAAD 2 Solar Power Project. Managing end-to-end contract lifecycle, including EPC Contract and Contract Negotiation, with focus on commercial strategy development. Negotiating contracts with subcontractors and suppliers while monitoring contract compliance and resolving disputes.',
    skills: ['Contract Negotiation', 'EPC Contracts', 'Lifecycle Management', 'Commercial Strategy', 'Compliance Monitoring']
  },
  {
    id: 2,
    title: 'Procurement and Contracts Specialist',
    company: 'Arcelik Global',
    location: 'Karachi, Pakistan',
    dates: 'Dec 2022 - Dec 2023',
    description: 'Administered procurement contracts ensuring alignment with project deliverables and compliance with regulatory standards. Facilitated contract performance reviews, identified gaps, and implemented corrective actions to optimize supplier performance. Streamlined vendor qualification processes, improving selection and performance consistency across projects.',
    skills: ['Procurement', 'Vendor Management', 'Contract Administration', 'Performance Reviews', 'Regulatory Compliance']
  },
  {
    id: 3,
    title: 'Sr. Officer Procurement',
    company: 'Midas Safety',
    location: 'Karachi, Pakistan',
    dates: 'Oct 2021 - Dec 2022',
    description: 'Drafted and managed supplier agreements, ensuring timely delivery and adherence to contractual commitments. Supported project teams in contract execution and provided guidance on compliance and performance tracking.',
    skills: ['Supplier Agreements', 'Contract Execution', 'Performance Tracking', 'Compliance Guidance', 'Project Support']
  },
  {
    id: 4,
    title: 'Management Trainee Officer',
    company: 'AGI Denim',
    location: 'Karachi, Pakistan',
    dates: 'Feb 2018 - Oct 2021',
    description: 'Negotiated supplier agreements to ensure cost-effective procurement while maintaining quality and compliance standards. Collaborated with legal teams to address contract disputes, achieving timely and favorable resolutions.',
    skills: ['Supplier Negotiations', 'Cost Management', 'Quality Assurance', 'Contract Disputes', 'Legal Collaboration']
  }
];

const Experience = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);

  return (
    <Section id="experience" title="Work Experience">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        {/* Timeline Navigation */}
        <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible pb-4 md:pb-0 gap-2">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveId(exp.id)}
              className={cn(
                'text-left p-4 rounded-lg transition-all duration-300 min-w-[200px] md:min-w-0',
                'border group relative',
                activeId === exp.id 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50 hover:bg-accent'
              )}
            >
              <span 
                className={cn(
                  'absolute top-0 left-0 h-full w-1 rounded-l-lg transition-all duration-300',
                  activeId === exp.id ? 'bg-primary' : 'bg-transparent group-hover:bg-primary/30'
                )}
              />
              <h3 className="font-medium text-sm">{exp.company}</h3>
              <p className="text-muted-foreground text-sm flex items-center mt-1">
                <Calendar className="inline mr-1" size={14} />
                {exp.dates}
              </p>
            </button>
          ))}
        </div>

        {/* Experience Details */}
        <div className="animate-on-scroll">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={cn(
                'rounded-xl p-6 border transition-opacity duration-500',
                'border-gradient bg-gradient-to-r from-primary/5 via-transparent to-primary/5',
                activeId === exp.id ? 'block' : 'hidden'
              )}
            >
              <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold flex items-center">
                    <Briefcase className="inline mr-2 text-primary" size={20} />
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {exp.dates}
                </span>
              </div>

              <p className="mb-4 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
