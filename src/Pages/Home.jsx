import React from 'react'
import { motion } from 'framer-motion';
import { IoMdHand } from "react-icons/io";



const Home = () => {
  return (
    <div className='bg-[#151515] text-white h-full'>

      {/* first section start */}
      <div className='flex justify-around items-center flex-wrap gap-5 p-10 text-center'>
        <div className='text-2xl'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <span className='inline-flex items-center gap-4'>Hi There <IoMdHand /> </span>
          </motion.div>
        </div>
        <div>
          <img src="src/assets/profile-pic.png" alt="Loading.." width={300} />
        </div>
      </div>
      {/* first section ended */}



      {/* Second section Start*/}

        <div className='flex justify-center  flex-wrap gap-10 items-center mt-[4rem]'>
          <div className='text-lg font-semibold '>
            <h1 className='text-3xl'>LET ME <span className='text-[#0e98ba]'>INTRODUCE</span> MYSELF</h1>
            <h2>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            </h2>
          </div>
          <div>
            <img src="src/assets/Avatar-Profile-Vector-180x180.png" alt="" />
          </div>
        </div>






    </div>
  )
}

export default Home