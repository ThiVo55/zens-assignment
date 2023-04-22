import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { MdOutlineClose } from 'react-icons/md'
import { fetchData } from './service'
import Cookies from 'js-cookie'

const notify = () =>
	toast.custom(
		(t) => (
			<div className='flex flex-row items-center justify-between w-auto bg-green-200 px-8 py-6 text-black shadow-2xl hover:shadow-none transform-gpu translate-y-0 hover:translate-y-1 rounded-xl relative transition-all duration-500 ease-in-out'>
				<div className='flex flex-col items-start justify-center ml-4 cursor-default'>
					{`That's all the jokes for today! 
            Come back another day!`}
				</div>
				<div
					className='absolute top-2 right-2 cursor-pointer text-lg'
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
		<>
			<div className='bg-green-500 h-40 md:h-80 w-screen flex items-center '>
				<div className='container mx-auto text-center text-white '>
					<h1 className='mb-4 font-bold leading-none tracking-tight text-2xl md:text-5xl'>
						{joke?.title ||
							`That's all the jokes for today! Come back another day!`}
					</h1>
					<p>{joke?.summary}</p>
				</div>
			</div>
			<div className='mx-8 md:mx-auto mt-3 md:mt-10 md:h-52'>
				<p className='mb-6 text-base md:text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 '>
					{joke?.content}
				</p>
			</div>
			<div className='flex items-center justify-center gap-4 mx-auto absolute w-full'>
				<button
					disabled={disableButon}
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-3  text-sm md:text-base md:w-1/6 w-2/5 disabled:opacity-40'
					onClick={() => ramdomJoke(true)}
				>
					{`This is Funny!`}
				</button>
				<button
					disabled={disableButon}
					className='bg-green-500 hover:bg-green-700 text-white font-bold p-3 text-sm md:text-base md:w-1/6 w-2/5 disabled:opacity-40'
					onClick={() => ramdomJoke(false)}
				>
					{`This is not funny.`}
				</button>
			</div>
			<Toaster />
		</>
	)
}

export default Index
