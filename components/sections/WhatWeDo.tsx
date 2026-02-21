"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import SectionReveal from "../ui/SectionReveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const services = [
  {
    id: 1,
    title: "Kakebe Shop",
    subtitle: "Online Entrepreneurship Trainings",
    description:
      "Empowering aspiring entrepreneurs with essential business skills through our comprehensive online training programs. Learn from industry experts and transform your business ideas into reality.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: [
      "Business Fundamentals",
      "Digital Marketing",
      "Financial Planning",
      "E-commerce Strategies",
    ],
    color: "red",
  },
  {
    id: 2,
    title: "Web & Mobile Systems",
    subtitle: "Custom Software Solutions",
    description:
      "We build responsive websites and mobile applications tailored to your business needs. Our team delivers high-quality, scalable solutions using modern technologies.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Responsive Web Design",
      "iOS & Android Apps",
      "Progressive Web Apps",
      "API Development",
    ],
    color: "blue",
  },
  {
    id: 3,
    title: "Internship Programs",
    subtitle: "Hands-on Learning Experience",
    description:
      "Our internship program provides real-world experience for students and graduates looking to kickstart their careers in technology. Work on actual projects and learn from industry professionals.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: [
      "3-6 Month Programs",
      "Mentorship from Experts",
      "Real Project Experience",
      "Career Guidance",
    ],
    color: "green",
  },
  {
    id: 4,
    title: "Corporate IT Trainings",
    subtitle: "Professional Development",
    description:
      "We offer customized IT training programs for businesses and organizations. Upskill your workforce with the latest technology knowledge and best practices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: [
      "Customized Curriculum",
      "On-site or Online",
      "Industry Certifications",
      "Team Building Workshops",
    ],
    color: "purple",
  },
  {
    id: 5,
    title: "Software Development",
    subtitle: "End-to-End Solutions",
    description:
      "From concept to deployment, our experienced developers create robust software solutions that solve complex business challenges and drive digital transformation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: [
      "Custom Software",
      "Enterprise Solutions",
      "Database Design",
      "Quality Assurance",
    ],
    color: "orange",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
  red: {
    bg: "bg-red-600",
    text: "text-red-600",
    border: "border-red-600",
    light: "bg-red-50",
  },
  blue: {
    bg: "bg-blue-600",
    text: "text-blue-600",
    border: "border-blue-600",
    light: "bg-blue-50",
  },
  green: {
    bg: "bg-green-600",
    text: "text-green-600",
    border: "border-green-600",
    light: "bg-green-50",
  },
  purple: {
    bg: "bg-purple-600",
    text: "text-purple-600",
    border: "border-purple-600",
    light: "bg-purple-50",
  },
  orange: {
    bg: "bg-orange-600",
    text: "text-orange-600",
    border: "border-orange-600",
    light: "bg-orange-50",
  },
};

export default function ServicesPage() {
  return (
    <>
      <main className="pt-20">
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-black font-black text-center mb-4">
              Our <span className="text-red-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto font-medium">
              Discover our innovative services designed to empower youth and transform Northern Uganda through technology.
            </p>
          </div>
        </div>  

        {/* Services Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const colors = colorClasses[service.color];
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                  >
                    <div className={`${colors.light} p-8`}>
                      <div
                        className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className={`${colors.text} font-medium mb-4`}>{service.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="p-6 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <svg
                              className={`w-5 h-5 ${colors.text} mr-2 flex-shrink-0`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Why Choose <span className="text-red-600">Kakebe</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're committed to delivering exceptional results through our proven
                approach to technology solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Team",
                  description:
                    "Our skilled developers and trainers bring years of industry experience to every project.",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Local Impact",
                  description:
                    "We understand the unique challenges and opportunities in Northern Uganda.",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Proven Results",
                  description:
                    "Join hundreds of individuals and businesses who've transformed with Kakebe.",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

