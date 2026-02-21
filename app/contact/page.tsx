"use client";

import { motion, Variants } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { fadeInUp } from "@/lib/animations";
import { useForm, ValidationError } from "@formspree/react";

export const FadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xkorrnno");

  if (state.succeeded) {
    return (
      <div className="text-center py-12 bg-red-100 text-red-800 rounded-lg">
        <p className="text-xl font-semibold">
          Thanks for your message! We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <main className="pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-red-600 to-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto">
            Have a question? Want to collaborate? Drop us a line.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-4xl text-black font-bold text-center mb-4">
              Send Us a <span className="text-red-600">Message</span>
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Whether it's a project idea, partnership opportunity, or just
              saying hello—we're all ears.
            </p>
          </SectionReveal>

          <motion.div
            className="grid lg:grid-cols-2 gap-16"
            variants={FadeInUp}
          >
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:ring-red-600"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:ring-red-600"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:ring-red-600"
                  required
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:ring-red-600"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* General errors */}
              <ValidationError errors={state.errors} />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={state.submitting}
                className="w-full"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {/* Contact Details */}
            <SectionReveal>
              <div className="bg-gray-900 text-white p-8 md:p-12 rounded-3xl h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8">
                    Contact Information
                  </h3>
                  <div className="space-y-8 mb-10">
                    {/* Email */}
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Email Address</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-lg font-semibold text-white hover:text-red-400 transition-colors"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Phone Number</p>
                        <a
                          href={`tel:${siteConfig.phone}`}
                          className="text-lg font-semibold text-white hover:text-red-400 transition-colors"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Physical Address</p>
                        <p className="text-lg font-semibold text-white">
                          {siteConfig.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="border-t border-gray-700 pt-8">
                    <p className="text-sm text-gray-400 mb-4">Follow Us On</p>
                    <div className="flex gap-4">
                      {siteConfig.social.twitter && (
                        <a
                          href={siteConfig.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                          aria-label="Twitter"
                        >
                          <svg
                            className="w-5 h-5 text-white group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </a>
                      )}
                      {siteConfig.social.linkedin && (
                        <a
                          href={siteConfig.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                          aria-label="LinkedIn"
                        >
                          <svg
                            className="w-5 h-5 text-white group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      {siteConfig.social.github && (
                        <a
                          href={siteConfig.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
                          aria-label="GitHub"
                        >
                          <svg
                            className="w-5 h-5 text-white group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[16/9] relative rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.7702153162872!2d32.89260601131862!3d2.2397713580583334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1770b1b582fa9409%3A0xc65a06dc8b9d178!2sKakebe%20Technologies!5e0!3m2!1sen!2sug!4v1771597650158!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>

              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  Kakebe Technologies Hub
                </h3>
                <p className="text-base text-gray-700 mb-2">
                  {siteConfig.address}
                </p>
                <p className="text-gray-600 mb-6">
                  Come visit us and see innovation in action
                </p>
                <a
                  href={`https://maps.app.goo.gl/spMLN7tLaB5wGF2Z6`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
