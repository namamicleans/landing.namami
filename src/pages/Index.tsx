import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    ArrowRight,
    Check,
    Users,
    Award,
    Shield,
    Star,
    Loader2,
    Clock,
    MapPin,
    Sparkles,
    ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TestimonialSlider from "@/components/TestimonialSlider";
import LocationSearch from "@/components/LocationSearch";
import SafeImage from "@/components/SafeImage";
import { useServices } from "@/hooks/useServices";
import { useCityContext } from "@/context/CityContext";
import { Service } from "@/types/types";
import {
    getMinPrice,
    getBasePrice,
    getDurationMinutes,
    getAboutContent,
    getMaxSavings,
    getAllPlans,
    groupByCategory,
} from "@/lib/service-helpers";

const testimonials = [
    { name: "Aman Sharma", videoId: "lh_rCvk-cSM" },
    { name: "Sanjay Seth", videoId: "n4Ovhfth4K0" },
    { name: "Dhruv Seth", videoId: "1efrVAePcpo" },
    { name: "Vivek", videoId: "DeChJZhUwV0" },
];

const heroImages = [
    "/lovable-uploads/hero1.jpg",
    "/lovable-uploads/hero2.jpg",
    "/lovable-uploads/hero3.jpg",
];

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Namami Cleans",
    description:
        "Professional home cleaning services at your doorstep. Book online, we clean, you relax.",
    url: "https://www.namamicleans.com",
    logo: "https://www.namamicleans.com/namami_logo.png",
    sameAs: [],
    serviceType: "Cleaning Service",
    areaServed: "India",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Home Cleaning Services",
    },
};

const Index = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const { getServices } = useServices();
    const { selectedCity } = useCityContext();

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setLoading(true);
        getServices(selectedCity?.id).then((data) => {
            setServices(data?.services || []);
            setLoading(false);
        });
    }, [getServices, selectedCity]);

    const featured = services.filter((s) => s.is_featured).slice(0, 6);
    const byCategory = groupByCategory(services);
    const categoryNames = Object.keys(byCategory);
    const totalPlans = services.reduce((sum, s) => sum + getAllPlans(s).length, 0);
    const minStartingPrice = services.length
        ? Math.min(...services.map(getMinPrice))
        : 0;

    return (
        <>
            <Helmet>
                <title>Namami Cleans – Professional Home Cleaning Services</title>
                <meta
                    name="description"
                    content="Book professional home cleaning services at your doorstep. Vetted cleaners, transparent pricing, 100% satisfaction guarantee. Serving cities across India."
                />
                <meta
                    name="keywords"
                    content="home cleaning services, professional cleaning, deep cleaning, sofa cleaning, bathroom cleaning, India"
                />
                <link rel="canonical" href="https://www.namamicleans.com/" />
                <meta property="og:title" content="Namami Cleans – Professional Home Cleaning Services" />
                <meta
                    property="og:description"
                    content="Book professional home cleaning services at your doorstep. Vetted cleaners, transparent pricing, 100% satisfaction guarantee."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.namamicleans.com/" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="min-h-screen">
                {/* ── Hero ── */}
                <section className="relative h-[85vh] min-h-[560px]">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${activeImage === index ? "opacity-100" : "opacity-0"}`}
                        >
                            <img
                                src={image}
                                alt="Professional cleaning service"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                    <div className="hero-gradient" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container mx-auto px-4 text-center">
                            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                                <Sparkles className="w-3 h-3 mr-1" />
                                Trusted by 10,000+ happy homes
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-down leading-tight">
                                Professional Cleaning
                                <br />
                                <span className="text-secondary">At Your Doorstep</span>
                            </h1>
                            <p className="text-xl text-white/90 mb-8 md:max-w-2xl mx-auto animate-slide-up">
                                Vetted cleaners, transparent pricing, and a spotless home — every time.
                            </p>
                            <div className="max-w-3xl mx-auto animate-fade-in mb-6">
                                <LocationSearch />
                            </div>
                            <div className="flex items-center justify-center gap-6 text-white/80 text-sm flex-wrap">
                                <span className="flex items-center gap-1">
                                    <Check className="w-4 h-4 text-secondary" /> Background-verified staff
                                </span>
                                <span className="flex items-center gap-1">
                                    <Check className="w-4 h-4 text-secondary" /> 100% satisfaction guarantee
                                </span>
                                <span className="flex items-center gap-1">
                                    <Check className="w-4 h-4 text-secondary" /> Easy online booking
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Stats bar ── */}
                {!loading && services.length > 0 && (
                    <section className="bg-primary py-4">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
                                <div>
                                    <div className="text-2xl font-bold">{services.length}+</div>
                                    <div className="text-xs text-white/80">Services Available</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">{categoryNames.length}</div>
                                    <div className="text-xs text-white/80">Service Categories</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">
                                        {minStartingPrice > 0 ? `₹${minStartingPrice}` : "—"}
                                    </div>
                                    <div className="text-xs text-white/80">Starting Price</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">24/7</div>
                                    <div className="text-xs text-white/80">Customer Support</div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ── Category Grid ── */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary-800 mb-3">
                                Browse by Category
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
                                From deep cleaning to specialised care — find the service that fits your home.
                            </p>
                            <div className="flex items-center justify-center gap-2">
                                {loading ? (
                                    <Badge variant="secondary" className="gap-1.5 text-sm px-3 py-1">
                                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                        Loading services…
                                    </Badge>
                                ) : selectedCity ? (
                                    <Badge variant="secondary" className="gap-1.5 text-sm px-3 py-1">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {selectedCity.name}
                                    </Badge>
                                ) : null}
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-16">
                                <Loader2 className="animate-spin h-10 w-10 text-primary mb-4" />
                                <p className="text-gray-500">Loading services…</p>
                            </div>
                        ) : categoryNames.length === 0 ? (
                            <div className="text-center py-12">
                                <MapPin className="mx-auto w-10 h-10 text-gray-300 mb-3" />
                                <p className="text-gray-500 mb-4">
                                    We're not available in your area yet — select a city above to check.
                                </p>
                                <LocationSearch />
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {categoryNames.map((cat) => {
                                    const catServices = byCategory[cat];
                                    const icon = catServices[0]?.category.icon
                                        || catServices[0]?.gallery?.[0];
                                    const minPrice = Math.min(...catServices.map(getMinPrice));
                                    return (
                                        <Link
                                            key={cat}
                                            to={`/services?category=${encodeURIComponent(cat)}`}
                                            className="group bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-primary/30"
                                        >
                                            {icon ? (
                                                <SafeImage
                                                    src={icon}
                                                    alt={cat}
                                                    className="w-14 h-14 rounded-full object-cover mx-auto mb-3 group-hover:scale-105 transition-transform"
                                                />
                                            ) : (
                                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <Sparkles className="w-6 h-6 text-primary" />
                                                </div>
                                            )}
                                            <p className="font-semibold text-sm text-gray-900 mb-1">{cat}</p>
                                            <p className="text-xs text-gray-500">{catServices.length} service{catServices.length > 1 ? "s" : ""}</p>
                                            {minPrice > 0 && (
                                                <p className="text-xs text-primary font-medium mt-1">from ₹{minPrice}</p>
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}

                        {!loading && services.length > 0 && (
                            <div className="text-center mt-10">
                                <Link to="/services">
                                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                        View All Services <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                {/* ── Featured Services ── */}
                {!loading && featured.length > 0 && (
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-primary-800 mb-3">
                                    Featured Services
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Our most popular cleaning services — loved by thousands of customers
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {featured.map((service) => {
                                    const minPrice = getMinPrice(service);
                                    const basePrice = getBasePrice(service);
                                    const maxSavings = getMaxSavings(service);
                                    const plans = getAllPlans(service);
                                    const duration = getDurationMinutes(service);

                                    return (
                                        <div
                                            key={service.service_code}
                                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                                        >
                                            <div className="relative">
                                                <SafeImage
                                                    src={service.gallery?.[0] || "/placeholder.svg"}
                                                    alt={service.name}
                                                    className="w-full h-48 object-cover"
                                                />
                                                <div className="absolute top-3 left-3">
                                                    <Badge className="bg-primary text-white text-xs">
                                                        {service.category.name}
                                                    </Badge>
                                                </div>
                                                {maxSavings > 0 && (
                                                    <div className="absolute top-3 right-3">
                                                        <Badge className="bg-green-500 text-white text-xs">
                                                            Save ₹{maxSavings}
                                                        </Badge>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="p-5">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">{service.name}</h3>
                                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                    {getAboutContent(service)}
                                                </p>

                                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3.5 h-3.5" /> {duration} min
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                                        {service.rating}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Shield className="w-3.5 h-3.5 text-green-500" /> Insured
                                                    </span>
                                                </div>

                                                <div className="flex items-end justify-between mb-4">
                                                    <div>
                                                        <div className="text-2xl font-bold text-primary">₹{minPrice}</div>
                                                        {basePrice > minPrice && (
                                                            <div className="text-xs text-gray-400 line-through">₹{basePrice}</div>
                                                        )}
                                                        <div className="text-xs text-gray-500">Starting from</div>
                                                    </div>
                                                    {plans.length > 0 && (
                                                        <div className="text-right text-xs text-gray-500">
                                                            {plans.length} plan{plans.length > 1 ? "s" : ""} available
                                                        </div>
                                                    )}
                                                </div>

                                                {plans.slice(0, 2).map((pkg) => (
                                                    <div
                                                        key={pkg.id}
                                                        className="flex items-center justify-between p-2 bg-gray-50 rounded-lg mb-2"
                                                    >
                                                        <div>
                                                            <div className="font-medium text-xs">{pkg.name}</div>
                                                            <div className="text-xs text-gray-500">
                                                                {pkg.total_bookings} booking{pkg.total_bookings > 1 ? "s" : ""}
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="font-bold text-primary text-sm">
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

                                                <div className="flex gap-2 mt-3">
                                                    <Link
                                                        to={`/service/${service.service_code}`}
                                                        className="flex-1"
                                                    >
                                                        <Button variant="outline" className="w-full text-sm border-primary text-primary hover:bg-primary hover:text-white">
                                                            View Details
                                                        </Button>
                                                    </Link>
                                                    <Link
                                                        to={`https://app.namamicleans.com/service/${service.service_code}`}
                                                        target="_blank"
                                                        className="flex-1"
                                                    >
                                                        <Button className="w-full text-sm bg-primary text-white hover:bg-primary-600">
                                                            Book Now
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="text-center">
                                <Link to="/services">
                                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                        View All Services <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* ── Why Choose Us ── */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-primary-800 mb-6">
                                    Why Choose Namami Cleans?
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    We're committed to providing exceptional cleaning services that exceed your expectations. Our team of professionals is trained to deliver consistent quality with attention to detail.
                                </p>
                                <div className="space-y-5">
                                    {[
                                        {
                                            icon: Users,
                                            title: "Professional Staff",
                                            desc: "Thoroughly vetted, trained, and insured cleaning professionals for your peace of mind.",
                                        },
                                        {
                                            icon: Award,
                                            title: "Quality Guaranteed",
                                            desc: "Not satisfied? We'll return and re-clean at no extra cost — 100% guaranteed.",
                                        },
                                        {
                                            icon: Shield,
                                            title: "Secure Booking",
                                            desc: "Simple online booking with secure payment options and transparent pricing.",
                                        },
                                    ].map(({ icon: Icon, title, desc }) => (
                                        <div key={title} className="flex items-start">
                                            <div className="mr-4 bg-secondary-100 p-2 rounded-full shrink-0">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                                                <p className="text-gray-600 text-sm">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
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
                                    className="rounded-lg shadow-xl w-full object-cover"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                                    <div className="flex items-center">
                                        <div className="bg-secondary-500 p-2 rounded-full mr-3">
                                            <Check className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary-800 text-sm">100% Satisfaction</p>
                                            <p className="text-gray-600 text-xs">Guaranteed Service</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── How It Works ── */}
                <section className="py-16 bg-primary-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary-800 mb-3">
                                How It Works
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Get your home sparkling clean in three simple steps.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    title: "Choose & Book",
                                    desc: "Select a service, pick a date and time, and book securely in minutes.",
                                },
                                {
                                    step: "2",
                                    title: "We Clean",
                                    desc: "Our trained professional arrives on schedule and delivers a thorough clean.",
                                },
                                {
                                    step: "3",
                                    title: "Relax & Enjoy",
                                    desc: "Sit back and enjoy your clean space. Rate us and schedule your next visit.",
                                },
                            ].map(({ step, title, desc }) => (
                                <div key={step} className="text-center p-6 bg-white rounded-lg shadow-sm">
                                    <div className="w-14 h-14 bg-secondary text-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                        {step}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-primary-800">{title}</h3>
                                    <p className="text-gray-600 text-sm">{desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <Link to="https://app.namamicleans.com" target="_blank">
                                <Button className="bg-primary text-white hover:bg-primary-600">
                                    Book Your Cleaning Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── Testimonials ── */}
                <section className="py-16 bg-white">
                    <TestimonialSlider
                        title="What Our Customers Say"
                        description="Don't just take our word for it. Hear from our satisfied customers."
                        testimonials={testimonials}
                    />
                </section>

                {/* ── Captain CTA ── */}
                <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-700 text-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Become a Cleaning Captain</h2>
                                <p className="mb-6 text-white/90">
                                    Join our team of professional cleaners and enjoy flexible hours, competitive pay, and a supportive work environment.
                                </p>
                                <ul className="space-y-2 mb-8 text-sm">
                                    {[
                                        "Flexible working hours",
                                        "Competitive pay and benefits",
                                        "Training and growth opportunities",
                                        "Supportive team environment",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <Check className="text-secondary shrink-0" size={16} /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/hiring/captain">
                                    <Button className="bg-secondary text-primary-800 hover:bg-secondary-600">
                                        Join Our Team
                                    </Button>
                                </Link>
                            </div>
                            <div className="relative h-80 lg:h-96">
                                <img
                                    src="/lovable-uploads/captain_cta.jpg"
                                    alt="Join our cleaning team"
                                    className="rounded-lg shadow-xl w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Final CTA ── */}
                <section className="py-16 bg-primary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-3">
                            Ready for a Cleaner Home?
                        </h2>
                        <p className="text-white/90 mb-8 max-w-xl mx-auto">
                            Experience the Namami Cleans difference. Book today and enjoy a fresher, healthier space.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="https://app.namamicleans.com" target="_blank">
                                <Button className="bg-secondary text-primary-800 hover:bg-secondary-600 text-lg px-8 py-3">
                                    Book Now
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                                    Browse Services <ChevronRight className="ml-1 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Index;
