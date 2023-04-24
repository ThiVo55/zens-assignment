import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { MdOutlineClose } from 'react-icons/md'
import { fetchData } from './service'
import Cookies from 'js-cookie'

const notify = () =>
	toast.custom(
		(t) => (
			<div className='flex flex-row items-center justify-between w-auto bg-green-200 px-8 py-6 text-black shadow-2xl hover:shadow-none transform-gpu translate-y-0 hover:translate-y-1 rounded-xl relative transition-all duration-500 ease-in-out bg-current'>
				<div className='flex flex-col items-start justify-center ml-4 cursor-default text-white'>
					{`That's all the jokes for today! 
            Come back another day!`}
				</div>
				<div
					className='absolute top-2 right-2 cursor-pointer'
					onClick={() => toast.dismiss(t.id)}
				>
					<MdOutlineClose />
				</div>
			</div>
		),
		{ id: 'unique-notification', position: 'top-center' }
	)

const Index = () => {
	const [joke, setJoke] = useState()
	const [jokeClone] = useState([0])
	const [dataJokes, setDataJokes] = useState([])
	const [disableButon, setDisableButon] = useState(false)
	const [saveCookies, setSaveCookies] = useState()

	useEffect(() => {
		fetchData().then((item) => {
			setSaveCookies(item[0]?.title)
			setDisableButon(false)
			setJoke(item[0])
			setDataJokes(item)
		})
	}, [])

	const SetCookies = (data, vote) => {
		Cookies.set(data, vote, {
			expires: 1,
		})
	}

	const ramdomJoke = (vote) => {
		setSaveCookies('')
		let dataLength = dataJokes?.length
		const index = Math.floor(Math.random() * dataLength)
		if (jokeClone.includes(index)) {
			if (jokeClone.length < dataLength) {
				ramdomJoke(vote)
			} else {
				setJoke()
				SetCookies(saveCookies, vote)
				setDisableButon(true)
				notify()
			}
		} else {
			SetCookies(saveCookies, vote)
			setSaveCookies(dataJokes[index]?.title)
			jokeClone.push(index)
			setJoke(dataJokes[index])
		}
	}
	return (
		<div className='flex flex-col justify-between h-full'>
			<div className='bg-green h-40 min-w-full flex items-center '>
				<div className='container mx-auto text-center text-white'>
					<span className='mb-4 font-bold leading-none tracking-tight  sm:text-xl'>
						{joke?.title || `A joke a day keep the doctor away`}
					</span>
					<p className='xl:text-sm'>{joke?.summary}</p>
				</div>
			</div>
			<div className=' px-6 mt-8 xl:mx-auto xl:my-10 xl:h-1/2 container xl:px-72'>
				<p className='mb-6 text-base xl:text-lg font-normal text-gray-500'>
					{joke?.content}
				</p>
			</div>
			<div className='flex items-center justify-center gap-4 mx-auto w-full mb-auto bottom-0'>
				<button
					disabled={disableButon}
					className='bg-blue hover:bg-blue-700 text-white p-3  text-sm xl:text-base xl:w-1/6 w-2/5 disabled:opacity-40'
					onClick={() => ramdomJoke(true)}
				>
					{`This is Funny!`}
				</button>
				<button
					disabled={disableButon}
					className='bg-green hover:bg-green-700 text-white p-3 text-sm xl:text-base xl:w-1/6 w-2/5 disabled:opacity-40'
					onClick={() => ramdomJoke(false)}
				>
					{`This is not funny.`}
				</button>
			</div>
			<Toaster />
		</div>
	)
}

export default Index
