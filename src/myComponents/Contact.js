import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black'>
      

      <img src="https://www.stitchtools.com/assets/images/contact/contact-banner.jpg" alt="" className='py-5 w-full md:aspect-[16/5]' />

      <h2 className="py-5 text-center text-5xl font-semibold bg-gradient-to-r from-[#3730ff] to-[#ff01af]  text-transparent bg-clip-text md:w-72 md:mx-auto">CONTACT</h2>

      <p className="para p-5 text-slate-400 text-justify lg:w-3/5 lg:mx-auto lg:my-10">
        Hey! <br /><br />
        Below are some ways to contact me. I am open to work, so feel free to contact me anytime. Be sure of not getting disappointed. I reply within first hour. 
      </p>

      <div className="para text-center my-5 space-y-10 lg:flex lg:space-y-0 lg:justify-evenly lg:my-16">

        <div className="bg-slate-800 p-5 w-3/5 lg:w-1/4 xl:w-1/6 mx-auto rounded-lg hover:scale-125 duration-700">
        <a href='https://www.linkedin.com/in/danish-iqbal-30143925a' className="">
          <i className='text-blue-800 text-7xl bx bxl-linkedin-square'></i>
          <p className="text-gray-400">@Danish Iqbal</p>
        </a>
        </div>
        <div className="bg-slate-800 p-5 w-3/5 lg:w-1/4 xl:w-1/6 mx-auto rounded-lg hover:scale-125 duration-700">
          
          <i className='text-green-600 bx bxl-whatsapp text-7xl'></i>
          <p className="text-gray-400">+91 123 456 XXXX</p>
          
        </div>
        <div className="bg-slate-800 p-5 w-3/5 lg:w-1/4 xl:w-1/6 mx-auto rounded-lg hover:scale-125 duration-700">
        <a href='mailto:diqbal885@gmail.com' className="">
          <i className='text-red-600 bx bx-envelope text-7xl'></i>
          <p className="text-gray-400">diqbal885@gmail.com</p>
        </a>
        </div>


      </div>

      <div className="text-center py-5 space-y-5">
        <i className='text-slate-500 bx bx-home-heart text-7xl'></i>
        <p className="para text-gray-500">Siwan, Bihar, INDIA, (841286)</p>
      </div>

    </div>
  )
}

export default Contact
