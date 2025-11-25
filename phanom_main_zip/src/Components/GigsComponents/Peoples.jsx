import React from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';

const Peoples = () => {
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
    description: 'YouTube video editing with engaging thumbnails',
    rating: 4.7,
    reviews: '(18+)',
    price: '₹ 2,999',
    duration: '1 min',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg'
  },
  {
    id: 4,
    name: 'Neha Reddy',
    description: 'Social media reels and promo video specialist',
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
    <section className="my-20">
      <div className="w-[90%] mx-auto mb-20">

         <h2 className="text-2xl font-bold mb-3">People Who Viewed This Service Also Viewed</h2>
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
                <p className="text-gray-600 text-sm mb-2">{talent.description}</p>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-medium">{talent.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">{talent.reviews}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">From {talent.price}</span>
                    <span className="text-gray-500 text-sm ml-1">/ {talent.duration}</span>
                  </div>
                </div>
                <button className="mt-3 w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 px-4 rounded-full hover:from-purple-600 hover:to-purple-700 transition-colors duration-300">
                  Hire Talent
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Peoples;