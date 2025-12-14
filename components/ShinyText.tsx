interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }: ShinyTextProps) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(181, 181, 181, 0.64) 35%, rgba(255, 255, 255, 1) 50%, rgba(181, 181, 181, 0.64) 65%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        animationDuration: animationDuration,
        animationName: disabled ? 'none' : 'shine',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;

