import React from "react";
import { Link } from "react-router-dom";
import { Clock, Crown, Star, Tags } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface ServicePackage {
  type: "monthly" | "yearly";
  price: number;
  originalPrice: number;
  frequency: number;
  service_code: string
}

interface ServiceCardProps {
  id: string;
  title: string;
  description?: string;
  className?: string;
  image?: string;
  category?: string;
  price?: number;
  originalPrice?: number;
  duration?: string;
  rating?: number;
  packages?: ServicePackage[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  className,
  image,
  category,
  price,
  originalPrice,
  duration,
  rating = 4.5,
  packages,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden mb-2",
        className,
      )}
    >
      <div className="relative">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
          }
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          {rating && (
            <div className="flex items-center text-xs">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-gray-700">{rating}</span>
            </div>
          )}
        </div>

        {category && <p className="text-sm text-gray-600 mb-2">{category}</p>}

        {(price || originalPrice) && (
          <div className="flex items-center gap-2 mb-1">
            {price && (
              <span className="text-base font-semibold">
                Starts from ₹{price}
              </span>
            )}
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">
                ₹{originalPrice}
              </span>
            )}
            {duration && (
              <span className="flex items-center gap-1 text-gray-500 text-sm border border-gray-200 rounded px-1">
                <Clock size="14" /> {duration}
              </span>
            )}
          </div>
        )}

        <Link
          to={`https://app.namamicleans.com/service/${id}`}
          target="_blank"
          className=""
        >
          <Button
            variant="default"
            className="pl-4 w-fit hover:bg-gray-800 rounded-full"
            size="sm"
          >
            Book{" "}
            <span className="bg-white/30 text-xs px-1.5 rounded-full">
              One-time
            </span>
          </Button>
        </Link>

        {/* Packages Section */}
        {packages && packages.length > 0 && (
          <>
            <Separator className="my-4" />
            <div className="space-y-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.type}
                  className="flex items-center justify-between"
                >
                  <div>
                    <span className="capitalize font-medium">{pkg.type}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">
                        ₹{pkg.price}
                      </span>
                      <span className="text-xs text-gray-500 line-through">
                        ₹{pkg.originalPrice}
                      </span>
                      <span className="text-xs text-gray-500">
                        · {pkg.frequency} visits
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`https://app.namamicleans.com/service/${pkg.service_code}`}
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      className="border-green-500 text-green-500 bg-green-50 hover:text-green-500 rounded-full"
                    >
                      Book
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
