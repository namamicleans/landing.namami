
import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

interface Testimonial {
  name: string;
  videoId?: string;
}

interface TestimonialSliderProps {
  title: string;
  description?: string;
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  title,
  description,
  testimonials,
  className,
}) => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [autoplay] = useState(() => Autoplay({ delay: 5000, stopOnInteraction: false }));

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className={className}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">{title}</h2>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <Carousel
          setApi={setApi}
          plugins={[autoplay]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-4">
                <TestimonialCard
                  name={testimonial.name}
                  videoId={testimonial.videoId}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-8 space-x-2">
            <CarouselPrevious className="static translate-y-0" />

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`w-3 h-3 p-0 rounded-full ${current === index ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>

            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialSlider;
