'use client'

import { ChangeEvent, useEffect, useRef } from 'react'

const Navbar = () => {
	const themeToggle = useRef<HTMLInputElement>(null)
	useEffect(() => {
		if (themeToggle.current && typeof window !== 'undefined') {
			const isDark: boolean = localStorage.getItem('theme') === 'dark'
			themeToggle.current.checked = isDark
			if (isDark) {
				document.documentElement.setAttribute('data-theme', 'dark')
			} else {
				document.documentElement.setAttribute('data-theme', 'default')
			}
		}
	}, [])

	const themeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target?.checked) {
			document.documentElement.setAttribute('data-theme', 'dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.setAttribute('data-theme', 'default')
			localStorage.setItem('theme', 'default')
		}
	}
	return (
		<nav className='flex flex-row rounded-lg p-4 shadow-md shadow-shadow transition-all duration-500 hover:shadow-lg hover:shadow-shadow'>
			<div className='basis-4/6 justify-start md:basis-1/3 md:justify-center'>
				<h2 className='h-full align-middle text-base font-bold'>
					Shahryar Pirooz
				</h2>
			</div>
			<div className='hidden md:flex md:basis-1/3 md:justify-center'>
				<ul className='flex flex-row space-x-2'>
					<li className='btn hover:text-primary'>Home</li>
					<li className='btn hover:text-primary'>Blog</li>
					<li className='btn hover:text-primary'>Projects</li>
					<li className='btn hover:text-primary'>Contact</li>
				</ul>
			</div>
			<div className='hidden md:flex md:basis-1/3 md:items-center md:justify-end'>
				<div className='flex w-fit items-center justify-center'>
					<label
						htmlFor='theme'
						className='flex cursor-pointer items-center'
					>
						<div className='relative'>
							<input
								id='theme'
								type='checkbox'
								className='sr-only'
								ref={themeToggle}
								onChange={(e) => themeHandler(e)}
							/>
							<div className='line h-4 w-10 rounded-full bg-background shadow-inner shadow-slate-400'></div>
							<div className='dot absolute -left-1 -top-1 h-6 w-6 rounded-full border border-primary bg-background shadow transition'></div>
						</div>
					</label>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
