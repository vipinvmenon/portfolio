import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProfileCard from "@/components/ProfileCard";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";

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
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="flex gap-6 items-stretch max-w-7xl w-full h-[700px]">
            {/* Profile Sidebar */}
            <aside className="flex-shrink-0 h-full">
              <ProfileCard />
            </aside>

            {/* Main Content - Glassmorphic Panel */}
            <main className="glass flex-grow h-full overflow-hidden">
              <div className="h-full overflow-y-auto p-8">
                <PageTransition>{children}</PageTransition>
              </div>
            </main>

            {/* Navigation */}
            <aside className="flex-shrink-0 h-full">
              <Navigation />
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
