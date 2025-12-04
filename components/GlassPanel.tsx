import { ReactNode } from 'react';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({ children, className = '' }: GlassPanelProps) {
  return (
    <div className={`glass p-8 min-h-[500px] overflow-y-auto ${className}`}>
      {children}
    </div>
  );
}

