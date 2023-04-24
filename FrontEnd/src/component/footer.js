import React from 'react'

const Footer = () => {
	return (
		<footer class='text-center w-full border-gray-100 border-t-2'>
			<div class='container py-3 text-neutral-400 mx-auto xl:px-72'>
				<div class='mb-6 xl:mb-0 text-center text-xs'>
					<p>
						{`This website is created as part of Hlsolutions program. The
						materials contained on this website are provided for general
					information only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and
					accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.`}
					</p>
				</div>
			</div>
			<div class='pb-4 text-center text-sm'>Copyright 2021 HLS</div>
		</footer>
	)
}

export default Footer
