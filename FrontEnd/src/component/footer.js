import React from 'react'

const Footer = () => {
	return (
		<div className='border-t-2 border-gray-200 fixed bottom-0 mx-auto w-full'>
			<div className='flex items-center justify-between text-center mx-auto my-6 text-sm md:text-base container'>
				<span>
					{`This website is created as part of Hlsolutions program. The materials
					contained on this website are provided for general information only
					and do not constitute any form of advice. HLS assumes no
					responsibility for the accuracy of any particular statement and
					accepts no liability for any loss or damage which may arise from
					reliance on the information contained on this site.`}
				</span>
			</div>
			<span className='block text-sm text-gray-500 text-center break-words mb-2'>
				Copyright 2021 HLS
			</span>
		</div>
	)
}

export default Footer
