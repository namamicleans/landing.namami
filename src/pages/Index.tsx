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
  Loader2,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialSlider from "@/components/TestimonialSlider";
import LocationSearch from "@/components/LocationSearch";
import CategorySlider from "@/components/CategorySlider";
import { useServices } from "@/hooks/useServices";
import Cookies from "js-cookie";
import { Service } from "@/types/types";

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

const Index = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [services, setServices] = useState<Service[] | null>([]);
  const [loading, setLoading] = useState(false);
  const { getServices } = useServices();

  const session = Cookies.get("selected_city");

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
    setLoading(true);
    getServices()
      .then((data) => {
        if (data && data.services) {
          setServices(data.services);
        } else {
          setServices([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setServices([]);
        setLoading(false);
      });
  }, [session, getServices]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
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

      {session && services && services.length > 0 ? (
        <>
          {/* Service Stats */}
          <section className="py-12 bg-gradient-to-r from-primary-50 to-secondary-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary">
                    {services.length}+
                  </div>
                  <div className="text-sm text-gray-600">
                    Services Available
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary">
                    {services.filter((s) => s.is_featured).length}
                  </div>
                  <div className="text-sm text-gray-600">Featured Services</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary">
                    ₹
                    {Math.min(
                      ...services.map((s) =>
                        s.package_plans.reduce(
                          (min, pkg) => Math.min(min, pkg.price_per_booking),
                          Infinity
                        )
                      )
                    )}
                  </div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Services */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-800 mb-4">
                  Featured Services
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our most popular cleaning services with unbeatable prices and
                  quality guarantee
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {services
                  .filter((service) => service.is_featured)
                  .slice(0, 6)
                  .map((service) => (
                    <div
                      key={service.service_code}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative">
                        <img
                          src={service.gallery?.[0] || "/placeholder.svg"}
                          alt={service.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                            {service.category.name}
                          </span>
                        </div>
                        {service.package_plans.some(
                          (pkg) => pkg.savings_per_booking > 0
                        ) && (
                          <div className="absolute top-4 right-4">
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              Save ₹
                              {Math.max(
                                ...service.package_plans.map(
                                  (pkg) => pkg.savings_per_booking
                                )
                              )}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {service.sections.find(
                            (s) => s.api_name === "about-this-service"
                          )?.content ||
                            service.description ||
                            "Professional cleaning service tailored to your needs"}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="w-4 h-4 mr-1" />
                              {Math.round(service.slots * 90)} min
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                              4.8
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              ₹
                              {Math.min(
                                ...service.package_plans.map(
                                  (pkg) => pkg.price_per_booking
                                )
                              )}
                            </div>
                            <div className="text-sm text-gray-500">
                              Starting from
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-2 mb-4">
                          {service.package_plans.slice(0, 2).map((pkg) => (
                            <div
                              key={pkg.id}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center space-x-3">
                                <div>
                                  <div className="font-medium text-sm">
                                    {pkg.name}
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    {pkg.total_bookings} booking
                                    {pkg.total_bookings > 1 ? "s" : ""}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-primary">
                                  ₹{pkg.price_per_booking}
                                </div>
                                {pkg.savings_per_booking > 0 && (
                                  <div className="text-xs text-green-600">
                                    Save ₹{pkg.savings_per_booking}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        <Link
                          to={`https://app.namamicleans.com/service/${service.service_code}`}
                          target="_blank"
                        >
                          <Button className="w-full bg-primary text-white hover:bg-primary-600">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="text-center">
                <Link to="/services">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Category Slider */}
          <section className="py-16 bg-gray-50">
            <CategorySlider
              title="Service Categories"
              description="Explore our comprehensive range of professional cleaning categories"
              categories={services}
              viewAllLink="/services#categories"
            />
          </section>

          {/* Service Highlights */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-800 mb-4">
                  What Makes Our Services Special
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Every service comes with comprehensive features and benefits
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.slice(0, 3).map((service) => (
                  <div key={service.service_code} className="text-center">
                    <img
                      src={service.category.icon || "/placeholder.svg"}
                      alt={service.category.name}
                      className="w-16 h-16 mx-auto mb-4 rounded-full"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.sections.find(
                        (s) => s.api_name === "whats-included"
                      )?.content ||
                        "Professional service with quality guarantee and eco-friendly products"}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Starting from</div>
                      <div className="text-2xl font-bold text-primary">
                        ₹
                        {Math.min(
                          ...service.package_plans.map(
                            (pkg) => pkg.price_per_booking
                          )
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        {service.package_plans.length} package
                        {service.package_plans.length > 1 ? "s" : ""} available
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Comparison */}
          <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-800 mb-4">
                  Save More with Our Packages
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Compare our package deals and see how much you can save with
                  bulk bookings
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services
                  .filter((service) =>
                    service.package_plans.some(
                      (pkg) => pkg.savings_per_booking > 0
                    )
                  )
                  .slice(0, 3)
                  .map((service) => (
                    <div
                      key={service.service_code}
                      className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <img
                            src={service.gallery?.[0] || "/placeholder.svg"}
                            alt={service.name}
                            className="w-12 h-12 rounded-lg object-cover mr-4"
                          />
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">
                              {service.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {service.category.name}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {service.package_plans.map((pkg) => (
                            <div
                              key={pkg.id}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div>
                                <div className="font-medium text-sm">
                                  {pkg.name}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {pkg.total_bookings} booking
                                  {pkg.total_bookings > 1 ? "s" : ""}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-2">
                                  <div className="font-bold text-primary">
                                    ₹{pkg.price_per_booking}
                                  </div>
                                  {pkg.savings_per_booking > 0 && (
                                    <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                      Save ₹{pkg.savings_per_booking}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                          <div className="text-center">
                            <div className="text-sm text-primary-700 font-medium">
                              Maximum Savings: ₹
                              {Math.max(
                                ...service.package_plans.map(
                                  (pkg) => pkg.savings_per_booking
                                )
                              )}
                            </div>
                            <div className="text-xs text-primary-600">
                              per booking with{" "}
                              {
                                service.package_plans.find(
                                  (pkg) =>
                                    pkg.savings_per_booking ===
                                    Math.max(
                                      ...service.package_plans.map(
                                        (p) => p.savings_per_booking
                                      )
                                    )
                                )?.name
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="text-center mt-8">
                <Link to="/services">
                  <Button className="bg-primary text-white hover:bg-primary-600">
                    View All Services & Packages
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </>
      ) : loading ? (
        <div className="h-[40vh] flex flex-col items-center justify-center">
          <Loader2 className="animate-spin h-8 w-8 text-primary mb-4" />
          <p className="text-xl text-gray-600">Loading services...</p>
          <p className="text-sm text-gray-500">
            Please wait while we fetch the best services for you
          </p>
        </div>
      ) : (
        <div className="h-[40vh] flex flex-col items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Select Your City
            </h3>
            <p className="text-gray-600 mb-8">
              Please select a city to view our available services and start
              booking
            </p>
            <div className="max-w-md mx-auto">
              <LocationSearch />
            </div>
          </div>
        </div>
      )}

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
