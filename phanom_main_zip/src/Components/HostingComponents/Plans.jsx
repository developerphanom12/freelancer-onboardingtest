import React, { useState } from 'react'
import Images from '../../assets/Images';
import { FaHippo } from 'react-icons/fa6';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');

  const plansData = {
    standard: [
      {
        id: 1,
        name: 'Starter Plan',
        price: '₹2000',
        period: '/month',
        description: 'Perfect for small sites. You can host up to 5 sites with this plan.',
        features: [
          '1 vCPU core',
          '2 GB RAM',
          '40 GB NVMe SSD Storage',
          'Snapshot backups',
          'Linux only',
          'cPanel or Plesk available',
          '1 additional IP available upon request',
          'Global data centers'
        ],
        buttonText: 'Configure Your Server',
        isRecommended: false
      },
      {
        id: 2,
        name: 'Growth Plan',
        price: '₹2000',
        period: '/month',
        description: 'Great for growing sites. You can host up to 10 sites with this plan.',
        features: [
          '1 vCPU core',
          '2 GB RAM',
          '80 GB NVMe SSD Storage',
          'Snapshot backups',
          'Linux only',
          'cPanel or Plesk available',
          '1 additional IP available upon request',
          'Global data centers'
        ],
        buttonText: 'Configure Your Server',
        isRecommended: true
      },
      {
        id: 3,
        name: 'Enterprise Plan',
        price: '₹2000',
        period: '/month',
        description: 'Perfect for large sites. You can host up to 25 sites with this plan.',
        features: [
          '1 vCPU core',
          '2 GB RAM',
          '40 GB NVMe SSD Storage',
          'Snapshot backups',
          'Linux only',
          'cPanel or Plesk available',
          '1 additional IP available upon request',
          'Global data centers'
        ],
        buttonText: 'Configure Your Server',
        isRecommended: false
      }
    ],
    high: [
      {
        id: 1,
        name: 'Pro Plan',
        price: '₹4000',
        period: '/month',
        description: 'High performance for demanding sites. Host up to 10 sites.',
        features: [
          '2 vCPU cores',
          '4 GB RAM',
          '80 GB NVMe SSD Storage',
          'Daily backups',
          'Linux only',
          'cPanel or Plesk available',
          '2 additional IPs available upon request',
          'Global data centers'
        ],
        buttonText: 'Configure Your Server',
        isRecommended: false
      },
      {
        id: 2,
        name: 'Premium Plan',
        price: '₹6000',
        period: '/month',
        description: 'Maximum performance for enterprise sites. Unlimited hosting.',
        features: [
          '4 vCPU cores',
          '8 GB RAM',
          '160 GB NVMe SSD Storage',
          'Real-time backups',
          'Linux only',
          'cPanel or Plesk available',
          '5 additional IPs available upon request',
          'Global data centers'
        ],
        buttonText: 'Configure Your Server',
        isRecommended: true
      },
      {
        id: 3,
        name: 'Ultimate Plan',
        price: '₹8000',
        period: '/month',
        description: 'Ultimate performance for high-traffic enterprise sites.',
        features: [
          '8 vCPU cores',
          '16 GB RAM',
          '320 GB NVMe SSD Storage',
          'Real-time backups',
          'Linux only',
          'cPanel or Plesk available',
          '10 additional IPs available upon request',
          'Global data centers'
        ],
        buttonText: 'Configure Your Server',
        isRecommended: false
      }
    ]
  };

  const currentPlans = plansData[selectedPlan];

  return (
    <div className="sm:max-w-[90%] py-12 px-5  mx-auto">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-12">
        <div className="border border-gray-300 rounded-full  flex">
          <button
            onClick={() => setSelectedPlan('standard')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${selectedPlan === 'standard'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            <div className="text-center">
              <div className="font-semibold">Standard Performance</div>
              <div className="text-xs opacity-80">Easy on your budget</div>
            </div>
          </button>
          <button
            onClick={() => setSelectedPlan('high')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${selectedPlan === 'high'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            <div className="text-center">
              <div className="font-semibold">High Performance</div>
              <div className="text-xs opacity-80">More memory CPU & storage</div>
            </div>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-lg  p-1  ${plan.isRecommended
                ? 'bg-gradient-to-b from-[#CBDEF5] to-[#EFBBF8]  shadow-lg'
                : 'bg-white border-gray-400 hover:border-gray-800'
              }`}>

            <h4 className={`text-center text-2xl ${plan.isRecommended ? 'block' : 'invisible'}`}>Recommended</h4>

            <div
              className={`${plan.isRecommended ? 'bg-[#6E76E3]' : 'bg-[#E2E4F9]'} p-4 border border-gray-300 hover:border-gray-300 rounded-lg `}
            >
              <div className='flex justify-between'>
                <div className='flex gap-1'>
                  <div className='bg-[#FFEEA9] rounded-sm text-center w-fit p-1 text-[13px] h-fit'>
                      Save 38%
                  </div>
                  <p className={`line-through ${plan.isRecommended ? 'text-white' : 'text-black'}`}>2999</p>
                </div>
                <div className='drop-shadow-2xl bg-[#EFEDFE] rounded-md flex justify-center items-center px-2 py-1 gap-1'>
                   <img src={Images.PinkDot} alt="" />
                   <div className='text-[15px]'>Basic</div>
                </div>
              </div>

              {/* Price */}
              <div className="text-left mb-4">
                <div className={`flex items-baseline justify-start ${plan.isRecommended ? 'text-white' : 'text-black'}`}>
                  <span className="text-3xl font-bold ">{plan.price}</span>
                  <span className=" ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Plan Name */}
              <h3 className={`text-xl font-semibold text-left mb-2 ${plan.isRecommended ?  'text-white' : 'text-gray-600'}`}>{plan.name}</h3>

              {/* Description */}
              <p className={`${plan.isRecommended ? 'text-white' : 'text-gray-600'} text-left text-sm mb-6`}>{plan.description}</p>

              {/* Configure Button */}
              <button className={`w-[60%] py-2 rounded-lg font-medium mb-6 transition-all ${plan.isRecommended
                  ? ' bg-white hover:shadow-lg'
                  : 'bg-[#6C5FD4] text-white'
                }`}>
                {plan.buttonText}
              </button>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className={`flex items-center text-sm gap-2 ${plan.isRecommended ? 'text-white' : 'text-gray-600'}`}>
                    <div><FaHippo/></div>
                    <span className="">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
