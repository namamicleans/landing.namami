
// types
import { ServiceHomeResponse } from "@/types/types";
import Cookies from "js-cookie";

export const getServices = async (): Promise<ServiceHomeResponse | null> => {
  if (!Cookies.get("selected_city")) return null;
  const url = `${import.meta.env.VITE_SERVER_URL}/api/service/get-service/${JSON.parse(Cookies.get("selected_city"))?.id}`;
  const response = await fetch(url);
  console.log(response, 'res')
  if (!response.ok) return null;
  const data: ServiceHomeResponse = await response.json();
  return data;
}
