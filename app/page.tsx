import Image from 'next/image'

import Hero from '@/public/hero.webp'

export default function Home() {
	return (
		<div className='h-full w-full py-4'>
			<section className='flex flex-col flex-nowrap text-center md:flex-row md:text-start'>
				<div className='flex w-full flex-col justify-center space-y-4'>
					<span className='font-sm text-primary'>Web Developer</span>
					<h1 className='text-5xl font-bold leading-relaxed text-text'>
						Welcome to <br /> Shahryar&apos;s Digital <br />{' '}
						Rockstage!
					</h1>
					<p>
						🎸🤘 Hey there, fellow web-wielder! 🖥️ Are you ready to
						embark on a digital journey with a passion for the web
						as electrifying as a guitar solo? Meet Shahryar, the web
						developer who knows how to turn code into rock &apos; n
						&apos; roll magic!🤘🎸
					</p>
					<div className='flex flex-row justify-center space-x-4'>
						<button className='btn bg-primary px-6 text-background transition-all duration-300 active:shadow-shadow'>
							Contact Me
						</button>
						<button className='btn border border-primary bg-transparent px-6 text-primary transition-all duration-300 active:shadow-shadow'>
							My Resume
						</button>
					</div>
				</div>
				<div className='mx-auto flex max-h-screen w-full justify-center md:justify-end'>
					<Image
						className='h-auto w-auto md:w-[90%]'
						alt='hero image'
						src={Hero}
					/>
				</div>
			</section>
		</div>
	)
}
