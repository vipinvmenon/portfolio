import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Weather App',
    description: 'A weather application that shows current weather and forecasts for any location.',
    image: '/projects/weather.jpg',
    tags: ['React', 'API', 'CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Pharmacy API',
    description: 'RESTful API for pharmacy management system with inventory tracking.',
    image: '/projects/pharmacy-api.jpg',
    tags: ['PHP', 'MySQL', 'REST'],
    github: 'https://github.com',
  },
  {
    title: 'Pharmacy Android App',
    description: 'Mobile application for pharmacy services and prescription management.',
    image: '/projects/pharmacy-app.jpg',
    tags: ['React Native', 'Android'],
    github: 'https://github.com',
    demo: 'https://play.google.com',
  },
  {
    title: 'Trivia Web App',
    description: 'Interactive trivia game with multiple categories and difficulty levels.',
    image: '/projects/trivia.jpg',
    tags: ['Vue', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Star Fighter Game',
    description: 'Space shooter game built with vanilla JavaScript and HTML5 Canvas.',
    image: '/projects/game.jpg',
    tags: ['JavaScript', 'Canvas', 'Game'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Task Manager',
    description: 'Full-stack task management application with team collaboration features.',
    image: '/projects/tasks.jpg',
    tags: ['Vue', 'Laravel', 'PostgreSQL'],
    github: 'https://github.com',
  },
];

export default function Portfolio() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-white">Portfolio</h1>

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
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth"
                  >
                    <FaExternalLinkAlt size={18} />
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

