import { HiExternalLink } from 'react-icons/hi';
import GlareHover from '@/components/GlareHover';
import ShinyText from '@/components/ShinyText';
import Image from 'next/image';
import { getPageIcon } from '@/utils/navigation';

const blogPosts = [
  {
    id: 1,
    title: 'The Type of AI Every Frontend Developer Should Refuse to Use (And Why)',
    date: 'November 2, 2025',
    category: 'AI & Security',
    excerpt: 'Let me be blunt: 45% of AI-generated code contains security vulnerabilities. Not syntax errors. Not logic bugs. Real vulnerabilities—the kind that can compromise your app, your company, and your career. And here\'s what\'s scary: most developers don\'t even realize they\'re shipping them. Veracode\'s 2025 GenAI Security Report reveals shocking statistics: JavaScript has a 43% failure rate, with XSS vulnerabilities at 86% and Log Injection at 88%. The problem isn\'t AI—it\'s blind trust. Too many frontend engineers treat AI tools like vending machines: prompt in, code out, deploy. It feels fast. It looks productive. But it\'s not progress—it\'s a security timebomb wrapped in efficiency metrics. AI doesn\'t understand data flow, trust boundaries, or attack vectors. It can\'t tell if a variable came from a user or a secure source. It just mimics patterns—secure or insecure. Researchers call this "vibe coding": shipping code that feels correct but hides silent security flaws. Between 2023–2025, a new attack vector exploded: slopsquatting. AI "hallucinates" fake package names, attackers register them on npm, and thousands of projects get compromised. Learn why critical thinking beats copy-pasting, how to review AI code like it\'s from a stranger, and why the most valuable developers in 2026 won\'t be the fastest—they\'ll be the ones who think before they trust.',
    url: 'https://www.linkedin.com/pulse/type-ai-every-frontend-developer-should-refuse-use-why-vipin-menon-fl6nc/?trackingId=6d8lhXkvS9W6lfs4OrmnHQ%3D%3D',
    image: '/blog/blog-1.png',
  },
  {
    id: 2,
    title: 'Why UI Engineers Need to Understand Data—Even in Security-Heavy Domains',
    date: 'June 10, 2025',
    category: 'UI Engineering',
    excerpt: 'As UI engineers, we often focus on the essentials: design systems, component architecture, performance, and accessibility. But in domains where security and data are core to the product, stopping there simply isn\'t enough. I work at a company tackling one of the most complex challenges in cybersecurity: making sense of fragmented, siloed data. Our platform combines a Security Data Fabric with an AI-powered Exposure Management system. At first, I treated the data as just "input" for UI—tables, charts, graphs. But I realized something important: when the data is high-stakes, the interface becomes mission-critical. Understanding the nature, behavior, and intent behind the data made me a much better UI engineer. In cybersecurity, trust is everything. Whether it\'s a SOC analyst, threat hunter, or CISO—they all rely on UI to make quick, high-impact decisions. A misleading chart or unclear risk label can cause confusion or delay a critical response. Security data is volatile, inconsistent, and often ambiguous. Understanding its behavior over time makes us better at building UX that adapts, instead of assuming. You become the translator between raw threat and vulnerability data into clear, actionable visuals that lead to fast, accurate decision-making. Great UIs don\'t expose complexity—they tame it. And to do that, you have to know what to hide, what to highlight, and when. If you understand the models, signals, and priorities, you\'re not "just the frontend dev." You\'re the bridge between insight and action, amplifying the power of the entire system by making it usable, understandable, and trustworthy.',
    url: 'https://www.linkedin.com/pulse/why-ui-engineers-need-understand-dataeven-domains-vipin-menon-lqpdc/?trackingId=1rZa8FzCSrersajJS1%2FdEA%3D%3D',
    image: '/blog/blog-2.png',
  },
];

const categoryColors: Record<string, string> = {
  'AI & Security': 'bg-red-500/20 text-red-400 border-red-500/30',
  'UI Engineering': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};
  
export default function Blog() {
  const PageIcon = getPageIcon('/blog');
  
  return (
    <div className="space-y-4 sm:space-y-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
          {PageIcon && <PageIcon className="text-accent" size="1.75em" />}
          Blog
        </h1>
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
          <a 
            href="https://www.linkedin.com/in/vipinmenon/recent-activity/articles/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-500 rounded-full text-white text-xs sm:text-sm hover:bg-white/10 active:bg-white/10 transition-smooth flex items-center gap-1.5 touch-manipulation"
          >
            View on LinkedIn
            <HiExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5" />  
          </a>
        </GlareHover>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 flex-1">
        {blogPosts.map((post) => (
          <a 
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <article 
              className="glass-card overflow-hidden group hover-glow transition-smooth cursor-pointer h-full"
            >
              {/* Post Image */}
              <div className="h-40 sm:h-48 relative overflow-hidden rounded-t-[16px] -mx-[1px] -mt-[1px] w-[calc(100%+2px)]">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-top rounded-t-[16px]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <>
                    {/* Decorative elements - fallback when no image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-smooth rounded-t-[16px]">
                      <div className="text-5xl sm:text-7xl font-bold text-white/10">{'</>'}</div>
                    </div>
                  </>
                )}
                
                {/* External Link Icon */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-white/50 group-hover:text-accent transition-smooth z-10">
                  <HiExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
              </div>

              {/* Post Info */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-white text-sm sm:text-base mb-2 sm:mb-3 group-hover:text-accent transition-smooth leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-6 flex-1">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </a>
        ))}
      </div>

      {/* LinkedIn CTA */}
      <div className="glass-card p-3 sm:p-5 text-center">
        <p className="text-gray-400 mb-2 sm:mb-3 text-xs sm:text-sm">
          I publish articles on LinkedIn about UI Engineering, Product Strategy & More...
        </p>
        <a 
          href="https://www.linkedin.com/in/vipin-menon-v/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-white transition-smooth text-xs sm:text-sm group touch-manipulation"
        >
          <ShinyText 
            text="Follow me on LinkedIn for more" 
            disabled={false} 
            speed={3} 
            className="text-gray-300" 
          />
          <HiExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5 opacity-50 group-hover:opacity-100 transition-smooth" />
        </a>
      </div>
    </div>
  );
}

