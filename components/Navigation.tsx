'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  HiChevronRight,
  HiChevronLeft
} from 'react-icons/hi';
import GlareHover from './GlareHover';
import { navItems } from '@/utils/navigation';

interface NavigationProps {
  variant?: 'desktop' | 'mobile';
}

export default function Navigation({ variant }: NavigationProps = { variant: undefined }) {
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

  // Scroll to main content on mobile after navigation (except home page)
  useEffect(() => {
    // Only scroll on mobile (when main content is below profile card)
    if (window.innerWidth < 1024) {
      if (pathname === '/') {
        // On home page, scroll to top to show profile card
        const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        const timer = setTimeout(scrollToTop, 100);
        return () => clearTimeout(timer);
      } else {
        // On other pages, scroll to main content
        const scrollToMain = () => {
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        };
        const timer = setTimeout(scrollToMain, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  const goToPrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : navItems.length - 1;
    router.push(navItems[prevIndex].href);
  };

  const goToNext = () => {
    const nextIndex = currentIndex < navItems.length - 1 ? currentIndex + 1 : 0;
    router.push(navItems[nextIndex].href);
  };

  const handleMobileNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== href) {
      router.push(href);
    } else {
      // If already on the page, scroll appropriately
      if (href === '/') {
        // On home page, scroll to top to show profile card
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // On other pages, scroll to main content
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation - Vertical Sidebar */}
      {variant !== 'mobile' && (
      <div className="hidden lg:flex flex-col h-full justify-between">
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
              >
                <Icon size="1.375em" />
                
                {/* Tooltip - Hidden on touch devices */}
                <span className="
                  hidden lg:block absolute right-full mr-3 top-1/2 -translate-y-1/2
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
          <GlareHover
            width="auto"
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
          >
            <button
              onClick={goToNext}
              className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-smooth"
              title="Next"
            >
              <HiChevronRight size="1.375em" />
            </button>
          </GlareHover>
          <GlareHover
            width="auto"
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
          >
            <button
              onClick={goToPrev}
              className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-smooth"
              title="Previous"
            >
              <HiChevronLeft size="1.375em" />
            </button>
          </GlareHover>
        </div>
      </div>
      )}

      {/* Mobile Navigation - Bottom Bar */}
      {variant !== 'desktop' && (
      <div className="mobile-nav-container lg:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none w-full">
        <div className="fluid-nav mx-4 mb-3 py-1.5 flex items-center justify-between px-2 sm:px-3 pointer-events-auto">
          {/* Navigation Icons - Horizontal */}
          <nav className="flex items-center justify-between w-full gap-0.5 sm:gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleMobileNavClick(item.href, e)}
                  className={`
                    p-3 rounded-full transition-smooth touch-manipulation w-[clamp(3rem,8vw,3.25rem)] h-[clamp(3rem,8vw,3.25rem)] flex items-center justify-center flex-shrink-0
                    ${isActive 
                      ? 'bg-white/10 text-accent-light' 
                      : 'text-gray-400 active:text-white active:bg-white/5'
                    }
                  `}
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon size="1.375em" />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      )}
    </>
  );
}
