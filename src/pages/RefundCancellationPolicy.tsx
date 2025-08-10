import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, Clock, Phone, Mail, Globe, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const RefundCancellationPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Refund and Cancellation Policy | Namami Cleans"
        description="Learn about Namami Cleans refund and cancellation policy. Understand our terms for service cancellations, rescheduling, and customer satisfaction policies."
        keywords="refund policy, cancellation policy, Namami Cleans refund, service cancellation, cleaning service policy"
        canonicalUrl="https://namamicleans.com/refund-cancellation-policy"
      />

      {/* Hero Section */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
              Refund and Cancellation Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last Updated: April 1, 2025
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl">
              At Namami Cleans, we value your time and trust in our doorstep cleaning services. 
              To ensure smooth operations and quality service for all our customers, we follow 
              the policy below regarding cancellations and changes.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Key Policy Alert */}
            <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-12 rounded-r-lg">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-red-800">Important Notice</h3>
              </div>
              <p className="text-red-700 text-lg">
                <strong>Namami Cleans operates under a strict no refund policy.</strong> 
                Please read this policy carefully before booking our services.
              </p>
            </div>

            {/* 1. Service Cancellation */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <RefreshCw className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">1. Service Cancellation</h2>
              </div>
              
              <div className="space-y-8">
                {/* Customer-Initiated Cancellations */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-xl font-bold text-green-800">Customer-Initiated Cancellations</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Single-Service Bookings */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                        Single-Service Bookings
                      </h4>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <strong>24-Hour Window:</strong> You may cancel or reschedule your appointment 
                            up to 24 hours before the scheduled time at no additional cost.
                          </p>
                        </div>
                        <div className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <strong>Late Cancellations:</strong> Cancellations made within 24 hours of the 
                            scheduled service may not be eligible for rescheduling and will be considered 
                            as a completed service.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Subscription Plans */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <RefreshCw className="w-4 h-4 mr-2 text-purple-500" />
                        Subscription Plans (Weekly/Monthly)
                      </h4>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <strong>Flexible Cancellation:</strong> You may cancel your subscription at any time. 
                            However, no refunds will be issued for remaining or unused services.
                          </p>
                        </div>
                        <div className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            <strong>Missed Appointments:</strong> Missed appointments within an active subscription 
                            will not be carried forward unless rescheduled at least 24 hours in advance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. No Refund Policy */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">2. No Refund Policy</h2>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-4">Strict No Refund Policy</h3>
                <p className="text-red-700 text-lg mb-0">
                  <strong>Namami Cleans follows a strict no refund policy.</strong> 
                  Once payment is made, it is final and non-refundable under any circumstances.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">We do not offer refunds for:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Completed services</span>
                    </div>
                    <div className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Late cancellations or no-shows</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Subscription cancellations after payment</span>
                    </div>
                    <div className="flex items-center">
                      <XCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Change of mind or personal circumstances</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Satisfaction Alternative */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-6">
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="text-lg font-semibold text-blue-800">Customer Satisfaction Commitment</h4>
                </div>
                <p className="text-blue-700 mb-0">
                  While we maintain a no refund policy, we're committed to customer satisfaction. 
                  If there is any issue with the quality of service, we may offer a 
                  <strong> free complaint correction</strong> at our discretion, based on internal 
                  review and availability.
                </p>
              </div>
            </div>

            {/* 3. How to Cancel or Reschedule */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">3. How to Cancel or Reschedule</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                You can cancel or reschedule a booking using any of the following convenient methods:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-3">Call our customer service team</p>
                  <p className="text-xl font-bold text-primary">+91-8770490169</p>
                  <p className="text-sm text-gray-500 mt-2">Available 9 AM - 9 PM</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-3">Send us an email request</p>
                  <p className="text-lg font-bold text-primary break-all">support@namamicleans.com</p>
                  <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Online Platform</h3>
                  <p className="text-gray-600 mb-3">Use our website or mobile app</p>
                  <Link to="https://app.namamicleans.com" target="_blank" className="text-lg font-bold text-primary hover:text-primary-700">
                    app.namamicleans.com
                  </Link>
                  <p className="text-sm text-gray-500 mt-2">24/7 Self-Service</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-amber-600 mr-2" />
                  <p className="text-amber-800 font-medium mb-0">
                    <strong>Important:</strong> Remember to cancel or reschedule at least 24 hours 
                    before your appointment to avoid charges.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Exceptions and Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">4. Exceptions and Special Terms</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-4">Service Completion Conditions</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Incorrect Address:</strong> Services cancelled due to incorrect or 
                        incomplete address information will be treated as completed services.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Customer Unavailability:</strong> If no one is available at the location 
                        during the scheduled time, the service will be considered completed.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Locked Premises:</strong> Services cancelled due to locked premises or 
                        denied access will be treated as completed services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">Policy Enforcement</h3>
                  <div className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Repeated Violations:</strong> Namami Cleans reserves the right to deny 
                      re-service or rescheduling privileges in case of repeated cancellations, no-shows, 
                      or misuse of this policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Quality Assurance */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">5. Quality Assurance & Support</h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Service Quality Commitment</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Quality Guarantee:</strong> We stand behind the quality of our services 
                      and strive for 100% customer satisfaction.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Complaint Resolution:</strong> If you're not satisfied with our service quality, 
                      contact us within 24 hours of service completion for a possible free correction.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Professional Standards:</strong> All our services are performed by trained, 
                      insured, and background-verified professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Support Section */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
              <div className="text-center">
                <div className="bg-primary-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Need Support?</h3>
                <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
                  We're here to help with any service-related concerns. Contact our team within 
                  24 hours of your appointment for the fastest resolution.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
                  <div className="text-center">
                    <Phone className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-sm font-medium text-primary-800">+91-8770490169</p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-sm font-medium text-primary-800">support@namamicleans.com</p>
                  </div>
                  <div className="text-center">
                    <Globe className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-sm font-medium text-primary-800">namamicleans.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Policies */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Policies</h3>
              <p className="text-gray-700 mb-4">
                For complete information about our services and policies, please also review:
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/terms-and-conditions" 
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Terms & Conditions
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
                <Link 
                  to="/privacy-policy" 
                  className="inline-flex items-center px-4 py-2 bg-secondary text-primary-800 rounded-lg hover:bg-secondary-600 transition-colors"
                >
                  Privacy Policy
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Our Policy?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our customer support team is available to answer any questions about our 
            refund and cancellation policy. Contact us before booking if you have concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="https://app.namamicleans.com" target="_blank">
              <Button className="bg-secondary text-primary-800 hover:bg-secondary-600">
                Book Service Now
              </Button>
            </Link>
            <a href="tel:+918770490169">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Call Support
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundCancellationPolicy;
