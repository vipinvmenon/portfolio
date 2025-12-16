import { HiCode, HiSparkles, HiLightningBolt, HiTrendingUp, HiCollection } from 'react-icons/hi';
import { getPageIcon } from '@/utils/navigation';
import CircularText from '@/components/CircularText';
import Link from 'next/link';

export default function Home() {
  const PageIcon = getPageIcon('/');
  
  const stats = [
    { label: 'Years Experience', value: '3+', icon: HiTrendingUp },
    { label: 'Projects Built', value: '10+', icon: HiCode },
    { label: 'Technologies', value: '10+', icon: HiSparkles },
  ];

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS', 'GraphQL', 'Jest'
  ];

  const focusAreas = [
    { label: 'Frontend Architecture', icon: HiCode },
    { label: 'Design Systems', icon: HiCollection },
    { label: 'AI-Powered Interfaces', icon: HiSparkles },
    { label: 'Performance Optimization', icon: HiLightningBolt },
  ];
  
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Hero Section */}
      <div className="flex flex-col items-center mb-3 sm:mb-4">
        <div className="relative mb-2 sm:mb-3 scale-50 sm:scale-75 lg:scale-75">
          <CircularText
            text=" UI ENGINEER * PRODUCT DEVELOPER *"
            onHover="speedUp"
            spinDuration={20}
          />
        </div>
        
        <div className="text-center space-y-1 sm:space-y-2 px-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Crafting <span className="text-accent">Digital Experiences</span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            I transform complex ideas into clean, elegant, and scalable UI solutions. 
            Specializing in modern frontend architecture, design systems, and AI-powered interfaces.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="glass-card p-2 sm:p-3 flex flex-col items-center text-center">
              <Icon className="text-accent mb-1" size={16} />
              <div className="text-xl sm:text-2xl font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-gray-400 text-[10px] sm:text-[10px]">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Tech Stack & Focus Areas */}
      <div className="glass-card p-2 sm:p-3 md:p-4 flex flex-col flex-1 min-h-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 h-full">
          {/* Tech Stack */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <HiLightningBolt className="text-accent" size={14} />
              <h2 className="font-semibold text-white text-xs">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 flex-1 content-start">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-accent/15 text-accent-light text-[10px] sm:text-xs font-medium border border-accent/30 hover:bg-accent/25 hover:border-accent/40 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-2 sm:mt-3 text-accent text-[10px] sm:text-xs hover:text-accent-light transition-smooth inline-flex items-center gap-1"
            >
              Learn more →
            </Link>
          </div>

          {/* Focus Areas */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <HiSparkles className="text-accent" size={14} />
              <h2 className="font-semibold text-white text-xs">Focus Areas</h2>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div key={index} className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-white/5">
                    <Icon className="text-accent" size={12} />
                    <span className="text-white text-[10px] sm:text-xs">{area.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  