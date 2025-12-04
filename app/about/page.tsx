import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { HiCode, HiFilm, HiDesktopComputer, HiLocationMarker } from 'react-icons/hi';

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
          <p className="text-gray-300 leading-relaxed text-justify">
            Hello there! Welcome to my web site. Yes, this is another boring web site. 
            I made it because I am a vain human who has little life out of computers. 
            This page is about things that I like to do. Because this is a personal web site 
            you may read a lot the word I. No, that doesn&apos;t mean that I am selfish. I really 
            care about humanity and I help my neighbour. Now, if you are bored don&apos;t go on 
            to read the rest of the site, you will be more bored.
          </p>

          {/* What I Do Section */}
          <h2 className="text-xl font-bold text-white mt-8">
            What <span className="text-accent">I Do</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Free Time */}
            <div className="glass-card p-4">
              <div className="flex items-center gap-3 mb-2">
                <HiFilm className="text-accent" size={24} />
                <h3 className="font-semibold text-white">Free Time</h3>
              </div>
              <p className="text-gray-400 text-sm">
                At my free time, besides programming I love watching movies and TV shows, 
                reading books, playing video games and listen to music.
              </p>
            </div>

            {/* Programming */}
            <div className="glass-card p-4">
              <div className="flex items-center gap-3 mb-2">
                <HiCode className="text-accent" size={24} />
                <h3 className="font-semibold text-white">Programming</h3>
              </div>
              <p className="text-gray-400 text-sm">
                I like building web apps that may be helpful to others. I use PHP, Python 
                or Java for the backend, Vue for the front-end and React Native for mobile apps.
              </p>
            </div>

            {/* Computers */}
            <div className="glass-card p-4">
              <div className="flex items-center gap-3 mb-2">
                <HiDesktopComputer className="text-accent" size={24} />
                <h3 className="font-semibold text-white">Computers</h3>
              </div>
              <p className="text-gray-400 text-sm">
                <strong>Athena:</strong> This is my main computer. I spent a lot of time with it. 
                It has 32GB of RAM, an Intel Core i5 processor and runs Windows 11.
              </p>
            </div>

            {/* Where to Find Me */}
            <div className="glass-card p-4">
              <div className="flex items-center gap-3 mb-2">
                <HiLocationMarker className="text-accent" size={24} />
                <h3 className="font-semibold text-white">Where to find me</h3>
              </div>
              <div className="flex gap-3 mt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="text-accent hover:text-accent-light transition-smooth flex items-center gap-1 text-sm">
                  <FaGithub /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-accent hover:text-accent-light transition-smooth flex items-center gap-1 text-sm">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer"
                   className="text-accent hover:text-accent-light transition-smooth flex items-center gap-1 text-sm">
                  <FaStackOverflow /> Stack Overflow
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info Sidebar */}
        <div className="space-y-4">
          <div className="glass-card p-4">
            <p className="text-accent text-sm">DOB</p>
            <p className="text-white">1990/01/15</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-accent text-sm">Residence</p>
            <p className="text-white">New York, USA</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-accent text-sm">e-mail</p>
            <p className="text-white text-sm">johndoe@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

