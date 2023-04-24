import React from 'react'
import logo from '../image/logo.PNG'
import avt from '../image/avatar.PNG'
const Menu = () => {
	return (
		<header className='border-gray-200 rounded container mx-auto xl:px-72'>
			<div className='flex flex-wrap items-center justify-between'>
				<img
					className='w-15 h-10 rounded-full'
					src={logo}
					alt='Rounded avatar'
				></img>
				<div>
					<ul className='flex flex-col p-4 mt-4  xl:flex-row xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium xl:border-0'>
						<li className='flex'>
							<div className='block mr-4 text-right'>
								<p className='font-normal text-gray-700 '>{`Handicrafted by`}</p>
								<h5 className='mb-2 text-sm font-bold tracking-tight text-gray-900 '>
									{`JimHLS`}
								</h5>
							</div>
							<div className='relative w-15 h-10 overflow-hidden bg-gray-100 rounded-full'>
								<img
									className='w-14 h-10 rounded-full'
									src={avt}
									alt='Rounded avatar'
								></img>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Menu
