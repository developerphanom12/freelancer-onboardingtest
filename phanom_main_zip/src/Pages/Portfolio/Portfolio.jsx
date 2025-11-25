import React, { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaAngleRight, FaEdit, FaHeart, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiFilter, FiSearch } from 'react-icons/fi';
import { IoEye, IoShareSocialOutline } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineChat, MdShoppingCartCheckout } from 'react-icons/md';
import { IoMdShare } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Graphic Design');
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate()

  // Category data for the carousel
  const categories = [
    { name: 'Graphic Design', bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400' },
    { name: 'Photography', bgImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400' },
    { name: 'Illustration', bgImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400' },
    { name: '3D Art', bgImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400' },
    { name: 'Motion', bgImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400' },
    { name: 'UI UX', bgImage: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400' },
    { name: 'Architecture', bgImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400' },
    { name: 'Product Management', bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400' },
    { name: 'Youtube', bgImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400' }
  ];

  // Portfolio cards data
  const portfolioCards = [
    {
      id: 1,
      name: 'Ranjani Singh',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
      likes: 264,
      views: '2.3k',
      rating: 4.9,
      reviews: '1k+'
    },
    {
      id: 2,
      name: 'Ranjani Singh',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      likes: 264,
      views: '2.3k',
      rating: 4.9,
      reviews: '1k+'
    },
    {
      id: 3,
      name: 'Ranjani Singh',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      likes: 264,
      views: '2.3k',
      rating: 4.9,
      reviews: '1k+'
    },
    {
      id: 4,
      name: 'Ranjani Singh',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      likes: 264,
      views: '2.3k',
      rating: 4.9,
      reviews: '1k+'
    },
    {
      id: 5,
      name: 'Ranjani Singh',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      likes: 264,
      views: '2.3k',
      rating: 4.9,
      reviews: '1k+'
    },
    {
      id: 6,
      name: 'Ranjani Singh',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      likes: 264,
      views: '2.3k',
      rating: 4.9,
      reviews: '1k+'
    },
    {
      id: 7,
      name: 'Ranjani Singh',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      likes: 264,
      views: '2.3k',
      rating: 4.9,
      reviews: '1k+'
    },
    {
      id: 8,
      name: 'Ranjani Singh',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      likes: 264,
      views: '2.3k',
      rating: 4.9,
      reviews: '1k+'
    },
    {
      id: 9,
      name: 'Ranjani Singh',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      likes: 264,
      views: '2.3k',
      rating: 4.9,
      reviews: '1k+'
    },
    {
      id: 10,
      name: 'Ranjani Singh',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      likes: 264,
      views: '2.3k',
      rating: 4.9,
      reviews: '1k+'
    },
  ];

  // Add custom arrow components before the Portfolio component
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
    >
      <FaChevronLeft className="text-gray-600 text-sm" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
    >
      <FaChevronRight className="text-gray-600 text-sm" />
    </button>
  );

  // Carousel settings for category tags
  const categorySettings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 6 } },
    { breakpoint: 992, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 600, settings: { slidesToShow: 2 } },
    { breakpoint: 400, settings: { slidesToShow: 1 } }
  ]
  };

  return (
    <div className='min-h-screen bg-gray-50 pt-20'>
      {/* Gradient Header */}
      <div className='bg-gradient-to-r from-[#469AE0] via-[#9A4DE4] to-[#D01AE5] py-3 px-5 md:px-16'>
        <h1 className='text-white font-bold text-2xl md:text-3xl'>Portfolio</h1>
      </div>

      {/* Breadcrumbs */}
      <div className='w-full px-5 md:px-16 py-4 flex flex-wrap gap-2 items-center text-gray-600 text-sm md:text-base'>
        <span className='hover:underline cursor-pointer'>Home</span>
        <FaAngleRight />
        <span className='hover:underline cursor-pointer'>Service</span>
        <FaAngleRight />
        <span className='text-purple-600 font-medium'>Our Portfolio</span>
      </div>

      {/* Main Content */}
      <div className='px-5 md:px-16 pb-8 '>
        {/* Filter and Search Section */}
        <div className='flex flex-col md:flex-row gap-4 mb-9 mt-6 md:items-center justify-between  items-end  '>
          <button className='hidden md:flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50'>
            <FiFilter className='text-gray-400' />
            <span className='text-gray-400'>Filter</span>
          </button>

          <div className='flex justify-between w-full gap-4'>
            <button className='flex md:hidden  items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50'>
              <FiFilter className='text-gray-400' />
              <span className='hidden md:block text-gray-400'>Filter</span>
            </button>

            <div className='relative flex-1 max-w-md gap'>
              <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 mr-4' />
              <input
                type="text"
                placeholder="Search web designer..."
                className='w-full px-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>
          </div>


          <button className='px-4 py-2 text-gray-400 whitespace-nowrap border border-gray-300 rounded-lg hover:bg-gray-50'>
            Edit Portfolio
          </button>
        </div>

        {/* Category Tags Carousel */}
        <div className='mb-8 relative'>
          <Slider {...categorySettings}>
            {categories.map((category, index) => (
              <div key={index} className='px-1'>
                <button
                  onClick={() => setActiveCategory(category.name)}
                  className={`relative w-full h-12 rounded-lg overflow-hidden text-white font-medium text-sm transition-all ${activeCategory === category.name ? '' : ''
                    }`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${category.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {category.name}
                </button>
              </div>
            ))}
          </Slider>
        </div>

        {/* Recommended For You Section */}
        <div>
          <h2 className='text-xl md:text-2xl font-semibold mb-6'>Recommended For You</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {portfolioCards.map((card) => (
              <div key={card.id} className='bg-white rounded-lg overflow-hidden transition-shadow'>
                <div onClick={() => setSelectedCard(card)} className='relative'>
                  <img
                    src={card.image}
                    alt={card.name}
                    className='w-full h-48 object-cover'
                  />
                  <button className='absolute top-3 right-3 text-white hover:text-red-500 transition-colors'>
                    <FaHeart className='text-lg hover:text-red-500' />
                  </button>
                </div>

                <div className='py-2'>
                  <div className='flex justify-between'>
                    <h3 className='font-medium text-md mb-2'>{card.name}</h3>

                    <div className='flex items-center text-sm text-black mb-3 '>
                      <div className='flex items-center gap-3'>
                        <span className='flex items-center gap-1'>
                          <AiFillLike className='' />
                          {card.likes}
                        </span>
                        <span className='flex items-center gap-1'>
                          <IoEye /> {card.views}
                        </span>
                        <div className='flex items-center gap-1'>
                          <FaStar className='' />
                          <span className='text-black font-medium'>{card.rating}</span>
                          <span>({card.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <button onClick={() => setSelectedCard(card)} className='w-full bg-[#8E59E2] text-white py-2 rounded-lg hover:bg-purple-700 transition-colors mb-2 font-semibold'>
                    Purchase Template
                  </button>
                  <button className='w-full text-[#8E59E2] bg-white py-2 rounded-lg border border-[#8E59E2] transition-colors font-semibold'>
                    Order with seller
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {selectedCard && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm overflow-y-auto pt-20"
          onClick={() => setSelectedCard(null)}
        >
          {/* Wrapper with padding to allow scroll from top */}
          <div
            className="w-full max-w-[1440px] mx-auto py-10 px-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* White Box */}
            <div className=" relative rounded-lg overflow-hidden p-6">
              {/* Top-left Avatar Info */}
              <div className="flex items-center gap-3 mb-6 w-full ">
                <img
                  src={selectedCard.image} // Replace with actual avatar URL
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold">Ranjani Singh</h3>
                  <p className="text-xs text-gray-500">Phanom Team</p>
                </div>
              </div>

              <div className='flex'>

                {/* Top Image */}
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-[95%] h-[800px] object-cover"
                />

                {/* Floating Left Avatar and Name */}
                {/* <div className=" w-[5%] flex items-center gap-3 bg-white/90 px-3 py-2 rounded-full shadow">
          <img
            src={selectedCard.avatar || 'https://via.placeholder.com/40'}
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover border"
          />
          <span className="text-sm font-medium text-gray-800">
            {selectedCard.title}
          </span>
        </div> */}
                {/* Floating Right Side Buttons */}
                <div className=" flex flex-col items-center gap-7 w-[8%]">
                  <img
                    src={selectedCard.image} // Replace with actual avatar URL
                    alt="Avatar"
                    className="w-12 h-12 rounded-full object-cover border border-white"
                  />
                  <div className='flex flex-col items-center gap-2'>
                    <button className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow  hover:bg-purple-600">
                      <MdOutlineChat />
                    </button>
                    <h4 className='text-white whitespace-nowrap text-sm'>Chat Now</h4>
                  </div>
                  <div className='flex flex-col items-center gap-2'>
                    <button onClick={()=>navigate("/checkout")} className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow  hover:bg-purple-600">
                      <MdShoppingCartCheckout />
                    </button>
                    <h4 className='text-white whitespace-nowrap text-sm'>Purchase</h4>
                  </div>
                  <div className='flex flex-col items-center gap-2'>
                    <button className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow  hover:bg-purple-600">
                      <IoMdShare />
                    </button>
                    <h4 className='text-white whitespace-nowrap text-sm'>Share</h4>
                  </div>
                  <div className='flex flex-col items-center gap-2'>
                    <button className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow  hover:bg-purple-600">
                      <AiFillLike />
                    </button>
                    <h4 className='text-white whitespace-nowrap text-sm'>Appreciate</h4>
                  </div>
                    
                  {/* <button className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow  hover:bg-purple-600">
                    <IoShareSocialOutline />
                  </button>
                  <button className="bg-purple-500 text-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-purple-600">
                  </button> */}
                </div>
              </div>


              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold  w-5  rounded-full flex items-center justify-center"
                onClick={() => setSelectedCard(null)}
              >
                <RxCross1 />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
