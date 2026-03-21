import type { ReactNode, CSSProperties, ElementType } from 'react';
import { useReveal } from '../../hooks/useReveal';

type Direction = 'left' | 'right' | 'up' | 'down' | 'zoom';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  threshold?: number;
  as?: ElementType;
  className?: string;
}

const hidden: Record<Direction, CSSProperties> = {
  left:  { opacity: 0, transform: 'translateX(-60px)' },
  right: { opacity: 0, transform: 'translateX(60px)' },
  up:    { opacity: 0, transform: 'translateY(50px)' },
  down:  { opacity: 0, transform: 'translateY(-50px)' },
  zoom:  { opacity: 0, transform: 'scale(0.85)' },
};

const shown: CSSProperties = {
  opacity: 1,
  transform: 'none',
};

const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  as: Tag = 'div',
  className = '',
}: RevealProps) => {
  const { ref, visible } = useReveal(threshold, '0px 0px -40px 0px');

  // On mobile (visible starts true immediately via useReveal),
  // skip transition entirely so there's zero delay
  const isMobileNow = typeof window !== 'undefined' && window.innerWidth < 768;

  const style: CSSProperties = isMobileNow
    ? {} // no styles at all on mobile — render instantly
    : {
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms,
                     transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        ...(visible ? shown : hidden[direction]),
      };

  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
};

export default Reveal;
