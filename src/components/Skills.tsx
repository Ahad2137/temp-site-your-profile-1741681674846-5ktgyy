
import { useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Section from './Section';
import { Brain, Code, Lightbulb, PenTool, Users, FileText, Shield, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

// Skills data
const skillsCategories = [
  {
    name: 'Contract Management',
    icon: <FileText size={24} />,
    skills: [
      { name: 'EPC Contracts', level: 95 },
      { name: 'Contract Negotiation', level: 90 },
      { name: 'End-to-End Lifecycle Management', level: 90 },
      { name: 'Contract Compliance', level: 85 },
      { name: 'FIDIC Knowledge', level: 80 },
    ],
    color: '#4C6FFF',
  },
  {
    name: 'Procurement',
    icon: <TrendingUp size={24} />,
    skills: [
      { name: 'Vendor Management', level: 90 },
      { name: 'Supplier Relationship', level: 85 },
      { name: 'Cost Optimization', level: 85 },
      { name: 'Supply Chain Management', level: 80 },
      { name: 'Procurement Strategy', level: 85 },
    ],
    color: '#00CFD8',
  },
  {
    name: 'Risk Management',
    icon: <Shield size={24} />,
    skills: [
      { name: 'Risk Assessment', level: 85 },
      { name: 'Mitigation Strategies', level: 80 },
      { name: 'Claims Management', level: 90 },
      { name: 'Dispute Resolution', level: 85 },
      { name: 'Compliance Monitoring', level: 90 },
    ],
    color: '#8B5CF6',
  },
  {
    name: 'Soft Skills',
    icon: <Users size={24} />,
    skills: [
      { name: 'Negotiation', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Stakeholder Management', level: 85 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Project Management', level: 85 },
    ],
    color: '#F59E0B',
  },
];

const SkillBar = ({ name, level, color }: { name: string; level: number; color: string }) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (barRef.current) {
            barRef.current.style.width = `${level}%`;
            barRef.current.style.opacity = '1';
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000 ease-out opacity-0"
          style={{ width: '0%', backgroundColor: color }}
        />
      </div>
    </div>
  );
};

const SkillsChart = ({ data }: { data: { name: string; level: number }[]; }) => {
  const chartData = data.map(skill => ({
    name: skill.name,
    value: skill.level
  }));
  
  const COLORS = ['#4C6FFF', '#00CFD8', '#8B5CF6', '#F59E0B', '#10B981'];
  
  return (
    <div className="h-64 animate-on-scroll">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            animationBegin={0}
            animationDuration={1500}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
                stroke="transparent"
              />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Proficiency']}
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
              border: 'none',
              padding: '0.5rem 0.75rem',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <Section id="skills" title="My Skills">
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {skillsCategories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setActiveTab(index)}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300',
              activeTab === index 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
            )}
          >
            {category.icon}
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="space-y-2 animate-on-scroll">
            {skillsCategories[activeTab].skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skillsCategories[activeTab].color}
              />
            ))}
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <SkillsChart data={skillsCategories[activeTab].skills} />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
