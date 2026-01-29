import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Papa from "papaparse";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";


// 🔗 Google Sheet CSV URL
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqNqlLUgQLmoNFWfvhGogE_0vDDhs_u7AU19Lz6Lw1yo7nwOvG_tSD3-FEzQ4nB1JEuKYo6HqaPTVr/pub?output=csv";

const categories = ["All", "Classic", "Modern", "Premium", "Featured"];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // 📥 Fetch products from Google Sheet
  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const data = result.data.map((row) => ({
              id: Number(row.id),
              name: row.name,
              price: Number(row.price),
              offerPrice: Number(row.offerPrice),
              image: row.image,
              description: row.description,
              category: row.category,
            }));
            setProducts(data);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  // 🔍 Filter logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
   <>
    <Helmet>
  <title>Products | Shop With MBT – CCTV, AirPods & Electronics</title>
  <meta
    name="description"
    content="Browse CCTV cameras, AirPods, and electronics at best prices. WhatsApp ordering with delivery across India."
  />
</Helmet>
    <div className="min-h-screen bg-white pt-10">
      
      {/* Header */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Our Products
          </h1>
          <p className="text-lg text-gray-600">
            Browse our complete collection of premium products
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-100 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6 justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={22}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <p className="text-center py-20 text-gray-500">
              Loading products...
            </p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600 py-20">
              No products found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
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
                        className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-semibold w-full sm:w-auto"
                      >
                        <FaWhatsapp className="text-2xl" />
                        Order on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
   </>
  );
}
