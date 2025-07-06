import React from "react";
import { Link } from "react-router-dom";
import { Clock, Crown, Star, Tags, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface ServicePackage {
  type: "monthly" | "yearly";
  price: number;
  originalPrice: number;
  frequency: number;
  service_code: string;
  name: string;
  savings_per_booking: number;
  icon?: string;
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
  features?: string[];
  isPopular?: boolean;
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
  features,
  isPopular = false,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden mb-2 hover:shadow-lg transition-shadow duration-200",
        isPopular && "ring-2 ring-primary ring-opacity-50",
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
        {isPopular && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-primary text-white">
              <Crown className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          </div>
        )}
        {category && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-white/90 text-gray-700">
              {category}
            </Badge>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-semibold text-gray-900 flex-1">{title}</h3>
          {rating && (
            <div className="flex items-center text-xs ml-2">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-gray-700">{rating}</span>
            </div>
          )}
        </div>

        {description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        )}

        {features && features.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {duration && (
              <span className="flex items-center gap-1 text-gray-500 text-sm border border-gray-200 rounded px-2 py-1">
                <Clock size="12" /> {duration}
              </span>
            )}
            <span className="flex items-center gap-1 text-gray-500 text-sm border border-gray-200 rounded px-2 py-1">
              <Shield size="12" /> Insured
            </span>
          </div>
        </div>

        {(price || originalPrice) && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {price && (
                <span className="text-lg font-bold text-primary">
                  ₹{price}
                </span>
              )}
              {originalPrice && originalPrice > (price || 0) && (
                <span className="text-gray-500 line-through text-sm">
                  ₹{originalPrice}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500">Starting from</span>
          </div>
        )}

        <Link
          to={`https://app.namamicleans.com/service/${id}`}
          target="_blank"
          className="block"
        >
          <Button
            variant="default"
            className="w-full hover:bg-primary-600 rounded-lg"
            size="sm"
          >
            Book Now
          </Button>
        </Link>

        {/* Packages Section */}
        {packages && packages.length > 0 && (
          <>
            <Separator className="my-4" />
            <div className="space-y-3">
              <h4 className="font-medium text-sm text-gray-900">Available Packages</h4>
              {packages.slice(0, 2).map((pkg) => (
                <div
                  key={pkg.type}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    {pkg.icon && (
                      <img src={pkg.icon} alt={pkg.name} className="w-4 h-4" />
                    )}
                    <div>
                      <span className="text-sm font-medium">{pkg.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-primary">
                          ₹{pkg.price}
                        </span>
                        {pkg.originalPrice > pkg.price && (
                          <span className="text-xs text-gray-500 line-through">
                            ₹{pkg.originalPrice}
                          </span>
                        )}
                        {pkg.savings_per_booking > 0 && (
                          <span className="text-xs text-green-600 font-medium">
                            Save ₹{pkg.savings_per_booking}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`https://app.namamicleans.com/service/${pkg.service_code}`}
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-white text-xs px-2 py-1 rounded"
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
