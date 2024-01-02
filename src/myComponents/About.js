import React from 'react'
import myPic from './imgs/danPic.jpg'
import reactjs from './imgs/reactjs.png'
import tailwind from './imgs/tailwind.png'
import wordpress from './imgs/WordPress.png'
import htmlLogo from './imgs/htmlLogo.webp'
import cssLogo from './imgs/cssLogo.png'
import jsLogo from './imgs/jsLogo.png'

const About = () => {
  return (
    <div className='bg-black'>
      <img src={myPic} alt="" className="lg:w-7/12 lg:mx-auto md:rounded-lg " />

      <h2 className="py-5 text-center text-5xl font-semibold bg-gradient-to-r from-[#2f00ff] to-[#ff00bb]  text-transparent bg-clip-text md:w-72 md:mx-auto">ABOUT</h2>


      <p className="para text-slate-400 p-5 text-justify">I'm Danish Iqbal, a Web Developer. I am specializing in creating fascinating user interfaces, with expertise in React Js. I also have great experience in Wordpress, Tailwind CSS, Bootstrap 5, HTML, CSS, and JavaScript. I bring designs to life and ensure coherent user experiences. I collaborate with designers and backend developers to deliver visually appealing and awesome interfaces. I stay updated on the latest technologies and possess problem-solving skills to tackle challenges efficiently. Crafting clean and maintainable code is my priority as I strive to create wonderful user experiences.</p>

      <div className="">

        <h2 className="py-5 text-center text-4xl font-semibold bg-gradient-to-r from-[#2f00ff] to-[#ff00bb]  text-transparent bg-clip-text">My Favorite Technologies</h2>

        <div className="p-28 space-y-10 md:space-y-0 md:flex md:justify-evenly">

          <img src={reactjs} alt="" className="md:w-80 hover:scale-150 duration-700" />
          <img src={tailwind} alt="" className="md:w-56 hover:scale-150 duration-700" />
          <img src={wordpress} alt="" className="md:w-56 hover:scale-150 duration-700" />


        </div>

        <div className="p-28 space-y-10 md:space-y-0 md:flex md:justify-evenly">

          <img src={htmlLogo} alt="" className="md:w-44 md:h-44 hover:scale-150 duration-700" />
          <img src={cssLogo} alt="" className="md:w-44 hover:scale-150 duration-700" />
          <img src={jsLogo} alt="" className="md:w-44 hover:scale-150 duration-700" />


        </div>


      </div>


    </div>
  )
}

export default About
