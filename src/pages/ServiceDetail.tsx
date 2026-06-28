import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    Clock,
    Star,
    Shield,
    Check,
    ArrowLeft,
    Loader2,
    ChevronDown,
    ChevronUp,
    Tag,
    Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SafeImage from "@/components/SafeImage";
import { Service, ServiceVariant } from "@/types/types";
import {
    getMinPrice,
    getBasePrice,
    getDurationMinutes,
    getAllPlans,
    getMaxSavings,
} from "@/lib/service-helpers";

const fetchServiceDetail = async (serviceCode: string, serverUrl: string): Promise<Service | null> => {
    try {
        const res = await fetch(`${serverUrl}/api/service/get-service-detail/${serviceCode}/`);
        const json = await res.json();
        if (json.success) return json.data as Service;
        return null;
    } catch {
        return null;
    }
};

const VariantCard: React.FC<{ variant: ServiceVariant; serviceCode: string }> = ({
    variant,
    serviceCode,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-4 flex items-start justify-between gap-4 bg-white">
                <div className="flex gap-3">
                    {variant.image && (
                        <img
                            src={variant.image}
                            alt={variant.name}
                            className="w-16 h-16 rounded-lg object-cover shrink-0"
                        />
                    )}
                    <div>
                        <h3 className="font-semibold text-gray-900">{variant.name}</h3>
                        {variant.description && (
                            <p className="text-sm text-gray-600 mt-0.5 line-clamp-2">{variant.description}</p>
                        )}
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                            {variant.duration_minutes > 0 && (
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {variant.duration_minutes} min
                                </span>
                            )}
                            <span className="flex items-center gap-1">
                                <Shield className="w-3 h-3 text-green-500" /> Insured
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-right shrink-0">
                    <div className="text-lg font-bold text-primary">₹{variant.base_price}</div>
                    <div className="text-xs text-gray-500">base price</div>
                </div>
            </div>

            {variant.package_plans.length > 0 && (
                <>
                    <button
                        onClick={() => setOpen((o) => !o)}
                        className="w-full flex items-center justify-between px-4 py-2.5 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        <span>{variant.package_plans.length} Package Plan{variant.package_plans.length > 1 ? "s" : ""} Available</span>
                        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {open && (
                        <div className="divide-y divide-gray-100">
                            {variant.package_plans.map((plan) => (
                                <div key={plan.id} className="px-4 py-3 flex items-center justify-between bg-white">
                                    <div>
                                        <div className="font-medium text-sm text-gray-900">{plan.name}</div>
                                        <div className="text-xs text-gray-500">
                                            {plan.total_bookings} booking{plan.total_bookings > 1 ? "s" : ""} · valid {plan.validity_days} days
                                        </div>
                                        {plan.frequency_info && (
                                            <div className="text-xs text-primary mt-0.5">
                                                {(plan.frequency_info as any).name}
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-primary">₹{plan.price_per_booking}</div>
                                        <div className="text-xs text-gray-400">per booking</div>
                                        {plan.savings_per_booking > 0 && (
                                            <div className="text-xs text-green-600 font-medium">
                                                Save ₹{plan.savings_per_booking}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}

            <div className="p-3 bg-gray-50 border-t border-gray-100">
                <Link
                    to={`https://app.namamicleans.com/service/${serviceCode}`}
                    target="_blank"
                    className="block"
                >
                    <Button className="w-full bg-primary text-white hover:bg-primary-600" size="sm">
                        Book {variant.name}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

const ServiceDetail = () => {
    const { serviceCode } = useParams<{ serviceCode: string }>();
    const navigate = useNavigate();
    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeGallery, setActiveGallery] = useState(0);
    const [expandedSection, setExpandedSection] = useState<number | null>(0);

    useEffect(() => {
        if (!serviceCode) return;
        setLoading(true);
        fetchServiceDetail(serviceCode, import.meta.env.VITE_SERVER_URL).then((s) => {
            setService(s);
            setLoading(false);
        });
    }, [serviceCode]);

    if (loading) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <Loader2 className="animate-spin h-10 w-10 text-primary" />
            </div>
        );
    }

    if (!service) {
        return (
            <div className="min-h-screen pt-20 flex flex-col items-center justify-center gap-4">
                <p className="text-gray-500">Service not found.</p>
                <Button variant="outline" onClick={() => navigate("/services")}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Browse All Services
                </Button>
            </div>
        );
    }

    const minPrice = getMinPrice(service);
    const basePrice = getBasePrice(service);
    const maxSavings = getMaxSavings(service);
    const duration = getDurationMinutes(service);
    const gallery = service.gallery || [];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
            "@type": "LocalBusiness",
            name: "Namami Cleans",
            url: "https://www.namamicleans.com",
        },
        serviceType: service.category.name,
        areaServed: service.city || "India",
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: minPrice,
            highPrice: basePrice,
            offerCount: getAllPlans(service).length,
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: service.rating,
            reviewCount: service.rating_count,
        },
    };

    return (
        <>
            <Helmet>
                <title>{service.name} – Namami Cleans</title>
                <meta
                    name="description"
                    content={`Book ${service.name} in ${service.city || "your city"}. Starting from ₹${minPrice}. Vetted professionals, 100% satisfaction guarantee.`}
                />
                <link
                    rel="canonical"
                    href={`https://www.namamicleans.com/service/${service.service_code}`}
                />
                <meta property="og:title" content={`${service.name} – Namami Cleans`} />
                <meta
                    property="og:description"
                    content={`Professional ${service.name} starting from ₹${minPrice}. Book online with Namami Cleans.`}
                />
                {gallery[0] && <meta property="og:image" content={gallery[0]} />}
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="min-h-screen pt-20 bg-gray-50">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link to="/" className="hover:text-primary">Home</Link>
                        <span>/</span>
                        <Link to="/services" className="hover:text-primary">Services</Link>
                        <span>/</span>
                        <Link
                            to={`/services?category=${encodeURIComponent(service.category.name)}`}
                            className="hover:text-primary"
                        >
                            {service.category.name}
                        </Link>
                        <span>/</span>
                        <span className="text-gray-800 font-medium">{service.name}</span>
                    </nav>
                </div>

                <div className="container mx-auto px-4 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left: Gallery + Details */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Gallery */}
                            {gallery.length > 0 && (
                                <div>
                                    <div className="rounded-xl overflow-hidden aspect-video bg-gray-200">
                                        <SafeImage
                                            src={gallery[activeGallery]}
                                            alt={service.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {gallery.length > 1 && (
                                        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                                            {gallery.map((img, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setActiveGallery(i)}
                                                    className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${i === activeGallery ? "border-primary" : "border-transparent"}`}
                                                >
                                                    <SafeImage src={img} alt="" className="w-full h-full object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Header */}
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <Badge className="bg-primary/10 text-primary border-0">
                                        {service.category.name}
                                    </Badge>
                                    {service.is_featured && (
                                        <Badge className="bg-secondary/20 text-primary-800 border-0">Featured</Badge>
                                    )}
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.name}</h1>
                                {service.description && (
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                )}

                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                    <span className="flex items-center gap-1.5">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        {service.rating} ({service.rating_count} reviews)
                                    </span>
                                    {duration > 0 && (
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4" /> {duration} min per session
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1.5">
                                        <Shield className="w-4 h-4 text-green-500" /> Insured professionals
                                    </span>
                                </div>

                                {service.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                <Tag className="w-3 h-3" /> {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Sections (accordion) */}
                            {service.sections.length > 0 && (
                                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                    {service.sections.map((section, i) => (
                                        <div key={section.id} className="border-b border-gray-100 last:border-0">
                                            <button
                                                onClick={() => setExpandedSection(expandedSection === i ? null : i)}
                                                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="font-semibold text-gray-900">{section.heading}</span>
                                                {expandedSection === i ? (
                                                    <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                                                ) : (
                                                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                                                )}
                                            </button>
                                            {expandedSection === i && (
                                                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                                                    {section.content}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Addons */}
                            {service.addons.length > 0 && (
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Plus className="w-5 h-5 text-primary" /> Available Add-ons
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {service.addons.map((addon) => (
                                            <div key={addon.id} className="border border-gray-200 rounded-lg p-3 flex gap-3">
                                                {addon.image && (
                                                    <img
                                                        src={addon.image}
                                                        alt={addon.name}
                                                        className="w-12 h-12 rounded-lg object-cover shrink-0"
                                                    />
                                                )}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between gap-2">
                                                        <span className="font-medium text-sm text-gray-900 truncate">{addon.name}</span>
                                                        {addon.is_recommended && (
                                                            <Badge className="bg-orange-100 text-orange-700 border-0 text-xs shrink-0">Recommended</Badge>
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{addon.description}</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="font-bold text-primary text-sm">+₹{addon.price}</span>
                                                        {addon.duration_minutes > 0 && (
                                                            <span className="text-xs text-gray-400">+{addon.duration_minutes} min</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right: Sticky Pricing / Booking */}
                        <div className="space-y-4">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                                <div className="mb-4">
                                    <div className="text-3xl font-bold text-primary">₹{minPrice}</div>
                                    {basePrice > minPrice && (
                                        <div className="text-sm text-gray-400 line-through">₹{basePrice}</div>
                                    )}
                                    {maxSavings > 0 && (
                                        <div className="text-sm text-green-600 font-medium">
                                            Save up to ₹{maxSavings} with packages
                                        </div>
                                    )}
                                    <div className="text-xs text-gray-500 mt-1">Starting price per booking</div>
                                </div>

                                <Separator className="my-4" />

                                <ul className="space-y-2 text-sm text-gray-700 mb-5">
                                    {[
                                        "Background-verified professionals",
                                        "Eco-friendly products",
                                        "100% satisfaction guarantee",
                                        "Flexible rescheduling",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={`https://app.namamicleans.com/service/${service.service_code}`}
                                    target="_blank"
                                >
                                    <Button className="w-full bg-primary text-white hover:bg-primary-600 mb-3">
                                        Book Now
                                    </Button>
                                </Link>
                                <p className="text-xs text-center text-gray-400">
                                    No advance payment required · Cancel anytime
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Variants */}
                    {service.variants.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-5">
                                Choose Your Plan
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.variants.map((variant) => (
                                    <VariantCard
                                        key={variant.id}
                                        variant={variant}
                                        serviceCode={service.service_code}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ServiceDetail;
