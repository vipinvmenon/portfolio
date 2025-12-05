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
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Groq API', 'Hugging Face'],
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
    <div className="space-y-8"
      {/* Header */}
      <h1 className="text-3xl font-bold text-white">Projects</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="glass-card overflow-hidden group hover-glow transition-smooth"
          >
            {/* Project Image */}
            <div className="h-40 bg-gradient-to-br from-accent/30 to-purple-600/30 flex items-center justify-center relative overflow-hidden">
              <span className="text-4xl font-bold text-white/20">
                {project.title.charAt(0)}
              </span>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

