'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
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
      className="glass-card p-4 sm:p-6 md:p-8 flex flex-col items-center w-full md:w-[min(280px,22vw)] lg:w-[min(320px,25vw)] lg:h-full transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Profile Photo */}
      <div className="relative w-[clamp(8rem,20vw,10rem)] h-[clamp(8rem,20vw,10rem)] mb-4 sm:mb-6">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-500" />
        <div className="absolute inset-2 rounded-full overflow-hidden">
          <Image
            src="/profile.png"
            alt="Vipin Menon"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 128px, 160px"
            priority
          />
        </div>
      </div>

      {/* Name & Title */}
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-1">Vipin Menon</h1>
      <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 text-center">UI Engineer / Product Developer</p> 

      {/* Social Links */}
      <div className="flex gap-4 mb-6 sm:mb-8">
        <a
          href="https://github.com/vipinvmenon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white active:text-white transition-smooth p-2 -m-2 touch-manipulation"
          aria-label="GitHub"
        >
          <FaGithub size="1.25em" />
        </a>
        <a
          href="https://www.linkedin.com/in/vipin-menon-v/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white active:text-white transition-smooth p-2 -m-2 touch-manipulation"
          aria-label="LinkedIn"
        >
          <FaLinkedin size="1.25em" />
        </a>
        <a
          href="https://x.com/_vipinmenon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white active:text-white transition-smooth p-2 -m-2 touch-manipulation"
          aria-label="X (Twitter)"
        >
          <FaXTwitter size="1.25em" />
        </a>
      </div>

      {/* Download CV Button */}
      <a
        href="/cv.pdf"
        download="Vipin_Menon_CV.pdf"
        className="px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-500 rounded-full text-white text-xs sm:text-sm hover:bg-white/10 active:bg-white/10 transition-smooth touch-manipulation text-center"
      >
        Download CV
      </a>

      {/* Spacer to push footer down */}
      <div className="flex-grow hidden lg:block" />

      {/* Footer */}
      <p className="hidden lg:block text-gray-500 text-xs mt-4 sm:mt-6 lg:mt-8">
        © {new Date().getFullYear()} Vipin Menon
      </p>
    </div>
  );
}

