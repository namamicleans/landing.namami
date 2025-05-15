import Cookies from "js-cookie";
// types
import { City } from "@/types/types";

// export const getCitiesById = async ({ state_id }: { state_id: number }) => {
//     const response = await fetchWithSession<null, City[]>(apiGet, `/api/service/cities/${state_id}`);
//     return response;
// }

export const getCities = async (): Promise<City[]> => {
    const url = `${import.meta.env.VITE_SERVER_URL}/api/service/accessible-cities/`;
    const response = await fetch(url);
    const data: City[] = await response.json();
    return data;
}

export const setSelectedCity = (city: City) => {
    Cookies.set("selected_city", JSON.stringify(city), { expires: 365 });
};

export const getSelectedCity = () => {
    const city = Cookies.get("selected_city");
    return city ? JSON.parse(city) : null;
}
