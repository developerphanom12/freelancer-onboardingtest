import { useState } from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from 'react-icons/fa6';

const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(3);
  
  // Dummy review data
  const reviews = [
    {
      id: 1,
      username: 'cmr_cmr',
      role: 'Website Developer',
      rating: 5,
      date: '6 days ago',
      price: '¥4000 - ¥5000',
      duration: '6 days',
      content: 'I put my feedback below and Fiverrs AI Generated Feedback. I wanted my feedback to stay so pasted their AI feedback. It\'s true. My feedback: He took a concept and far exceeded our expectations. He has produced the best product we\'ve had so far, in a faster time line, with more functionality, better... See more'
    },
    {
      id: 2,
      username: 'design_lover',
      role: 'Graphic Designer',
      rating: 4,
      date: '2 weeks ago',
      price: '¥3000 - ¥4000',
      duration: '4 days',
      content: 'Excellent work! The designer understood exactly what I wanted and delivered ahead of schedule. The attention to detail was impressive and the communication was clear throughout the project.'
    },
    {
      id: 3,
      username: 'startup_ceo',
      role: 'Entrepreneur',
      rating: 5,
      date: '1 month ago',
      price: '¥5000 - ¥6000',
      duration: '1 week',
      content: 'Absolutely phenomenal service. They went above and beyond to make sure our website was perfect. The responsiveness to feedback was incredible and the final product exceeded all expectations.'
    },
    {
      id: 4,
      username: 'marketing_pro',
      role: 'Marketing Manager',
      rating: 5,
      date: '3 weeks ago',
      price: '¥4500 - ¥5500',
      duration: '5 days',
      content: 'This was my third project with this developer and each time the quality gets better. Incredible attention to detail and always delivers ahead of schedule. Highly recommended!'
    },
    {
      id: 5,
      username: 'app_enthusiast',
      role: 'Mobile Developer',
      rating: 4,
      date: '2 months ago',
      price: '¥3500 - ¥4500',
      duration: '8 days',
      content: 'Solid work with good communication. The developer was patient with my many requests for changes and delivered a quality product. Would work with again.'
    }
  ];

  const loadMoreReviews = () => {
    setVisibleReviews(prev => prev + 3);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Reviews</h2>

    {/* <div className=" mx-auto p-6 bg-white rounded-lg shadow-sm"> */}
      
      {reviews.slice(0, visibleReviews).map(review => (
        <div key={review.id} className='mt-4 mb-6'>

        <div  className="p-6 border rounded-xl border-gray-200 last:border-0 last:pb-0 last:mb-0">
          <div className="flex justify-start items-start mb-2">
            <div className='flex gap-5'>
              <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" className='rounded-full w-12 h-12 border' alt="" />

            <div >
              <p className="font-semibold">{review.username}</p>
              <p className="text-sm text-gray-600">{review.role}</p>
            </div>
            </div>
          </div>

          {/* Stars */}
          <div className='flex items-center gap-6'>
            <div className="flex items-center ">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-sm font-medium">{review.rating}</span>
            </div>
            <p className="text-sm text-gray-500 ">{review.date}</p>
          </div>
          
          <p className="mb-4  text-[18px]">{review.content}</p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div>
              <p className=" text-[18px] font-semibold">{review.price}</p>
              <span className="font-medium text-gray-600">Price</span>
            </div>
            <div>
              <p className=" text-[18px] font-semibold">{review.duration}</p>
              <span className="font-medium text-gray-600">Duration</span>
            </div>
          </div>
          
        </div>
          <div className="mt-4 flex">
            <button className="flex gap-3 justify-center text-sm text-gray-500 hover:text-gray-700 mr-4">
              Helpful? <div className="flex gap-1 hover:text-blue-600"><FaThumbsUp className='hover:text-blue-600' />Yes</div>
            </button>
            <button className="flex justify-center text-sm text-gray-500 hover:text-gray-700">
              <div className="flex gap-1 hover:text-blue-600"><FaThumbsDown className='hover:text-blue-600'/>No</div>
            </button>
          </div>
        </div>
      ))}
      
      {visibleReviews < reviews.length && (
        <button
          onClick={loadMoreReviews}
          className="border border-gray-400 text-black rounded-lg py-2 mt-4 px-4 font-semibold hover:bg-blue-50 transition-colors"
        >
          See More Reviews
        </button>
      )}
    {/* </div> */}
    </div>
  );
};

export default Reviews;