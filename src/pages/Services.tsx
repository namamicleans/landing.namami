import React, { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Clock,
    Star,
    Shield,
    Search,
    Loader2,
    ArrowRight,
    SlidersHorizontal,
    MapPin,
} from "lucide-react";
import { useServices } from "@/hooks/useServices";
import { useCityContext } from "@/context/CityContext";
import SafeImage from "@/components/SafeImage";
import { Service } from "@/types/types";
import {
    getMinPrice,
    getBasePrice,
    getDurationMinutes,
    getAboutContent,
    getMaxSavings,
    getAllPlans,
    getServiceCategories,
} from "@/lib/service-helpers";

const faqItems = [
    {
        q: "How often should I schedule cleaning services?",
        a: "Most customers choose weekly or bi-weekly recurring cleanings for regular maintenance, while others prefer monthly deep cleanings. We can help you determine the best schedule for your specific situation.",
    },
    {
        q: "Do I need to provide cleaning supplies?",
        a: "No, our professional cleaners bring all necessary cleaning supplies and equipment. If you prefer specific products, please let us know in advance.",
    },
    {
        q: "Is your staff bonded and insured?",
        a: "Yes, all our cleaning professionals are thoroughly vetted, bonded, and insured for your peace of mind.",
    },
    {
        q: "Can I request the same cleaning team for recurring services?",
        a: "Absolutely! We strive to send the same team for recurring services. Occasionally scheduling may require a different team, but we always maintain the same quality.",
    },
    {
        q: "What if I'm not satisfied with the cleaning?",
        a: "Your satisfaction is our priority. If you're not completely satisfied, please let us know within 24 hours and we'll return to re-clean at no additional cost.",
    },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const minPrice = getMinPrice(service);
    const basePrice = getBasePrice(service);
    const maxSavings = getMaxSavings(service);
    const duration = getDurationMinutes(service);
    const plans = getAllPlans(service);

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100 flex flex-col">
            <div className="relative">
                <SafeImage
                    src={service.gallery?.[0] || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-44 object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    <Badge className="bg-primary text-white text-xs">{service.category.name}</Badge>
                    {service.is_featured && (
                        <Badge className="bg-secondary text-primary-800 text-xs">Featured</Badge>
                    )}
                </div>
                {maxSavings > 0 && (
                    <div className="absolute top-3 right-3">
                        <Badge className="bg-green-500 text-white text-xs">Save ₹{maxSavings}</Badge>
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 mb-1 text-base">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">
                    {getAboutContent(service)}
                </p>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
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

                <div className="flex items-end justify-between mb-3">
                    <div>
                        <span className="text-xl font-bold text-primary">₹{minPrice}</span>
                        {basePrice > minPrice && (
                            <span className="text-xs text-gray-400 line-through ml-2">₹{basePrice}</span>
                        )}
                        <div className="text-xs text-gray-500">Starting from</div>
                    </div>
                    {plans.length > 0 && (
                        <span className="text-xs text-gray-400">{plans.length} plan{plans.length > 1 ? "s" : ""}</span>
                    )}
                </div>

                <div className="flex gap-2">
                    <Link to={`/service/${service.service_code}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-white text-xs">
                            Details
                        </Button>
                    </Link>
                    <Link
                        to={`https://app.namamicleans.com/service/${service.service_code}`}
                        target="_blank"
                        className="flex-1"
                    >
                        <Button size="sm" className="w-full bg-primary text-white hover:bg-primary-600 text-xs">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const { getServices } = useServices();
    const { selectedCity } = useCityContext();

    const selectedCategory = searchParams.get("category") || "All";

    useEffect(() => {
        setLoading(true);
        getServices(selectedCity?.id).then((data) => {
            setServices(data?.services || []);
            setLoading(false);
        });
    }, [getServices, selectedCity]);

    const categories = useMemo(() => ["All", ...getServiceCategories(services)], [services]);

    const filtered = useMemo(() => {
        let result = services;
        if (selectedCategory !== "All") {
            result = result.filter((s) => s.category.name === selectedCategory);
        }
        if (query.trim()) {
            const q = query.toLowerCase();
            result = result.filter(
                (s) =>
                    s.name.toLowerCase().includes(q) ||
                    s.category.name.toLowerCase().includes(q) ||
                    s.tags.some((t) => t.toLowerCase().includes(q))
            );
        }
        return result;
    }, [services, selectedCategory, query]);

    const featured = filtered.filter((s) => s.is_featured);
    const rest = filtered.filter((s) => !s.is_featured);

    const setCategory = (cat: string) => {
        if (cat === "All") {
            searchParams.delete("category");
        } else {
            searchParams.set("category", cat);
        }
        setSearchParams(searchParams);
    };

    return (
        <>
            <Helmet>
                <title>
                    {selectedCategory !== "All"
                        ? `${selectedCategory} Services – Namami Cleans`
                        : "All Cleaning Services – Namami Cleans"}
                </title>
                <meta
                    name="description"
                    content={`Browse ${selectedCategory !== "All" ? selectedCategory + " " : ""}professional cleaning services from Namami Cleans. Transparent pricing, vetted staff, 100% satisfaction guarantee.`}
                />
                <link
                    rel="canonical"
                    href={`https://www.namamicleans.com/services${selectedCategory !== "All" ? `?category=${encodeURIComponent(selectedCategory)}` : ""}`}
                />
            </Helmet>

            <div className="min-h-screen pt-20">
                {/* Hero */}
                <section className="bg-primary-50 py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-3">
                            {selectedCategory !== "All" ? selectedCategory : "All Cleaning Services"}
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                            Professional cleaning services with vetted staff, transparent pricing, and a 100% satisfaction guarantee.
                        </p>

                        {/* Search */}
                        <div className="max-w-lg mx-auto relative mb-4">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Search services…"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="pl-9 bg-white"
                            />
                        </div>

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
                </section>

                {/* Category Filter */}
                <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
                    <div className="container mx-auto px-4 py-3 overflow-x-auto">
                        <div className="flex gap-2 min-w-max">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                                        selectedCategory === cat
                                            ? "bg-primary text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-24">
                        <Loader2 className="animate-spin h-10 w-10 text-primary mb-4" />
                        <p className="text-gray-500">Loading services…</p>
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-24">
                        <SlidersHorizontal className="mx-auto w-10 h-10 text-gray-300 mb-3" />
                        <p className="text-gray-500">No services match your search.</p>
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => {
                                setQuery("");
                                setCategory("All");
                            }}
                        >
                            Clear filters
                        </Button>
                    </div>
                ) : (
                    <div className="container mx-auto px-4 py-12">
                        {/* Featured */}
                        {featured.length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                                    ⭐ Featured Services
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {featured.map((s) => (
                                        <ServiceCard key={s.service_code} service={s} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Rest */}
                        {rest.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                                    {featured.length > 0 ? "All Services" : "Services"}
                                    <span className="text-base font-normal text-gray-500 ml-3">
                                        ({filtered.length} total)
                                    </span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {rest.map((s) => (
                                        <ServiceCard key={s.service_code} service={s} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* FAQ */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-primary-800 mb-2 text-center">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-center">
                            Find answers to common questions about our cleaning services.
                        </p>
                        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
                            {faqItems.map(({ q, a }) => (
                                <div key={q} className="py-6">
                                    <h3 className="text-lg font-semibold text-primary-800 mb-2">{q}</h3>
                                    <p className="text-gray-600 text-sm">{a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-14 bg-primary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-3">
                            Ready to Experience Our Cleaning Services?
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Book your cleaning service today and enjoy a fresher, cleaner space.
                        </p>
                        <Link to="https://app.namamicleans.com" target="_blank">
                            <Button className="bg-secondary text-primary-800 hover:bg-secondary-600 text-lg px-8 py-3">
                                Book Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Services;
