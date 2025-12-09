import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiCode, HiBriefcase, HiGlobe, HiLocationMarker } from 'react-icons/hi';

export default function About() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-white">
        About <span className="text-accent">Me</span>
      </h1>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bio Section */}
        <div className="lg:col-span-2 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            UI Engineer with <span className="text-accent font-semibold">3+ years</span> of experience specializing in{' '}
            <span className="text-white font-medium">React</span>,{' '}
            <span className="text-white font-medium">Next.js</span>, and{' '}
            <span className="text-white font-medium">TypeScript</span>. I build fast, scalable, and 
            aesthetically clean UIs with a focus on developer experience, design systems, and product-first thinking. 
            Passionate about bridging AI, data, and frontend technologies to deliver impactful digital experiences.
          </p>

          {/* What I Do Section */}
          <h2 className="text-xl font-bold text-white mt-8">
            What <span className="text-accent">I Do</span>
              </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Current Role */}
            <div className="glass-card p-4">
              <div className="flex items-center gap-3 mb-2">
                <HiBriefcase className="text-accent" size={24} />
                <h3 className="font-semibold text-white">Current Role</h3>
              </div>
              <p className="text-gray-400 text-sm">
                UI Engineer at <span className="text-white font-medium">Prevalent AI</span>, Kochi. 
                Building frontend interfaces for AI-powered exposure management and security data platforms.
              </p>
            </div>

            {/* Programming */}
            <div className="glass-card p-4">
              <div className="flex items-center gap-3 mb-2">
                <HiCode className="text-accent" size={24} />
                <h3 className="font-semibold text-white">Programming</h3>
              </div>
              <p className="text-gray-400 text-sm">
                I specialize in React.js, Next.js, Vue.js, and TypeScript for frontend development. 
                For styling, I use TailwindCSS, SCSS, RadixUI, and ChakraUI. I also work with 
                Node.js, Express.js, and GraphQL for backend services.
              </p>
            </div>

            {/* Languages */}
            <div className="glass-card p-4">
              <div className="flex items-center gap-3 mb-2">
                <HiGlobe className="text-accent" size={24} />
                <h3 className="font-semibold text-white">Languages</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Fluent in <span className="text-white">English</span>, <span className="text-white">Malayalam</span>, 
                and <span className="text-white">Tamil</span>.
            </p>
          </div>

          {/* Where to Find Me */}
            <div className="glass-card p-4">
            <div className="flex items-center gap-3 mb-2">
              <HiLocationMarker className="text-accent" size={24} />
              <h3 className="font-semibold text-white">Where to find me</h3>
            </div>
            <div className="flex gap-3 mt-2">
                <a href="https://github.com/vipinvmenon" target="_blank" rel="noopener noreferrer" 
                 className="text-accent hover:text-accent-light transition-smooth flex items-center gap-1 text-sm">
                <FaGithub /> GitHub
              </a>
                <a href="https://linkedin.com/in/vipin-menon-v" target="_blank" rel="noopener noreferrer"
                 className="text-accent hover:text-accent-light transition-smooth flex items-center gap-1 text-sm">
                <FaLinkedin /> LinkedIn
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info Sidebar */}
        <div className="space-y-4">
          <div className="glass-card p-4">
            <p className="text-accent text-sm">DOB</p>
            <p className="text-white">24/08/1999</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-accent text-sm">Residence</p>
            <p className="text-white">Kochi, India</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-accent text-sm">e-mail</p>
            <p className="text-white text-sm">vipinmenon006@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

