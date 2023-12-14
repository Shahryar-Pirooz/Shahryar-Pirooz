import Image from 'next/image'

import { express, js, linux, mongo, next, node, react, ts } from '@/public'
import Tool from '@/types/tools'

const tools: Tool[] = [
	{ id: 1, name: 'MongoDB', src: mongo },
	{ id: 2, name: 'Express', src: express },
	{ id: 3, name: 'ReactJS', src: react },
	{ id: 4, name: 'NodeJS', src: node },
	{ id: 5, name: 'NextJS', src: next },
	{ id: 6, name: 'Typescript', src: ts },
	{ id: 7, name: 'Javascript', src: js },
	{ id: 8, name: 'Linux', src: linux },
]

export default function About() {
	return (
		<section className='flex h-screen w-full flex-col justify-center space-y-8'>
			<div className='flex'>
				<div className='card mx-auto flex h-fit w-full bg-background px-4 pt-8 shadow-lg md:basis-3/5'>
					<div className='flex flex-col space-y-3'>
						<div className='w-full text-center text-xl font-bold text-primary'>
							About
						</div>
						<div className='px-5 text-justify'>
							<h1>Hello, I&apos;m Shahryar Pirooz! 🌟</h1>
							<p>
								I&apos;m a passionate Front-End Web Developer
								eager to dive into the thrilling world of MERN
								Stack development. I&apos;ve got a knack for
								<strong> JavaScript</strong>,
								<strong> TypeScript</strong>, and
								<strong> React</strong>, backed by some solid
								experience.
							</p>
							<p>
								My journey kicked off in the land of
								<em> Android Development</em>, where I sharpened
								my skills in making cool mobile apps. And hey,
								it&apos;s not just front-end stuff—I&apos;m
								pretty handy with <strong> Java</strong>,
								<strong> Dart</strong>, and
								<strong> Python</strong> too! I&apos;m always up
								for a challenge, especially when it comes to
								wrapping my head around
								<em> Cloud Computing </em>
								and
								<em> DevOps</em>.
							</p>
							<p>
								I&apos;m a huge fan of open-source tech, and
								that&apos;s why <strong>Linux</strong> is my
								go-to operating system. It&apos;s not all about
								code, though—I&apos;m also crazy about music and
								literature. Always on the lookout for fresh
								beats and captivating stories! 🎶📚
							</p>
							<p>
								Let&apos;s connect and explore the awesome
								possibilities where tech meets creativity! 🚀
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex w-full flex-row flex-wrap justify-center space-x-2 space-y-2 md:space-x-8'>
				{tools.map((item) => {
					return (
						<div key={item.id} title={item.name}>
							<Image
								alt={item.name}
								src={item.src}
								width={70}
								height={70}
							/>
						</div>
					)
				})}
			</div>
		</section>
	)
}
