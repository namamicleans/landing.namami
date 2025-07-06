
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
            {services.map((service, index) => (
              <CarouselItem key={service.service_code} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ServiceCard
                    id={service.service_code}
                    title={service.name}
                    description={service.sections.find(s => s.api_name === 'about-this-service')?.content || service.description}
                    category={service.category.name}
                    price={service.package_plans.reduce((min, pkg) => Math.min(min, pkg.price_per_booking), Infinity)}
                    originalPrice={service.package_plans.reduce((max, pkg) => Math.max(max, pkg.price_per_booking), 0)}
                    duration={(service.slots * 90).toString() + ' min'}
                    rating={4.5}
                    image={service.gallery?.[0]}
                    isPopular={service.is_featured}
                    features={service.sections.find(s => s.api_name === 'whats-included')?.content ? 
                      service.sections.find(s => s.api_name === 'whats-included')?.content.split('.').slice(0, 3).map(f => f.trim()).filter(f => f.length > 0) : 
                      ['Professional cleaning', 'Eco-friendly products', 'Insured service']
                    }
                    packages={service.package_plans.map(pkg => ({
                      type: pkg.total_bookings > 1 ? 'monthly' : 'yearly' as 'monthly' | 'yearly',
                      price: pkg.price_per_booking,
                      originalPrice: pkg.price_per_booking + pkg.savings_per_booking,
                      frequency: pkg.total_bookings,
                      service_code: pkg.service_code,
                      name: pkg.name,
                      savings_per_booking: pkg.savings_per_booking,
                      icon: pkg.icon
                    }))}
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
