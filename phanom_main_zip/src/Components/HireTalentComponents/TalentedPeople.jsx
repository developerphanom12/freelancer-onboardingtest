import React from 'react';
import { FaStar, FaHeart, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TalentedPeople = () => {
  const navigate = useNavigate();
  // Sample data for talent cards
  const talentData = [
    {
      id: 1,
      name: 'Aarav Mehta',
      description: 'Expert video editing with cinematic effects',
      rating: 4.9,
      reviews: '(22+)',
      price: '₹ 3,999',
      duration: '2 min',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      name: 'Simran Kaur',
      description: 'Professional logo animation for your brand',
      rating: 4.8,
      reviews: '(30+)',
      price: '₹ 5,499',
      duration: '3 min',
      image: 'https://www.denverheadshotco.com/wp-content/uploads/2023/05/Denver-Headshot-Co-0013-SMALL.jpg'
    },
    {
      id: 3,
      name: 'Rohit Bansal',
      description: 'YouTube video editing ',
      rating: 4.7,
      reviews: '(18+)',
      price: '₹ 2,999',
      duration: '1 min',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg'
    },
    {
      id: 4,
      name: 'Neha Reddy',
      description: 'Social media reels and promo video ',
      rating: 4.9,
      reviews: '(12+)',
      price: '₹ 3,200',
      duration: '45 sec',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8y50Dr30jBvouA8SN75ulmi80w3aI-Ssgw&s'
    },
    {
      id: 5,
      name: 'Kunal Sharma',
      description: 'Wedding highlight videos with music sync',
      rating: 4.6,
      reviews: '(25+)',
      price: '₹ 6,000',
      duration: '3 min',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww'
    },
    {
      id: 6,
      name: 'Ishita Verma',
      description: 'Animated intros and outros for streamers',
      rating: 4.8,
      reviews: '(40+)',
      price: '₹ 4,850',
      duration: '1.5 min',
      image: 'https://www.denverheadshotco.com/wp-content/uploads/2023/05/Denver-Headshot-Co-0013-SMALL.jpg'
    },
    {
      id: 7,
      name: 'Manav Joshi',
      description: 'Explainer videos with voiceovers',
      rating: 4.7,
      reviews: '(19+)',
      price: '₹ 5,000',
      duration: '2 min',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg'
    },
    {
      id: 8,
      name: 'Divya Patel',
      description: 'Music video editing with beat sync',
      rating: 4.9,
      reviews: '(10+)',
      price: '₹ 4,200',
      duration: '1 min',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8y50Dr30jBvouA8SN75ulmi80w3aI-Ssgw&s'
    },
    {
      id: 9,
      name: 'Rahul Nanda',
      description: 'Corporate promo videos with transitions',
      rating: 4.8,
      reviews: '(33+)',
      price: '₹ 6,500',
      duration: '3.5 min',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww'
    },
    {
      id: 10,
      name: 'Priya Sen',
      description: 'Instagram story & ad video editing',
      rating: 4.9,
      reviews: '(16+)',
      price: '₹ 3,750',
      duration: '40 sec',
      image: 'https://www.denverheadshotco.com/wp-content/uploads/2023/05/Denver-Headshot-Co-0013-SMALL.jpg'
    },
    {
      id: 11,
      name: 'Yash Thakur',
      description: 'Gaming montages with VFX',
      rating: 4.6,
      reviews: '(28+)',
      price: '₹ 4,500',
      duration: '2 min',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg'
    },
    {
      id: 12,
      name: 'Ananya Deshmukh',
      description: 'Product showcase video for ecommerce',
      rating: 4.9,
      reviews: '(20+)',
      price: '₹ 5,900',
      duration: '1.5 min',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8y50Dr30jBvouA8SN75ulmi80w3aI-Ssgw&s'
    }
  ];


  return (
    <section className="px-4 sm:px-8 md:px-16 pb-16 pt-6  ">
      <div className="w-[90%] mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-left ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#469AE2] to-[#CE1AE8]">
            Transforming User Experience:
          </span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-left">A Data-Driven UI/UX Case Study</h3>
        <p className="text-left text-gray-600 mb-8">
          Create or improve your videos with video editing and post-production services.
        </p>

        {/* Filter options */}
        <div className="flex flex-wrap gap-3 mb-8 justify-between">
          <div className='flex flex-wrap gap-2 '>
            <div className="relative ">
              <select className="appearance-none bg-white border border-gray-300 shadow-2xl  rounded-md py-2 px-4 pr-8 focus:outline-none">
                <option>All Categories</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 shadow-2xl rounded-md py-2 px-4 pr-8 focus:outline-none">
                <option>Skill</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 shadow-2xl rounded-md py-2 px-4 pr-8 focus:outline-none">
                <option>Location</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 shadow-2xl rounded-md py-2 px-4 pr-8 focus:outline-none">
                <option>Experience</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative w-[300px] shadow-lg rounded-md">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-white border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none w-full "
            />
          </div>

        </div>

        {/* Talent cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {talentData.map((talent) => (
            <div key={talent.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 text-white hover:text-red-500 transition-colors duration-300">
                  <FaHeart className="text-xl" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{talent.name}</h3>
                <p className="text-gray-600 text-[13px] mb-2 truncate-2-lines">{talent.description}</p>
                <div className="flex items-center mb-2">
                  <FaStar className="text-black mr-1" />
                  <span className="font-medium">{talent.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">{talent.reviews}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">From {talent.price}</span>
                    <span className="text-gray-500 text-sm ml-1">/ {talent.duration}</span>
                  </div>
                </div>
                <div className='w-full '>

                <button onClick={() => navigate(`/gigs`)} className="mt-3 w-[50%] bg-gradient-to-r from-purple-500 to-purple-600 text-white py-1 px-4 rounded-full hover:from-purple-600 hover:to-purple-700 transition-colors duration-300 cursor-pointer">
                  Hire Talent
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalentedPeople;