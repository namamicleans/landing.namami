
import React from 'react';
import ServiceCard from './ServiceCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Service } from '@/types/types';

interface ServiceSliderProps {
  title: string;
  description?: string;
  services: Service[];
  className?: string;
  viewAllLink?: string;
}

const ServiceSlider: React.FC<ServiceSliderProps> = ({
  title,
  description,
  services,
  className,
  viewAllLink,
}) => {
  return (
    <div className={className}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="text-gray-600 mt-1">{description}</p>
            )}
          </div>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {services.map((service) => (
              <CarouselItem key={service.service_code} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ServiceCard
                    id={service.service_code}
                    title={service.name}
                    category={service.category.name}
                    price={service.subscription_plans.reduce((min, pkg) => Math.min(min, pkg.base_price), Infinity)}
                    originalPrice={service.subscription_plans.reduce((max, pkg) => Math.max(max, pkg.base_price), 0)}
                    duration={(service.slots * 90).toString() + ' min'}
                    rating={service.rating || 4.5}
                    image={service.gallery?.[0]}
                    className="h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-between items-center mt-4">
            {viewAllLink && (
              <Link to={viewAllLink}>
                <Button size="sm" variant="outline">View all {title}</Button>
              </Link>
            )}
            <div className="flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ServiceSlider;
