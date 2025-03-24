import React from 'react';
import { NavLink } from 'react-router-dom';
//icons
import { FaMoon } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';






function NavbarComponent({ activeDark, setActiveDark }) {
	let navItems = ['Home', 'About', 'Contact' ];
	function handleTheme() {
		setActiveDark(!activeDark);
	}

	return (
		<div className='container mx-auto flex h-24 bg-lightGray dark:bg-mainBlue items-center justify-between px-4 lg:px-20'>
			<h1 className='text-mainBlue dark:text-white font-bold text-2xl dark:text-blue-500'>
				LOGO
			</h1>
			<div className='flex items-center gap-4'>
				{navItems.map((item, index) => {
					return (
						<ul className='text-mainBlue dark:text-white'>
							<li key={index}>
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
							onClick={handleTheme}
						/>
					) : (
						<FaMoon
							className='cursor-pointer'
							size={25}
							onClick={handleTheme}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default NavbarComponent;



