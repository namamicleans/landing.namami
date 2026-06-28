export interface City {
    id: number;
    name: string;
}

export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    code: string;
    data: T | null;
    error?: any;
    meta?: {
        pagination?: any;
        additional_info?: any;
    };
}

export interface ServiceResult<T = any> {
    success: boolean;
    data: T | null;
    message: string;
    code?: string;
}

export interface Category {
    id: number;
    name: string;
    icon?: string;
    active?: boolean;
}

export interface ServiceSection {
    id: number;
    api_name: string;
    heading: string;
    content: string;
    description: string;
    icon: string;
}

export interface ServicePackage {
    id: number;
    name: string;
    service_code: string;
    service: string;
    price_per_booking: number;
    savings_per_booking: number;
    total_bookings: number;
    total_cost: number;
    total_savings: number;
    validity_days: number;
    is_active: boolean;
    duration_minutes: number | null;
    frequency_info: Record<string, any> | null;
    group_id: number | null;
    group_name: string | null;
    curated_bundles: any[];
}

export interface PackageGroup {
    id: number;
    name: string;
    description: string;
    order: number;
    plans: ServicePackage[];
}

export interface ServiceVariant {
    id: number;
    name: string;
    description: string;
    base_price: number;
    image: string | null;
    duration_minutes: number;
    features: string | null;
    order: number;
    package_plans: ServicePackage[];
    package_groups: PackageGroup[];
}

export interface ServiceAddon {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string | null;
    features: string | null;
    how_it_works: string | null;
    is_recommended: boolean;
    max_quantity: number;
    duration_minutes: number;
    order: number;
}

export interface Service {
    service_code: string;
    name: string;
    description: string;
    category: Category;
    variants: ServiceVariant[];
    addons: ServiceAddon[];
    city: string;
    is_active: boolean;
    is_featured: boolean;
    base_price: string;
    price_display: string;
    gallery: string[] | null;
    min_quantity: number;
    max_quantity: number;
    is_quantity_based: boolean;
    quantity_unit: string | null;
    sections: ServiceSection[];
    tags: string[];
    rating: number;
    rating_count: number;
    is_favorite?: boolean;
}

export interface ServiceHomeResponse {
    services: Service[];
    recently_viewed_services: Service[];
    favorites: Service[];
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
