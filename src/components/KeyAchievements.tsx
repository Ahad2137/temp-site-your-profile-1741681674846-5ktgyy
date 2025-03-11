
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Section from './Section';

const KeyAchievements = () => {
  const achievements = [
    "Successfully resolved contractor claims, reducing potential project delays by 10%.",
    "Improved contract administration processes, minimizing errors and enhancing efficiency by 15%.",
    "Delivered cost savings by renegotiating vendor agreements and optimizing supplier performance monitoring.",
    "Played a key role in managing contracts for renewable energy and industrial projects, ensuring on-time and budget-compliant delivery."
  ];

  return (
    <Section id="achievements" title="Key Achievements">
      <div className="grid grid-cols-1 gap-6 animate-on-scroll">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 p-5 rounded-xl border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-base md:text-lg">{achievement}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default KeyAchievements;
