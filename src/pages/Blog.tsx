
import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';
import SEO from '@/components/SEO';

// Sample blog data
const allBlogs = [
  {
    id: '1',
    title: '10 Tips for Keeping Your Home Clean Between Professional Cleanings',
    excerpt: 'Learn simple daily habits that can help maintain the cleanliness of your home between professional cleaning sessions.',
    date: 'June 15, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Home Tips'
  },
  {
    id: '2',
    title: 'The Benefits of Green Cleaning for Your Family\'s Health',
    excerpt: 'Discover how eco-friendly cleaning products and methods can improve your family\'s health and reduce environmental impact.',
    date: 'May 22, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1556911220-bda9d6c3a469?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Health'
  },
  {
    id: '3',
    title: 'How Often Should You Clean Different Areas of Your Home?',
    excerpt: 'A comprehensive guide to cleaning frequencies for different areas and items in your home to maintain optimal cleanliness.',
    date: 'April 10, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Cleaning Guide'
  },
  {
    id: '4',
    title: 'Professional vs. DIY Cleaning: When to Call the Experts',
    excerpt: 'Learn when to tackle cleaning tasks yourself and when it\'s better to call in professional cleaning services.',
    date: 'March 5, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Professional Cleaning'
  },
  {
    id: '5',
    title: 'The Ultimate Spring Cleaning Checklist',
    excerpt: 'A comprehensive guide to deep cleaning your home during spring, with room-by-room checklists and time-saving tips.',
    date: 'February 18, 2023',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Seasonal Cleaning'
  },
  {
    id: '6',
    title: 'Cleaning Products 101: What to Use Where',
    excerpt: 'A guide to different cleaning products and their appropriate uses throughout your home for effective and safe cleaning.',
    date: 'January 30, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Cleaning Products'
  },
  {
    id: '7',
    title: 'How to Prepare Your Home for a Professional Cleaning Service',
    excerpt: 'Tips on how to get your home ready before professional cleaners arrive to maximize the effectiveness of their service.',
    date: 'December 12, 2022',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Professional Cleaning'
  },
  {
    id: '8',
    title: 'The Psychology of Clean Spaces: How Cleanliness Affects Mental Health',
    excerpt: 'Explore the psychological benefits of living and working in clean, organized environments and how it impacts overall wellbeing.',
    date: 'November 25, 2022',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Health'
  },
  {
    id: '9',
    title: 'Eco-Friendly Cleaning: Reducing Your Environmental Footprint',
    excerpt: 'Learn how to make your cleaning routine more environmentally friendly with sustainable products and practices.',
    date: 'October 18, 2022',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1532654609832-8b32571efa49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Eco-Friendly'
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === '') {
      setFilteredBlogs(allBlogs);
    } else {
      const filtered = allBlogs.filter(blog => 
        blog.title.toLowerCase().includes(term) || 
        blog.excerpt.toLowerCase().includes(term) ||
        blog.category.toLowerCase().includes(term)
      );
      setFilteredBlogs(filtered);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Cleaning Tips & Insights | Namami Cleans Blog"
        description="Discover expert cleaning tips, guides, and advice for maintaining a cleaner, healthier home from the Namami Cleans professional team."
        keywords="cleaning blog, cleaning tips, home maintenance, professional cleaning advice"
        canonicalUrl="https://namamicleans.com/blog"
      />
      
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover tips, insights, and advice on home cleaning and maintenance from our cleaning experts.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredBlogs.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={filteredBlogs[0].image}
                  alt={filteredBlogs[0].title}
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
              
              <div>
                <span className="inline-block bg-secondary text-primary-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {filteredBlogs[0].category}
                </span>
                <h2 className="text-3xl font-bold text-primary-800 mb-4">
                  {filteredBlogs[0].title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-4">{filteredBlogs[0].date}</span>
                  <span>{filteredBlogs[0].readTime}</span>
                </div>
                <p className="text-gray-600 mb-6">
                  {filteredBlogs[0].excerpt}
                </p>
                <a href={`/blog/${filteredBlogs[0].id}`} className="inline-flex items-center text-primary font-medium hover:text-primary-700">
                  Read Full Article <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredBlogs.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-primary-800 mb-8">
                All Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Skip the first blog if it's featured above */}
                {filteredBlogs.slice(1).map((blog) => (
                  <BlogCard
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    excerpt={blog.excerpt}
                    date={blog.date}
                    readTime={blog.readTime}
                    image={blog.image}
                    category={blog.category}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500 mb-6">
                We couldn't find any articles matching your search criteria.
              </p>
              <Button 
                variant="outline" 
                className="text-primary border-primary hover:bg-primary hover:text-white"
                onClick={() => {
                  setSearchTerm('');
                  setFilteredBlogs(allBlogs);
                }}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8 text-white/80">
              Stay updated with our latest cleaning tips, special offers, and news by subscribing to our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white text-gray-800"
              />
              <Button className="bg-secondary text-primary-800 hover:bg-secondary-600">
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/60">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
