import React from 'react'
import { motion } from 'framer-motion';
import { IoMdHand } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";






const Home = () => {
  const waveAnimation = {
    animate: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };
  return (
    <div className='bg-[#151515] text-white h-full'>

      {/* first section start */}
      <div className='flex justify-around items-center flex-wrap gap-5 p-10 text-center'>
        <div className='text-3xl text-center'>
          <div className='flex items-center gap-4 justify-center'>
            <h1>Hi There</h1>
            <motion.div {...waveAnimation}>
              <IoMdHand size={50} />
            </motion.div>
          </div>
          <h1 className='mt-2'> <span className='text-[#0e98ba] font-semibold' >I'M TALHA ZAHID</span><br />
            MERN STACK DEVELOPER
          </h1>
        </div>
        <div>
          <img src="src/assets/profile-pic.png" alt="Loading.." width={300} />
        </div>
      </div>
      {/* first section ended */}


      {/* Second section Start*/}
      <div className=' container flex justify-center  flex-wrap gap-[7rem] items-center mt-[4rem] text-center'>
        <div className='text-lg font-semibold'>
          <h1 className='text-3xl'>LET ME <span className='text-[#0e98ba]'>INTRODUCE</span> MYSELF</h1>
          <h2 className='mt-7'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
          </h2>
          <h2>I am fluent in classics like <span className='text-[#0e98ba]'>Javascript, ReactJs and React Native.</span></h2>
          <h2>
            My field of Interest's are building new <span className='text-[#0e98ba]'>Web Technologies and Products </span> and also in <br />
            areas related to <span className='text-[#0e98ba]'>Deep Learning and Natural Launguage Processing.</span>
          </h2>
          <h2>
            Whenever possible, I also apply my passion for developing products with Modern <br />
            <span className='text-[#0e98ba]'>Javascript Library and Frameworks  </span>like <span className='text-[#0e98ba]'>React.js</span>
          </h2>
        </div>
        <div>
          <img src="src/assets/Avatar-Profile-Vector-180x180.png" alt="" />
        </div>
      </div>
      {/* Second section ended*/}



      {/* Third  section Start*/}
      <div className='w-[300px] m-auto text-center mt-[3rem] p-[4rem]'>
        <h1 className='text-3xl'>FIND ME ON</h1>
        <h2 className='text-xl'>Feel free to <span className='text-[#0e98ba]'>connect</span> with me</h2>
        <div className='flex justify-center gap-7 text-2xl mt-4 cursor-pointer focus:ring focus:ring-violet-300	 '>
           <div className="border border-gray-300 rounded-xl p-2 transition-transform transform hover:scale-110 focus:ring focus:ring-violet-300">
            <a href="https://www.linkedin.com/in/talhahzahid/" target="_blank">
        <FaLinkedinIn />
            </a>
      </div>
      <div className="border border-gray-300 rounded-xl p-2 transition-transform transform hover:scale-110 focus:ring focus:ring-violet-300">
        <a href="https://github.com/talhahzahid" target="_blank">
        <FaGithub />
        </a>
      </div>
      <div className="border border-gray-300 rounded-xl p-2 transition-transform transform hover:scale-110 focus:ring focus:ring-violet-300">
        <a href="https://www.instagram.com/talzx7/" target="_blank">
        <SiInstagram />
        </a>
      </div> 
        </div>
      </div>






    </div>
  )
}

export default Home