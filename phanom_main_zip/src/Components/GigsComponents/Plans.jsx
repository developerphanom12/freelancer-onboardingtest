import React, { useState } from 'react'
import { BiRevision } from 'react-icons/bi';
import { CiClock2 } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { MdMessage, MdOutlineDone } from "react-icons/md";

const Plans = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const plans = {
    basic: {
      title: '"Silver" basic Woocommerce ',
      price: '₹7,208',
      delivery: '4-day delivery',
      revisions: '2 Revisions',
      items: [
        "Functional website",
        "2 pages",
        "Responsive design",
        "Content upload",
        "4 plugins/extensions",
        "E-commerce functionality",
        "5 products"
      ]
    },
    standard: {
      title: 'Gold Standard Plan',
      price: '₹14,999',
      delivery: '5-day delivery',
      revisions: '3 Revisions',
      items: [
        "Functional website",
        "5 pages",
        "Responsive design",
        "Content upload",
        "10 plugins/extensions",
        "Payment gateway setup"
      ]
    },
    premium: {
      title: 'Platinum Premium Plan',
      price: '₹25,000',
      delivery: '7-day delivery',
      revisions: 'Unlimited Revisions',
      items: [
        "Everything in Standard",
        "10+ pages",
        "Custom animations",
        "SEO optimization",
        "Premium plugins",
        "Dedicated support"
      ]
    }
  };

  const currentPlan = plans[activeTab];
  return (
    <div>
      {/* Right: Plan */}
      <div className=' '>
        <div className="border border-gray-300 rounded-xl p-6 shadow-xl bg-white">
          {/* Tabs */}
          <div className='flex mb-4 text-lg'>
            {["basic", "standard", "premium"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-2 border-b-2  font-semibold ${activeTab === tab
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className='flex justify-between'>
            <h2 className='text-xl font-bold mb-1'>{currentPlan.title}</h2>
            <p className='  mb-4'>{currentPlan.price}</p>
          </div>

          <div className='flex gap-2'>
            <p className=' mb-2 flex gap-2 '><CiClock2 className='mt-0.5' />{currentPlan.delivery} <BiRevision className='mt-0.5' /> {currentPlan.revisions}</p>

          </div>

          <div>
            <div className='w-full flex justify-between text- font-normal'>
              <p className=''>What's included</p>
              <IoIosArrowDown />
            </div>

            <ul className='list-disc list-inside space-y-1 text-gray-700 mb-4'>
              {currentPlan.items.map((item, i) => (
                <div className='flex gap-2'>< MdOutlineDone /> <ul key={i}>{item}</ul></div>

              ))}
            </ul>
          </div>


<button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition flex items-center justify-center gap-2">
  <MdMessage /> Consult Now
</button>

          <div className='flex items-center gap-4 mb-4 mt-4'>
            <img
              //   src={avatarImg}
              src={"https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg"}
              alt="Ranjani Singh"
              className='w-12 h-12 rounded-full object-cover'
            />
            <div className='flex justify-center items-center gap-5'>
              <div>
                <h2 className='font-semibold text-lg'>Need flexibility when hiring?</h2>
                <div className='flex items-center text-sm text-gray-600'>
                  <span className='cursor-pointer underline'>Request an hourly offer</span>
                </div>
              </div>
            </div>
          </div>
            <p className='text-sm text-gray-600'>
              Hiring on an hourly basis is perfect for long-term projects, with easy automatic weekly payments.
            </p>
          {/* <p className='text-sm text-center mt-4 text-gray-600'>
            Need flexibility when hiring? <span className='text-purple-600 cursor-pointer underline'>Request an hourly offer</span>
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default Plans
