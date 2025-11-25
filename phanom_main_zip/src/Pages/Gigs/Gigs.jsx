import React from 'react'
import HeroSection from '../../Components/GigsComponents/HeroSection'
import GigDescription from '../../Components/GigsComponents/GigDescription'
import PortfolioSection from '../../Components/GigsComponents/PortfolioSection'
import RecommendedCarousel from '../../Components/GigsComponents/RecommendedCarousel'
import FaqAccordion from '../../Components/GigsComponents/FaqAccordion'
import Reviews from '../../Components/GigsComponents/Reviews'
import RelatedTags from '../../Components/GigsComponents/RelatedTags'
import Peoples from '../../Components/GigsComponents/Peoples'
import Plans from '../../Components/GigsComponents/Plans'
import { FaAngleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const GigsPage = () => {
  return (
   <div className="flex flex-col pt-20">
    <div className='bg-gradient-to-r py-3 px-4 md:px-20 from-[#469AE0] via-[#9A4DE4] to-[#D01AE5] flex flex-col justify-start items-start relative z-10'>
        <h1 className='text-white font-bold text-2xl mb-2 md:mb-0'>Gigs Details</h1>
      </div>
       {/* Breadcrumbs */}
      <div className='w-[90vw] mx-auto my-3 flex flex-wrap gap-2 text-gray-600 items-center px-5 py-6 relative z-10 text-sm md:text-base'>
        <div>Home</div>
        <FaAngleRight />
        <div>Service</div>
        <FaAngleRight />
        <div>Gigs Details</div>
      </div>

  <div className="w-[90%] mx-auto flex gap-6">
    
    {/* Left: Normal Scroll Section */}
    <div className="w-full lg:w-[65%] flex flex-col gap-20">
      <HeroSection />
      <GigDescription />
      <PortfolioSection />
      <RecommendedCarousel />
      <FaqAccordion />
      <Reviews />
      <RelatedTags />
    </div>

    {/* Right: Sticky Section */}
    <div className="hidden lg:block w-[35%]">
      <div className="sticky top-18 pt-10">
        <Plans />
      </div>
    </div>
  </div>
      <Peoples />
</div>

  )
}

export default GigsPage
