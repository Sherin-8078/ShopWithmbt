import React, { useEffect } from "react";

export default function ReviewModal({ review, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 10000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
      onMouseDown={onClose}
      onTouchStart={onClose}
    >
      <div
        className="rounded-2xl p-4 w-[90%] max-w-lg max-h-[90vh] overflow-auto"
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <img
          src={review.imageUrl}
          alt="Review screenshot"
          className="w-full h-full object-contain rounded-xl"
        />

        {review.name && (
          <p className="text-center mt-3 font-medium text-lg text-white">
            — {review.name}
          </p>
        )}
      </div>
    </div>
  );
}
