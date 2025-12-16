import { FaGithub } from 'react-icons/fa';
import GlareHover from '@/components/GlareHover';
import Image from 'next/image';
import { getPageIcon } from '@/utils/navigation';

const projects = [
  {
    title: 'AI Resume Analyzer',
    description: 'AI-powered resume analysis tool comparing CVs against job descriptions. Provides ATS score, keyword optimizations, and actionable improvements.',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'OpenRouter API'],
    github: 'https://github.com/vipinvmenon/ai-resume-analyzer',
    image: '/projects/ai-resume-analyzer.png',
  },
  {
    title: 'Prompter',
    description: 'Converts rough ideas into refined AI prompts using free Groq/Hugging Face models. Helps users craft better prompts for AI interactions.',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Hugging Face'],
    github: 'https://github.com/vipinvmenon/prompter',
    image: '/projects/prompter.png',
  },
  {
    title: 'Vector Magic',
    description: 'Transform text descriptions into beautiful SVG graphics using AI. Generate scalable vector illustrations from natural language.',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Groq API'],
    github: 'https://github.com/vipinvmenon/vector-magic',
    image: '/projects/vector-magic.png',
  },
  {
    title: 'Mapty',
    description: 'VanillaJS workout/activity tracker with integrated map UI and local storage. Track running and cycling workouts with geolocation.',
    tags: ['JavaScript', 'Leaflet', 'Local Storage', 'Geolocation API'],
    github: 'https://github.com/vipinvmenon/Mapty',
    image: '/projects/mapty.png',
  },
];

export default function Projects() {
  const PageIcon = getPageIcon('/projects');
  
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Header */}
      <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
        {PageIcon && <PageIcon className="text-accent" size={24} />}
        Projects
      </h1>

      {/* Projects Grid - Responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="glass-card overflow-hidden group hover-glow transition-smooth"
          >
            {/* Project Image */}
            <div className="h-32 sm:h-38 bg-gradient-to-br from-accent/30 to-purple-600/30 flex items-center justify-center relative overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <span className="text-2xl sm:text-3xl font-bold text-white/20">
                  {project.title.charAt(0)}
                </span>
              )}
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-4 z-10">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/30 border border-white/30 hover:border-white/50 transition-smooth shadow-lg hover:shadow-xl hover:scale-110 touch-manipulation"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub size={18} className="text-white" />
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-2.5 sm:p-3">
              <h3 className="font-semibold text-white text-xs sm:text-sm mb-1">{project.title}</h3>
              <p className="text-gray-400 text-[10px] sm:text-xs mb-2 line-clamp-2">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full bg-accent/20 text-accent-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="flex justify-center pt-2">
        <GlareHover
          width="auto"
          height="auto"
          background="transparent"
          borderRadius="9999px"
          borderColor="transparent"
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <a
            href="https://github.com/vipinvmenon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-500 rounded-full text-white text-xs sm:text-sm hover:bg-white/10 active:bg-white/10 transition-smooth touch-manipulation"
          >
            <FaGithub size={14} />
            View More on GitHub
          </a>
        </GlareHover>
      </div>
    </div>
  );
}

