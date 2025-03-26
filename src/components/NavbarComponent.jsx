import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//icons
import { FaMoon } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';
//toggle icons
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";







function NavbarComponent({ activeDark, setActiveDark }) {
	let navItems = ['Home', 'About', 'Contact' ];
	const [toggle, setTogle] = useState(false)

	return (
		
		<div className='container mx-auto flex h-24 bg-lightGray dark:bg-mainBlue items-center justify-between px-4 border-b lg:px-20'>
			<h1 className='text-mainBlue dark:text-white font-bold text-2xl '>
				IMMODEV
			</h1>
			<div className='flex items-center gap-4 '>
				{toggle && <div className='dark:bg-cyan-900/90  bg-mainBlue/90 h-[100vh] w-[70%] z-10   duration-500 absolute top-0 right-0 bg-cyan-500 md:hidden '>
				<IoClose onClick={() => setTogle(!toggle)} size={35} color='cyan' className='hover:rotate-180 transition-all duration-300 cursor-pointer'/>
				{navItems.map((item, index) => {
					return ( <div className='mt-5'>
						
						<ul className='text-mainBlue dark:text-white flex justify-center mt-3 md:flex '>
							<li key={index} className='hover:border-b hover:border-b-cyan-500 hover:scale-110 text-cyan-400 dark:text-white transition-all duration-200'>
								<NavLink to={`/${item}`}>{item}</NavLink>
							</li>
						</ul>
						</div>
					);
				})}
				</div>}
				{navItems.map((item, index) => {
					return (
						<ul className='text-mainBlue dark:text-white hidden md:flex '>
							<li key={index} className='hover:border-b hover:border-b-cyan-500 transition-all duration-300'>
								<NavLink to={`/${item}`}>{item}</NavLink>
							</li>
						</ul>
					);
				})}
				<div>
					{activeDark ? (
						<IoIosSunny
							className='cursor-pointer'
							color='yellow'
							size={30}
							onClick={() => setActiveDark(!activeDark)}
						/>
					) : (
						<FaMoon
							color='black'
							className='cursor-pointer'
							size={25}
							onClick={() => setActiveDark(!activeDark)}
						/>
					)}
				</div>
				<IoMenu size={32} color='cyan' onClick={() => setTogle(!toggle)} className='md:hidden hover:-scale-x-150 transition-all duration-200 cursor-pointer'/>
				
			</div>
		</div>
	);
}

export default NavbarComponent;



