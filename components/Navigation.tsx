'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  HiHome, 
  HiUser, 
  HiAcademicCap, 
  HiBriefcase, 
  HiNewspaper, 
  HiMail,
  HiChevronRight,
  HiChevronLeft
} from 'react-icons/hi';

const navItems = [
  { href: '/', icon: HiHome, label: 'Home' },
  { href: '/about', icon: HiUser, label: 'About' },
  { href: '/resume', icon: HiAcademicCap, label: 'Resume' },
  { href: '/projects', icon: HiBriefcase, label: 'Projects' },
  { href: '/blog', icon: HiNewspaper, label: 'Blog' },
  { href: '/contact', icon: HiMail, label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  // Find current page index
  const currentIndex = navItems.findIndex(item => item.href === pathname);

  // Prefetch all routes on mount for instant navigation
  useEffect(() => {
    navItems.forEach(item => {
      router.prefetch(item.href);
    });
  }, [router]);

  const goToPrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : navItems.length - 1;
    router.push(navItems[prevIndex].href);
  };

  const goToNext = () => {
    const nextIndex = currentIndex < navItems.length - 1 ? currentIndex + 1 : 0;
    router.push(navItems[nextIndex].href);
  };

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Navigation Icons */}
      <nav className="glass-nav py-4 px-2 flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                group relative p-3 rounded-full transition-smooth
                ${isActive 
                  ? 'bg-white/10 text-accent-light' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }
              `}
              title={item.label}
            >
              <Icon size={22} />
              
              {/* Tooltip */}
              <span className="
                absolute right-full mr-3 top-1/2 -translate-y-1/2
                px-3 py-1 rounded-lg bg-gray-800 text-white text-sm
                opacity-0 group-hover:opacity-100 transition-opacity
                pointer-events-none whitespace-nowrap
              ">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Arrow Navigation */}
      <div className="glass-nav py-3 px-2 flex flex-col gap-1">
        <button
          onClick={goToNext}
          className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-smooth"
          title="Next"
        >
          <HiChevronRight size={22} />
        </button>
        <button
          onClick={goToPrev}
          className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-smooth"
          title="Previous"
        >
          <HiChevronLeft size={22} />
        </button>
      </div>
    </div>
  );
}
