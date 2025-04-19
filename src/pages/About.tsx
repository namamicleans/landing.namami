import {
  ArrowRight,
  Check,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";

// Let's add some sample team data
const leadershipTeam = [
  {
    name: "Bhuvnesh",
    role: "Founder & CEO",
    bio: "Leading Namami Cleans with a passion for sustainability and innovation, transforming how cleanliness is achieved.",
    image: "/team/bhuvneshCEO.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/bhuvnesh-singh-sikarwar-19104011b",
      instagram: "https://www.instagram.com/bhuvneshsikarwar",
      facebook: "https://www.facebook.com/share/1DfWybHxCQ/?mibextid=wwXIfr",
    },
  },
  {
    name: "Devansh",
    role: "COO",
    bio: "Ensuring financial stability while supporting innovative cleaning solutions that align with our values.",
    image: "/team/devanshCOO.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/devansh-sengar-8a9252303",
      instagram: "https://www.instagram.com/zenith_pursuer",
    },
  },
  {
    name: "Jatin",
    role: "CTO",
    bio: "Driving technological advancements to ensure Namami Cleans stays ahead in the cleaning industry.",
    image: "/team/jatinCTO.png",
    social: {
      linkedin: "https://www.linkedin.com/in/jatin-kshatriya-a9a879214",
      facebook: "https://www.instagram.com/jatin_kshatriya",
      twitter: "https://x.com/kshatriya2821",
    },
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="About Namami Cleans | Professional Cleaning Services"
        description="Learn about Namami Cleans, our story, values, and dedicated team. We provide exceptional cleaning services with a focus on quality, reliability, and environmental sustainability."
        keywords="cleaning services, about Namami Cleans, professional cleaners, cleaning company, eco-friendly cleaning"
        canonicalUrl="https://namamicleans.com/about"
      />

      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
              About Namami Cleans
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're dedicated to providing exceptional cleaning services while
              making a positive impact in the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Namami Cleans was founded in 2015 with a simple mission: to
                provide high-quality cleaning services while creating meaningful
                employment opportunities and promoting environmental
                sustainability.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team serving a handful of clients has
                grown into a trusted cleaning service provider with hundreds of
                satisfied customers across multiple cities. Throughout our
                growth, we've remained committed to our core values of quality,
                reliability, and respect.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate and expand our services, but our
                focus remains the same: delivering exceptional cleaning
                experiences that help our customers enjoy cleaner, healthier,
                and more comfortable spaces.
              </p>
            </div>

            <div>
              <img
                src="public/lovable-uploads/team.png"
                alt="Our team members working together"
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These core principles guide our work and define our company
              culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering exceptional quality in every
                service we provide. Our attention to detail and thorough
                approach ensure consistently excellent results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in honest communication, clear pricing, and
                straightforward policies. Our customers always know what to
                expect and can trust us to deliver as promised.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Respect</h3>
              <p className="text-gray-600">
                We treat our customers, employees, and partners with respect and
                dignity. We value diversity and create an inclusive environment
                where everyone feels valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who lead Namami Cleans and drive
              our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>

                  <div className="flex gap-2">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors"
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}

                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                        aria-label={`Twitter profile of ${member.name}`}
                      >
                        <Twitter size={18} />
                      </a>
                    )}

                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                        aria-label={`Facebook profile of ${member.name}`}
                      >
                        <Facebook size={18} />
                      </a>
                    )}

                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-pink-600 transition-colors"
                        aria-label={`Instagram profile of ${member.name}`}
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="public/lovable-uploads/ourstyle.jpg"
                alt="Our professional cleaning approach in action"
                className="rounded-lg shadow-xl w-[500px] h-[700px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                Our Approach
              </h2>
              <p className="text-gray-600 mb-6">
                At Namami Cleans, we take a systematic and thorough approach to
                cleaning that ensures consistent quality and customer
                satisfaction.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 bg-white p-2 rounded-full text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Customized Cleaning Plans
                    </h3>
                    <p className="text-gray-600">
                      We develop cleaning plans tailored to each customer's
                      specific needs and preferences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-white p-2 rounded-full text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Trained Professionals
                    </h3>
                    <p className="text-gray-600">
                      Our cleaning staff undergoes rigorous training to ensure
                      they deliver excellent service with attention to detail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-white p-2 rounded-full text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      We regularly inspect our work and gather customer feedback
                      to continuously improve our services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-white p-2 rounded-full text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Eco-Friendly Options
                    </h3>
                    <p className="text-gray-600">
                      We offer environmentally friendly cleaning options using
                      sustainable products and practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Have questions about our services or want to request a quote? Reach out to us and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary-800 mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary-50 p-2 rounded-full text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+918770490169" className="hover:text-primary transition-colors">
                          +91-8770490169
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 bg-primary-50 p-2 rounded-full text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:support@namamicleans.com" className="hover:text-primary transition-colors">
                          support@namamicleans.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 bg-primary-50 p-2 rounded-full text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Office</h4>
                      <p className="text-gray-600">
                        Civil Lines<br />
                        SATI College, Vidisha<br />
                        Madhya Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com/namamicleans"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com/namamicleans"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/company/namamicleans"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com/namamicleans"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary-800 mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Our Services?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your cleaning service today and enjoy a fresher, cleaner space.
            Our professional team is ready to exceed your expectations.
          </p>
          <Link to="https://app.namamicleans.com" target="_blank">
            <Button className="bg-secondary text-primary-800 hover:bg-secondary-600 text-lg px-8 py-3">
              Book Now <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
