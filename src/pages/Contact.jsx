import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "9544692248",
    description: "Mon-Sat, 9 AM - 6 PM",
  },
  {
    icon: Mail,
    title: "Email",
    details: "hello@yourbrand.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Near Akshaya, Pannivizha, Adoor",
    description: "Serving the local area",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Sat: 9 AM - 6 PM",
    description: "Sunday: Closed",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Header */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Get in touch with us through WhatsApp or any of the methods below
          </p>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 sm:py-20 border-b border-gray-100 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <div className="bg-gray-50 rounded-3xl p-10 sm:p-16 flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-4xl mb-6">
              Fastest Way to Reach Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Send us a message on WhatsApp for quick responses to your questions
              or to place an order.
            </p>

            <a href={`https://wa.me/9544692248?text=${encodeURIComponent(
                                      `Hi! I'm interested in Purchasing your product`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex bg-black text-white p-4 rounded-full w-fit gap-3 items-center md:text-lg font-semibold'><span className='text-3xl'><FaWhatsapp/></span>Order on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              Other Ways to Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              We're here to help in the way that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center hover:shadow-md transition"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-black rounded-full mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="font-medium text-gray-900 mb-2 text-lg">
                    {item.details}
                  </p>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8">
            Service Area
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-12">
            We're a proud local business serving our community and surrounding
            areas.
          </p>

          <div className="bg-white rounded-3xl p-10 sm:p-12 border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-medium mb-8">
              Why Choose Us?
            </h3>
            <ul className="space-y-5 text-gray-700 text-lg">
              {[
                "Fast and convenient WhatsApp ordering",
                "Knowledgeable and friendly service",
                "Local business you can trust",
                "Quality products at fair prices",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center gap-3"
                >
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
