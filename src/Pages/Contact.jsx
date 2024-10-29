import React from 'react'

const Contact = () => {

  const clientMessage = (event) => {
    event.preventDeafault();
    console.log('hello');
  }

  return (
    <div className='bg-[#151515] text-white h-[100vh]'>

      <div className='text-center pt-10 font-semibold'>
        <h1 className='text-3xl'>GET IN TOUCH</h1>
        <h2 className='text-xl'>I would like to know the final requirements of your project. Please get in touch with me and share details about your project.
        </h2>
      </div>
      <div className='text-center mt-7'>
        <form onSubmit={clientMessage} className='flex flex-col items-center'>
          <input
            type="text"
            className='mt-3 w-full max-w-xs sm:max-w-md p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
            placeholder='Name'
          />
          <br />
          <input
            type="text"
            className='mt-1 w-full max-w-xs sm:max-w-md p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
            placeholder='Email'
          />
          <br />
          <textarea
            className='mt-1 w-full max-w-xs sm:max-w-md p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
            placeholder='Leave Comment'
            rows={7}
          />
          <br />
          <button
            type="submit"
            className='btn btn-primary mt-2 w-full max-w-xs sm:max-w-md p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none'
          >
            Send Message
          </button>
        </form>
      </div>


    </div>

  )
}

export default Contact
