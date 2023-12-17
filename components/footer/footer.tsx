import Link from 'next/link'

import { Linkedin, Telegram } from '@/public'

export default function Footer() {
	return (
		<footer className='flex h-full w-full flex-col space-y-3 bg-primary py-8'>
			<div className='flex w-full flex-row justify-center px-4'>
				<span className='text-center'>
					AI-powered hero image by segmind
					<br />
					design and code by me.
				</span>
			</div>
			<div className='flex flex-row items-center justify-center space-x-3'>
				<Link
					href='https://www.linkedin.com/in/shahryar-pirooz/'
					target='_blank'
				>
					<Linkedin />
				</Link>
				<Link href='https://t.me/Dev_3ss/' target='_blank'>
					<Telegram />
				</Link>
			</div>
		</footer>
	)
}
