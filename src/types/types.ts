export interface City {
    id: number;
    name: string;
}

export interface Category {
    id: string;
    name: string;
    icon?: string;
}


export interface ServiceHomeResponse {
    services: Service[],
    recently_viewed_services: Service[],
}

export interface ServicePackage {
    base_price: number;
    duration: number;
    icon: string;
    id: number;
    is_active: boolean;
    min_visits: number;
    name: string;
    plan_type: {
        name: string;
        duration: number;
    };
    extra_price_per_visit: number;
    service: string
    service_code: string;
}

export interface Service {
    service_code: string;
    name: string;
    description: string;
    category: Category;
    subscription_plans: ServicePackage[];
    city: string;
    is_active: boolean;
    is_featured: boolean;
    available_cities: string[];
    base_price: number;
    gallery: string[] | null;
    slots: number;
    icon: string;
    rating: number;
}

export interface Packages {
    id: number;
    name: string;
    icon: string;
    service_code: string;
    service: string;
    base_price: number;
    min_visits: number;
    plan_type: string;
    duration: string;
    is_active: boolean;
}