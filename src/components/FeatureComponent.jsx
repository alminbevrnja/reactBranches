import React from 'react'
import { LuNotebookPen } from "react-icons/lu";
import { FaHeart, FaGift} from "react-icons/fa6";
import { FaImage } from "react-icons/fa";

function FeatureComponent() {

     let allCards = [
          {
               icon: <LuNotebookPen color='green' size={30}/>,
               title: 'Web Development',
               description: 'Easy to modify from The provided template settings page without for complicated coding skills' ,
               
          },
          {
               icon: <FaHeart color='00B4D8' size={30} />,
               title: 'UI Design',
               description: 'Equipped with basig SEO techniques such as H1 H2 H3 and breadcrumbs so that the website is liked by search engines such as Google, Bing, etc',
               
          },
          {
               icon: <FaImage color='FF4D6D' size={30} />,
               title: 'Graphic Design',
               description: 'Elegant and professional design your website will have more value & attractive in the eyes of your visitors or customers',
               
          },
          {
               icon: <FaGift color='#FF4D6D' size={30}/>,
               title: 'Invitations and gifts',
               description: 'Easy to use even for new people and comes with documentation to make it easier',
               
          }
     ]

  return (
    <div className='container mx-auto mt-20'>
     {/*header*/}
     <div className='flex gap-5'> 
     <div className='w-[50%]'>
          <h3 className='text-orange-500 text-[24px] font-bold'>What does Immodev Do?</h3>
          <h2 className='font-semibold text-[42px] dark:text-lightGray'>Analyzing Target Customers With The Right!</h2>
     </div>
     <p className='w-[50%] mt-10 text-mainBlue font-semibold dark:text-lightGray'>Do not miss this opportunity.With our experience, Whello will find something unique in your brand. Analyze and try to follwo what your audience really likes and is looking for, so that your customers will be more loyal to you.</p>
     </div>

     {/*cards*/}
     <div className='mt-10 flex flex-wrap justify-center gap-10 mx-auto'>

          {allCards.map((card, index) => {
               return <div className='border rounded-lg  border-slate-400 h-[300px] w-[500px] flex flex-col gap-7 p-10 cursor-pointer hover:bg-mainBlue hover:text-white hover:scale-105 hover:border-orange-600  dark:hover:scale-105 dark:hover:border-orange-600 transition-all duration-300'  key={index}>
                    <div>{card.icon}</div>
                    <h2 className='font-bold dark:text-white'>{card.title}</h2>
                    <p className='dark:text-white py-6'>{card.description}</p>
               </div>
          })}

     </div>
    </div>
  )
}

export default FeatureComponent