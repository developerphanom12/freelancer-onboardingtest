// components/RecommendedCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import user1 from '../assets/user1.png';
// import user2 from '../assets/user2.png';
// import user3 from '../assets/user3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    name: 'Rajni Singh',
    role: 'i will edit a professional video for you',
    rating: 4.9,
    reviews: '1k+',
    price: '₹ 4,080',
    image: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
  },
  {
    name: 'Ranjan Singh',
    role: 'i will edit a professional video for you',
    rating: 4.9,
    reviews: '1k+',
    price: '₹ 4,080',
    image: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
  },
  {
    name: 'Ranjan Singh',
    role: 'i will edit a professional video for you',
    rating: 4.9,
    reviews: '1k+',
    price: '₹ 4,080',
    image: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
  },
];

const RecommendedCarousel = () => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-[-20px] top-[40%] z-10 cursor-pointer"
        onClick={onClick}
      >
        <FiChevronLeft className="text-3xl text-black bg-white rounded-full shadow-md" />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-[-20px] top-[40%] z-10 cursor-pointer"
        onClick={onClick}
      >
        <FiChevronRight className="text-3xl text-black bg-white rounded-full shadow-md" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative w-full ">
      <h2 className="text-2xl font-semibold mb-6">Recommended for you</h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-3 overflow-visible py-6 ">
            <div className="bg-white shadow rounded-xl p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-xl"
              />
              <div className="py-4 space-y-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.role}</p>
                <div className="flex items-center gap-1 text-sm text-black">
                  <FaStar className="text-yellow-500" />
                  {item.rating} <span className="text-gray-500">({item.reviews})</span>
                </div>
                <p className="text-sm">
                  From <span className="font-semibold">{item.price}/hr</span>
                </p>
              </div>
              <button className="w-full mt-2 py-2 bg-purple-500 text-white rounded-full font-semibold">
                Hire Talent
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecommendedCarousel;
