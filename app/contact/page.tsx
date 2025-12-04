'use client';

import { HiMail, HiGlobe } from 'react-icons/hi';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const contactLinks = [
  {
    icon: HiMail,
    label: 'johndoe@example.com',
    href: 'mailto:johndoe@example.com',
  },
  {
    icon: HiGlobe,
    label: 'johndoe.dev',
    href: 'https://johndoe.dev',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/johndoe',
  },
  {
    icon: FaFacebook,
    label: 'Facebook',
    href: 'https://facebook.com/johndoe',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/johndoe',
  },
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent! (This is a demo)');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-white">Contact</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Links */}
        <div className="space-y-4">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex flex-col items-center justify-center hover-glow transition-smooth block"
              >
                <Icon className="text-accent mb-2" size={28} />
                <span className="text-accent text-sm">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            How Can I <span className="text-accent">Help You?</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="glass-card px-4 py-3 w-full bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="glass-card px-4 py-3 w-full bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
                required
              />
            </div>
            
            <input
              type="text"
              placeholder="Subject"
              className="glass-card px-4 py-3 w-full bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
              required
            />
            
            <textarea
              placeholder="Message"
              rows={5}
              className="glass-card px-4 py-3 w-full bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent rounded-lg resize-none"
              required
            />

            <button
              type="submit"
              className="px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-full transition-smooth font-medium"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

