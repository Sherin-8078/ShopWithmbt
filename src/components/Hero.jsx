import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="relative bg-gray-100 py-24 sm:py-32 lg:py-40">
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">'>
        <div className='flex text-center max-w-4xl mx-auto items-center justify-center flex-col'>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl tracking-tight mb-6 sm:mb-8 leading-tight">
              Premium Products for Modern Living
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover our curated collection of high-quality products designed to elevate your lifestyle
            </p>
            <a href={`https://wa.me/9544692248?text=${encodeURIComponent(
                          `Hi! I'm interested in Purchasing your product`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex bg-black text-white p-4 rounded-full gap-3 items-center md:text-lg font-semibold'><span className='md:text-3xl text-2xl'><FaWhatsapp/></span>Order on WhatsApp</a>
       </div>
       </div>
    </div>
  )
}

export default Hero
