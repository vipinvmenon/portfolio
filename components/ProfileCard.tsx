'use client';

import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { SiBluesky } from 'react-icons/si';

export default function ProfileCard() {
  return (
    <div className="glass-card p-8 flex flex-col items-center w-[320px] h-full">
      {/* Profile Photo */}
      <div className="relative w-40 h-40 mb-6">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-500" />
        <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-accent/50 to-purple-600/50 flex items-center justify-center">
          <span className="text-5xl font-bold text-white/80">VM</span>
        </div>
      </div>

      {/* Name & Title */}
      <h1 className="text-2xl font-bold text-white mb-1">Vipin Menon</h1>
      <p className="text-gray-400 text-sm mb-6">UI Engineer / Product Developer</p>

      {/* Social Links */}
      <div className="flex gap-4 mb-8">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-smooth"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-smooth"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://bsky.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-smooth"
        >
          <SiBluesky size={20} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-smooth"
        >
          <FaFacebook size={20} />
        </a>
      </div>

      {/* Download CV Button */}
      <a
        href="/cv.pdf"
        download
        className="px-8 py-3 border border-gray-500 rounded-full text-white text-sm hover:bg-white/10 transition-smooth"
      >
        Download CV
      </a>

      {/* Spacer to push footer down */}
      <div className="flex-grow" />

      {/* Footer */}
      <p className="text-gray-500 text-xs mt-8">
        © {new Date().getFullYear()} Vipin Menon
      </p>
    </div>
  );
}

