import { ServiceHomeResponse, ApiResponse, ServiceResult } from "@/types/types";
import { getCities, getSelectedCity, setSelectedCity } from "./city";

const getActiveCityId = async (): Promise<number | null> => {
    const selected = getSelectedCity();
    if (selected) return selected.id;

    // Auto-select first accessible city so catalog loads without user interaction
    const result = await getCities();
    if (result.success && result.data && result.data.length > 0) {
        setSelectedCity(result.data[0]);
        return result.data[0].id;
    }
    return null;
};

export const getServices = async (cityId?: number): Promise<ServiceResult<ServiceHomeResponse>> => {
    const id = cityId ?? (await getActiveCityId());

    if (!id) {
        return {
            success: false,
            data: null,
            message: "No city available.",
            code: "NO_CITY",
        };
    }

    const url = `${import.meta.env.VITE_SERVER_URL}/api/service/get-service/${id}`;
    try {
        const response = await fetch(url);
        const result: ApiResponse<ServiceHomeResponse> = await response.json();
        if (!result.success) {
            return {
                success: false,
                data: null,
                message: result.message,
                code: result.code,
            };
        }
        return {
            success: true,
            data: result.data,
            message: result.message,
            code: result.code,
        };
    } catch {
        return {
            success: false,
            data: null,
            message: "Failed to fetch services.",
            code: "NETWORK_ERROR",
        };
    }
};
