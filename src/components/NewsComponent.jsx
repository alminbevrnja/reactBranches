import React from 'react'
import FigmaLogo from '../assets/figma.png'
import GiftLogo from '../assets/gifts.jpg'
import BooksLogo from '../assets/booksgift.jpg'

function NewsComponent() {

     let newsCard = [
          {
               image : FigmaLogo,
               title: 'Introducing unicode 2.3.0. and the WooCommerce buffer',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
               image: GiftLogo,
               title: 'Introducing unicode 2.3.0. and the WooCommerce buffer',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
               image: BooksLogo,
               title: 'Introducing unicode 2.3.0. and the WooCommerce buffer',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
     ]

  return (
    <div className='mt-10 container mx-auto '>
     <h2 className='text-xl font-semibold px-5 dark:text-lightGray'>Latest News for Immodev</h2>

     {/*news cards*/}


     <div className='container mx-auto mt-10 px-5 flex flex-col gap-5 md:flex-row'>
          {newsCard.map((card) => {
               return <div className='border dark:border-lightGray rounded-lg border-mainBlue mx-auto flex flex-col gap-5 hover:scale-95 transition-all duration-300  px-3 '>
                    <img className='blur-sm hover:blur-none transition-all duration-200 cursor-pointer' src={card.image} alt="" />
                    <h3 className='text-xl font-semibold dark:text-lightGray md:text-[15px] md:text-xs'>{card.title}</h3>
                    <p className='text-slate-500 p-5 md:p-0'>{card.description}</p>
               </div>
          })}
     </div>

     {/*form card*/}

     <div className='px-5 '>
          <div className='h-40 border dark:text-lightGray dark:bg-lightGray container mx-auto mt-20 flex flex-col gap-5 items-center justify-center '>
          <h2 className='text-xl font-semibold dark:text-mainBlue lg:text-2xl'>Subs our Newsletter for daily Update</h2>
          <div className='flex flex-col gap-3 md:flex-row md:relative '>
          <input type="text" placeholder='Please fill this field...' className='p-2 outline-none rounded-md focus:outline-cyan-400 dark:bg-mainBlue md:w-[300px] md:border-mainBlue dark:md:bg-mainBlue lg:w-[400px] '/>
          <button type='submit' className='bg-mainBlue p-2 rounded-md hover:bg-cyan-500 transition-all duration-150 text-lightGray dark:bg-lightGray hover:dark:bg-cyan-400 dark:text-mainBlue dark:border dark:border-mainBlue md:border-mainBlue md:dark:bg-cyan-400 md:absolute top-0 right-0'>Subscribe</button>
          </div>
          </div>
     </div>
    </div>
  )
}

export default NewsComponent