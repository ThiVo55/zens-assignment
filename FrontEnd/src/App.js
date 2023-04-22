import React from 'react'
import './App.css'
import Menu from './component/menu'
import Footer from './component/footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/Home'

function App() {
	return (
		<div className='flex flex-col justify-between max-h-screen'>
			<Menu />
			<main className='h-full'>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
