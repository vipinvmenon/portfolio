'use client';

import { useRef, useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import GlareHover from '@/components/GlareHover';
import { getPageIcon } from '@/utils/navigation';

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

  const PageIcon = getPageIcon('/contact');
  
  return (
    <div className="space-y-4 sm:space-y-6 h-full flex flex-col">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
        {PageIcon && <PageIcon className="text-accent" size={28} />}
        Contact
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 flex-1">
        {/* Contact Links */}
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3 sm:grid-rows-4">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 sm:p-4 flex flex-col items-center justify-center hover-glow transition-smooth touch-manipulation"
              >
                <Icon className="text-accent mb-1 sm:mb-2" size={24} />
                <span className="text-accent text-xs sm:text-sm text-center break-all">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="flex flex-col">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
            How Can I <span className="text-accent">Help You?</span>
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 flex-1 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                autoComplete="name"
                className="glass-card px-3 sm:px-4 py-2 sm:py-2.5 w-full bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-[rgba(255,255,255,0.08)] rounded-lg"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                autoComplete="email"
                className="glass-card px-3 sm:px-4 py-2 sm:py-2.5 w-full bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-[rgba(255,255,255,0.08)] rounded-lg"
                required
              />
            </div>

            <input
              type="text"
              name="subject"  
              placeholder="Subject"
              className="glass-card px-3 sm:px-4 py-2 sm:py-2.5 w-full bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-[rgba(255,255,255,0.08)] rounded-lg"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="glass-card px-3 sm:px-4 py-2 sm:py-2.5 w-full bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-[rgba(255,255,255,0.08)] rounded-lg resize-none flex-1 min-h-[100px]"
              required
            />

            <GlareHover
              width="100%"
              height="auto"
              background="transparent"
              borderRadius="9999px"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              disabled={loading}
            >
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-500 cursor-pointer rounded-full text-white text-xs sm:text-sm hover:bg-white/10 active:bg-white/10 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </GlareHover>

            {/* Status Messages */}
            {status === 'success' && (
              <p className="text-green-400 text-center text-xs sm:text-sm">
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}  
            {status === 'error' && (
              <p className="text-red-400 text-center text-xs sm:text-sm">
                ✗ Failed to send message. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

