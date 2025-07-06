
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  serviceCount?: number;
  startingPrice?: number;
  description?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  image,
  className,
  gradientFrom = "from-emerald-100",
  gradientTo = "to-transparent",
  serviceCount,
  startingPrice,
  description,
}) => {
  return (
    <Link
      to={`/services#${id}`}
      className={cn(
        "rounded-lg overflow-hidden relative block shadow hover:shadow-lg transition-shadow duration-200",
        className,
      )}
      aria-label={`View ${title} services`}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t",
          gradientFrom,
          gradientTo,
        )}
      ></div>

      <div className="max-w-72 p-3 md:p-5 relative group">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm md:text-base font-semibold text-gray-900 truncate">
            {title}
          </h3>
          {serviceCount && (
            <Badge variant="secondary" className="text-xs">
              {serviceCount} service{serviceCount > 1 ? 's' : ''}
            </Badge>
          )}
        </div>
        
        {description && (
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">{description}</p>
        )}
        
        <img
          src={image}
          alt={`${title} category image`}
          className="aspect-video w-full object-cover rounded-lg group-hover:scale-[1.02] transition-transform duration-200"
          loading="lazy"
        />
        
        {startingPrice && (
          <div className="mt-3 text-center">
            <span className="text-sm font-medium text-primary">
              Starting from ₹{startingPrice}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CategoryCard;
