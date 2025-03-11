
import { useState } from 'react';
import Section from './Section';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Redesign',
    description: 'Complete redesign of a major e-commerce platform focusing on improving user experience and conversion rates.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['UX Design', 'UI Design', 'Design Systems'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    id: 2,
    title: 'Banking App',
    description: 'Modern banking application with focus on security, accessibility, and ease of use.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['Mobile Design', 'Fintech', 'Prototyping'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    id: 3,
    title: 'Health Tracker',
    description: 'Fitness and health tracking application with personalized recommendations and progress visualization.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['UI Design', 'Data Visualization', 'User Research'],
    links: {
      live: '#',
      github: '#'
    }
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group rounded-xl overflow-hidden border bg-card relative animate-on-scroll"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <div 
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-3 mt-4">
          <a 
            href={project.links.live} 
            className="text-sm flex items-center text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={16} className="mr-1" />
            Live Demo
            <ArrowUpRight size={14} className="ml-1" />
          </a>
          <a 
            href={project.links.github} 
            className="text-sm flex items-center text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} className="mr-1" />
            Code
            <ArrowUpRight size={14} className="ml-1" />
          </a>
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute inset-0 border-2 border-primary rounded-xl pointer-events-none transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
