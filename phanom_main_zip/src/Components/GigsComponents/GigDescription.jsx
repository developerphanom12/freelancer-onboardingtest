import React from 'react';

const GigDescription = () => {
  return (
    <div className=" text-gray-800">
      {/* About this gig */}
      <h2 className="text-2xl font-semibold mb-4">About this gig</h2>
      <p className="mb-4 leading-relaxed">
        Thank you for coming to my Gig! If you need a WordPress developer to create a woocommerce store or an online webshop for your business, you've come to the right place.
      </p>
      <p className="mb-4 leading-relaxed">
        I'm Faisal, a full-stack WP developer. I've worked in this sector for over three years. I have done several projects under WordPress woocommerce online store, online webshop. Also, I have completed one year job in a software house (<a href="https://www.arkwebsol.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.arkwebsol.com</a>) as a web WordPress developer.
      </p>

      {/* My Services */}
      <h3 className="text-xl font-semibold mt-8 mb-3">My Services, if you hire me for your project</h3>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Install and setup WordPress</li>
        <li>Woocommerce setup</li>
        <li>Upload Product & Content</li>
        <li>Premium Themes and Plugins</li>
        <li>High Security</li>
        <li>Payment Gateway</li>
        <li>Full Backup website</li>
        <li>Custom banner</li>
        <li>Speed optimization (up to 80+)</li>
        <li>On-page SEO</li>
        <li>PSD to WordPress</li>
      </ul>

      {/* Why choose me */}
      <h3 className="text-xl font-semibold mb-3">Why choose me</h3>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>100% quality Satisfaction</li>
        <li>Fast communication</li>
        <li>Lifetime support</li>
        <li>Woocommerce Store, online webshop creation as you like</li>
      </ul>

      {/* Keywords */}
      <div className=" mt-4">
        <p>WordPress | woocommerce | store | online webshop</p>
      </div>
      <div className="  mt-4">
        <p>If You have any questions, please don't hesitate to contact me; I am available at all times.</p>
      </div>
      <div className="text-gray-500 text-sm  mt-4">
        <p>@Rajani Singh</p>
      </div>

      <hr className='text-gray-400 my-8'/>

      <div className='grid grid-cols-3 gap-4'>
         <div>
              <h6 className='text-lg text-black font-semibold mb-3'>Website Type Ecommerce</h6>
              <p>E-commerce Store</p>
         </div>
         <div>
              <h6 className='text-lg text-black font-semibold mb-3'>Website features</h6>
              <p>Marketing, Payment, Forum, Social media, Customer support, Shipping, Inventory, Analytics, Video, Form</p>
         </div>
         <div>
              <h6 className='text-lg text-black font-semibold mb-3'>Plugins</h6>
              <p>Adsense, Akismet, All-in-one SEO pack, Amazon, AWeber, ClickBank, Contact Form 7, Facebook, GetResponse, Gravity Forms, Instagram, LinkedIn, Mailchimp, Opencart, Paypal, Twitter, Vimeo, W3 Total Cache, WooCommerce, WordPress SEO by Yoast, YouTube, Elementor</p>
         </div>
      </div>
    </div>
  );
};

export default GigDescription;
