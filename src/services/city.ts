import Cookies from "js-cookie";
// types
import { City, ApiResponse, ServiceResult } from "@/types/types";

// export const getCitiesById = async ({ state_id }: { state_id: number }) => {
//     const response = await fetchWithSession<null, City[]>(apiGet, `/api/service/cities/${state_id}`);
//     return response;
// }

export const getCities = async (): Promise<ServiceResult<City[]>> => {
    const url = `${import.meta.env.VITE_SERVER_URL}/api/service/accessible-cities/`;
    try {
        const response = await fetch(url);
        const result: ApiResponse<City[]> = await response.json();
        console.log("Fetched cities:", result);
        if (!result.success) {
            return {
                success: false,
                data: [],
                message: result.message,
                code: result.code
            };
        }
        return {
            success: true,
            data: result.data || [],
            message: result.message,
            code: result.code
        };
    } catch (error) {
        return {
            success: false,
            data: [],
            message: "Failed to fetch cities.",
            code: "NETWORK_ERROR"
        };
    }
}

export const setSelectedCity = (city: City) => {
    Cookies.set("selected_city", JSON.stringify(city), { expires: 365 });
};

export const getSelectedCity = () => {
    const city = Cookies.get("selected_city");
    return city ? JSON.parse(city) : null;
}
