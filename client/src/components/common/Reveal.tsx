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
  left:  { opacity: 0, transform: 'translateX(-80px) scale(0.97)' },
  right: { opacity: 0, transform: 'translateX(80px) scale(0.97)' },
  up:    { opacity: 0, transform: 'translateY(70px) scale(0.97)' },
  down:  { opacity: 0, transform: 'translateY(-70px) scale(0.97)' },
  zoom:  { opacity: 0, transform: 'scale(0.72) translateY(30px)' },
};

const shown: CSSProperties = {
  opacity: 1,
  transform: 'translateX(0) translateY(0) scale(1)',
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
