// File path: src/components/common/Card.tsx

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card = ({
  children,
  className = '',
  hover = true,
  glow = false,
  padding = 'md',
}: CardProps) => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
        relative bg-white dark:bg-[#1c1f27]
        border border-gray-200 dark:border-[#282e39]
        rounded-2xl shadow-sm
        ${paddings[padding]}
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30' : ''}
        ${glow ? 'before:absolute before:-inset-1 before:bg-gradient-to-r before:from-primary/20 before:to-cyan-400/20 before:rounded-2xl before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
