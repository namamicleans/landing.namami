export interface City {
    id: number;
    name: string;
}

export interface Category {
    id: number;
    name: string;
    icon?: string;
}

export interface ServiceSection {
    id: number;
    api_name: string;
    heading: string;
    content: string;
    description: string;
    icon: string;
}

export interface ServiceHomeResponse {
    services: Service[],
    recently_viewed_services: Service[],
}

export interface ServicePackage {
    id: number;
    name: string;
    icon: string;
    service_code: string;
    service: string;
    price_per_booking: number;
    savings_per_booking: number;
    slots_required: number;
    total_bookings: number;
    total_cost: number;
    total_savings: number;
    validity_days: number;
    is_active: boolean;
}

export interface Service {
    service_code: string;
    name: string;
    description: string;
    category: Category;
    package_plans: ServicePackage[];
    city: string;
    is_active: boolean;
    is_featured: boolean;
    base_price: string;
    price_display: string;
    gallery: string[];
    slots: number;
    min_quantity: number;
    max_quantity: number;
    is_quantity_based: boolean;
    quantity_unit: string | null;
    sections: ServiceSection[];
    tags: string[];
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