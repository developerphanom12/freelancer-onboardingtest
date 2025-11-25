import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaAngleRight, FaCamera } from 'react-icons/fa';

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const initialValues = {
    fullName: '',
    location: '',
    availableTime: '',
    skill: 'HTML',
    language: 'English',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    location: Yup.string().required('Location is required'),
    availableTime: Yup.string().required('Availability is required'),
    skill: Yup.string().required('Skill is required'),
    language: Yup.string().required('Language is required'),
  });

  const skills = [
    'Wireframing', 'Prototyping', 'UX Design', 'Responsive', 'Components',
    'JS+', 'Routing', 'APIs', 'State', '+14'
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='min-h-screen bg-white pt-20'>
      {/* Header */}
      <div className='bg-gradient-to-r from-[#469AE0] via-[#9A4DE4] to-[#D01AE5] py-3 px-5 md:px-16'>
        <h1 className='text-white font-bold text-2xl md:text-3xl'>Edit Profile</h1>
      </div>

      {/* Breadcrumbs */}
      <div className='w-full px-5 md:px-16 py-4 flex flex-wrap gap-2 items-center text-gray-600 text-sm md:text-base'>
        <span className='hover:underline cursor-pointer'>Home</span>
        <FaAngleRight />
        <span className='hover:underline cursor-pointer'>Service</span>
        <FaAngleRight />
        <span className='text-purple-600 font-medium'>Edit Profile</span>
      </div>

      {/* Edit Portfolio */}
      {/* <div className='px-5 md:px-16 mb-6 flex justify-end'>
       <button className='px-4 py-2 whitespace-nowrap border border-gray-300 rounded-lg shadow-lg hover:bg-gray-50'>
            Edit Portfolio
          </button>
      </div> */}

      {/* Main Form Section */}
      <div className='px-5 md:px-16 pb-8'>
        <div className='bg-white  md:p-8'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log('Form data:', values);
            }}
          >
            {({ errors, touched }) => (
              <Form className='flex flex-col lg:flex-row gap-8'>
                {/* Left Panel */}
                <div className='lg:w-1/3 flex flex-col items-center'>
                  <div className='relative mb-6'>
                    <div className='w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden'>
                      {profileImage ? (
                        <img src={profileImage} alt="Profile" className='w-full h-full object-cover' />
                      ) : (
                        <FaCamera className='text-gray-500 text-4xl' />
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className='absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full'
                    />
                  </div>

                 
                </div>

                {/* Right Panel - Form Fields */}
                <div className='lg:w-2/3'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    {/* Full Name */}
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Full Name</label>
                      <Field
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                      />
                      {errors.fullName && touched.fullName && (
                        <div className='text-red-500 text-sm mt-1'>{errors.fullName}</div>
                      )}
                    </div>

                    {/* Skill */}
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Skill</label>
                      <Field
                        as="select"
                        name="skill"
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-100'
                      >
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="React">React</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                      </Field>
                    </div>

                    {/* Location */}
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Location</label>
                      <Field
                        as="select"
                        name="location"
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                      >
                        <option value="">Enter your location</option>
                        <option value="Mumbai, India">Mumbai, India</option>
                        <option value="Delhi, India">Delhi, India</option>
                        <option value="Bangalore, India">Bangalore, India</option>
                        <option value="Pune, India">Pune, India</option>
                      </Field>
                      {errors.location && touched.location && (
                        <div className='text-red-500 text-sm mt-1'>{errors.location}</div>
                      )}
                    </div>

                    {/* Language */}
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Language</label>
                      <Field
                        as="select"
                        name="language"
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-100'
                      >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                      </Field>
                    </div>

                    {/* Available Time */}
                    <div className=''>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Available Time</label>
                      <Field
                        as="select"
                        name="availableTime"
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                      >
                        <option value="">Select Available Time</option>
                        <option value="9 AM - 5 PM">9 AM - 5 PM</option>
                        <option value="10 AM - 6 PM">10 AM - 6 PM</option>
                        <option value="11 AM - 7 PM">11 AM - 7 PM</option>
                        <option value="Flexible">Flexible</option>
                      </Field>
                      {errors.availableTime && touched.availableTime && (
                        <div className='text-red-500 text-sm mt-1'>{errors.availableTime}</div>
                      )}
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className='mt-8 flex justify-end'>
                    <button
                      type="submit"
                      className='px-8 py-3 bg-[#8E59E2] text-white rounded-lg hover:bg-purple-700 transition-colors font-medium'
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

           {/* About Me */}
                  <div className='w-full mt-5'>
                    <h3 className='text-xl font-semibold mb-4'>About me</h3>
                    <p className='border border-gray-400 p-3 rounded-md'>Creative and detail-oriented UI/UX designer passionate about crafting user-friendly and visually stunning digital experiences. Proficient in Figma, Adobe XD, and user research, I bring concepts to life through thoughtful design and intuitive interfaces. I design with empathy and purpose, ensuring every interaction is both meaningful and impactful. From wireframes to prototypes, I combine creativity with strategy to solve real user problems. Experienced in design systems, accessibility, and collaborative workflows, I thrive in fast-paced environments and love transforming complex ideas into clean, functional solutions.</p>
                  </div>

                  {/* Skills */}
                  <div className='w-full mt-6'>
                    <h3 className='text-xl font-semibold mb-4'>Skills</h3>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className='px-4 py-1 bg-white shadow-black border border-gray-400 text-gray-700 rounded-full text-sm  cursor-pointer'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
