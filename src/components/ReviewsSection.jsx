import Papa from "papaparse";
import { useEffect, useState } from "react";
import ReviewCircles from "./ReviewCircles";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSoH1IKczbX591ANADiCEvVhVE5kpP9ukQ1XtH1452pQbEnRFgLDNUKFimtfGgjiiy2_lmkn4E0lemz/pub?output=csv"
    )
      .then((res) => res.text())
      .then((csv) => {
        const data = Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
        }).data;
        setReviews(data);
      });
  }, []);

  if (!reviews.length) return null;

  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-10">
        What Our Customers Say
      </h2>

      <div className="w-full flex justify-center">
        <ReviewCircles reviews={reviews} />
      </div>
    </section>
  );
}
