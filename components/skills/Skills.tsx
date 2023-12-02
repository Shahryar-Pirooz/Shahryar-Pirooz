import { CodeSVG, MusicSVG, ToolSVG } from '@/public'

import Card from '../card/Card'

export default function Skills() {
	return (
		<section className='h-fit rounded-lg bg-secondary p-4'>
			<div className='flex flex-row md:justify-start'>
				<h3 className='w-full text-center text-xl font-bold md:text-start'>
					Skills & Specializations
				</h3>
			</div>
			<div className='flex flex-col justify-around py-4 md:flex-row'>
				{[
					{
						title: 'Development',
						icon: <CodeSVG />,
						context:
							'Front-End Web Development\nJavaScript, TypeScript, React\nTransitioning to MERN Stack\nMobile App Development (Android)\nVersatility in Java, Dart, Python',
					},
					{
						title: 'Technical Versatility',
						icon: <ToolSVG />,
						context:
							'Embracing Open-Source Technologies\nProficiency in Linux\nInterest in Cloud Computing\nDevOps Knowledge',
					},
					{
						title: 'Creative Pursuits',
						icon: <MusicSVG />,
						context:
							'Passion for Music\nLove for Literature\nExploring New Rhythms and Stories\nIntersection of Technology and Creativity',
					},
				].map((item, index) => {
					return (
						<div className='basis-1/3' key={index}>
							<Card>
								<div className='flex h-52 w-full flex-col items-center justify-start space-y-4 py-4 text-center'>
									<div className='basis-1/3 fill-text'>
										{item.icon}
									</div>
									<div className='basis-1/3 text-lg font-bold'>
										{item.title}
									</div>
									<div className='basis-1/3 justify-self-end text-start text-xs'>
										<ul className='list-disc'>
											{item.context
												.split('\n')
												.map((line, index) => (
													<li key={index}>{line}</li>
												))}
										</ul>
									</div>
								</div>
							</Card>
						</div>
					)
				})}
				<div className=''></div>
				<div className=''></div>
			</div>
		</section>
	)
}
