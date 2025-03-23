import React from 'react'

function HeroComponent() {
  return (
    <div className='container mx-auto   mt-[60px]   '>
      <h2 className='text-2xl text-lightBlue dark:bg-mainBlue font-extrabold dark:text-lightGray text-center'>We are cretive agency capable of creating outstanding Designs and Websites</h2>
      <p className=' mt-5 dark:text-lightGray dark:bg-mainBlue text-lightBlue text-center'>With Imodev Reach more customers and grow your buseness potential online by building a website with us</p>
      
      <div className='flex justify-center gap-5 mt-10 py-[20px] '>
        <button className=' bg-mainBlue text-lightGray dark:border hover:text-mainBlue hover:bg-lightGray hover:border-mainBlue hover:border rounded-md dark:bg-lightGray dark:text-lightBlue px-[87px] py-[16px]'>Consult now</button>
        <button className=' border-mainBlue border rounded-md  px-[87px] py-[16px] dark:border dark:border-lightGray dark:text-lightGray'>About us</button>
      </div>
    </div>
  )
}

export default HeroComponent