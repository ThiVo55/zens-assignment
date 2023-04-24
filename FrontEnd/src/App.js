import React from 'react'
import './App.css'
import Menu from './component/menu'
import Footer from './component/footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/Home'

function App() {
	return (
		<div class='flex flex-col h-screen justify-between'>
			<Menu />
			<main className='mb-auto'>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
