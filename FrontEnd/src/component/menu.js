import React from 'react'
import logo from '../image/logo.PNG'
const Menu = () => {
	return (
		<div>
			<nav className='border-gray-200 px-2 sm:px-4 py-2.5 rounded container mx-auto'>
				<div className='flex flex-wrap items-center justify-between mx-auto'>
					<img
						className='w-10 h-10 rounded-full'
						src={logo}
						alt='Rounded avatar'
					></img>
					<div id='navbar-default'>
						<ul className='flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
							<li className='flex'>
								<div className='block mr-4 text-right'>
									<p className='font-normal text-gray-700 '>{`Handicrafted by`}</p>
									<h5 className='mb-2 text-sm font-bold tracking-tight text-gray-900 '>
										{`JimHLS`}
									</h5>
								</div>
								<div className='relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
									<svg
										className='absolute w-12 h-12 text-gray-400 -left-1'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path
											fillRule='evenodd'
											d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
											clipRule='evenodd'
										></path>
									</svg>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Menu
