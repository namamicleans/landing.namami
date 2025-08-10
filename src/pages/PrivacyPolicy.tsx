import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Privacy Policy | Namami Cleans"
        description="Learn how Namami Cleans collects, uses, and protects your personal information. Read our comprehensive privacy policy for transparency and trust."
        keywords="privacy policy, data protection, Namami Cleans privacy, personal information, data security, GDPR compliance"
        canonicalUrl="https://namamicleans.com/privacy-policy"
      />

      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last Updated: April 1, 2025
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl">
              At Namami Cleans, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This Privacy Policy explains how we collect, use, store, 
              and protect your data when you use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Key Principles */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-lg">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-800">Our Privacy Commitment</h3>
              </div>
              <p className="text-blue-700 text-lg">
                We collect only the information necessary to provide you with excellent cleaning services. 
                Your data is never sold to third parties, and we implement industry-standard security 
                measures to protect your information.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">1. Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-500" />
                    Personal Information
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When you book our services or create an account, we collect:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Full name and contact details</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Phone number and email address</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Service address and location details</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Payment information and billing details</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Service preferences and special requests</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Feedback and communication history</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Technical Information */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-purple-500" />
                    Technical Information
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When you use our website or mobile app, we automatically collect:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">IP address and device information</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Browser type and operating system</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Pages visited and time spent</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Cookies and similar tracking technologies</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Location data (when permitted)</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">App usage analytics and performance data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">2. How We Use Your Information</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Service Delivery & Operations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Processing and scheduling your cleaning appointments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Coordinating service delivery with our cleaning teams</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Processing payments and managing billing</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Providing customer support and assistance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Managing subscriptions and recurring services</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Handling complaints and quality assurance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Communication & Marketing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Sending service confirmations and reminders</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Providing updates about our services</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Sending promotional offers (with your consent)</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Responding to inquiries and feedback</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Sharing important policy updates</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Conducting customer satisfaction surveys</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-4">Business Improvement & Analytics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Analyzing service usage patterns and trends</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Improving our website and mobile app functionality</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Developing new services and features</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Preventing fraud and ensuring security</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Complying with legal and regulatory requirements</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Training and quality improvement purposes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">3. Information Sharing & Disclosure</h2>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Our No-Sale Commitment</h3>
                <p className="text-orange-700 mb-0">
                  <strong>We never sell, rent, or trade your personal information to third parties for marketing purposes.</strong> 
                  Your data is shared only as described below and always with appropriate protections in place.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">When We Share Information:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <strong className="text-gray-800">Service Providers:</strong>
                        <span className="text-gray-700"> With trusted partners who help us deliver services (payment processors, cloud storage, communication platforms)</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <strong className="text-gray-800">Cleaning Teams:</strong>
                        <span className="text-gray-700"> With our professional cleaning staff only for service delivery purposes</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <strong className="text-gray-800">Legal Requirements:</strong>
                        <span className="text-gray-700"> When required by law, court order, or to protect our rights and safety</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <strong className="text-gray-800">Business Transfers:</strong>
                        <span className="text-gray-700"> In the event of a merger, acquisition, or sale of our business assets</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Data Security */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Lock className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">4. Data Security & Protection</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">Security Measures We Implement:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Technical Safeguards</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Lock className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">SSL/TLS encryption for data transmission</span>
                        </li>
                        <li className="flex items-start">
                          <Lock className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Secure cloud storage with encryption at rest</span>
                        </li>
                        <li className="flex items-start">
                          <Lock className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Regular security audits and penetration testing</span>
                        </li>
                        <li className="flex items-start">
                          <Lock className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Multi-factor authentication for admin access</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Operational Safeguards</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Shield className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Access controls and role-based permissions</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Employee background checks and training</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Data retention and deletion policies</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Incident response and breach notification procedures</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                    <p className="text-amber-800 font-medium mb-0">
                      <strong>Important:</strong> While we implement industry-standard security measures, 
                      no method of transmission over the internet is 100% secure. We continuously 
                      work to improve our security practices and will notify you of any significant data breaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Your Rights and Choices */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">5. Your Rights & Choices</h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">You Have the Right To:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Eye className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-800">Access:</strong>
                        <span className="text-gray-700"> Request a copy of the personal information we have about you</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Database className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-800">Correct:</strong>
                        <span className="text-gray-700"> Update or correct any inaccurate information</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-800">Delete:</strong>
                        <span className="text-gray-700"> Request deletion of your personal information (subject to legal requirements)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Lock className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-800">Restrict:</strong>
                        <span className="text-gray-700"> Limit how we process your information</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-4 h-4 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-800">Portability:</strong>
                        <span className="text-gray-700"> Receive your data in a portable format</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-4 h-4 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-800">Opt-out:</strong>
                        <span className="text-gray-700"> Unsubscribe from marketing communications</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">How to Exercise Your Rights:</h3>
                <p className="text-blue-700 mb-4">
                  To exercise any of these rights, please contact us using the information provided at the end of this policy. 
                  We will respond to your request within 30 days and may require verification of your identity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">📧 Email</div>
                    <p className="text-sm text-blue-700">support@namamicleans.com</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">📞 Phone</div>
                    <p className="text-sm text-blue-700">+91-8770490169</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">💬 In-App</div>
                    <p className="text-sm text-blue-700">Contact support feature</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Cookies and Tracking */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">6. Cookies & Tracking Technologies</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-4">Types of Cookies We Use:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Essential Cookies</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Required for basic website functionality, security, and your service delivery.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Session management</li>
                        <li>• Authentication and security</li>
                        <li>• Shopping cart functionality</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Analytics Cookies</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Help us understand how you use our website to improve your experience.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Usage statistics</li>
                        <li>• Performance monitoring</li>
                        <li>• Feature optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Cookie Management</h4>
                  <p className="text-gray-700 text-sm">
                    You can control cookies through your browser settings. However, disabling certain cookies 
                    may affect the functionality of our website and services. Most browsers allow you to refuse 
                    cookies or alert you when cookies are being sent.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Data Retention */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Database className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">7. Data Retention</h2>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">How Long We Keep Your Data:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-gray-800">Account Information:</strong>
                      <span className="text-gray-700"> Retained while your account is active and for 3 years after account closure for legal and business purposes</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-gray-800">Service Records:</strong>
                      <span className="text-gray-700"> Kept for 7 years for quality assurance, dispute resolution, and regulatory compliance</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-gray-800">Payment Information:</strong>
                      <span className="text-gray-700"> Stored only as long as necessary for transaction processing and fraud prevention</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong className="text-gray-800">Marketing Data:</strong>
                      <span className="text-gray-700"> Deleted immediately upon unsubscription or as requested</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Updates to Privacy Policy */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">8. Updates to This Privacy Policy</h2>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                <p className="text-orange-700 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, 
                  technology, legal requirements, or other factors. When we make changes:
                </p>
                <ul className="space-y-2 text-orange-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span>We will update the "Last Updated" date at the top of this policy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span>For significant changes, we will notify you via email or app notification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span>Continued use of our services after changes indicates acceptance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 9. Contact Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-800 mb-0">9. Contact Information</h2>
              </div>
              
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-primary-800 mb-6 text-center">
                  Questions About Your Privacy?
                </h3>
                <p className="text-primary-700 mb-6 text-center max-w-2xl mx-auto">
                  If you have any questions about this Privacy Policy, our data practices, or want to exercise 
                  your privacy rights, please don't hesitate to contact us:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="font-semibold text-primary-800 mb-4">Privacy Officer</h4>
                    <div className="space-y-2">
                      <p className="text-primary-700">📧 privacy@namamicleans.com</p>
                      <p className="text-primary-700">📞 +91-8770490169</p>
                      <p className="text-primary-700">🌐 namamicleans.com</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-primary-800 mb-4">Business Address</h4>
                    <div className="text-primary-700">
                      <p>Civil Lines, SATI College</p>
                      <p>Vidisha, Madhya Pradesh</p>
                      <p>India</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-6 pt-6 border-t border-primary-200">
                  <p className="text-sm text-primary-600">
                    We typically respond to privacy-related inquiries within 48 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Documents */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Documents</h3>
              <p className="text-gray-700 mb-4">
                This Privacy Policy works together with our other legal documents. Please also review:
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
                  to="/refund-cancellation-policy" 
                  className="inline-flex items-center px-4 py-2 bg-secondary text-primary-800 rounded-lg hover:bg-secondary-600 transition-colors"
                >
                  Refund & Cancellation Policy
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
            Your Privacy Matters to Us
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            We're committed to protecting your personal information and being transparent about our data practices. 
            Ready to experience our services with confidence?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="https://app.namamicleans.com" target="_blank">
              <Button className="bg-secondary text-primary-800 hover:bg-secondary-600">
                Book Service Now
              </Button>
            </Link>
            <a href="mailto:privacy@namamicleans.com">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Privacy Team
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
