import { HiCode, HiBriefcase, HiGlobe, HiLocationMarker } from 'react-icons/hi';

export default function About() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-white">
        About <span className="text-accent">Me</span>
      </h1>

      {/* Bio Section */}
      <p className="text-gray-300 leading-relaxed">
        UI Engineer with <span className="text-accent font-semibold">3+ years</span> of experience specializing in{' '}
        <span className="text-white font-medium">React</span>,{' '}
        <span className="text-white font-medium">Next.js</span>, and{' '}
        <span className="text-white font-medium">TypeScript</span>. I build fast, scalable, and 
        aesthetically clean UIs with a focus on developer experience, design systems, and product-first thinking. 
        Passionate about bridging AI, data, and frontend technologies to deliver impactful digital experiences.
      </p>

      {/* What I Do Section */}
      <h2 className="text-xl font-bold text-white">
        What <span className="text-accent">I Do</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
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

        {/* Personal Info */}
        <div className="glass-card p-4">
          <div className="flex items-center gap-3 mb-2">
            <HiLocationMarker className="text-accent" size={24} />
            <h3 className="font-semibold text-white">Personal Info</h3>
          </div>
          <div className="space-y-1 text-sm">
            <p><span className="text-accent">DOB:</span> <span className="text-white">24/08/1999</span></p>
            <p><span className="text-accent">Residence:</span> <span className="text-white">Kochi, India</span></p>
            <p><span className="text-accent">e-mail:</span> <span className="text-white">vipinmenon006@gmail.com</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
