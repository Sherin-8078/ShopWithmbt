import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Featured = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Product 1",
      price: "79.99",
      offerPrice: "49.99",
      image:
        "https://images.unsplash.com/photo-1712903276003-b814091e7770?auto=format&fit=crop&w=400&q=80",
      description: "High-quality product designed for your needs",
      category: "Featured",
    },
    {
      id: 2,
      name: "Premium Product 2",
      price: "99.99",
      offerPrice: "59.99",
      image:
        "https://images.unsplash.com/photo-1651602855717-9f79c72893cc?auto=format&fit=crop&w=400&q=80",
      description: "Elegant design meets functionality",
      category: "Featured",
    },
    {
      id: 3,
      name: "Premium Product 3",
      price: "129.99",
      offerPrice: "79.99",
      image:
        "https://images.unsplash.com/photo-1712903276003-b814091e7770?auto=format&fit=crop&w=400&q=80",
      description: "Premium quality for lasting satisfaction",
      category: "Featured",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked selection of our most popular items
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/fallback.jpg";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                  {product.category}
                </span>

                <h3 className="text-xl font-semibold mt-3">
                  {product.name}
                </h3>

                <p className="text-gray-600 mt-2 mb-6">
                  {product.description}
                </p>

                {/* Price + WhatsApp */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-2xl font-semibold">
                    ${product.offerPrice}
                    <span className="text-gray-500/60 text-sm line-through ml-2">
                      ${product.price}
                    </span>
                  </p>

                  <a
                    href={`https://wa.me/8078828121?text=${encodeURIComponent(
                      `Hi! I'm interested in ${product.name} for $${product.offerPrice}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-semibold w-full sm:w-auto"
                  >
                    <FaWhatsapp className="text-2xl" />
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
