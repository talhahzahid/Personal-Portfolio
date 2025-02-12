import React from 'react'
import Card from '../Components/Card'

import fullStack from "/public/FullStack Blogging Project.png"
import BloggingApp from '/src/assets/Blogging App.png'
import TodoApp from '/src/assets/Todo App.png'

const Project = () => {
  return (
    <div className='bg-[#151515] text-white h-full'>

      <div className='text-center p-6 font-semibold'>
        <h1 className='text-3xl'>My Recent <span className='text-[#0e98ba]'>Works</span></h1>
        <h2 className='text-xl'>Here are a few project</h2>
      </div>

      <h1 className='text-center text-3xl'>React Js </h1>
      <div className='flex justify-center flex-wrap gap-[3rem] mt-4 p-8'>
        <Card
          image={fullStack}
          title='Full Stack Blogging App'
          des="MONGO db , Express Js , React , Node js  With features like secure authentication, profile management, and the ability to create, edit, or delete blogs, take control of your content like never before"
          btn1='https://github.com/talhahzahid/Blog-Server'
          btn2='https://github.com/talhahzahid/Blog-Server'
        />
        <Card
          image={BloggingApp}
          title='Blogging App'
          des="Blogging App With React JS using Firebase with authentication "
          btn1='https://react-blogging-app-lime.vercel.app/'
          btn2='https://github.com/talhahzahid/React-Blogging-App'
        />
        <Card
          image={TodoApp}
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