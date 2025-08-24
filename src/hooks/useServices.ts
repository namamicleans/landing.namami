import { useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { getServices as getServicesApi } from "@/services/service";
import { getCities as getCitiesApi } from "@/services/city";
import { City, ServiceHomeResponse } from "@/types/types";

export const useServices = () => {
  const { toast } = useToast();

  const getServices = useCallback(async (): Promise<ServiceHomeResponse | null> => {
    const result = await getServicesApi();
    
    if (!result.success) {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
      return null;
    }

    return result.data;
  }, [toast]);

  return { getServices };
};

export const useCities = () => {
  const { toast } = useToast();

  const getCities = useCallback(async (): Promise<City[]> => {
    const result = await getCitiesApi();
    
    if (!result.success) {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
      return [];
    }
  
    return result.data || [];
  }, [toast]);

  return { getCities };
};
