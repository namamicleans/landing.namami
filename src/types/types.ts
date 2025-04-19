export interface City {
    id: number;
    name: string;
}

export interface Service {
    service_code: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    gallery: string[];
    is_active: boolean;
    is_featured: boolean;
    slots: number;
    tags: string[];
    city: string;
    packages: Packages[];
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