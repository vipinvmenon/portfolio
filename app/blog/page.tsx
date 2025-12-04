import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Computer Science Series #1: Halt and Catch Fire',
    date: '30 Nov. 2025',
    category: 'computer science series',
    excerpt: 'A look at the iconic TV show that captures the spirit of the personal computer revolution.',
    image: '/blog/halt-catch-fire.jpg',
  },
  {
    id: 2,
    title: 'Sorting Algorithms #4: Quick Sort',
    date: '23 Nov. 2025',
    category: 'sorting algorithms',
    excerpt: 'Deep dive into Quick Sort algorithm, its implementation and performance analysis.',
    image: '/blog/quicksort.jpg',
  },
  {
    id: 3,
    title: 'Building a REST API with Laravel',
    date: '20 Nov. 2025',
    category: 'misc',
    excerpt: 'Step by step guide to building a RESTful API using Laravel framework.',
    image: '/blog/laravel.jpg',
  },
  {
    id: 4,
    title: 'Getting Started with Linux',
    date: '16 Nov. 2025',
    category: 'misc',
    excerpt: 'A beginner-friendly introduction to the Linux operating system.',
    image: '/blog/linux.jpg',
  },
  {
    id: 5,
    title: 'Sorting Algorithms #3: Merge Sort',
    date: '10 Nov. 2025',
    category: 'sorting algorithms',
    excerpt: 'Understanding Merge Sort and its divide-and-conquer approach.',
    image: '/blog/mergesort.jpg',
  },
  {
    id: 6,
    title: 'Web Development Best Practices',
    date: '5 Nov. 2025',
    category: 'misc',
    excerpt: 'Essential practices every web developer should follow for clean, maintainable code.',
    image: '/blog/webdev.jpg',
  },
];

const categoryColors: Record<string, string> = {
  'computer science series': 'bg-green-500/20 text-green-400 border-green-500/30',
  'sorting algorithms': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'misc': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

export default function Blog() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Blog</h1>
        <Link href="/blog/archive" className="text-accent hover:text-accent-light transition-smooth text-sm">
          Archive
        </Link>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            className="glass-card overflow-hidden group hover-glow transition-smooth cursor-pointer"
          >
            {/* Post Image */}
            <div className="h-44 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
              {/* Category Badge */}
              <span className={`
                absolute top-3 left-3 text-xs px-2 py-1 rounded border
                ${categoryColors[post.category] || categoryColors['misc']}
              `}>
                {post.category}
              </span>
              
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Post Info */}
            <div className="p-4">
              <p className="text-gray-500 text-xs mb-2">{post.date}</p>
              <h3 className="font-semibold text-white mb-2 group-hover:text-accent transition-smooth">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

