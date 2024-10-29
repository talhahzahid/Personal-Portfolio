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
      <Card
        image='src/assets/Blogging App.png'
        title='Blogging App'
        des="Blogging App With React JS"
        btn1='https://react-blogging-app-lime.vercel.app/'
        btn2='https://github.com/talhahzahid/React-Blogging-App'
        />
        <Card
        image='src/assets/Todo App.png'
        title='Todo App'
        des="Todo App For Manage Task with React js"
        btn1='https://todoapp-theta-five.vercel.app/'
        btn2='https://github.com/talhahzahid/React-Todo-App'
        />
      </div>


    </div>
  )
}

export default Project