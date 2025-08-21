
// types
import { ServiceHomeResponse, ApiResponse, ServiceResult } from "@/types/types";
import Cookies from "js-cookie";

export const getServices = async (): Promise<ServiceResult<ServiceHomeResponse>> => {
  if (!Cookies.get("selected_city")) {
    return {
      success: false,
      data: null,
      message: "Please select a city first.",
      code: "NO_CITY_SELECTED"
    };
  }
  const url = `${import.meta.env.VITE_SERVER_URL}/api/service/get-service/${JSON.parse(Cookies.get("selected_city"))?.id}`;
  try {
    const response = await fetch(url);
    const result: ApiResponse<ServiceHomeResponse> = await response.json();
    if (!result.success) {
      return {
        success: false,
        data: null,
        message: result.message,
        code: result.code
      };
    }
    return {
      success: true,
      data: result.data,
      message: result.message,
      code: result.code
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: "Failed to fetch services.",
      code: "NETWORK_ERROR"
    };
  }
}
