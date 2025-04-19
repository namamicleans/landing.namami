import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import JobCard from "@/components/JobCard";

// Sample job data
const allJobs = [
  {
    id: "cleaning-professional",
    title: "Cleaning Professional",
    location: "New York, NY",
    type: "Full-time",
    salary: "$18-$22/hour",
    department: "Operations",
    description:
      "Join our team of professional cleaners and make a difference in our customers' lives. We're looking for detail-oriented individuals with a passion for cleanliness and customer service.",
    responsibilities: [
      "Perform thorough cleaning of residential and commercial spaces",
      "Follow cleaning checklists and procedures",
      "Ensure customer satisfaction through quality service",
      "Handle cleaning equipment and supplies properly",
      "Report any issues or concerns to the supervisor",
      "Maintain a professional appearance and attitude",
    ],
    requirements: [
      "Previous cleaning experience preferred but not required",
      "Reliable transportation",
      "Strong attention to detail",
      "Excellent customer service skills",
      "Ability to work independently and as part of a team",
      "Physical stamina to perform cleaning tasks",
    ],
    benefits: [
      "Competitive pay with tips",
      "Flexible scheduling",
      "Paid training",
      "Career advancement opportunities",
      "Health insurance for full-time employees",
      "Paid time off",
    ],
  },
  {
    id: "team-leader",
    title: "Cleaning Team Leader",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$22-$26/hour",
    department: "Operations",
    description:
      "We're seeking an experienced Team Leader to oversee cleaning operations and ensure high-quality service delivery. This role involves supervising a team of cleaning professionals and maintaining customer satisfaction.",
    responsibilities: [
      "Lead and supervise a team of cleaning professionals",
      "Schedule and assign tasks to team members",
      "Ensure quality standards are met on all jobs",
      "Handle customer inquiries and concerns",
      "Train new team members on procedures",
      "Conduct quality inspections and follow-ups",
    ],
    requirements: [
      "Minimum 2 years of cleaning experience",
      "1+ year in a supervisory role",
      "Excellent communication and leadership skills",
      "Problem-solving abilities",
      "Valid driver's license and reliable transportation",
      "Flexible availability including some weekends",
    ],
    benefits: [
      "Competitive salary plus performance bonuses",
      "Health, dental, and vision insurance",
      "Paid vacation and sick leave",
      "Career advancement opportunities",
      "401(k) retirement plan",
      "Professional development support",
    ],
  },
  {
    id: "customer-service",
    title: "Customer Service Representative",
    location: "Remote",
    type: "Full-time",
    salary: "$17-$20/hour",
    department: "Customer Support",
    description:
      "Become the voice of our company as a Customer Service Representative. You'll handle customer inquiries, schedule services, and ensure our clients receive the exceptional service they expect from Namami Cleans.",
    responsibilities: [
      "Answer customer calls and emails professionally",
      "Schedule and confirm cleaning appointments",
      "Address customer concerns and resolve issues",
      "Process payments and handle billing inquiries",
      "Provide information about services and pricing",
      "Maintain accurate customer records",
    ],
    requirements: [
      "Previous customer service experience",
      "Excellent verbal and written communication skills",
      "Proficiency with CRM systems and scheduling software",
      "Problem-solving abilities",
      "Multitasking and organizational skills",
      "Patient and empathetic attitude",
    ],
    benefits: [
      "Competitive hourly rate",
      "Remote work options",
      "Health benefits package",
      "Paid time off",
      "Professional development opportunities",
      "Employee discounts on services",
    ],
  },
  {
    id: "marketing-specialist",
    title: "Digital Marketing Specialist",
    location: "Remote",
    type: "Full-time",
    salary: "$45,000-$55,000/year",
    department: "Marketing",
    description:
      "We're looking for a creative and data-driven Digital Marketing Specialist to help grow our online presence and attract new customers. This role will be responsible for implementing and optimizing digital marketing campaigns.",
    responsibilities: [
      "Develop and execute digital marketing strategies",
      "Manage social media accounts and content",
      "Create and optimize email marketing campaigns",
      "Monitor and analyze campaign performance",
      "Manage SEO and SEM initiatives",
      "Collaborate with team on promotional materials",
    ],
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "2+ years of digital marketing experience",
      "Experience with SEO, SEM, and social media marketing",
      "Proficiency with analytics tools and CRM systems",
      "Strong copywriting and communication skills",
      "Knowledge of graphic design principles",
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Remote work flexibility",
      "Comprehensive benefits package",
      "Professional development budget",
      "Collaborative and innovative work environment",
    ],
  },
  {
    id: "operations-manager",
    title: "Operations Manager",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$60,000-$75,000/year",
    department: "Management",
    description:
      "We're seeking an experienced Operations Manager to oversee all aspects of our cleaning operations. This role involves strategic planning, team leadership, and ensuring operational excellence across all services.",
    responsibilities: [
      "Oversee daily cleaning operations and logistics",
      "Develop and implement operational policies and procedures",
      "Manage and mentor team leads and supervisors",
      "Analyze operational data to improve efficiency",
      "Ensure compliance with safety and quality standards",
      "Collaborate with other departments to achieve company goals",
    ],
    requirements: [
      "Bachelor's degree in Business or related field",
      "5+ years in operations management, preferably in service industry",
      "Strong leadership and team management skills",
      "Experience with budgeting and resource allocation",
      "Problem-solving and analytical abilities",
      "Excellent communication and interpersonal skills",
    ],
    benefits: [
      "Competitive salary with bonus potential",
      "Comprehensive health benefits",
      "Paid vacation and sick leave",
      "401(k) with company match",
      "Career advancement opportunities",
      "Company car or transportation allowance",
    ],
  },
];

const Hiring = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setFilteredJobs(allJobs);
    } else {
      const filtered = allJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(term) ||
          job.location.toLowerCase().includes(term) ||
          job.department.toLowerCase().includes(term) ||
          job.type.toLowerCase().includes(term),
      );
      setFilteredJobs(filtered);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for passionate individuals to help us deliver
              exceptional cleaning services. Discover exciting career
              opportunities with Namami Cleans.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                Why Work With Us?
              </h2>

              <p className="text-gray-600 mb-6">
                At Namami Cleans, we believe that our team is our greatest
                asset. We're committed to creating a positive, supportive work
                environment where you can grow, develop, and thrive
                professionally.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 bg-secondary-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Competitive Compensation
                    </h3>
                    <p className="text-gray-600">
                      We offer competitive pay, performance bonuses, and
                      benefits to reward your hard work and dedication.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-secondary-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Growth Opportunities
                    </h3>
                    <p className="text-gray-600">
                      We promote from within and provide training and
                      development to help you advance your career.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-secondary-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Supportive Team Environment
                    </h3>
                    <p className="text-gray-600">
                      Join a team that values collaboration, respect, and mutual
                      support in achieving our goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-secondary-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Work-Life Balance
                    </h3>
                    <p className="text-gray-600">
                      We respect your personal life and offer flexible
                      scheduling options to accommodate your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/lovable-uploads/team.png"
                alt="Our team members"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Current Job Openings
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our current opportunities and find a role that matches your
              skills and career goals.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search jobs by title, location, or department..."
                className="pl-10"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  location={job.location}
                  type={job.type}
                  salary={job.salary}
                  department={job.department}
                  description={job.description}
                />
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  No job openings found
                </h3>
                <p className="text-gray-500">
                  Please try a different search term or check back later for new
                  opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Be a Captain CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Become a Cleaning Captain
              </h2>
              <p className="mb-6 text-white/90">
                Looking for a rewarding career with flexibility and growth
                potential? Join our team of Cleaning Captains and enjoy:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Flexible working
                  hours
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Competitive pay and
                  tips
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Training and growth
                  opportunities
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-secondary" /> Supportive team
                  environment
                </li>
              </ul>
              <Link to="/hiring/captain">
                <Button className="bg-secondary text-primary-800 hover:bg-secondary-600">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/captain_cta.jpg"
                alt="Cleaning Captain"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-primary-800 font-semibold">
                  "Join our team and earn more!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Our Application Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We've designed a straightforward application process to help you
              join our team quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div className="w-16 h-16 bg-primary-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-800">
                Apply Online
              </h3>
              <p className="text-gray-600">
                Browse our job openings and submit your application through our
                easy online form.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div className="w-16 h-16 bg-primary-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-800">
                Interview
              </h3>
              <p className="text-gray-600">
                If selected, you'll be invited for a phone or in-person
                interview with our hiring team.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div className="w-16 h-16 bg-primary-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-800">
                Training
              </h3>
              <p className="text-gray-600">
                Depending on the role, you will be trained by our experienced
                team.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div className="w-16 h-16 bg-primary-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-800">
                Welcome Aboard
              </h3>
              <p className="text-gray-600">
                Upon selection, you'll receive onboarding information and
                training to start your new role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              What Our Team Says
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our team members about their experience working with
              Namami Cleans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="David Wilson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">David Wilson</h4>
                  <p className="text-gray-600 text-sm">
                    Cleaning Professional, 2+ years
                  </p>
                </div>
              </div>

              <p className="text-gray-700 italic">
                "Working with Namami Cleans has been a great experience. The
                flexible hours allow me to balance work with my family life, and
                the team is incredibly supportive. I've developed new skills and
                have been promoted since joining!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="Jennifer Adams"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Jennifer Adams</h4>
                  <p className="text-gray-600 text-sm">Team Leader, 3+ years</p>
                </div>
              </div>

              <p className="text-gray-700 italic">
                "I started as a cleaning professional and worked my way up to
                team leader. The company invested in my growth through training
                and mentorship. I love the positive environment and the
                opportunity to make a difference in our customers' lives."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="Michael Roberts"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Michael Roberts</h4>
                  <p className="text-gray-600 text-sm">
                    Customer Service, 1+ year
                  </p>
                </div>
              </div>

              <p className="text-gray-700 italic">
                "The supportive work culture at Namami Cleans makes coming to
                work enjoyable every day. I feel valued as an employee, and
                there's a real emphasis on work-life balance. The benefits are
                also excellent compared to other companies in the industry."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Browse our current job openings and take the first step toward a
            rewarding career with Namami Cleans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#current-openings">
              <Button className="bg-secondary text-primary-800 hover:bg-secondary-600 w-full sm:w-auto">
                View Open Positions
              </Button>
            </a>
            <Link to="/hiring/captain">
              <Button className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                Become a Captain <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hiring;
