import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { City } from "@/types/types";
import { getSelectedCity, setSelectedCity as persistCity } from "@/services/city";

interface CityContextValue {
    selectedCity: City | null;
    setSelectedCity: (city: City) => void;
}

const CityContext = createContext<CityContextValue>({
    selectedCity: null,
    setSelectedCity: () => {},
});

export const CityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedCity, setCity] = useState<City | null>(() => getSelectedCity());

    const setSelectedCity = useCallback((city: City) => {
        persistCity(city);
        setCity(city);
    }, []);

    return (
        <CityContext.Provider value={{ selectedCity, setSelectedCity }}>
            {children}
        </CityContext.Provider>
    );
};

export const useCityContext = () => useContext(CityContext);
