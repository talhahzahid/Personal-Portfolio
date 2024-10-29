import React from 'react'
import { FaHandPointRight } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { GrJs } from "react-icons/gr";
import { GrReactjs } from "react-icons/gr";





const About = () => {
  return (
    <div className='bg-[#151515] text-white h-[200vh]'>

      {/* Introduction myself start */}
      <div className='flex justify-around flex-wrap items-center pt-[4rem]'>
        <div className='font-semibold'>
          <h1 className='text-center text-3xl'>Know Who <span className='text-[#0e98ba]'>I'M</span> </h1>
          <h2 className='text-2xl mt-4'>
            Hi Everyone, I am Talha Zahid from Karachi, Pakistan. <br />
            I am a MERN Stack Developer
          </h2>
          <h1 className='mt-[2rem] text-xl'>Apart from coding, some other activities that I love to do!</h1>
          <h1 className='mt-3'><FaHandPointRight className='inline' /> Football Playing</h1>
          <h1><FaHandPointRight className='inline' /> Swimming</h1>
          <h1><FaHandPointRight className='inline' />Travelling</h1>
        </div>
        <div>
          <img src="src/assets/about.aee0f771fbfc1e7b8fa8.png" alt="" width={400} />
        </div>
      </div>
      {/* Introduction myself ended */}


      {/* Skill section started */}

      <h1 className='text-3xl text-center mt-7'>Professional Skillset</h1>

      <div className='flex justify-center items-center flex-wrap gap-10 first text-[7rem] mt-10'>
        <div className='border p-4 rounded-sm border-[#0e98ba]'>
          <h1><FaHtml5 /></h1>
        </div>
        <div className='border p-4 rounded-sm border-[#0e98ba]'>
          <h1><FaCss3Alt /></h1>
        </div>
        <div className='border p-4 rounded-sm border-[#0e98ba]'>
          <h1> <RiTailwindCssFill /></h1>
        </div>
        <div className='border p-4 rounded-sm border-[#0e98ba]'>
          <h1><FaBootstrap /></h1>
        </div>
        <div className='border p-4 rounded-sm border-[#0e98ba]'>
          <h1><GrJs /></h1>
        </div>
      </div>







    </div>

  )
}

export default About