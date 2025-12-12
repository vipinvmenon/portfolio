import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Resume Analyzer',
    description: 'AI-powered resume analysis tool comparing CVs against job descriptions. Provides ATS score, keyword optimizations, and actionable improvements.',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'OpenRouter API'],
    github: 'https://github.com/vipinvmenon',
  },
  {
    title: 'Prompter',
    description: 'Converts rough ideas into refined AI prompts using free Groq/Hugging Face models. Helps users craft better prompts for AI interactions.',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Hugging Face'],
    github: 'https://github.com/vipinvmenon',
  },
  {
    title: 'Vector Magic',
    description: 'Transform text descriptions into beautiful SVG graphics using AI. Generate scalable vector illustrations from natural language.',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Groq API'],
    github: 'https://github.com/vipinvmenon',
  },
  {
    title: 'Mapty',
    description: 'VanillaJS workout/activity tracker with integrated map UI and local storage. Track running and cycling workouts with geolocation.',
    tags: ['JavaScript', 'Leaflet', 'Local Storage', 'Geolocation API'],
    github: 'https://github.com/vipinvmenon',
  },
];

export default function Projects() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <h1 className="text-2xl font-bold text-white">Projects</h1>

      {/* Projects Grid - 2x2 layout */}
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="glass-card overflow-hidden group hover-glow transition-smooth"
          >
            {/* Project Image */}
            <div className="h-38 bg-gradient-to-br from-accent/30 to-purple-600/30 flex items-center justify-center relative overflow-hidden">
              <span className="text-3xl font-bold text-white/20">
                {project.title.charAt(0)}
              </span>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-smooth"
                  >
                    <FaGithub size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-3">
              <h3 className="font-semibold text-white text-sm mb-1">{project.title}</h3>
              <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/20 text-accent-light"
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
        <a
          href="https://github.com/vipinvmenon"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/50 text-accent-light hover:bg-accent/20 transition-smooth text-sm"
        >
          <FaGithub size={16} />
          View More on GitHub
        </a>
      </div>
    </div>
  );
}

