import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from '../../assets/Images';

const WhyPhanom = () => {
  const services = [
    {
      title: 'WordPress & Woo-Commerce',
      description: 'The preference of the client is more Significant for working on word press and it makes creating and managing an online store simple.',
      icon: Images.WorkPress,
    },
    {
      title: 'Shopify Website',
      description: 'The most important factor is being on the stage for longer period and a business website on shopify for sales are more generic through WD.',
      icon: Images.Shopify,
    },
    {
      title: 'Custom PHP Websites',
      description: 'We elaborate the area for our users to get more and more flexible website for the client and as well as your customers to get used to it.',
      icon: Images.Php,
    },
    {
      title: 'Custom Web Development',
      description: 'Giving you an extra edge from your rivals, we provide you layouts, fonts, and colors are developed to augment your online brand.',
      icon: Images.Seo,
    },
    // Duplicate for second slide
    {
      title: 'WordPress & Woo-Commerce',
      description: 'The preference of the client is more Significant for working on word press and it makes creating and managing an online store simple.',
      icon: Images.WorkPress,
    },
    {
      title: 'Shopify Website',
      description: 'The most important factor is being on the stage for longer period and a business website on shopify for sales are more generic through WD.',
      icon: Images.Shopify,
    },
    {
      title: 'Custom PHP Websites',
      description: 'We elaborate the area for our users to get more and more flexible website for the client and as well as your customers to get used to it.',
      icon: Images.Php,
    },
    {
      title: 'Custom Web Development',
      description: 'Giving you an extra edge from your rivals, we provide you layouts, fonts, and colors are developed to augment your online brand.',
      icon: Images.Seo,
    }
  ];

  // 👇 Helper: group services into chunks of 4 for 2x2 layout
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const serviceChunks = chunkArray(services, 4);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="sm:px-[100px] pb-20 pt-10 mx-auto px-6">
      <div className="flex flex-col gap-12">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-4">
            Why So Many Businesses <span className="text-[#CD1CE7]">Choose Phanom Professionals?</span>
          </h2>
          <p className="text-gray-600 text-left leading-relaxed">
            At Ranking By SEO, we don't just improve rankings we help your business grow online. As a trusted name offering affordable SEO services India,
            we create custom strategies to boost your visibility, drive quality traffic, and increase leads. With ethical methods, experienced experts, and
            clear reporting, we're here to grow your brand the right way.
          </p>
        </div>

        {/* Slider with 2x2 Grid Slides */}
        <div className='hidden lg:block'>

          <Slider {...settings}>
            {serviceChunks.map((chunk, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {chunk.map((service, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border border-gray-300 flex gap-4 transform transition-transform hover:-translate-y-1">
                      <img src={service.icon} className="w-10 h-10 sm:w-16 sm:h-16" alt="icon" />
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{service.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>




        <div className='block lg:hidden '>

          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index}>
                <div className=" grid grid-cols-1  gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-300 flex gap-4 transform transition-transform hover:-translate-y-1">
                    <img
                      src={service.icon}
                      className="w-10 h-10 sm:w-16 sm:h-16"
                      alt="icon"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default WhyPhanom;
