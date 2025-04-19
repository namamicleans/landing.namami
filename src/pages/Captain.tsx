import React from "react";
import { Link } from "react-router-dom";
import { Check, Star, DollarSign, Clock, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Captain = () => {
  const benefits = [
    {
      title: "Flexible Scheduling",
      description: "Choose your own hours and work when it fits your lifestyle",
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
    {
      title: "Competitive Pay",
      description: "Earn $20-$25/hour plus tips and performance bonuses",
      icon: <DollarSign className="h-10 w-10 text-primary" />,
    },
    {
      title: "Career Growth",
      description: "Opportunities for advancement and leadership positions",
      icon: <Trophy className="h-10 w-10 text-primary" />,
    },
    {
      title: "Weekly Payments",
      description: "Get paid weekly directly to your bank account",
      icon: <Calendar className="h-10 w-10 text-primary" />,
    },
  ];

  const requirements = [
    "Customer-focused attitude",
    "Attention to detail",
    "Reliable transportation",
    "Smartphone with data plan",
    "Ability to pass background check",
    "Legal authorization to work",
  ];

  const testimonials = [
    {
      name: "Sarah J.",
      location: "Chicago",
      testimonial:
        "Being a Captain at Namami Cleans gives me the flexibility I need as a student. I can work around my class schedule and still earn enough to cover my expenses.",
      rating: 5,
      income: "$800-1000/week",
    },
    {
      name: "Michael T.",
      location: "New York",
      testimonial:
        "I started as a part-time Captain and loved it so much I went full-time. The pay is great, customers are appreciative, and the company truly values us.",
      rating: 5,
      income: "$1200-1500/week",
    },
    {
      name: "Emily R.",
      location: "Los Angeles",
      testimonial:
        "After years in retail, becoming a Cleaning Captain was the best career move I've made. Better pay, more respect, and I get to see the impact of my work everyday.",
      rating: 4,
      income: "$1000-1300/week",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Become a Cleaning Captain
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Join our elite team of cleaning professionals and enjoy flexible
                hours, competitive pay, and a supportive work environment.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Earn $20-$25/hour
                  plus tips
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Set your own
                  schedule
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Paid training
                  program
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Weekly payments
                </div>
              </div>
              <Link to="/hiring/captain" className="inline-block">
                <Button className="bg-secondary text-primary-800 hover:bg-secondary-600 text-lg px-8 py-3">
                  Apply Now
                </Button>
              </Link>
            </div>

            <div className="relative hidden lg:block">
              <img
                src="/lovable-uploads/clean_cta.jpg"
                alt="Cleaning Captain"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="text-primary-800 font-bold text-xl">
                    $1,000+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Weekly earning potential
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Why Become a Captain?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Enjoy numerous benefits and opportunities as a valued member of
              our cleaning team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md card-hover text-center"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A simple process to become a Cleaning Captain and start earning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">
                Apply Online
              </h3>
              <p className="text-gray-600">
                Complete our simple online application form.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-hover text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">
                Interview
              </h3>
              <p className="text-gray-600">
                Meet with our team for a brief interview and orientation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-hover text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">
                Get Trained
              </h3>
              <p className="text-gray-600">
                Complete our paid training program to learn our methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-hover text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">
                Start Earning
              </h3>
              <p className="text-gray-600">
                Begin accepting jobs and earning competitive pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                What We're Looking For
              </h2>
              <p className="text-gray-600 mb-6">
                We're seeking motivated individuals who are detail-oriented and
                customer-focused to join our team of Cleaning Captains. While
                cleaning experience is helpful, it's not required—we provide
                comprehensive training.
              </p>

              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-4 bg-secondary-100 p-2 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Potential Earnings
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Part-Time Captain
                  </h4>
                  <p className="text-gray-600 mb-2">15-25 hours/week</p>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary-600">
                      $600-$1,000
                    </div>
                    <div className="text-gray-500">Weekly potential</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Full-Time Captain
                  </h4>
                  <p className="text-gray-600 mb-2">30-40 hours/week</p>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary-600">
                      $1,000-$1,500+
                    </div>
                    <div className="text-gray-500">Weekly potential</div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 italic">
                  *Earnings vary based on hours worked, services performed, and
                  tips received.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Hear From Our Captains
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Real stories from real Cleaning Captains working with Namami
              Cleans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-300 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic mb-4">
                  "{testimonial.testimonial}"
                </p>

                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-600">
                    Typical weekly earnings:
                  </p>
                  <p className="font-semibold text-primary-700">
                    {testimonial.income}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about becoming a Cleaning
              Captain.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Do I need previous cleaning experience?
              </h3>
              <p className="text-gray-600">
                While previous cleaning experience is helpful, it's not
                required. We provide comprehensive training to ensure you have
                the skills and knowledge to excel in this role.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                What hours can I work?
              </h3>
              <p className="text-gray-600">
                We offer flexible scheduling to accommodate your needs. You can
                choose to work part-time or full-time, weekdays or weekends,
                based on your availability and preferences.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                How do I get paid?
              </h3>
              <p className="text-gray-600">
                Captains are paid weekly via direct deposit. Your earnings
                include your hourly rate, plus any tips and bonuses you've
                earned during that pay period.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                What supplies and equipment do I need?
              </h3>
              <p className="text-gray-600">
                Namami Cleans provides all cleaning supplies and equipment.
                You'll need reliable transportation to get to job sites and a
                smartphone to use our scheduling app.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Is there room for advancement?
              </h3>
              <p className="text-gray-600">
                Absolutely! Many of our team leaders and supervisors started as
                Cleaning Captains. We prioritize promoting from within and offer
                various career paths for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-white/90">
            Take the first step toward a rewarding career as a Cleaning Captain.
            Apply today and start your journey with Namami Cleans.
          </p>
          <Link to="/hiring/captain">
            <Button className="bg-secondary text-primary-800 hover:bg-secondary-600 text-lg px-8 py-3">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Captain;
