import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProfileCard from "@/components/ProfileCard";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ColorBends from "@/components/ColorBends";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Vipin Menon",
  description: "Personal portfolio website showcasing my work and skills",
  icons: {
    icon: '/profile.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ColorBends Background */}
        <div className="fixed inset-0 z-0">
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={30}
            speed={0.3}
            scale={1.2}
            frequency={1.4}
            warpStrength={1.2}
            mouseInfluence={1.2}
            parallax={0.6}
            noise={0}
            transparent={false}
          />
        </div>

        <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative z-10 py-4 md:py-6 lg:py-8 pb-24 lg:pb-8">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-stretch max-w-7xl w-full min-h-[600px] lg:h-[700px]">
            {/* Profile Sidebar */}
            <aside className="flex-shrink-0 w-full md:w-auto lg:h-full">
              <ProfileCard />
            </aside>

            {/* Main Content - Glassmorphic Panel */}
            <main id="main-content" className="glass flex-grow lg:h-full overflow-hidden lg:pr-2 scroll-container min-h-[400px] md:min-h-[500px]">
              <div className="h-full overflow-y-auto p-4 sm:p-6 md:p-8 lg:pr-6 pb-12 custom-scrollbar">
                <PageTransition>{children}</PageTransition>
              </div>
            </main>

            {/* Navigation - Desktop only */}
            <aside className="hidden lg:flex flex-shrink-0 h-full">
              <Navigation />
            </aside>
          </div>
        </div>

        {/* Mobile Navigation - Always rendered, fixed at bottom */}
        <Navigation />
      </body>
    </html>
  );
}
