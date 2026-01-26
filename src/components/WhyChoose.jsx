import React from 'react'
import { SlBadge } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
const WhyChoose = () => {
  return (
    <div className='w-full bg-gray-100 p-10 '>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
        <div  className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-black text-white rounded-full mb-6 text-3xl"><SlBadge/></div>
        <h3 className="text-xl sm:text-2xl font-medium mb-3">Quality Products</h3>
        <p className="text-gray-600 leading-relaxed">We don't compromise on quality.</p>
      </div>
      <div  className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-black text-white rounded-full mb-6 text-3xl"><FaWhatsapp/></div>
        <h3 className="text-xl sm:text-2xl font-medium mb-3">Easy Ordering via WhatsApp</h3>
        <p className="text-gray-600 leading-relaxed">No apps, no forms, no confusion.</p>
      </div>
      <div  className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-black text-white rounded-full mb-6 text-3xl"><GrLocation/></div>
        <h3 className="text-xl sm:text-2xl font-medium mb-3">Trusted Local Business</h3>
        <p className="text-gray-600 leading-relaxed">You're dealing with real people, not a faceless site.</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default WhyChoose
