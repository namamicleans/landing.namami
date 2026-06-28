import { useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { getServices as getServicesApi } from "@/services/service";
import { getCities as getCitiesApi } from "@/services/city";
import { City, ServiceHomeResponse } from "@/types/types";

export const useServices = () => {
    const { toast } = useToast();

    const getServices = useCallback(async (cityId?: number): Promise<ServiceHomeResponse | null> => {
        const result = await getServicesApi(cityId);

        if (!result.success) {
            if (result.code !== "NO_CITY") {
                toast({
                    title: "Error",
                    description: result.message,
                    variant: "destructive",
                });
            }
            return null;
        }

        return result.data;
    }, [toast]);

    return { getServices };
};

export const useCities = () => {
    const getCities = useCallback(async (): Promise<City[]> => {
        const result = await getCitiesApi();
        // Silently return empty on failure — callers handle the empty-state UI
        return result.success ? (result.data || []) : [];
    }, []);

    return { getCities };
};
