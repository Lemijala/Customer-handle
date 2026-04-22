import type { ReactNode, CSSProperties, ElementType } from 'react';
import { useReveal } from '../../hooks/useReveal';

type Direction = 'left' | 'right' | 'up' | 'down' | 'zoom';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;    // ms
  duration?: number; // ms
  threshold?: number;
  as?: ElementType;  // render as any HTML tag
  className?: string;
}

const hidden: Record<Direction, CSSProperties> = {
  left:  { opacity: 0, transform: 'translateX(-60px) scale(0.95)', filter: 'blur(4px)' },
  right: { opacity: 0, transform: 'translateX(60px) scale(0.95)', filter: 'blur(4px)' },
  up:    { opacity: 0, transform: 'translateY(50px) scale(0.95)', filter: 'blur(4px)' },
  down:  { opacity: 0, transform: 'translateY(-50px) scale(0.95)', filter: 'blur(4px)' },
  zoom:  { opacity: 0, transform: 'scale(0.8)', filter: 'blur(8px)' },
};

const shown: CSSProperties = {
  opacity: 1,
  transform: 'translateX(0) translateY(0) scale(1)',
  filter: 'blur(0px)',
};

const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 1400,
  threshold = 0.1,
  as: Tag = 'div',
  className = '',
}: RevealProps) => {
  const { ref, visible } = useReveal(threshold, '0px 0px -50px 0px');

  const style: CSSProperties = {
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms,
                 transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms,
                 filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    ...(visible ? shown : hidden[direction]),
  };

  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
};

export default Reveal;
