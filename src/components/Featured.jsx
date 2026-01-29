import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Papa from "papaparse";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 🔗 Same Google Sheet CSV URL
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZCb9N7-d8ZpJx3GMyDsBhIEaCA7YmAzkoVYtvVzLYoPYsHM5dQ-C7ucnBQxpgJjp1d35dZ_TXetu2/pub?output=csv";

const Featured = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 📥 Fetch only FEATURED products
  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const data = result.data
              .filter((row) => row.category === "Featured")
              .map((row) => ({
                id: Number(row.id),
                name: row.name,
                price: Number(row.price),
                offerPrice: Number(row.offerPrice),
                image: row.image,
                description: row.description,
                category: row.category,
              }));

            setFeaturedProducts(data);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        console.error("Failed to load featured products", err);
        setLoading(false);
      });
  }, []);

  if (loading || featuredProducts.length === 0) return null;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col items-center justify-between mb-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2">
              Featured Products
            </h2>
            <p className="text-gray-600">
              Handpicked selection of our most popular items
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between w-full pt-5">
            <button className="featured-prev p-3 rounded-full border hover:bg-black hover:text-white transition">
              <FiChevronLeft size={22} />
            </button>
            <button className="featured-next p-3 rounded-full border hover:bg-black hover:text-white transition">
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".featured-next",
            prevEl: ".featured-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {featuredProducts.map((product) => {
            const discount = Math.round(
              ((product.price - product.offerPrice) / product.price) * 100
            );

            return (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-3xl border overflow-hidden hover:shadow-xl transition h-full">
                  {/* Image */}
                  <div className="aspect-square bg-gray-100 overflow-hidden relative">
                    {discount > 0 && (
                      <span className="absolute top-4 right-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {discount}% OFF
                      </span>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded-full w-fit">
                      {product.category}
                    </span>

                    <h3 className="text-xl font-semibold mt-3">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mt-2 mb-6">
                      {product.description}
                    </p>

                    <div className="mt-auto flex flex-col sm:flex-row justify-between gap-4">
                      <p className="text-2xl font-semibold">
                        ₹{product.offerPrice}
                        <span className="text-gray-500/60 text-sm line-through ml-2">
                          ₹{product.price}
                        </span>
                      </p>

                      <a
                        href={`https://wa.me/9544692248?text=${encodeURIComponent(
                          `Hi! I'm interested in ${product.name} for ₹${product.offerPrice}`
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Featured;
