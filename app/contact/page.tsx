'use client';

import { useRef, useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

const contactLinks = [
  {
    icon: HiMail,
    label: 'vipinmenon006@gmail.com',
    href: 'mailto:vipinmenon006@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vipin-menon-v/',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/vipinvmenon',
  },
  {
    icon: FaXTwitter,
    label: 'X (Twitter)',
    href: 'https://x.com/_vipinmenon',
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus('idle');

    try {
      await emailjs.sendForm(
        'service_imd9q6i',    
        'template_2h44t6v',  
        formRef.current,
        '77F-u2p6bOJe1C-3G'   
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
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

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                className="glass-card px-4 py-3 w-full bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                className="glass-card px-4 py-3 w-full bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="glass-card px-4 py-3 w-full bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="glass-card px-4 py-3 w-full bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent rounded-lg resize-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-full transition-smooth font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <p className="text-green-400 text-sm">
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm">
                ✗ Failed to send message. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

