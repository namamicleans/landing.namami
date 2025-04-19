
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  image,
  className,
  gradientFrom = "from-emerald-100",
  gradientTo = "to-transparent",
}) => {
  return (
    <Link
      to={`/services#${id}`}
      className={cn(
        "rounded-lg overflow-hidden relative block shadow",
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
        <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-4 truncate">
          {title}
        </h3>
        <img
          src={image}
          alt={`${title} category image`}
          className="aspect-video w-full object-cover rounded-lg group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default CategoryCard;
