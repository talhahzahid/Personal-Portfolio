import React from 'react'
import { Link } from 'react-router-dom'
import { IoGitBranch } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-[#151515] text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
        <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/project">Project</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Talha Zahid.</a>
  </div>




















  <div className="navbar-center hidden lg:flex text-white">
      <ul className="menu menu-horizontal px-1 text-lg">
        <li className='hover:bg-sky-700 rounded-md'>
          <Link 
            to="/" 
            className='text-white hover:text-sky-300 focus:text-sky-300'
          >
            Home
          </Link>
        </li>
        <li className='hover:bg-sky-700 rounded-md'>
          <Link 
            to="/about" 
            className='text-white hover:text-sky-300 focus:text-sky-300'
          >
            About
          </Link>
        </li>
        <li className='hover:bg-sky-700 rounded-md'>
          <Link 
            to="/project" 
            className='text-white hover:text-sky-300 focus:text-sky-300'
          >
            Project
          </Link>
        </li>
        <li className='hover:bg-sky-700 rounded-md'>
  <Link  to="/contact" className='text-white hover:text-sky-300 focus:text-sky-300' >Contact </Link> </li>
      </ul>
    </div>














  <div className="navbar-end">
    <a className="btn text-xl">< IoGitBranch /></a>
  </div>
</div>
    </>
  )
}

export default Navbar