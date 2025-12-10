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
    <div className="mb-5">
      <h3 className="text-sm font-semibold text-accent mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-accent/50 transition-smooth"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-white">Resume</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Work Experience */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">Work Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-700" />
            
            {/* Timeline items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#0f0f0f] border-2 border-[#6366f1]" />
                  
                  <div className="text-sm text-accent mb-1">{exp.period}</div>
                  <h3 className="font-semibold text-white">{exp.title}</h3>
                  <div className="text-sm text-gray-400 mb-3">{exp.company} • {exp.location}</div>
                  
                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-0.5 rounded bg-accent/20 text-accent-light">
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
          <h2 className="text-xl font-bold text-white mb-6">Skills</h2>
          <div className="glass-card p-5">
            {Object.entries(skills).map(([category, skillList]) => (
              <SkillCategory key={category} title={category} skills={skillList} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

