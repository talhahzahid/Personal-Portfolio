import React from 'react'
import Card from '../Components/Card'

const Project = () => {
  return (
    <div className='bg-[#151515] text-white h-[200vh]'>

      <div className='text-center p-6 font-semibold'>
        <h1 className='text-3xl'>My Recent <span className='text-[#0e98ba]'>Works</span></h1>
        <h2 className='text-xl'>Here are a few project</h2>
      </div>

        <h1 className='text-center text-3xl'>React Js </h1>
      <div className='flex justify-around flex-wrap mt-4'>
        <Card />
        <Card />
        <Card />
      </div>


    </div>
  )
}

export default Project