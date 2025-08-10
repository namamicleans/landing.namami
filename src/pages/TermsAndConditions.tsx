import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle, AlertTriangle, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Terms and Conditions | Namami Cleans"
        description="Read our comprehensive terms and conditions for using Namami Cleans services. Learn about our policies, customer responsibilities, and service agreements."
        keywords="terms and conditions, Namami Cleans policy, cleaning service terms, customer agreement, service conditions"
        canonicalUrl="https://namamicleans.com/terms-and-conditions"
      />

      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-600">
              Last Updated: April 1, 2025
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl">
              Welcome to Namami Cleans. By using our website, mobile app, or booking our services, 
              you agree to the following Terms and Conditions. Please read them carefully before proceeding.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            {/* 1. Services Offered */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">1. Services Offered</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Namami Cleans provides professional doorstep cleaning services across our service areas. 
                Our comprehensive service portfolio includes but is not limited to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>House Cleaning (Deep & Regular)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Office & Commercial Space Cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Car Wash Services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Water Tank Cleaning</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Sofa and Carpet Cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Solar Panel Cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Post-Event Cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Move-in/Move-out Cleaning</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <p className="text-blue-800 font-medium mb-0">Service Areas</p>
                </div>
                <p className="text-blue-700 mt-2 mb-0">
                  All services are performed at the customer's location in our designated service areas: 
                  <strong> Vidisha, Sagar, Bhopal, and Indore</strong>. Our trained professionals use safe, 
                  effective, and industry-standard cleaning methods with eco-friendly products whenever possible.
                </p>
              </div>
            </div>

            {/* 2. Booking & Payment */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">2. Booking & Payment</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Booking Channels:</strong> Services can be booked through our website (namamicleans.com), 
                    mobile application, or by contacting our customer support team at +91-8770490169.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Payment Policy:</strong> All services are prepaid unless otherwise agreed in writing. 
                    Payment must be completed at the time of booking to confirm your appointment.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Accepted Payment Methods:</strong> We accept UPI, credit/debit cards, digital wallets, 
                    net banking, and other secure online payment methods.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Subscription Services:</strong> Recurring cleaning packages and custom service plans 
                    are billed in advance based on the agreed scope and frequency.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Customer Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">3. Customer Responsibilities</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                To ensure a smooth and effective service experience, customers must fulfill the following responsibilities:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Provide accurate address, contact information, and detailed service requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ensure someone aged 18+ is present at the location during service</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Provide necessary access including society gate passes, parking, or office permissions</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ensure availability of basic utilities (water, electricity)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Remove or secure valuable, fragile, or sensitive items before service</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Communicate special requests, health concerns, or restricted areas in advance</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-6">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                  <p className="text-amber-800 font-medium mb-0">Important Notice</p>
                </div>
                <p className="text-amber-700 mt-2 mb-0">
                  Failure to meet these responsibilities may result in service delays, additional charges, 
                  or cancellation of the appointment. Namami Cleans reserves the right to reschedule services 
                  if adequate access or conditions are not provided.
                </p>
              </div>
            </div>

            {/* 4. Cancellations & Refund Policy */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">4. Cancellations & No Refund Policy</h2>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Important: No Refund Policy</h3>
                <p className="text-red-700 mb-0">
                  <strong>Namami Cleans operates under a strict no monetary refund policy.</strong> 
                  All payments are final and non-refundable for any reason including but not limited to 
                  cancellations, rescheduling, or service dissatisfaction.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Cancellation Window</p>
                    <p className="text-gray-600 mb-0">
                      Bookings may be cancelled or rescheduled at least 24 hours before the scheduled appointment 
                      without penalty. Cancellations within 24 hours may result in forfeiture of the booking amount.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Service Recovery</p>
                    <p className="text-gray-600 mb-0">
                      In case of service dissatisfaction, we may offer a free complaint correction service 
                      at our discretion after internal review and quality assessment.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-4 italic">
                For detailed information about our refund and cancellation policies, please refer to our 
                <Link to="/refund-cancellation-policy" className="text-primary-600 hover:text-primary-700 underline mx-1">
                  Refund & Cancellation Policy
                </Link>
                page.
              </p>
            </div>

            {/* 5. Custom Service Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">5. Custom Service Terms</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Pre-Service Consultation:</strong> Custom cleaning services require a pre-inspection 
                    or detailed consultation to determine scope, requirements, and pricing.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Pricing Structure:</strong> Custom service pricing is based on factors including 
                    area size, complexity, time requirements, special equipment, and materials needed.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Agreement Requirement:</strong> All pricing and service scope must be agreed upon 
                    and confirmed in writing before booking confirmation.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Modification Policy:</strong> Changes to custom service requirements must be 
                    communicated at least 24 hours in advance and may result in price adjustments.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Service Limitations */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">6. Service Limitations & Liability</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Services Not Included</h3>
                  <p className="text-gray-700 mb-0">
                    Our cleaning services do not include pest control, electrical repairs, plumbing work, 
                    or structural maintenance. These services, if required, will be quoted separately and 
                    charged additionally.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Liability Limitations</h3>
                  <p className="text-gray-700 mb-0">
                    Namami Cleans is not liable for pre-existing damages, normal wear and tear, or damage 
                    to property, furniture, or fixtures that existed before our service. We maintain 
                    comprehensive insurance coverage for damages that occur during our service provision.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Service Refusal Rights</h3>
                  <p className="text-gray-700 mb-0">
                    We reserve the right to refuse or discontinue service if the premises are determined 
                    to be unsafe, unsanitary, hazardous, or present risks to our team members' health and safety.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Health & Safety */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">7. Health & Safety Protocols</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Professional Standards:</strong> Our staff follows strict hygiene, safety, and 
                    professional conduct protocols during all service visits.
                  </p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Customer Disclosure:</strong> Customers must inform us in advance of any allergies, 
                    health conditions, pets, or environmental hazards present at the service location.
                  </p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Safety First Policy:</strong> We reserve the right to stop or postpone service 
                    immediately if conditions are deemed unsafe for our team members.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Privacy Policy */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">8. Privacy & Data Protection</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Your personal information and data privacy are important to us. We collect and use personal 
                information solely for service delivery, communication, and business operations purposes.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-700 mb-0">
                  For comprehensive details about how we collect, use, store, and protect your personal information, 
                  please review our detailed 
                  <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline mx-1">
                    Privacy Policy
                  </Link>
                  which forms an integral part of these terms.
                </p>
              </div>
            </div>

            {/* 9. Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">9. Intellectual Property Rights</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                All content displayed on our website, mobile application, and marketing materials—including but 
                not limited to logos, brand names, photographs, text content, graphics, and promotional materials—is 
                the exclusive intellectual property of Namami Cleans.
              </p>
              
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                <p className="text-purple-700 mb-0">
                  <strong>Usage Restrictions:</strong> This content cannot be reproduced, distributed, modified, 
                  or used for commercial purposes without explicit written permission from Namami Cleans. 
                  Unauthorized use may result in legal action.
                </p>
              </div>
            </div>

            {/* 10. Terms Updates */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">10. Updates to Terms & Conditions</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Namami Cleans reserves the right to modify, update, or revise these Terms and Conditions at any time 
                without prior notice to users. Updates will be posted on this page with a revised "Last Updated" date.
              </p>
              
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                <p className="text-gray-700 mb-0">
                  <strong>Acceptance of Changes:</strong> Continued use of our services, website, or mobile application 
                  after any changes indicates your acceptance of the updated terms and conditions.
                </p>
              </div>
            </div>

            {/* 11. Governing Law */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">11. Governing Law & Dispute Resolution</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Applicable Law:</strong> These Terms and Conditions are governed by and construed in 
                    accordance with the laws of India.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Jurisdiction:</strong> Any disputes, claims, or legal proceedings arising from these 
                    terms or our services will be resolved under the exclusive jurisdiction of the courts in 
                    Vidisha, Madhya Pradesh, India.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 mb-0">
                    <strong>Alternative Resolution:</strong> We encourage customers to contact our support team 
                    first to resolve any concerns before pursuing formal legal action.
                  </p>
                </div>
              </div>
            </div>

            {/* 12. Contact Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-secondary-100 p-3 rounded-full mr-4">
                  <Users className="w-6 h-6 text-secondary-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">12. Contact Information</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                For questions, concerns, or clarifications regarding these Terms and Conditions, please contact us:
              </p>
              
              <div className="bg-secondary-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Customer Support</h3>
                    <p className="text-gray-700 mb-1">📞 Phone: +91-8770490169</p>
                    <p className="text-gray-700 mb-1">📧 Email: support@namamicleans.com</p>
                    <p className="text-gray-700">🌐 Website: https://namamicleans.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Business Address</h3>
                    <p className="text-gray-700">
                      Civil Lines, SATI College<br />
                      Vidisha, Madhya Pradesh<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acceptance Statement */}
            <div className="bg-primary-50 border border-primary-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Agreement Acknowledgment</h3>
              <p className="text-primary-700 mb-0">
                By booking our services, using our website, or engaging with Namami Cleans in any capacity, 
                you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. 
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our customer support team is here to help clarify any questions you may have about our terms and conditions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="https://app.namamicleans.com" target="_blank">
              <Button className="bg-secondary text-primary-800 hover:bg-secondary-600">
                Book Service Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
