import React from 'react'
import HeroSection from "../../Components/ProfileComponents/HeroSection"
import MyGigs from "../../Components/ProfileComponents/MyGigs"
import PortfolioCard from "../../Components/ProfileComponents/PortfolioCard"

const ProfilePage = () => {
  return (
    <div className='flex flex-col gap-5 pt-20'>
        <HeroSection/> 
        <MyGigs/>
        <PortfolioCard/>
    </div>
  )
}

export default ProfilePage
