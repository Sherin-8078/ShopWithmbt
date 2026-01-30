import React, { useState } from "react";
import ReviewModal from "./ReviewModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

export default function ReviewCircles({ reviews }) {
  const [activeReview, setActiveReview] = useState(null);

  return (
    <>
      <div className="w-full max-w-6xl mx-auto">

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView="auto"
          spaceBetween={16}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".reviews-prev",
            nextEl: ".reviews-next",
          }}
          className="px-4 py-16"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <button
                onClick={() => setActiveReview(review)}
                className="w-24 h-24 rounded-full border-2 border-gray-300 overflow-hidden"
              >
                <img
                  src={review.imageUrl}
                  alt="Customer review"
                  className="w-full h-full object-cover"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons BELOW */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="reviews-prev p-3 rounded-full border bg-white hover:bg-black hover:text-white transition">
            <FiChevronLeft size={22} />
          </button>

          <button className="reviews-next p-3 rounded-full border bg-white hover:bg-black hover:text-white transition">
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {activeReview && (
        <ReviewModal
          review={activeReview}
          onClose={() => setActiveReview(null)}
        />
      )}
    </>
  );
}
