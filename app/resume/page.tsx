const experiences = [
  {
    period: 'Nov. 2020 - Today',
    company: 'Tech Corp',
    title: 'UI Engineer / Product Developer',
    description: 'PHP and Python back end developer, Vue front-end for IoT Systems',
  },
  {
    period: 'Sept. 2016 - Oct. 2020',
    company: 'Web Solutions Inc',
    title: 'UI Engineer / Product Developer',
    description: 'PHP back end developer for Information Systems',
  },
  {
    period: 'July 2009 - Jan. 2016',
    company: 'Digital Agency',
    title: 'IT and Web developer',
    description: 'IT support, Web development, basic SEO and CCTV configuration',
  },
  {
    period: 'Feb. 2008 - Feb. 2009',
    company: 'Training Institute',
    title: 'Tutor',
    description: 'Linux administration, Microprocessors programming, Databases, Computer networks',
  },
  {
    period: 'Feb. 2007 - July 2007',
    company: 'IT Solutions Ltd',
    title: 'Tech Support',
    description: 'Installation and configuration of computer networking, Linux Servers, Firewalls',
  },
];

const programmingSkills = [
  { name: 'PHP', level: 95 },
  { name: 'Python', level: 85 },
  { name: 'Java', level: 70 },
];

const webSkills = [
  { name: 'HTML5 / CSS3', level: 95 },
  { name: 'Vue', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'Bootstrap', level: 85 },
  { name: 'jQuery', level: 80 },
];

const databaseSkills = [
  { name: 'MySQL', level: 90 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'MongoDB', level: 60 },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-white">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="progress-bar h-2">
        <div className="progress-fill" style={{ width: `${level}%` }} />
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
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent border-2 border-black" />
                  
                  <div className="text-sm text-gray-500 mb-1">{exp.period}</div>
                  <div className="text-xs text-gray-600 mb-1">{exp.company}</div>
                  <h3 className="font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          {/* Programming Languages */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Programming Languages</h2>
            {programmingSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Web */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Web</h2>
            {webSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Databases */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Databases</h2>
            {databaseSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

