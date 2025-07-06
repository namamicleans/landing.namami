import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import CategorySlider from "@/components/CategorySlider";
import ServiceSlider from "@/components/ServiceSlider";

import { getServices } from "@/services/service";
import { Service } from "@/types/types";

// Service data
const serviceCategories = [
  {
    id: "cleaning",
    title: "Cleaning",
    gradientFrom: "from-blue-50",
    services: []
  }
];

const Services = () => {

  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getServices().then(data => {
      console.log(data, 'services');
      if (data) {
        setServices(data.services);
        serviceCategories[0].services = data.services;
      }
    });
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
              Our Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of professional cleaning services
              designed to meet all your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Category Slider */}
      <section className="py-16 border-b border-gray-100">
        <CategorySlider
          title="All Categories"
          description="Browse our service categories"
          categories={services}
          viewAllLink="/services#categories"
        />
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-2">
              Featured Services
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Our most popular cleaning services tailored to meet your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.filter((service) => service.is_featured).map((service) => (
              <ServiceCard
                key={service.service_code}
                id={service.service_code}
                title={service.name}
                category={service.category.name}
                price={service.package_plans.reduce((min, pkg) => Math.min(min, pkg.price_per_booking), Infinity)}
                originalPrice={service.package_plans.reduce((max, pkg) => Math.max(max, pkg.price_per_booking), 0)}
                duration={service.slots * 90 + " min"}
                rating={4.5}
                image={service.gallery?.[0]}
                className="transform transition-transform hover:scale-[1.02]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="categories" className="py-16">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16">
              <ServiceSlider
                title={category.title}
                services={category.services}
                viewAllLink={`/services#${category.id}-services`}
                className="mb-16"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our cleaning services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                How often should I schedule cleaning services?
              </h3>
              <p className="text-gray-600">
                The frequency depends on your needs and lifestyle. Many
                customers choose weekly or bi-weekly recurring cleanings for
                regular maintenance, while others prefer monthly deep cleanings.
                We can help you determine the best schedule for your specific
                situation.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Do I need to provide cleaning supplies?
              </h3>
              <p className="text-gray-600">
                No, our professional cleaners bring all necessary cleaning
                supplies and equipment. However, if you prefer that we use
                specific products due to allergies or preferences, please let us
                know in advance.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Is your staff bonded and insured?
              </h3>
              <p className="text-gray-600">
                Yes, all our cleaning professionals are thoroughly vetted,
                bonded, and insured for your peace of mind. We take
                responsibility for any unlikely damage that might occur during
                the cleaning process.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Can I request the same cleaning team for recurring services?
              </h3>
              <p className="text-gray-600">
                Absolutely! We strive to send the same team for recurring
                services to ensure consistency and build trust. However, due to
                scheduling or unexpected circumstances, we may occasionally need
                to send a different team.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                What if I'm not satisfied with the cleaning?
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. If you're not completely
                satisfied with any aspect of our service, please let us know
                within 24 hours, and we'll return to re-clean the areas in
                question at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Our Cleaning Services?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your cleaning service today and enjoy a fresher, cleaner space.
            Our professional team is ready to exceed your expectations.
          </p>
          <Link to="https://app.namamicleans.com" target="_blank">
            <Button className="bg-secondary text-primary-800 hover:bg-secondary-600 text-lg px-8 py-3">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
