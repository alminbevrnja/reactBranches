import React from 'react'
//icons
import { FaArrowRight } from "react-icons/fa";


function CustomersComponent() {

     let customerCards = [
          {
               indexNumber: '01',
               title: 'Expand your business online',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
          },
          {
               indexNumber: '02',
               title: 'Expand your business to the online branding',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
               indexNumber: '03',
               title: 'Enjoy the results of seeking online',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
     ]

  return (
    <div className='p-3 md:px-5 flex flex-col gap-5  md:mx-auto lg:mx-auto bg-mainBlue dark:bg-lightGray'>
     <h2 className='text-center mt-3 dark:text-mainBlue text-white font-bold text-xl md:text-2xl lg:text-3xl'>We always prioritize customer satisfaction</h2>
     <div className='flex flex-col gap-3 md:flex-row md:mx-auto'>
     {customerCards.map((card) => {
          return <div className='border-2 lg:w-[300px] border-mainBlue hover:dark:bg-mainBlue hover:dark:text-lightGray rounded-[5px] hover:scale-95 transition-all duration-200 cursor-pointer flex flex-col justify-start items-start p-5 bg-lightGray'>
               <h1 className='text-xl font-extrabold'>{card.indexNumber}</h1>
               <h3 className='text-xl font-semibold'>{card.title}</h3>
               <p>{card.description}</p>
               <button className='border rounded-md hover:bg-mainBlue hover:text-lightGray border-mainBlue flex items-center mt-4 px-4 py-2 gap-3 hover:dark:border-lightGray'>Explore <FaArrowRight />
               </button>
          </div>
     })}
     </div>
    </div>
  )
}

export default CustomersComponent