import { getPageIcon } from '@/utils/navigation';

const experiences = [
  {
    period: 'Dec 2024 - Present',
    company: 'Prevalent AI',
    location: 'Kochi, Kerala, India',
    title: 'UI Engineer',
    highlights: [
      'Developed frontend interface for an AI-powered exposure management platform identifying and prioritizing cyber risks',
      'Implemented interactive charts, optimized caching, built modular GraphQL-driven components',
      'Built interfaces for entity resolution and data consistency validation across Security Data Fabric',
      'Created anomaly detection dashboards reducing manual QA efforts by 40%',
      'Collaborated with backend and product teams on evolving API schemas and AI-driven workflows',
    ],
    stack: ['React.js', 'TypeScript', 'Tailwind', 'Radix UI', 'Zustand', 'GraphQL', 'Apache ECharts', 'Vitest'],
  },
  {
    period: 'Jun 2022 - Dec 2024',
    company: 'Prevalent AI',
    location: 'Kochi, Kerala, India',
    title: 'Junior UI Engineer',
    highlights: [
      'Contributed to a security analytics suite covering entity inventory, asset management, vulnerability analytics',
      'Developed dynamic data visualizations, responsive layouts, and accessibility improvements',
      'Designed and implemented configuration tooling for big-data pipelines',
      'Streamlined workflows reducing manual intervention by 50%',
      'Built reusable UI utilities, improved app performance via refactoring and code splitting',
    ],
    stack: ['React.js', 'TypeScript', 'Bootstrap', 'Zustand', 'HighCharts', 'Jest', 'RTL'],
  },
];

const skills = {
  'Frameworks & Libraries': ['React.js', 'Next.js', 'Vue.js', 'Express.js', 'Node.js'],
  'Languages': ['JavaScript', 'TypeScript', 'CSS3', 'HTML5'],
  'Styling': ['TailwindCSS', 'Bootstrap', 'SCSS', 'SASS', 'RadixUI', 'MaterialUI', 'ChakraUI'],
  'Testing & State': ['Vitest', 'Jest', 'React Testing Library', 'Zustand'],
  'Data Visualization': ['Apache ECharts', 'HighCharts'],
  'DevOps & Tools': ['Git', 'GitHub', 'Jenkins', 'Vercel', 'Netlify', 'Docker', 'Postman', 'Jira'],
};

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="mb-3 sm:mb-4 last:mb-0">
      <h3 className="text-[10px] sm:text-xs font-semibold text-accent mb-1.5 sm:mb-2">{title}</h3>
      <div className="flex flex-wrap gap-1 sm:gap-1.5">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  const PageIcon = getPageIcon('/resume');
  
  return (
    <div className="space-y-4 sm:space-y-6 pb-8">
      {/* Header */}
      <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
        {PageIcon && <PageIcon className="text-accent" size={24} />}
        Resume
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Work Experience */}
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Work Experience</h2>
          
          <div className="relative pl-4 sm:pl-5">
            {/* Timeline line */}
            <div className="absolute left-[5px] top-[6px] bottom-0 w-[2px] bg-gray-700" />
            
            {/* Timeline items */}
            <div className="space-y-4 sm:space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-4 sm:-left-5 top-[5px] w-[12px] h-[12px] rounded-full bg-[#1e1e1e] border-2 border-accent" />
                  
                  <div className="text-[10px] sm:text-xs text-accent mb-0.5">{exp.period}</div>
                  <h3 className="font-semibold text-white text-xs sm:text-sm">{exp.title}</h3>
                  <div className="text-[10px] sm:text-xs text-gray-400 mb-2">{exp.company} • {exp.location}</div>
                  
                  {/* Highlights */}
                  <ul className="space-y-1 sm:space-y-1.5 mb-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-400 text-[10px] sm:text-xs flex gap-1.5 leading-relaxed">
                        <span className="text-accent">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-accent/20 text-accent-light">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Skills</h2>
          <div className="glass-card p-3 sm:p-4 md:p-5">
            {Object.entries(skills).map(([category, skillList]) => (
              <SkillCategory key={category} title={category} skills={skillList} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

