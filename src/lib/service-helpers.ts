import { Service, ServicePackage } from "@/types/types";

export const getAllPlans = (service: Service): ServicePackage[] =>
    service.variants.flatMap((v) => v.package_plans);

export const getMinPrice = (service: Service): number => {
    const plans = getAllPlans(service);
    if (plans.length === 0) return parseFloat(service.base_price) || 0;
    return Math.min(...plans.map((p) => p.price_per_booking));
};

export const getBasePrice = (service: Service): number =>
    parseFloat(service.base_price) || 0;

export const getMaxSavings = (service: Service): number => {
    const plans = getAllPlans(service);
    if (plans.length === 0) return 0;
    return Math.max(...plans.map((p) => p.savings_per_booking));
};

export const getDurationMinutes = (service: Service): number =>
    service.variants[0]?.duration_minutes || 90;

export const getAboutContent = (service: Service): string =>
    service.sections.find((s) => s.api_name === "about-this-service")?.content ||
    service.description ||
    "Professional cleaning service tailored to your needs";

export const getWhatsIncluded = (service: Service): string[] => {
    const content = service.sections.find((s) => s.api_name === "whats-included")?.content;
    if (!content) return ["Professional cleaning", "Eco-friendly products", "Insured service"];
    return content.split(".").map((f) => f.trim()).filter((f) => f.length > 0).slice(0, 4);
};

export const getServiceCategories = (services: Service[]): string[] => {
    const cats = new Set(services.map((s) => s.category.name));
    return Array.from(cats);
};

export const groupByCategory = (services: Service[]): Record<string, Service[]> => {
    return services.reduce<Record<string, Service[]>>((acc, s) => {
        const cat = s.category.name;
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(s);
        return acc;
    }, {});
};
