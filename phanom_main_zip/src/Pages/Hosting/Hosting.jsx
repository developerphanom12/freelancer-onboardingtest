import React from 'react'
import FirstSection from '../../Components/HostingComponents/FirstSection'
import Plans from '../../Components/HostingComponents/Plans'
import PlansIncludes from '../../Components/HostingComponents/PlansIncludes'
import HostingDetails from '../../Components/HostingComponents/HostingDetails'
import BenefitsSection from '../../Components/HostingComponents/BenefitsSection'
import Guides from '../../Components/HostingComponents/Guides'
import FAQs from '../../GlobalComponents/FAQs'
import EndingNote from '../../Components/HostingComponents/EndingNote'

const Hosting = () => {
  return (
    <div className='pt-20'>
          <FirstSection/>
          <Plans/>
          <PlansIncludes/>
          <HostingDetails/>
          <BenefitsSection/>
          <Guides/>
          <FAQs/>
          <EndingNote/>
    </div>
  )
}

export default Hosting
