import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import WhyChoose from '../components/WhyChoose'
import Footer from '../components/Footer'
import { Helmet } from "react-helmet-async";
import ReviewsSection from '../components/ReviewsSection'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Shop With MBT | Best Electronics Store in Adoor, Kerala</title>
        <meta
          name="description"
          content="Shop With MBT is a trusted electronics store in Adoor, Pathanamthitta offering CCTV, AirPods and accessories at best prices with delivery across India. Order via WhatsApp."
        />
        <meta
          name="keywords"
          content="electronics store adoor, cctv shop kerala, buy airpods india, shop with mbt"
        />
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ElectronicsStore",
            "name": "Shop With MBT",
            "url": "https://shopwithmbt.com",
            "areaServed": "IN",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Adoor",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://wa.me/9544692248"
            ]
          }
          `}
        </script>
      </Helmet>
    <div className="overflow-x-hidden">
      <Hero />
      <Featured />
      <WhyChoose />
      <ReviewsSection />
      <Footer />
    </div>
    </>
  )
}

export default Home
