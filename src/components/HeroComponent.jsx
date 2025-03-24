import React from 'react'

function HeroComponent() {
  return (
    <div className='container mx-auto lg:px-20  mt-[60px]   '>
      <h2 className='text-xl lg:text-4xl md:text-2xl text-lightBlue dark:bg-mainBlue font-extrabold dark:text-lightGray text-center'>We are creative agency capable of creating outstanding Designs and Websites</h2>
      <p className=' mt-8 dark:text-lightGray dark:bg-mainBlue text-lightBlue text-center'>With Imodev Reach more customers and grow your buseness potential online by building a website with us</p>
      
      <div className=' flex items-center dark:text-white justify-center flex-col lg:flex-row mt-10 gap-2 lg:gap-10'>
        <button className='border dark:border-lightGray border-mainBlue rounded-md px-[40px] py-[12px] hover:bg-mainBlue hover:text-white md:px-[70px] md:py-[22px] hover:dark:text-mainBlue hover:dark:bg-white'>Consult now</button>
        <button className='border rounded-md dark:border-lightGray border-mainBlue px-[50px] py-[12px] md:px-[80px] md:py-[22px] hover:bg-mainBlue hover:text-white  hover:dark:text-mainBlue hover:dark:bg-white '>About us</button>
      </div>
    </div>
  )
}

export default HeroComponent