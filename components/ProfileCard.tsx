'use client';

import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      setTilt({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="glass-card p-8 flex flex-col items-center w-[320px] h-full transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
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
          href="https://github.com/vipinvmenon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-smooth"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/vipin-menon-v/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-smooth"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://x.com/_vipinmenon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-smooth"
        >
          <FaXTwitter size={20} />
        </a>
      </div>

      {/* Download CV Button */}
      <a
        href="/cv.pdf"
        download="Vipin_Menon_CV.pdf"
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

