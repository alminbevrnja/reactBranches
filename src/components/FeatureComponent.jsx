import React from 'react'
import { LuNotebookPen } from "react-icons/lu";
import { FaHeart, FaGift} from "react-icons/fa6";
import { FaImage } from "react-icons/fa";
import ImageOne from "../assets/image1.jpg"
import ImageTwo from '../assets/image2.jpg'

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
    <div className='container mx-auto mt-20 px-5 '>
     {/*header*/}
     <div className='text-center lg:flex'> 
     <div className='lg:w-[50%]'>
          <h3 className='text-orange-500 text-[24px] font-bold'>What does Immodev Do?</h3>
          <h2 className='font-semibold lg:text-[42px] md:text-[36px] text-[28px]  dark:text-lightGray'>Analyzing Target Customers With The Right!</h2>
     </div>
     <p className='lg:w-[50%] mt-10 text-mainBlue font-semibold dark:text-lightGray'>Do not miss this opportunity.With our experience, Whello will find something unique in your brand. Analyze and try to follwo what your audience really likes and is looking for, so that your customers will be more loyal to you.</p>
     </div>

     {/*cards*/}
     <div className='mt-10 flex flex-col  gap-10 lg:flex lg:flex-row lg:flex-wrap lg:justify-center'>

          {allCards.map((card, index) => {
               return <div className=' border rounded-lg h-[250px] border-slate-400 lg:h-[300px] lg:w-[450px] flex flex-col gap-5 lg:gap-7 p-10 cursor-pointer hover:bg-mainBlue hover:text-white hover:scale-105 hover:border-orange-600  dark:hover:scale-105 dark:hover:border-orange-600 transition-all duration-300 hover:dark:bg-white hover:dark:text-mainBlue dark:text-white'  key={index}>
                    <div>{card.icon}</div>
                    <h2 className='font-bold '>{card.title}</h2>
                    <p className=' py-3 lg:py-7'>{card.description}</p>
               </div>
          })}
 </div>

          {/* section one */}
          <div className=' mt-20 flex flex-col gap-5 justify-center lg:flex lg:flex-row'>
          <div className='p-5 flex flex-col justify-center items-center text-center lg:flex lg:items-start lg:text-left '>
               <h3 className='text-orange-500 font-bold'>Who is Imoodev?</h3>
               <h2 className='lg:font-extrabold md:font-bold text-4xl dark:text-lightGray mt-5'>We are a service engaged in digital marketing</h2>
               <p className='dark:text-lightGray mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, quidem? Atque sit amet, vitae molestias laudantium tenetur ipsam soluta esse mollitia eos nemo rem quae illum iure corrupti quis ipsum placeat nobis deserunt?</p>
               <button className='px-[20px] py-3  dark:bg-lightGray dark:text-lightBlue border rounded-md mt-5 bg-lightBlue text-white hover:bg-white hover:text-lightBlue hover:border-lightBlue hover:dark:border-white hover:dark:text-white hover:dark:bg-mainBlue'>Consult now</button>
          </div>
          <div >
               <img src={ImageOne} alt="" className='w-[100%] hover:scale-105 transition-all duration-200 blur-sm hover:blur-none '/>
          </div>
          </div>
          {/*section two*/}

          <div className=' mt-20 flex flex-col gap-5 justify-center lg:flex lg:flex-row'>
          <div className='lg:max-w-[50%]'>
               <img src={ImageTwo} alt="" className='hover:scale-105 blur-sm hover:blur-none transition-all duration-200 ' />
          </div>

          <div className='p-5 flex flex-col justify-center items-center text-center lg:flex lg:items-start lg:text-left lg:max-w-[50%] '>
               
               <h2 className='lg:font-extrabold md:font-bold text-4xl dark:text-lightGray mt-5'>Expand your business by building a website online</h2>
               <p className='dark:text-lightGray mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi voluptatem, sed beatae quasi dolor omnis adipisci autem vero ea, suscipit minima cumque velit officia ab officiis asperiores et, maiores tenetur? Consectetur explicabo itaque optio earum iusto officiis, culpa voluptate quibusdam similique tenetur asperiores nesciunt saepe mollitia voluptas ut aperiam.</p>
               <button className='px-[20px] dark:bg-lightGray dark:text-lightBlue py-3 border rounded-md mt-5 bg-lightBlue text-white hover:bg-white hover:text-mainBlue hover:border-mainBlue hover:dark:bg-mainBlue hover:dark:border-white hover:dark:text-white '>Consult now</button>
          </div>
          </div>
    </div>
  )
}

export default FeatureComponent