import React from 'react'

//icons
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";


function FooterComponent() {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:gap-10 mt-10 md:container md:mx-auto lg:flex-row lg:container lg:mx-auto lg:justify-center'>

      {/*main footer*/}

      <div className=' p-5 dark:text-lightGray flex flex-col items-center '>
        <h2 className='text-xl font-extrabold py-3'>Immodev</h2>
         <p className='flex gap-2 cursor-pointer'> <FaLocationDot/> 11218 John Galt Blvd Ste 301
        Omaha, NE 68137</p>
        <p className='flex gap-2 cursor-pointer'> <MdEmail/> adress.info@gmail.com</p>
        <p className='flex gap-2 cursor-pointer'> <BsFillTelephoneFill/> (402) 261-2898</p>
      </div>


      <div className='list-none flex flex-col gap-4 items-center mt-5 dark:text-lightGray'>
        <h3 className='font-bold  border-b border-b-cyan-400'>Our Features</h3>
        <li className='cursor-pointer hover:border-b hover:border-b-cyan-400 transition-all duration-500'>Home Page Design</li>
        <li className='cursor-pointer hover:border-b hover:border-b-cyan-400 transition-all duration-500'>Website Footer
        </li>
        <li className='cursor-pointer hover:border-b hover:border-b-cyan-400 transition-all duration-500'>About Page
        </li>
        <li className='cursor-pointer hover:border-b hover:border-b-cyan-400 transition-all duration-500'>Backend Admin 
        </li>
      </div>


      <div className='list-none flex flex-col gap-4 items-center mt-5 dark:text-lightGray'>
        <h3 className='font-bold border-b border-b-cyan-400'>Our Services</h3>
        <li className='cursor-pointer hover:border-b hover:border-b-cyan-400 transition-all duration-500'>Organic Search</li>
        <li className='cursor-pointer hover:border-b hover:border-b-cyan-400 transition-all duration-500'>Site Navigation</li>
      </div>

      <div className='flex flex-col gap-4 items-center mt-5 dark:text-lightGray md:mx-auto lg:mx-5 '>
        <h3 className='font-bold md:text-xl lg:text-[16px] border-b border-b-cyan-400'>Join our squad</h3>
        <p className='font-medium md:text-xl lg:text-[15px]'>Please enter your mail below...</p>
        <div className='flex gap-2'>
          <input type="text" placeholder='Email@example' className=' outline-none  rounded-[5px] p-1 text-black md:w-[400px] focus:outline-cyan-400 md:h-[40px] lg:w-[200px]'/>
          <button type='submit' className='text-white dark:bg-lightGray dark:text-mainBlue rounded-md dark:hover:bg-cyan-400 transition-all duration-200 bg-mainBlue md:w-10 flex items-center justify-center hover:bg-cyan-400'><GoTriangleRight  size={32}/></button>
        </div>
      </div>

      

            



    </div>
  )
}

export default FooterComponent