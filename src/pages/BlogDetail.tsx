import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
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
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Home Tips',
    author: {
      name: 'Emily Johnson',
      role: 'Cleaning Expert',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    content: `
      <p>Maintaining a clean home between professional cleaning visits doesn't have to be overwhelming. With a few simple daily habits, you can keep your space fresh and tidy without spending hours on chores. Here are ten practical tips to help you maintain cleanliness in your home:</p>
      
      <h2>1. Make Your Bed Every Morning</h2>
      <p>Starting your day by making your bed takes just a minute but instantly makes your bedroom look neater. It also sets a productive tone for the day and gives you a small sense of accomplishment first thing in the morning.</p>
      
      <h2>2. Follow the "One-Touch Rule"</h2>
      <p>Handle items only once before putting them in their proper place. For example, don't drop mail on the counter to sort later—immediately recycle junk mail and file or act on important documents.</p>
      
      <h2>3. Clean as You Cook</h2>
      <p>While preparing meals, clean up ingredients and wash utensils as you go. This prevents a pile of dishes from accumulating and makes post-meal cleanup much quicker and less daunting.</p>
      
      <h2>4. Wipe Surfaces Daily</h2>
      <p>Keep disinfecting wipes or a spray bottle with a microfiber cloth in high-traffic areas like the kitchen and bathroom. Quickly wipe down countertops, sinks, and faucets daily to prevent buildup and maintain hygiene.</p>
      
      <h2>5. Implement a 15-Minute Pickup Routine</h2>
      <p>Set a timer for 15 minutes each evening and have everyone in the household pick up and put away items that are out of place. This prevents clutter from accumulating and helps maintain order throughout the week.</p>
      
      <h2>6. Address Spills and Messes Immediately</h2>
      <p>Tackle spills and messes as soon as they happen to prevent stains and make cleanup easier. This is especially important for carpets, upholstery, and other porous surfaces that can become permanently stained if spills are left unaddressed.</p>
      
      <h2>7. Sort Mail and Papers Promptly</h2>
      <p>Designate a specific spot for incoming mail and papers, and sort through them daily or weekly. Recycle what you don't need and file important documents to prevent paper clutter from piling up.</p>
      
      <h2>8. Empty Dishwasher and Sink Before Bed</h2>
      <p>Make it a habit to run and empty the dishwasher in the evening so you can start the next day with a clean slate. If you wash dishes by hand, don't leave them in the sink overnight—wash, dry, and put them away.</p>
      
      <h2>9. Maintain a Laundry Schedule</h2>
      <p>Instead of letting laundry pile up until it becomes overwhelming, establish a regular laundry schedule. Doing one load per day or designating specific days for laundry can help keep it manageable.</p>
      
      <h2>10. Keep Cleaning Supplies Accessible</h2>
      <p>Store essential cleaning supplies in each area of your home where they're most needed. Having supplies readily available makes it easier to clean up quickly when necessary, rather than putting it off until later.</p>
      
      <p>By incorporating these simple habits into your daily routine, you can maintain a cleaner, more organized home between professional cleaning sessions. Remember, consistency is key—small actions done regularly will have a significant impact on the overall cleanliness and organization of your home.</p>
      
      <p>When it's time for a deeper clean, professional cleaning services like Namami Cleans can provide the thorough cleaning your home needs, while your daily habits help maintain that freshness in between visits.</p>
    `,
    relatedPosts: ['2', '3', '5']
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
  }
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = allBlogs.find(blog => blog.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!blog || !blog.content) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <SEO 
          title="Blog Post Not Found | Namami Cleans"
          description="The article you're looking for doesn't exist or has been removed."
          canonicalUrl="https://namamicleans.com/blog"
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Blog Post Not Found</h2>
          <p className="text-gray-500 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const fullBlog = blog;
  const relatedBlogs = fullBlog.relatedPosts ? 
    allBlogs.filter(blog => fullBlog.relatedPosts?.includes(blog.id)) : 
    allBlogs.filter(b => b.id !== fullBlog.id).slice(0, 3);

  const firstParagraph = fullBlog.content
    .match(/<p>(.*?)<\/p>/)?.[1]
    ?.replace(/<[^>]*>/g, '')
    ?.substring(0, 160) || fullBlog.excerpt;

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title={`${fullBlog.title} | Namami Cleans Blog`}
        description={firstParagraph}
        keywords={`cleaning tips, ${fullBlog.category}, home cleaning, professional cleaning`}
        ogTitle={fullBlog.title}
        ogDescription={fullBlog.excerpt}
        ogImage={fullBlog.image}
        canonicalUrl={`https://namamicleans.com/blog/${id}`}
      />
      
      {/* Blog Header */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors mb-6">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
          
          <span className="inline-block bg-secondary text-primary-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {fullBlog.category}
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">{fullBlog.title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-600 gap-6 mb-6">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{fullBlog.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>{fullBlog.readTime}</span>
            </div>
          </div>
          
          {fullBlog.author && (
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={fullBlog.author.image}
                  alt={fullBlog.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">{fullBlog.author.name}</p>
                <p className="text-gray-600 text-sm">{fullBlog.author.role}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Image */}
      <div className="h-96 overflow-hidden relative">
        <img
          src={fullBlog.image}
          alt={fullBlog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-lg font-semibold mb-4">Share This Article</h3>
                  <div className="flex space-x-3">
                    <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                      <Share2 size={18} />
                    </a>
                  </div>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Need Professional Cleaning?</h3>
                  <p className="text-gray-600 mb-4">
                    Our expert team provides top-quality cleaning services tailored to your needs.
                  </p>
                  <Link to="https://app.namamicleans.com" target="_blank">
                    <Button className="w-full bg-primary text-white hover:bg-primary-600">
                      Book a Cleaning
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: fullBlog.content }} />
              </article>
              
              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-600">Tags:</span>
                <a href="#" className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">Cleaning Tips</a>
                <a href="#" className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">Home Maintenance</a>
                <a href="#" className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">Organization</a>
                <a href="#" className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">Daily Habits</a>
              </div>
              
              {/* Author Bio */}
              {fullBlog.author && (
                <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        src={fullBlog.author.image}
                        alt={fullBlog.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{fullBlog.author.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{fullBlog.author.role}</p>
                      <p className="text-gray-700">
                        Emily is a cleaning expert with over 10 years of experience in the industry. She specializes in creating practical, easy-to-follow cleaning routines that help busy households maintain clean and organized spaces.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-800 mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map((blog) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for a Professional Cleaning?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let our team of experts take care of the cleaning while you focus on what matters most to you.
          </p>
          <Link to="https://app.namamicleans.com" target="_blank">
            <Button className="bg-secondary text-primary-800 hover:bg-secondary-600 text-lg px-8 py-3">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
