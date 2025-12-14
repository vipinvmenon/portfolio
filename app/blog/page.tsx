import { HiExternalLink } from 'react-icons/hi';

const blogPosts = [
  {
    id: 1,
    title: 'The Type of AI Every Frontend Developer Should Refuse to Use (And Why)',
    date: 'November 2, 2025',
    category: 'AI & Security',
    excerpt: 'Let me be blunt: 45% of AI-generated code contains security vulnerabilities. Not syntax errors. Not logic bugs. Real vulnerabilities—the kind that can compromise your app, your company, and your career.',
    url: 'https://www.linkedin.com/pulse/type-ai-every-frontend-developer-should-refuse-use-why-vipin-menon-fl6nc/?trackingId=6d8lhXkvS9W6lfs4OrmnHQ%3D%3D',
  },
  {
    id: 2,
    title: 'Why UI Engineers Need to Understand Data—Even in Security-Heavy Domains',
    date: 'June 10, 2025',
    category: 'UI Engineering',
    excerpt: 'As UI engineers, we often focus on the essentials: design systems, component architecture, performance, and accessibility. But in domains where security and data are core to the product, stopping there simply isn\'t enough.',
    url: 'https://www.linkedin.com/pulse/why-ui-engineers-need-understand-dataeven-domains-vipin-menon-lqpdc/?trackingId=1rZa8FzCSrersajJS1%2FdEA%3D%3D',
  },
];

const categoryColors: Record<string, string> = {
  'AI & Security': 'bg-red-500/20 text-red-400 border-red-500/30',
  'UI Engineering': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};
  
export default function Blog() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Blog</h1>
        <a 
          href="https://www.linkedin.com/in/vipinmenon/recent-activity/articles/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 border border-gray-500 rounded-full text-white text-sm hover:bg-white/10 transition-smooth flex items-center gap-1.5"
        >
          View on LinkedIn
          <HiExternalLink className="w-3.5 h-3.5" />  
        </a>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
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
              <div className="h-48 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 relative overflow-hidden">
                {/* Category Badge */}
                <span className={`
                  absolute top-3 left-3 text-xs px-2.5 py-1.5 rounded-xl border z-10
                  ${categoryColors[post.category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}
                `}>
                  {post.category}
                </span>
                
                {/* External Link Icon */}
                <div className="absolute top-3 right-3 text-white/50 group-hover:text-accent transition-smooth z-10">
                  <HiExternalLink className="w-5 h-5" />
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-smooth">
                  <div className="text-7xl font-bold text-white/10">{'</>'}</div>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Post Info */}
              <div className="p-5">
                <p className="text-gray-500 text-xs mb-2">{post.date}</p>
                <h3 className="font-semibold text-white text-base mb-3 group-hover:text-accent transition-smooth leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </a>
        ))}
      </div>

      {/* LinkedIn CTA */}
      <div className="glass-card p-5 text-center">
        <p className="text-gray-400 mb-3 text-sm">
          I publish articles on LinkedIn about UI Engineering, Product Strategy & More...
        </p>
        <a 
          href="https://www.linkedin.com/in/vipinmenon/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition-smooth text-sm group"
        >
          Follow me on LinkedIn for more
          <HiExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-smooth" />
        </a>
      </div>
    </div>
  );
}

