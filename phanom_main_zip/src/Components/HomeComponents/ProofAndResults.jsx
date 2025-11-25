import React from 'react'

const ProofAndResults = () => {
    

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  
  return (
    <section className="relative w-full sm:h-[850px] sm:py-16" >
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-[#DFD6FA] to-[#F8F6FE] z-0 " style={{ backgroundImage: `url(${proofBg})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                  <div className="relative z-20 w-full h-full px-8 sm:px-[80px] pb-[46px] pt-[25px]">
                      
                      <h1 style={{ fontFamily: 'Open Sauce One' }} className="sm:text-[48px] leading-10  text-[36px] text-[#8E59E2] sm:leading-none font-sauce font-bold  sm:mb-4">Proof & Results Section</h1>
  
                      
                      <p className="text-gray-600 max-w-xl sm:mb-10 my-3">Results That Matter</p>
  
                      
                      <div className="grid grid-cols-1 gap-10">
                          <Slider {...sliderSettings} >
  
  
                             
                              <div className="w-full sm:h-[550px] h-[580px] mx-auto bg-gradient-to-br from-[#ffffff] to-[#B487FC] p-6 sm:pb-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative">
                                  <div className='h-[90%]'>
  
                                  <h2 style={{ fontFamily: 'Open Sauce One' }} className="text-[15px] font-medium mb-2">UI / UX</h2>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className="text-[25px] font-semibold">Kabby</p>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className="text-[16px] font-semibold mt-3 mb-2">Problem</p>
                                  <p className='text-[15px]'>The client faced high ride cancellations and user drop-offs due to poor UX and slow app performance, especially during peak hours.</p>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className='font-semibold mt-3 mb-2'>Result </p>
                                  <p className='text-[15px]'>The client faced high ride cancellations and user drop-offs due to poor UX and slow app performance, especially during peak hours.</p>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className='font-semibold mt-3 mb-2'>Tools Used </p>
                                  <p className='text-[15px]'>The client faced high ride cancellations and user drop-offs due to poor UX and slow app performance, especially during peak hours.</p>
                                  </div>
                                  <div className="bg-[#8E59E2] w-full text-center text-white text-[15px] rounded-xl py-3 text-2xl font-semibold mt-6 ">
                                      Let's have a Look
                                  </div>
  
                              </div>
  
                              
                              <div className="w-full sm:h-[550px] h-[580px]  mx-auto bg-gradient-to-br from-[#ffffff] to-[#B487FC] p-6 sm:pb-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative">
                                  <div className='h-[90%]'>
  
                                  <h2 style={{ fontFamily: 'Open Sauce One' }} className="text-[15px] font-medium mb-2">Development</h2>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className="text-[25px] font-semibold">Busy Bucket</p>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className="text-[16px] font-semibold mt-3 mb-2">Problem</p>
                                  <p className='text-[15px]'>The business had no online presence and was managing inventory manually, leading to frequent stock errors and missed sales opportunities.</p>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className='font-semibold mt-3 mb-2'>Result </p>
                                  <p className='text-[15px]'>We developed a full-stack e-commerce platform with real-time inventory sync and payment integration, which helped the client achieve a 60% increase in online sales within 2 months.</p>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className='font-semibold mt-3 mb-2'>Tools Used </p>
                                  <p className='text-[15px]'>React.js, Laravel, MySQL, Razorpay API, AWS S3</p>
                                  </div>
                                  <div className="bg-[#8E59E2] w-full text-center text-white text-[15px] rounded-xl py-3 text-2xl font-semibold mt-6">
                                      Let's have a Look
                                  </div>
  
                              </div>
  
                             
                              <div className="w-full sm:h-[550px] h-[580px]  mx-auto bg-gradient-to-br from-[#ffffff] to-[#B487FC] p-6 sm:pb-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative">
                                  <div className='h-[90%]'>
  
                                  <h2 style={{ fontFamily: 'Open Sauce One' }} className="text-[15px] font-medium mb-2">Development</h2>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className="text-[16px] font-semibold mt-3 mb-2">Kabby</p>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className="font-semibold mt-3 mb-2">Problem</p>
                                  <p className='text-[15px]'>The client was investing heavily in ads but wasn’t seeing quality leads or conversions, primarily due to poor targeting and lack of landing page optimization.</p>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className='font-semibold mt-3 mb-2'>Result </p>
                                  <p className='text-[15px]'>We restructured the ad strategy with precise targeting, A/B tested landing pages, and implemented lead scoring — resulting in 220+ qualified leads in just 3 weeks.</p>
                                  <p style={{ fontFamily: 'Open Sauce One' }} className='font-semibold mt-3 mb-2'>Tools Used </p>
                                  <p className='text-[15px]'>Meta Ads, Google Ads, Canva, Google Analytics, Mailchimp</p>
                                  </div>
                                  <div className="bg-[#8E59E2] w-full text-center text-white text-[15px] rounded-xl py-3 text-2xl font-semibold mt-6">
                                      Let's have a Look
                                  </div>
  
                              </div>
                          </Slider>
                      </div>
                  </div>
         </section> 
  )
}

export default ProofAndResults
