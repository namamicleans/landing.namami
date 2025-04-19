import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Building, DollarSign, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const allJobs = [
  {
    id: 'cleaning-professional',
    title: 'Cleaning Professional',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$18-$22/hour',
    department: 'Operations',
    description: 'Join our team of professional cleaners and make a difference in our customers\' lives. We\'re looking for detail-oriented individuals with a passion for cleanliness and customer service.',
    responsibilities: [
      'Perform thorough cleaning of residential and commercial spaces',
      'Follow cleaning checklists and procedures',
      'Ensure customer satisfaction through quality service',
      'Handle cleaning equipment and supplies properly',
      'Report any issues or concerns to the supervisor',
      'Maintain a professional appearance and attitude'
    ],
    requirements: [
      'Previous cleaning experience preferred but not required',
      'Reliable transportation',
      'Strong attention to detail',
      'Excellent customer service skills',
      'Ability to work independently and as part of a team',
      'Physical stamina to perform cleaning tasks'
    ],
    benefits: [
      'Competitive pay with tips',
      'Flexible scheduling',
      'Paid training',
      'Career advancement opportunities',
      'Health insurance for full-time employees',
      'Paid time off'
    ]
  },
  {
    id: 'team-leader',
    title: 'Cleaning Team Leader',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$22-$26/hour',
    department: 'Operations',
    description: 'We\'re seeking an experienced Team Leader to oversee cleaning operations and ensure high-quality service delivery. This role involves supervising a team of cleaning professionals and maintaining customer satisfaction.',
    responsibilities: [
      'Lead and supervise a team of cleaning professionals',
      'Schedule and assign tasks to team members',
      'Ensure quality standards are met on all jobs',
      'Handle customer inquiries and concerns',
      'Train new team members on procedures',
      'Conduct quality inspections and follow-ups'
    ],
    requirements: [
      'Minimum 2 years of cleaning experience',
      '1+ year in a supervisory role',
      'Excellent communication and leadership skills',
      'Problem-solving abilities',
      'Valid driver\'s license and reliable transportation',
      'Flexible availability including some weekends'
    ],
    benefits: [
      'Competitive salary plus performance bonuses',
      'Health, dental, and vision insurance',
      'Paid vacation and sick leave',
      'Career advancement opportunities',
      '401(k) retirement plan',
      'Professional development support'
    ]
  },
  {
    id: 'customer-service',
    title: 'Customer Service Representative',
    location: 'Remote',
    type: 'Full-time',
    salary: '$17-$20/hour',
    department: 'Customer Support',
    description: 'Become the voice of our company as a Customer Service Representative. You\'ll handle customer inquiries, schedule services, and ensure our clients receive the exceptional service they expect from Namami Cleans.',
    responsibilities: [
      'Answer customer calls and emails professionally',
      'Schedule and confirm cleaning appointments',
      'Address customer concerns and resolve issues',
      'Process payments and handle billing inquiries',
      'Provide information about services and pricing',
      'Maintain accurate customer records'
    ],
    requirements: [
      'Previous customer service experience',
      'Excellent verbal and written communication skills',
      'Proficiency with CRM systems and scheduling software',
      'Problem-solving abilities',
      'Multitasking and organizational skills',
      'Patient and empathetic attitude'
    ],
    benefits: [
      'Competitive hourly rate',
      'Remote work options',
      'Health benefits package',
      'Paid time off',
      'Professional development opportunities',
      'Employee discounts on services'
    ]
  },
  {
    id: 'captain',
    title: 'Cleaning Captain',
    location: 'Multiple Locations',
    type: 'Full-time / Part-time',
    salary: '$20-$25/hour + tips',
    department: 'Operations',
    description: 'Join our elite team of Cleaning Captains! This role is perfect for detail-oriented individuals who take pride in their work and want to make a difference in people\'s lives through exceptional cleaning services.',
    responsibilities: [
      'Provide exceptional cleaning services to residential and commercial clients',
      'Work independently and manage your assigned cleaning tasks',
      'Use proper cleaning techniques and products for different surfaces',
      'Maintain a high standard of cleanliness and attention to detail',
      'Communicate effectively with clients to understand their specific needs',
      'Represent the company with professionalism and excellent customer service'
    ],
    requirements: [
      'Previous cleaning experience is a plus but not required',
      'Strong work ethic and reliability',
      'Detail-oriented with excellent time management skills',
      'Customer service orientation',
      'Physical stamina for cleaning activities',
      'Valid driver\'s license and reliable transportation'
    ],
    benefits: [
      'Competitive pay plus tips',
      'Flexible scheduling - choose hours that work for you',
      'Paid training program',
      'Performance bonuses',
      'Career advancement opportunities',
      'Supportive team environment'
    ]
  }
];

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const job = allJobs.find(job => job.id === id);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    agreeToTerms: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // This would normally send the application to a backend
    console.log('Application submitted:', formData);
    
    toast({
      title: "Application Submitted",
      description: "Thank you for your application. We'll be in touch soon!",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: '',
      agreeToTerms: false
    });
  };
  
  if (!job) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Job Not Found</h2>
          <p className="text-gray-500 mb-6">The job posting you're looking for doesn't exist or has been removed.</p>
          <Link to="/hiring">
            <Button className="bg-primary text-white hover:bg-primary-600">
              <ArrowLeft size={16} className="mr-2" /> Back to All Jobs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Job Header */}
      <section className="bg-primary-50 py-12">
        <div className="container mx-auto px-4">
          <Link to="/hiring" className="inline-flex items-center text-primary hover:text-primary-700 mb-6">
            <ArrowLeft size={16} className="mr-2" /> Back to All Jobs
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">{job.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center bg-white px-3 py-1 rounded-full text-sm">
              <MapPin size={16} className="mr-2 text-primary" />
              {job.location}
            </div>
            <div className="flex items-center bg-white px-3 py-1 rounded-full text-sm">
              <Clock size={16} className="mr-2 text-primary" />
              {job.type}
            </div>
            <div className="flex items-center bg-white px-3 py-1 rounded-full text-sm">
              <DollarSign size={16} className="mr-2 text-primary" />
              {job.salary}
            </div>
            <div className="flex items-center bg-white px-3 py-1 rounded-full text-sm">
              <Building size={16} className="mr-2 text-primary" />
              {job.department}
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Description */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-primary-800 mb-4">Job Description</h2>
                  <p className="text-gray-700">{job.description}</p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-primary-800 mb-4">Responsibilities</h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={20} className="mr-2 text-primary flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-primary-800 mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={20} className="mr-2 text-primary flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-primary-800 mb-4">Benefits</h2>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={20} className="mr-2 text-primary flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Application Form */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Apply Now</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Relevant Experience
                    </label>
                    <Input
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Brief description of your experience"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                      Why are you a good fit?
                    </label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Tell us why you're interested in this position and what makes you a good fit"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeToTerms" className="text-gray-700">
                        I agree to the processing of my personal data and to the terms and conditions
                      </label>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary text-white hover:bg-primary-600">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Jobs CTA */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Interested in Similar Positions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore other job opportunities at Namami Cleans and find the perfect role for your skills and career goals.
          </p>
          <Link to="/hiring">
            <Button className="bg-primary text-white hover:bg-primary-600">
              View All Open Positions
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
