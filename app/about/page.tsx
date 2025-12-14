import { HiCode, HiBriefcase, HiGlobe, HiUser } from 'react-icons/hi';

export default function About() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <h1 className="text-2xl font-bold text-white mb-5">
        About <span className="text-accent">Me</span>
      </h1>

      {/* Bio Section */}
      <div className="space-y-3 mb-5">
        <p className="text-gray-300 text-sm leading-relaxed">
          I'm a UI Engineer with <span className="text-accent font-semibold">3+ years</span> of experience crafting high-performance, developer-friendly interfaces using{' '}
          <span className="text-white font-medium">React</span>,{' '}
          <span className="text-white font-medium">Next.js</span>, and{' '}
          <span className="text-white font-medium">TypeScript</span>. My work sits at the intersection of design systems, product thinking, and modern frontend architecture. I love transforming complex ideas into clean, elegant, and scalable UI solutions that feel effortless to use.
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          I'm deeply interested in how AI and data can elevate the way products are built and experienced. Whether it's designing intuitive workflows, building reusable component systems, or optimizing frontend performance, my goal is always the same: <span className="text-accent font-medium italic">create interfaces that are fast, thoughtful, and delightfully human.</span>
        </p>
      </div>

      {/* What I Do Section */}
      <h2 className="text-lg font-bold text-white mb-4">
        What <span className="text-accent">I Do</span>
      </h2>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {/* Current Role */}
        <div className="glass-card p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <HiBriefcase className="text-accent" size={16} />
            <h3 className="font-semibold text-white text-sm">Current Role</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            UI Engineer at <span className="text-white font-medium">Prevalent AI</span>, Kochi. 
            Building frontend interfaces for AI-powered exposure management and security data platforms.
          </p>
        </div>

        {/* Programming */}
        <div className="glass-card p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <HiCode className="text-accent" size={16} />
            <h3 className="font-semibold text-white text-sm">Programming</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            I specialize in React.js, Next.js, Vue.js, and TypeScript for frontend development. 
            For styling, I use TailwindCSS, SCSS, RadixUI, and ChakraUI. I also work with 
            Node.js, Express.js, and GraphQL for backend services.
          </p>
        </div>

        {/* Languages */}
        <div className="glass-card p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <HiGlobe className="text-accent" size={16} />
            <h3 className="font-semibold text-white text-sm">Languages</h3>
          </div>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span className="text-white">English</span>
              <span className="text-gray-500">— Fluent</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span className="text-white">Malayalam</span>
              <span className="text-gray-500">— Native</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span className="text-white">Tamil</span>
              <span className="text-gray-500">— Conversational</span>
            </li>
          </ul>
        </div>

        {/* Personal Info */}
        <div className="glass-card p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <HiUser className="text-accent" size={16} />
            <h3 className="font-semibold text-white text-sm">Personal Info</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">DOB</span>
              <span className="text-white">24/08/1999</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Residence</span>
              <span className="text-white">Kochi, India</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Email</span>
              <span className="text-white">vipinmenon006@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
