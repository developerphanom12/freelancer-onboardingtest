import React from 'react'
import Images from '../../assets/Images.js';
import { ImCross } from "react-icons/im";

const WhyTrustUs = () => {
  return (
      <section className='flex flex-col sm:min-h-[500px] p-8 lg:px-[80px] sm:pt-[46px] pt-[2px]'>
                <div className='flex justify-between h-[43%]'>
                    <div className=''>

                        <h1 style={{ fontFamily: 'Open Sauce One' }} className='text-[18px]'>Problem vs Solution -</h1>
                        <h1 style={{ fontFamily: 'Open Sauce One' }} className="font-sauce font-bold sm:text-[48px] text-[36px] text-[#8E59E2]  leading-tight text-left sm:mb-10 mb-4 w-[80%] ">Why Clients Trust Us</h1>
                    </div>
                    <img className='h-[200px] hidden sm:block sm:pr-18' src={Images.whyClientImage} alt="" />

                </div>
                <div className=' flex flex-col sm:flex-row sm:gap-10 gap-5 '>
                    <div className='sm:w-[35%] space-y-4 '>
                        <h2 className='text-[30px] text-[#8E59E2] font-medium'>Common Clients Problem</h2>
                        <p className='sm:mb-8 sm:mt-2 flex items-center gap-3 text-[18px]'><ImCross className='text-red-600' /> Project stuck with no clarity</p>
                        <p className='sm:my-8 flex items-center gap-3 text-[18px]'><ImCross className='text-red-600' /> Not getting leading even after lunch</p>
                        <p className='sm:my-8 flex items-center gap-3 text-[18px]'><ImCross className='text-red-600' /> No one helping with server or post-sales</p>
                    </div>

                    <div className='sm:h-[50%] space-y-4 '>

                        <h2 className='text-[30px] text-[#8E59E2] font-medium'>Our Proven Solutions</h2>
                        <p className='sm:mb-8 sm:mt-2 flex items-center gap-3 text-[18px]'><img src={Images.done} className='size-[18px]' alt="." /> We build with a clear process and defined roadmap</p>
                        <p className='sm:my-8 flex items-center gap-3 text-[18px]'><img src={Images.done} className='size-[18px]' alt="." /> We bring targeted campaigns to bring real,quality leads</p>
                        <p className='sm:my-8 flex items-center gap-3 text-[18px]'><img src={Images.done} className='size-[18px]' alt="." /> We manage servers and tech support long-term—even post-launch</p>
                    </div>

                </div>
            </section>
  )
}

export default WhyTrustUs
