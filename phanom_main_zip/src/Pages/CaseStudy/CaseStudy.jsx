import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { FaDotCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
import FAQs from "../../GlobalComponents/FAQs.jsx"
import Images from '../../assets/Images.js';

  const companyLogos = [
  { img: Images.company0, name: "Square" },
  { img: Images.company27, name: "Red Redission" },
  { img: Images.company26, name: "Vinod Stainless Steel" },
  { img: Images.company25, name: "Indiabulls" },
  { img: Images.company24, name: "MTC Toys" },
  { img: Images.company23, name: "Milk Bar" },
  { img: Images.company22, name: "Laird Super Food" },
  { img: Images.company21, name: "Ben & Jerry’s" },
  { img: Images.company20, name: "Magic Spoon" },
  { img: Images.company19, name: "Busy Bucket" },
  { img: Images.company18, name: "Kabby" },
  { img: Images.company17, name: "Ellementry" },
  { img: Images.company16, name: "Simple" },
  { img: Images.company15, name: "Tatcha" },
  { img: Images.company14, name: "Ashley" },
  { img: Images.company13, name: "Craft Maestros" },
  { img: Images.company12, name: "Floweraura" },
  { img: Images.company11, name: "Theskinstore.in" },
  { img: Images.company10, name: "Style Dotty" },
  { img: Images.company9, name: "Furniture Walla" },
  { img: Images.company8, name: "The Label Life" },
  { img: Images.company7, name: "Young Fashion" },
  { img: Images.company6, name: "Star Furniture" },
  { img: Images.company5, name: "Blue Dot" },
  { img: Images.company4, name: "Whispering Homes" },
  { img: Images.company3, name: "Styched" },
  { img: Images.company2, name: "AVRO" },
  { img: Images.company1, name: "Stories Furniture" },
  { img: Images.company28, name: "Furniture X" }
];


const toolsData = [
    { name: "Figma", img: Images.FigmaLogo },
    { name: "Notion", img: Images.NotionLogo },
    { name: "Photoshop", img: Images.PhotoshopLogo },
    { name: "Google Forms", img: Images.GoogleFormsLogo },
    { name: "Google Sheets", img: Images.GooglesheetLogo },
    { name: "Trello", img: Images.TrelloLogo }]


// const faqs = [
//     {
//         question: " What was the main goal of this project?",
//         answer: "The primary goal was to enhance the user experience by improving usability, engagement, and conversion rates through data-driven UI/UX design."
//     },
//     {
//         question: "What research methods were used?",
//         answer: "The primary goal was to enhance the user experience by improving usability, engagement, and conversion rates through data-driven UI/UX design."
//     },
//     {
//         question: "How did the redesign impact users?",
//         answer: "The primary goal was to enhance the user experience by improving usability, engagement, and conversion rates through data-driven UI/UX design."
//     },
//     {
//         question: "What were the biggest challenges?",
//         answer: "The primary goal was to enhance the user experience by improving usability, engagement, and conversion rates through data-driven UI/UX design."
//     },
//     {
//         question: "What tools were used?",
//         answer: "The primary goal was to enhance the user experience by improving usability, engagement, and conversion rates through data-driven UI/UX design."
//     },
// ];
const CaseStudy = () => {

    const [openIndex, setOpenIndex] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
    gsap.to(sliderRef.current, {
      x: '-400%',
      duration: 120,
      repeat: -1,
      ease: 'linear',
    });
   }, []);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  const img4 = useRef();
  const img5 = useRef();

  
useEffect(() => {
  const floatImage = (target) => {
    const animate = () => {
      gsap.to(target, {
        y: Math.random() * 120 - 60, // -60 to +60 px
        duration: Math.random() * 3 + 2, // 2s to 5s
        ease: 'sine.inOut',
        onComplete: animate, // repeat manually
      });
    };

    animate(); // start animation
  };

  floatImage('.img1');
  floatImage('.img2');
  floatImage('.img3');
  floatImage('.img4');
}, []);



    return (
        <section>
            {/* <Navbar /> */}

            <div className="relative w-full z-0 pointer-events-none">
      <img ref={img1} src={Images.BlueCircle} alt='decorative circle' className="absolute -top-12 left-0 sm:w-[30vw] w-[60vw] z-0" />
      <img ref={img2} src={Images.PinkCircle} alt='decorative circle' className="absolute sm:top-28 top-[25vh] right-0 sm:w-[35vw] w-[80vw]" />
      <img ref={img3} src={Images.BlueCircle1} alt='decorative circle' className="absolute top-[150vh] left-0 sm:w-[45vw]" />
      <img ref={img4} src={Images.PinkCircle1} alt='decorative circle' className="absolute top-[200vh] right-0 sm:w-[40vw]" />
      <img ref={img5} src={Images.BlueCircleLast} alt='decorative circle' className="absolute top-[420vh] right-0 sm:w-[40vw]" />
    </div>


     {/* Heading */}
            <div className='flex flex-col items-center text-center justify-center sm:px-[100px] p-8 relative z-50'>
                <h1 className='sm:text-[64px] text-[40px] font-bold sm:w-[80%] xl:whitespace-nowrap text-center relative pt-20'>Redefining Digital Experiences</h1>
                <p className='sm:text-[48px] text-[22px] font-bold my-6'>A <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#469AE2] to-[#CE1AE8]'>UI/UX </span>Case Study</p>
                <p className=' sm:text-[18px]'>Explore how our strategic redesign of an e-commerce platform revolutionized usability, maximized engagement, and elevated conversion rates—blending intuitive design with a seamless, user-centric experience that drives real results. Through data-driven insights and modern UX principles, we crafted a visually compelling and highly functional interface that enhances every user interaction.</p>
            </div>
              {/* Logo Sections  */}
             <div className='my-10 px-4 flex flex-col justify-center items-center relative z-50'>
                    <h1
                    //   style={{ fontFamily: 'Open Sauce One' }}
                      className='text-[#4D4D4D] text-[16px] sm:text-[18px] mb-6 w-[90%] sm:w-[70%] text-center font-medium'
                    >
                      Trusted by 5,000+ businesses for innovative design and growth.
                    </h1>
            
                    {/* Logo Slider */}
                    <div className='relative w-full max-w-[1000px] overflow-hidden'>
                      <div className='flex whitespace-nowrap' ref={sliderRef}>
                        {companyLogos?.map((item, i) => (
                          <div
                            key={i + Math.random()}
                            className='flex items-center justify-center gap-4 w-[180px] sm:w-[200px] shrink-0 px-2 sm:px-4 py-2 scale-75'
                          >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden">
                              <img
                                src={item.img}
                                alt={`Company ${i + 1}`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p style={{ fontFamily: 'Open Sauce One' }} className='text-base sm:text-xl font-semibold text-black'>
                              {item.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

            {/* Logos */}
            {/* <div className='flex justify-between w-full sm:px-[30px] py-[60px] p-8 relative z-50  '>
                <img src={client1} className='w-12 sm:w-auto' alt="" />
                <img src={client2} className='w-12 sm:w-auto' alt="" />
                <img src={client3} className='w-12 sm:w-auto' alt="" />
                <img src={client4} className='w-12 sm:w-auto' alt="" />
                <img src={client5} className='w-12 sm:w-auto' alt="" />
            </div> */}

            {/* User Experience  */}
            <div className='flex flex-col lg:px-[100px] sm:px-[40px] sm:p-0 sm:pb-[70px]  p-8 gap-20 relative z-50'>
                {/* Transfrom user Experience */}
                <div className='flex flex-col gap-8 '>
                    <div>

                        <h1 className='text-[32px] font-bold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4899E1] via-[#984EE8] to-[#D019E4]'>Transforming User Experience:-</span> A Data-</h1>
                        <h2 className='text-[32px] font-bold'>Driven UI/UX Case Study</h2>
                    </div>
                    <p className=' text-[18px]'>At Phanom Professionals, we specialize in crafting intuitive, data-driven UI/UX solutions that elevate user experiences and drive business success. Our expertise lies in analyzing user behavior, identifying pain points, and implementing strategic design solutions that enhance usability, engagement, and conversion rates.</p>
                    <p className=' text-[18px]'>Through advanced research, iterative prototyping, and real-time user testing, we ensure that every interface is not just visually appealing but also highly functional and user-centric. Whether it's website design, mobile applications, or enterprise solutions, our approach focuses on creating seamless interactions that align with both user needs and business objectives.</p>
                    <p className=' text-[18px]'>Partner with Phanom Professionals to transform your digital presence with intelligent, data-driven UI/UX designs that deliver real impact.</p>

                </div>

                {/* Problem */}
                <div className='flex flex-col gap-8 '>
                    <div>

                        <h2 className='text-[32px] font-bold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4899E1] via-[#984EE8] to-[#D019E4]'>Problem</span> {" "}Statement</h2>
                    </div>
                    <p className=' text-[18px]'>The e-commerce platform faced high cart abandonment rates, low engagement, and poor user retention. Users found the checkout process complex, product discovery difficult, and navigation cluttered. The challenge was to redesign the platform to improve usability, increase conversions, and create a seamless shopping experience.</p>

                </div>

                {/* The Solution */}
                <div className='flex flex-col gap-4 sm:py-8 '>
                    <h2 className='text-[32px] font-bold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4899E1] via-[#984EE8] to-[#D019E4]'>The Solution</span></h2>
                    <div className='flex sm:flex-row text-[18px]  flex-col justify-between gap-10 sm:gap-30'>
                        <div className=' space-y-3'  >
                            <div className='flex gap-2'>
                                <img className='w-7 h-7' src={Images.checkCircle} alt="" />
                                <p>We streamlined checkout by reducing steps, enabling guest checkout, and adding auto-fill for faster, more convenient purchases.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-7 h-7' src={Images.checkCircle} alt="" />

                                <p>We improved product discovery with category filters, predictive search, and a streamlined navigation layout for easy access.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-7 h-7' src={Images.checkCircle} alt="" />

                                <p>We streamlined checkout by reducing steps, enabling guest checkout, and adding auto-fill for faster, more convenient purchases.</p>
                            </div>
                        </div>
                        <div className=' space-y-3'>
                            <div className='flex gap-2'>
                                <img className='w-7 h-7' src={Images.checkCircle} alt="" />

                                <p>We enhanced engagement with AI-driven recommendations, personalizing shopping experiences to boost retention and order value.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-7 h-7' src={Images.checkCircle} alt="" />

                                <p>We enhanced readability and engagement with a clear visual hierarchy, using contrast, typography, and spacing for a user-friendly experience.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-7 h-7' src={Images.checkCircle} alt="" />

                                <p>We optimized performance with lazy loading and asset optimization, ensuring faster load times, a smoother experience, and reduced bounce rates.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Design Process */}
                <div className='flex flex-col gap-6 '>
                    <h2 className='text-[32px] font-bold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4899E1] via-[#984EE8] to-[#D019E4]'>Design Process</span></h2>
                    <div className='flex sm:flex-row sm:justify-between   px-6 flex-col'>
                        <div className='sm:w-[12%] text-center sm:justify-start justify-center gap-10 sm:gap-0  items-center flex sm:flex-col '>
                            <img className='w-15' src={Images.DesignImage1} alt="" />
                            <div>
                                <h3 className='font-semibold text-[24px] my-1'>Emplazise</h3>
                                <p className='px-2'>User Interview </p>
                                <p className='px-2'>User Research </p>
                                <p className='px-2'> Competative </p>
                                <p className='px-2'> Analysis</p>
                            </div>
                        </div>
                        <div>
                            <PiCaretDoubleRightBold className='text-[#CACACA] rotate-90 sm:rotate-0 my-3 mx-auto sm:m-0' size={20} />
                        </div>

                        <div className='sm:w-[12%] text-center sm:justify-start justify-center gap-10 sm:gap-0  items-center flex sm:flex-col '>
                            <img className='w-15' src={Images.DesignImage2} alt="" />
                            <div>
                                <h3 className='font-semibold text-[24px] my-1'>Define</h3>
                                <p className='px-2'>Affinity Mapping </p>
                                <p className='px-2'> Personas </p>
                                <p className='px-2'> Empathy Map </p>
                                <p className='px-2'>Journey Map</p>
                            </div>
                        </div>
                        <div>
                            <PiCaretDoubleRightBold className='text-[#CACACA] rotate-90 sm:rotate-0 my-3 mx-auto sm:m-0' size={20} />
                        </div>

                        <div className='sm:w-[12%] text-center sm:justify-start justify-center gap-14 sm:gap-0  items-center flex sm:flex-col '>
                            <img className='w-15' src={Images.DesignImage3} alt="" />
                            <div>
                                <h3 className='font-semibold text-[24px] my-1'>Ideate</h3>
                                <p className='px-2'>User Flow </p>
                                <p className='px-2'>Card Sorting </p>
                                <p className='w-28 text-center sm:w-auto'>Information Architecture</p>
                            </div>
                        </div>
                        <div>
                            <PiCaretDoubleRightBold className='text-[#CACACA] rotate-90 sm:rotate-0 my-3 mx-auto sm:m-0' size={20} />
                        </div>

                        <div className='sm:w-[12%] text-center sm:justify-start justify-center gap-16 sm:gap-0  items-center flex sm:flex-col '>
                            <img className='w-15' src={Images.DesignImage4} alt="" />
                            <div>
                                <h3 className='font-semibold text-[24px] my-1'>Design</h3>
                                <p className='px-2'>Low Fidility </p>
                                <p className='px-2'>Hign Fidility</p>
                            </div>
                        </div>
                        <div>
                            <PiCaretDoubleRightBold className='text-[#CACACA] rotate-90 sm:rotate-0 my-3 mx-auto sm:m-0' size={20} />
                        </div>
                        <div className='sm:w-[12%] text-center sm:justify-start justify-center gap-10 sm:gap-0  items-center flex sm:flex-col '>
                            <img className='w-15' src={Images.DesignImage5} alt="" />
                            <div>
                                <h3 className='font-semibold text-[24px] my-1'>Test</h3>
                                <p className=''>Usability Testing</p>
                                <p className='w-28 text-center sm:w-auto'>Implementing Testing </p>
                            </div>
                        </div>
                        {/* <div>
                            <PiCaretDoubleRightBold className='text-[#CACACA] rotate-90 sm:rotate-0 my-3 mx-auto sm:m-0' size={20} />
                        </div> */}




                    </div>

                </div>

                {/* Role & Responsibilities */}
                <div className="flex flex-col gap-6 6">
                    <h2 className="text-[32px] font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4899E1] via-[#984EE8] to-[#D019E4]">
                            Role & Responsibilities
                        </span>
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-800">
                        {/* Column 1 */}
                        <ul className="space-y-2 list-disc list-outside pl-4">
                            <li>User Research</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>UI Design</li>
                        </ul>

                        {/* Column 2 */}
                        <ul className="space-y-2 list-disc list-outside pl-4">
                            <li>UX Strategy</li>
                            <li>User Testing</li>
                            <li>Interaction Design</li>
                            <li>Accessibility Audit</li>
                        </ul>

                        {/* Column 3 */}
                        <ul className="space-y-2 list-disc list-outside pl-4">
                            <li>Competitor Analysis</li>
                            <li>Usability Testing</li>
                            <li>Usability Testing</li>
                            <li>Design System Creation</li>
                        </ul>

                        {/* Column 4 */}
                        <ul className="space-y-2 list-disc list-outside pl-4">
                            <li>Microinteractions</li>
                            <li>Branding Alignment</li>
                            <li>A/B Testing</li>
                            <li>Final Design Implementation</li>
                        </ul>
                    </div>
                </div>

                {/* Project Duration and Tools */}
                <div className='flex flex-col sm:flex-row gap-6 '>
                    <div className='sm:w-[50%] flex flex-col gap-6'>
                        <h2 className='text-[32px] font-bold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4899E1] via-[#984EE8] to-[#D019E4]'>Project Duration</span></h2>
                        <div className='flex px-4 gap-12 '>
                            <div className='flex flex-col items-center justify-center '>
                                <h3 className='text-7xl font-bold '>07</h3>
                                <p>Weeks</p>
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3 className='text-7xl font-bold'>50+</h3>
                                <p>Screens</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 sm:w-[50%]'>
                        <h2 className='text-[32px] font-bold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4899E1] via-[#984EE8] to-[#D019E4]'>Tools and Technologies Used</span></h2>

                        <div className='flex flex-wrap gap-8' >
                            {toolsData.map((tool, index) => (
                                <div key={index} className='flex flex-col text-center m-2 w-16'>
                                    <img className='' src={tool.img} alt={tool.name} />
                                    <p className='text-[18px] font-medium'>{tool.name}</p>
                                </div>))}
                        </div>
                    </div>
                </div>

                {/* Our Team */}
                <div>

                    <h2 className='text-[32px]'>Our Team</h2>
                    <div className='bg-[#F6f6F8] md:p-5 p-3 rounded-lg '>
                        {/* Image Section */}
                        <div className='flex gap-8 border-b-[#D2D3D7] '>
                            <img className='sm:w-19 w-19 h-19' src={Images.Farhan} alt="" />
                            <div className='space-y-2'>
                                <h3 className='font-bold text-[24px]'>Farhan Ullah</h3>
                                <p>Computer Engineer  .  19 years</p>
                                <div className='flex gap-2 sm:flex-row flex-wrap'>
                                    <div className='bg-[#EDECFF] py-1 px-2 rounded-md'>Creative</div>
                                    <div className='bg-[#E0FAAD] py-1 px-2 rounded-md'>Hard Working</div>
                                    <div className='bg-[#FFF1E3] py-1 px-2 rounded-md'>Productive</div>
                                    <div className='bg-[#FFFBC7] py-1 px-2 rounded-md'>Curious</div>

                                </div>
                            </div>
                        </div>

                        <div className='flex sm:flex-row flex-col'>
                            {/* Left Part */}
                            <div className='sm:w-[30%] my-5  sm:border-r-2 border-[#D2D3D7] '>
                                <div className=' mr-3'>

                                    <h3 className='font-semibold text-[24px]'>Main Goals</h3>
                                    <p className='text-[#3C465A]'>Farhan's main goal, is to attend a top university and pursue a degree in computer science, with the ultimate goal of using technology to make a positive impact on the world.</p>
                                </div>
                                <hr className='text-[#D2D3D7] mt-10 mr-5' />
                                <div className='mt-10 flex sm:flex-col flex-wrap gap-7 sm:gap-0 '>

                                    <h3 className='font-semibold text-[24px]'>Technologies</h3>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-[#3C465A]'>IT & Intenet</p>
                                        <div className='flex text-[#4F46E5] gap-2'><FaDotCircle /><FaDotCircle /><FaDotCircle /><FaDotCircle /> <span className='text-black'><FaRegCircle /></span></div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-[#3C465A]'>Software</p>
                                        <div className='flex text-[#4F46E5] gap-2'><FaDotCircle /><FaDotCircle /><FaDotCircle /><FaDotCircle /> <span className='text-black'><FaRegCircle /></span></div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-[#3C465A]'>Mobile Apps</p>
                                        <div className='flex text-[#4F46E5] gap-2'><FaDotCircle /><FaDotCircle /><FaDotCircle /><FaDotCircle /> <span className='text-black'><FaRegCircle /></span></div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-[#3C465A]'>Social Networks</p>
                                        <div className='flex text-[#4F46E5] gap-2'><FaDotCircle /><FaDotCircle /><FaDotCircle /><FaDotCircle /> <span className='text-black'><FaRegCircle /></span></div>
                                    </div>

                                </div>

                            </div>

                            {/* Right Part */}
                            <div className='sm:w-[70%] sm:m-5 mt-6 sm:mt-0'>
                                <div className='flex sm:flex-row flex-col gap-10 border-b-2 border-[#D2D3D7] py-5'>
                                    {/* Goals */}
                                    <div className='sm:w-[50%]'>
                                        <h2 className='font-semibold text-[24px]'>Goals</h2>
                                        <p className='text-[#999EA9]'>Lorem ipsum dolor sit amet.</p>
                                        <div className='text-[#3C465A]'>
                                            <li>Explore different cultures and perspectives by reading books and watching films from around the world.</li>
                                            <li>Complete at least one programming project each month to improve his coding skills and build his portfolio.</li>
                                            <li>Attend technology and entrepreneurship-related events and workshops to gain exposure to new ideas and network with like-minded individuals.</li>
                                        </div>
                                    </div>
                                    <div className='sm:w-[50%]'>
                                        <h2 className='font-semibold text-[24px]'>Expectations & needs</h2>
                                        <div className='text-[#3C465A]'>
                                            <li>Access to high-quality education in computer science and related fields.</li>
                                            <li>Support from his family, community, and mentors to help him achieve his goals.</li>
                                            <li>Mentors and role models who can provide guidance and advice on pursuing a career in technology.</li>
                                        </div>
                                    </div>
                                </div>
                                {/* <hr className='text-[#D2D3D7] mt-10 mr-5' /> */}
                                <div className='flex sm:flex-row flex-col gap-10 pt-5'>
                                    {/* Goals */}
                                    <div className='sm:w-[50%]'>
                                        <h3 className='font-semibold text-[24px]'>Pain points & objections</h3>
                                        <p className='text-[#999EA9]'>List of points of frustration that the user has encountered</p>
                                        <div className='text-[#3C465A]'>
                                            <li>Balancing academic responsibilities with extracurricular activities and social life, which could lead to stress and burnout.</li>
                                            <li>Navigating cultural differences and feeling like he doesn't fully fit in with his peers.</li>
                                            <li>Struggling to find mentors or role models who share his background and experiences.</li>
                                        </div>
                                    </div>
                                    <div className='sm:w-[50%]'>
                                        <h3 className='font-semibold text-[24px]'>Applications Friendly</h3>
                                        <p className='text-[#999EA9]'>List of apps he knows and likes</p>
                                        <div className='flex flex-wrap gap-5 m-2 w-full'>
                                            <img className='' src={Images.Facebook} alt="logo" />
                                            <img className='' src={Images.Snapchat} alt="logo" />
                                            <img className='' src={Images.Twitter} alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Sponcers */}
                <div className='flex flex-col items-center justify-center '>
                    <h2 className='text-[32px] font-bold'>Our <span className='text-[#C424E8]'>Sponcers</span></h2>
                    <p className='font-medium text-[18px] mb-10 text-[#645E80] text-center'>We are blessed to work with leading brands & Companies</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <img className="h-8 w-8 sm:w-12 sm:h-12" src={Images.Upglam} alt="" />
                            <h3 className="sm:text-4xl text-3xl">upglam </h3>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <img className="h-8 w-8 sm:w-12 sm:h-12" src={Images.Nutrilix} alt="" />
                            <h3 className="sm:text-4xl text-3xl">Nutrilix</h3>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <img className="h-8 w-8 sm:w-12 sm:h-12" src={Images.Investify} alt="" />
                            <h3 className="sm:text-4xl text-3xl">Investify</h3>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <img className="h-8 w-8 sm:w-12 sm:h-12" src={Images.Knewish} alt="" />
                            <h3 className="sm:text-4xl text-3xl">Knewish</h3>
                        </div>
                    </div>

                </div>

                {/* Frequently Asked Questions Old ONe */}
                {/* <div className="flex flex-col md:flex-row gap-10 sm:p-6">
                    
                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                        <div className="">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-300 rounded-lg p-4 mb-3 shadow-sm"
                                >
                                    <div
                                        className="flex justify-between items-center cursor-pointer"
                                        onClick={() => toggle(index)}
                                    >
                                        <p className="font-medium">{faq.question}</p>
                                        <span className="text-xl font-bold">
                                            {openIndex === index ? <LuMinus /> : <LuPlus />}
                                        </span>
                                    </div>
                                    {openIndex === index && (
                                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>

                   
                    <div className="md:w-1/3 border border-gray-300 rounded-lg text-center  mb-3 pb-5">
                        <div className='flex justify-center items-center p-6 '>

                            <img src={MessageBox} alt="" />
                        </div>
                        <h2 className="text-[24px] font-medium mb-4 px-20 text-center ">Do you have more questions?</h2>
                        <p className="text-gray-700 px-15 text-center">
                            End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                        </p>
                        <div className='w-full flex justify-center items-center mt-6'>

                            <div className='bg-[#6C5FD4] w-fit text-white text-[18px] rounded-full px-7 py-3 items-center justify-center text-2xl font-bold'>
                                Book an Appointment
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Frequently Asked Questions */}

            </div>
                <FAQs/>

            {/* <Footer /> */}

        </section>
    )
}

export default CaseStudy
