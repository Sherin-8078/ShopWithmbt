import React from "react";
import { Award, Heart, Target, Users } from "lucide-react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "We never compromise on the quality of our products. Every item is carefully selected and tested.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "Your satisfaction is our priority. We're here to help you find exactly what you need.",
  },
  {
    icon: Target,
    title: "Expert Knowledge",
    description:
      "With over 5 years in the industry, we know our products inside and out.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "As a local business, we're committed to serving and supporting our community.",
  },
];

const About = () => {
  return (
   <>
   <Helmet>
  <title>About Us | Shop With MBT – Electronics Store in Adoor</title>
  <meta
    name="description"
    content="Shop With MBT is a local electronics store in Adoor, Kerala offering genuine products, best prices, and fast delivery."
  />
</Helmet>

    <div className="min-h-screen bg-white pt-10">
      {/* Header */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">About Me</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Learn about our story and commitment to excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8">
            Our Story
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              For over 5 years, we've been dedicated to bringing quality
              products to our community. What started as a passion project
              has grown into a trusted business that serves customers with
              care and expertise.
            </p>

            <p>
              Our journey began with a simple belief: that everyone deserves
              access to premium products at fair prices. This principle
              continues to guide everything we do today.
            </p>

            <p>
              We carefully curate each product in our collection, ensuring
              it meets our high standards for quality, design, and value.
            </p>

            <p>
              As a local business, we take pride in being part of this
              community. We're here not just to sell, but to build lasting
              relationships based on trust and service.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that drive us forward every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center hover:shadow-md transition"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-medium mb-4">
                    {value.title}
                  </h3>

                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8">
            Our Mission
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
            To provide exceptional products and service that enhance our
            customers' lives, while building a business our community can
            be proud of.
          </p>
        </div>
      </section>
      <Footer />
    </div>
   </>
  );
};

export default About;
