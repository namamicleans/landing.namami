
import React from "react";
import CategoryCard from "./CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Service } from "@/types/types";

interface CategorySliderProps {
  name?: string;
  title?: string; // Add title as an optional prop
  description?: string;
  categories: Service[];
  className?: string;
  viewAllLink?: string;
}

const CategorySlider: React.FC<CategorySliderProps> = ({
  name,
  title,
  description,
  categories,
  className,
  viewAllLink,
}) => {
  // Use title prop if provided, otherwise use name prop
  const displayTitle = title || name;
  
  return (
    <div className={className}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {displayTitle}
            </h2>
            {description && <p className="text-gray-600 mt-1">{description}</p>}
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {categories.map((category) => (
              <CarouselItem
                key={category.service_code}
                className="pl-4 basis-1/2 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <CategoryCard
                    id={category.service_code}
                    title={category.category.name}
                    image={category.category.icon || category.gallery?.[0] || '/placeholder.svg'}
                    serviceCount={1}
                    startingPrice={Math.min(...category.package_plans.map(pkg => pkg.price_per_booking))}
                    description={category.sections.find(s => s.api_name === 'about-this-service')?.content?.slice(0, 100) + '...' || 'Professional cleaning service'}
                    className="h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center mt-4">
            {viewAllLink && (
              <Link to={viewAllLink}>
                <Button size="sm" variant="outline">
                  View all {displayTitle}
                </Button>
              </Link>
            )}
            <div className="ml-auto flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CategorySlider;
