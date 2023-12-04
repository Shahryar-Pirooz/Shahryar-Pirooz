import Card from '../card/Card'

export default function About() {
	return (
		<section className='relative flex h-screen w-full'>
			<div className='mx-auto flex h-full w-full items-center justify-center md:basis-3/5'>
				<Card>
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
				</Card>
			</div>
		</section>
	)
}
