import React, { useState, useEffect } from "react";
import { MapPin, Building2, Locate, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { getCities, setSelectedCity, getSelectedCity } from "@/services/city";
import { City } from "@/types/types";

interface LocationSearchProps {
  className?: string;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ className }) => {
  const [location, setLocation] = useState<string>(null);
  const [cities, setCities] = useState<City[]>([]);
  const [isLocating, setIsLocating] = useState(false);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const cities = await getCities();
      setCities(cities);
    })()
  }, [])

  useEffect(() => {
    const data = getSelectedCity();
    console.log("Response:", data);
    // if (selectedCity) setLocation(selectedCity.name);
  }, []);

  const handleCitySelect = (city: City) => {
    setLocation(city.name);
    setSelectedCity(city);
    setSuggestionsOpen(false);
  }


  const handleLocate = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      alert("Not available at the moment")
      // navigator.geolocation.getCurrentPosition(
      //   (position) => {
      //     // Simulated geolocation result
      //     setLocation("Downtown, New York");
      //     setIsLocating(false);
      //   },
      //   (error) => {
      //     console.error("Error getting location:", error);
      //     setIsLocating(false);
      //   },
      // );
    } else {
      setIsLocating(false);
    }
  };

  return (
    <div className={cn("bg-white rounded-md shadow-lg overflow-hidden", className)}>
      <div className="flex items-stretch">
        {/* Current Location Section */}
        <div className="relative flex-1 flex items-center border-r border-gray-200">
          <div className="py-3 px-4">
            <MapPin className="h-6 w-6 text-primary" />
          </div>

          <Popover open={suggestionsOpen} onOpenChange={setSuggestionsOpen}>
            <PopoverTrigger asChild>
              <Input
                type="text"
                value={location}
                placeholder="Enter your location"
                className="w-full py-3 px-0 border-0 focus:ring-0 focus:outline-none text-gray-700"
                onChange={(e) => {
                  setLocation(e.target.value);
                  if (!suggestionsOpen) setSuggestionsOpen(true);
                }}
                onFocus={() => setSuggestionsOpen(true)}
              />
            </PopoverTrigger>
            <PopoverContent align="start" className="mt-2 w-[50svw] md:w-[24svw] p-0">
              <div className="max-h-40 overflow-y-auto">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => { handleCitySelect(city) }}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Button onClick={handleLocate} className="m-2 w-4 h-fit md:size-fit">
            <Locate className="h-3 w-3 md:h-5 md:w-5" />
            <span className="hidden md:block">Locate</span>
          </Button>
        </div>

        {/* City Selection Dropdown */}
        <div className="relative">
          <div className="flex items-center focus:ring-0 focus:outline-none h-full w-30 md:w-30 px-3 py-3 text-gray-700 hover:bg-gray-50 transition-colors gap-2 cursor-pointer">
            <Building2 className="h-5 w-5 mr-1 text-gray-500" />
            <span>{location ? location : 'Select City'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSearch;
