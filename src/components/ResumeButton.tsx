
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ResumeButtonProps {
  url: string;
  className?: string;
}

const ResumeButton = ({ url, className }: ResumeButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a 
      href={url}
      download
      className={cn(
        'group relative inline-flex items-center justify-center px-6 py-3',
        'bg-primary text-primary-foreground rounded-full',
        'overflow-hidden transition-all duration-300 ease-out',
        'hover:bg-primary/90 active:scale-95',
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="absolute -inset-full -z-10 rounded-full bg-gradient-to-br from-primary/60 to-primary opacity-0 transition duration-300 group-hover:opacity-100 blur-xl" />
      <span className="relative flex items-center gap-2">
        Download Resume
        <Download 
          className={cn(
            'transition-transform duration-300 ease-out',
            isHovering ? 'translate-y-[2px]' : ''
          )} 
          size={18} 
        />
      </span>
    </a>
  );
};

export default ResumeButton;
