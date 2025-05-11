import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Users,
  Award,
  Shield,
  Play,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialSlider from "@/components/TestimonialSlider";
import BlogCard from "@/components/BlogCard";
import LocationSearch from "@/components/LocationSearch";
import CategorySlider from "@/components/CategorySlider";
import ServiceSlider from "@/components/ServiceSlider";
import { getServices } from "@/services/service";
import Cookies from "js-cookie";


const testimonials = [
  {
    name: "Aman Sharma",
    videoId: "lh_rCvk-cSM",
  },
  {
    name: "Sanjay Seth",
    videoId: "n4Ovhfth4K0",
  },
  {
    name: "Dhruv Seth",
    videoId: "1efrVAePcpo",
  },
  {
    name: "Vivek",
    videoId: "DeChJZhUwV0",
  },
];


const blogs = [
  {
    id: "1",
    title: "10 Tips for Keeping Your Home Clean Between Professional Cleanings",
    excerpt:
      "Learn simple daily habits that can help maintain the cleanliness of your home between professional cleaning sessions.",
    date: "June 15, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Home Tips",
  },
  {
    id: "2",
    title: "The Benefits of Green Cleaning for Your Family's Health",
    excerpt:
      "Discover how eco-friendly cleaning products and methods can improve your family's health and reduce environmental impact.",
    date: "May 22, 2023",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1556911220-bda9d6c3a469?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Health",
  },
  {
    id: "3",
    title: "How Often Should You Clean Different Areas of Your Home?",
    excerpt:
      "A comprehensive guide to cleaning frequencies for different areas and items in your home to maintain optimal cleanliness.",
    date: "April 10, 2023",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cleaning Guide",
  },
];


const Index = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [services, setServices] = useState([]);
  const heroImages = [
    "/lovable-uploads/hero1.jpg",
    "/lovable-uploads/hero2.jpg",
    "/lovable-uploads/hero3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    getServices().then(data => {
      console.log(data.services, 'services');
      if (data) setServices(data.services);
    });
  }, []);


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${activeImage === index ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={image}
              alt="Cleaning service"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="hero-gradient"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-down">
              Cleaning Services
              <br />
              at Your Doorstep
            </h1>
            <p className="text-xl text-white mb-12 md:max-w-2xl mx-auto animate-slide-up">
              We provide top-quality cleaning services tailored to your needs.
            </p>
            <div className="max-w-3xl mx-auto animate-fade-in">
              <LocationSearch />
            </div>
          </div>
        </div>
      </section>

      {Cookies.get("selected_city") ? <>
        {/* Category Slider */}
        <section className="py-16 bg-white">
          <CategorySlider
            title="Wide Categories"
            description="Explore our range of professional cleaning categories"
            categories={services}
            viewAllLink="/services#categories"
          />
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-gray-50">
          <ServiceSlider
            title="Featured Services"
            description="Our most popular cleaning services tailored to meet your needs"
            services={services.filter(service => service.is_featured)}
            viewAllLink={`/services`}
            className="mb-8"
          />
        </section>
      </> : <div className="h-[20vh] flex items-center justify-center">
        <p className="text-xl text-gray-600">Please select a city to view services.</p>
      </div>}

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                Why Choose Namami Cleans?
              </h2>
              <p className="text-gray-600 mb-8">
                We're committed to providing exceptional cleaning services that
                exceed your expectations. Our team of professionals is trained
                to deliver consistent quality with attention to detail.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 bg-secondary-100 p-2 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Professional Staff
                    </h3>
                    <p className="text-gray-600">
                      Our cleaning professionals are thoroughly vetted, trained,
                      and insured for your peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-secondary-100 p-2 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Quality Guaranteed
                    </h3>
                    <p className="text-gray-600">
                      If you're not satisfied with our service, we'll come back
                      and re-clean at no extra cost.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-secondary-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Secure Booking
                    </h3>
                    <p className="text-gray-600">
                      Simple online booking system with secure payment options
                      for your convenience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-primary text-white hover:bg-primary-600">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/clean_cta.png"
                alt="Cleaning professional"
                className="rounded-lg shadow-xl w-full h-fit object-cover object-top"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-secondary-500 p-3 rounded-full mr-4">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-primary-800">
                      100% Satisfaction
                    </p>
                    <p className="text-gray-600">Guaranteed Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Booking a cleaning service with us is quick and easy. Follow these
              simple steps to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-secondary text-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-800">
                Book Online
              </h3>
              <p className="text-gray-600">
                Select your service, choose a convenient date and time, and book
                securely online.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-secondary text-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-800">
                We Clean
              </h3>
              <p className="text-gray-600">
                Our professional team arrives on schedule and performs a
                thorough cleaning service.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-secondary text-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-800">
                Relax & Enjoy
              </h3>
              <p className="text-gray-600">
                Sit back and enjoy your clean space. Leave a review and schedule
                your next cleaning.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="https://app.namamicleans.com" target="_blank">
              <Button className="bg-primary text-white hover:bg-primary-600">
                Book Your Cleaning Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <TestimonialSlider
          title="What Our Customers Say"
          description="Don't just take our word for it. Hear from our satisfied customers who have experienced our services."
          testimonials={testimonials}
          className="mb-8"
        />
      </section>

      {/* Be a Captain CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Become a Cleaning Captain
              </h2>
              <p className="mb-6 text-white/90">
                Join our team of professional cleaners and enjoy flexible hours,
                competitive pay, and a supportive work environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Flexible working
                  hours
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Competitive pay and
                  benefits
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Training and growth
                  opportunities
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Supportive team
                  environment
                </li>
              </ul>
              <Link to="/hiring/captain">
                <Button className="bg-secondary text-primary-800 hover:bg-secondary-600">
                  Join Our Team
                </Button>
              </Link>
            </div>

            <div className="relative h-96">
              <img
                src="/lovable-uploads/captain_cta.jpg"
                alt="Join our team"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800">
              Latest From Our Blog
            </h2>
            <Link
              to="/blog"
              className="text-primary hover:text-primary-700 font-medium flex items-center"
            >
              View All Articles <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
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
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for a Cleaner Space?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the difference with our professional cleaning services.
            Book your cleaning today and enjoy a cleaner, healthier space.
          </p>
          <Link to="https://app.namamicleans.com" target="_blank">
            <Button className="bg-secondary text-primary-800 hover:bg-secondary-600 text-lg px-8 py-3">
              Book Your Cleaning Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
