
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section = ({ id, title, children, className, titleClassName }: SectionProps) => {
  return (
    <section id={id} className={cn('py-20 px-4 md:px-8 max-w-7xl mx-auto', className)}>
      <div className="animate-on-scroll">
        <h2 className={cn('text-3xl md:text-4xl font-bold mb-10 text-gradient', titleClassName)}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
