import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag, BookOpen } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the best practices for structuring and scaling React applications for enterprise-level development.',
      content: 'In this comprehensive guide, we\'ll explore the architectural patterns and best practices that make React applications maintainable and scalable...',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Development',
      tags: ['React', 'Architecture', 'Best Practices'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging technologies and trends that will shape the future of web development.',
      content: 'Web development continues to evolve at a rapid pace. From WebAssembly to edge computing, let\'s examine what\'s coming next...',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Technology',
      tags: ['Web Development', 'Future Tech', 'Trends'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
    },
    {
      id: 3,
      title: 'Mastering TypeScript for Better Code',
      excerpt: 'How TypeScript can improve your development workflow and code quality.',
      content: 'TypeScript has become an essential tool for modern JavaScript development. Here\'s how to leverage its power effectively...',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Development',
      tags: ['TypeScript', 'JavaScript', 'Code Quality'],
      image: 'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
    {
      id: 4,
      title: 'Design Systems and Component Libraries',
      excerpt: 'Creating consistent and reusable UI components across your applications.',
      content: 'A well-designed component library is the foundation of any scalable frontend application. Let\'s build one together...',
      date: '2023-12-28',
      readTime: '12 min read',
      category: 'Design',
      tags: ['Design Systems', 'Components', 'UI/UX'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
  ];

  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(p => p.featured);
  const otherPosts = filteredPosts.filter(p => !p.featured);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology, and the craft of building digital experiences.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <BookOpen className="text-primary-500" size={24} />
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} featured onClick={() => setSelectedPost(post)} />
              ))}
            </div>
          </div>
        )}

        {/* Other Posts */}
        {otherPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              More Articles
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index + featuredPosts.length} onClick={() => setSelectedPost(post)} />
              ))}
            </div>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
};

interface BlogCardProps {
  post: BlogPost;
  index: number;
  featured?: boolean;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, featured = false, onClick }) => {
  return (
    <article
      className={`group bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer animate-slide-up ${
        featured ? 'ring-2 ring-primary-200 dark:ring-primary-800' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
              Featured
            </span>
          </div>
        )}

        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white text-sm font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-800 dark:hover:text-primary-200 transition-colors"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <button className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all">
          Read More
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
};

interface BlogModalProps {
  post: BlogPost;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <span className="sr-only">Close</span>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {post.content}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;