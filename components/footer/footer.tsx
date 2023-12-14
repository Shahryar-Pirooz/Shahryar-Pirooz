import { Linkedin, Telegram } from '@/public'

export default function Footer() {
	return (
		<footer className='flex h-full w-full flex-row items-center justify-center bg-primary px-4 py-8 text-text '>
			<div className='flex w-fit flex-row justify-around space-x-2 px-4'>
				<a
					href='https://www.linkedin.com/in/shahryar-pirooz/'
					target='_blank'
				>
					<Linkedin />
				</a>
				<a href='https://t.me/Dev_3ss/' target='_blank'>
					<Telegram />
				</a>
			</div>
			<div className='flex w-full flex-row justify-center px-4'>
				<span className='text-center'>
					AI-powered hero image by segmind
					<br />
					design and code by me.
				</span>
			</div>
		</footer>
	)
}
