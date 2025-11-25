import React from 'react';
import JoinImage from '../../assets/media/IndianTalent.png';
import HomeScreenshot from '../../assets/media/HomeScreenshot.png';
import BackedBy1 from '../../assets/media/backedBy1.png';
import BackedBy2 from '../../assets/media/backedBy2.png';
 
const IndianTalent = ({ onClose }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Page background (blurred) */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105 z-0"
        style={{ backgroundImage: `url(${HomeScreenshot})` }}
        aria-hidden="true"
      />
 
      {/* Modal */}
      <div className="relative z-10 w-full max-w-[1100px] bg-white bg-opacity-95 rounded-xl shadow-xl  flex flex-col md:flex-row p-4 " >
        {/* Left informational panel */}
        <div
          className="w-full md:w-1/2 p-6 text-white flex flex-col relative rounded-xl"
          style={{
            backgroundImage: `url(${JoinImage})`,
            // backgroundImage: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fnature%2520view%2F&psig=AOvVaw3_bUVqLGblftjmJf-c-tKB&ust=1760776370413000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPjpz6LpqpADFQAAAAAdAAAAABAE`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '2rem'
          }}
        >
       
         
          {/* Text content */}
          <div className="relative z-10 mb-6">
            <div className='flex items-center justify-start mb-3'>
 
            <h3 className="text-lg mr-2">Backed By</h3>
            <div className='flex gap-3'>
              <img src={BackedBy1} alt="" />
              <img src={BackedBy2} alt="" />
            </div>
            </div>
            <h2 className="text-2xl font-semibold mb-3">Empowering Indian Freelancers & Clients — Together</h2>
            <p className="text-sm  mb-4">
              Create your account and become part of India's fastest-growing freelance network. Whether you're a talented freelancer or someone looking to hire the best — this is where Indian talent meets opportunity.
            </p>
 
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">Why Join?</h3>
              <ul className="text-sm  space-y-1">
                <li>• For freelancers :</li>
                <li> Showcase your skills, get approved, and start earning.</li>
                <li>• For clients :</li>
                <li> Discover verified Indian professionals for your next big idea.</li>
                <li>• Built-in milestone chat & smart tools for collaboration</li>
                <li>• Admin-reviewed profiles for trusted connections</li>
              </ul>
            </div>
 
            <p className="text-lg mb-4">One Platform. Two Journeys. One Goal — Growth.</p>
            <p className="text-sm">From login to collaboration, let's build something amazing.</p>
          </div>
        </div>
 
        {/* Right action panel */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-sm text-center">
            <h3 className="text-xl font-medium mb-4">Join the Indian Talent Revolution</h3>
            <p className="text-sm text-gray-600 mb-6">Whether you're here to earn or to find talent, start your journey with us.</p>
 
            <div className="space-y-4">
              <a href='https://freelancer.phanomprofessionals.com/signup'>
                <button
                type="button"
                className="w-full py-3 rounded-lg bg-[#8E59E2] text-white hover:bg-purple-600 cursor-pointer transition-all"
              >
                I'm Indian Talent
              </button>
              </a>
 
              {/* <button
                type="button"
                className="w-full py-3 rounded-lg bg-[#8E59E2] text-white hover:bg-purple-600 cursor-pointer transition-all"
              >
                I Need Indian Talent
              </button> */}
            </div>
 
            <div className="text-sm text-gray-600 mt-6">
              Already a Phanom account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">Log in</a>
            </div>
          </div>
        </div>
 
        {/* Close */}
        <button
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
 
export default IndianTalent;