'use client'

import Link from 'next/link'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

const ThemeToggle = ({ id }: { id: string }) => {
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
		<div className='flex w-fit items-center justify-center'>
			<label htmlFor={id} className='flex cursor-pointer items-center'>
				<div className='relative'>
					<input
						id={id}
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
	)
}

export default function Navbar() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const openDrawerHandler = () => setIsDrawerOpen(!isDrawerOpen)
	return (
		<nav className='flex flex-col rounded-lg p-4 shadow-md shadow-shadow transition-all duration-500 hover:shadow-lg hover:shadow-shadow md:flex-row'>
			<div className='flex w-full flex-row justify-around md:basis-1/3 md:justify-center'>
				<h2 className='h-full w-full text-center align-middle text-base font-bold md:text-start'>
					Shahryar Pirooz
				</h2>
				<div className='justify-self-end rounded-full md:hidden'>
					<div
						onClick={() => openDrawerHandler()}
						className='flex flex-col items-end justify-center space-y-1'
					>
						<div
							className={` h-[0.1rem] w-[0.5rem] bg-text transition-all  duration-200 ${
								isDrawerOpen
									? 'translate-y-2 rotate-45 opacity-0'
									: 'translate-y-0 rotate-0 opacity-100'
							}`}
						></div>
						<div
							className={` rotate-41 h-[0.1rem] w-[1rem] bg-text transition-all duration-200  ${
								isDrawerOpen
									? 'translate-x-[1px] translate-y-1 rotate-45'
									: 'translate-y-0 rotate-0'
							}`}
						></div>
						<div
							className={` h-[0.1rem] w-[1rem] -rotate-45 bg-text transition-all duration-200  ${
								isDrawerOpen
									? '-translate-y-[1px] -rotate-45 bg-text'
									: 'rotate-0'
							}`}
						></div>
					</div>
				</div>
			</div>

			<div
				className={`transition-all duration-300 md:hidden ${
					isDrawerOpen ? 'h-72' : 'h-0'
				}`}
			>
				<div
					className={`relative h-full overflow-hidden transition-all duration-300 md:hidden`}
				>
					<ul className='flex h-full w-full flex-col justify-around space-x-2 pt-4'>
						<li className='text-center hover:text-primary'>
							<Link href='/'>Home</Link>
						</li>
						<li className='text-center hover:text-primary'>
							<Link href='/blog'>Blog</Link>
						</li>
						<li className='text-center hover:text-primary'>
							<Link href='/projects'>Projects</Link>
						</li>
						<li className='text-center hover:text-primary'>
							<Link href='/contact'>Contact</Link>
						</li>
						<li className='flex flex-row justify-center'>
							<ThemeToggle id='themeToggleSM' />
						</li>
					</ul>
				</div>
			</div>
			<div className='hidden md:flex md:basis-1/3 md:justify-center'>
				<ul className='flex flex-row space-x-2'>
					<li className='btn hover:text-primary'>
						<Link href='/'>Home</Link>
					</li>
					<li className='btn hover:text-primary'>
						<Link href='/blog'>Blog</Link>
					</li>
					<li className='btn hover:text-primary'>
						<Link href='/projects'>Projects</Link>
					</li>
					<li className='btn hover:text-primary'>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
			<div className='hidden md:flex md:basis-1/3 md:items-center md:justify-end'>
				<ThemeToggle id='themeToggleMD' />
			</div>
		</nav>
	)
}
