export default function Contact() {
	return (
		<div className='flex h-full w-full  items-center justify-center md:p-8'>
			<div className='card group w-full  p-2 md:w-1/3 md:p-8'>
				<h1 className='transition-color w-full pb-8 text-center text-xl font-bold duration-300 group-hover:text-primary'>
					Get In Touch
				</h1>
				<form className='flex flex-col space-y-3'>
					<div className='flex flex-col justify-between'>
						<label className='' htmlFor='name'>
							Name
						</label>
						<input
							className='w-full rounded-lg bg-shadow px-4 outline-1 outline-primary'
							id='name'
							name='name'
							type='text'
						/>
					</div>
					<div className='flex flex-col justify-between'>
						<label className='' htmlFor='email'>
							Email
						</label>
						<input
							className='w-full rounded-lg bg-shadow px-4 outline-1 outline-primary'
							id='email'
							name='email'
							type='email'
						/>
					</div>
					<div className='flex flex-col justify-between'>
						<label className='' htmlFor='message'>
							Message
						</label>
						<textarea
							className='w-full rounded-lg bg-shadow px-4 py-4 outline-1 outline-primary'
							name='message'
							id='message'
							cols={30}
							rows={10}
						></textarea>
					</div>
					<button
						className='btn mx-auto w-full border border-primary py-4 text-primary shadow-shadow transition-all duration-1000 hover:bg-primary hover:text-background active:shadow-inner md:w-1/3 md:py-2'
						type='submit'
					>
						Send
					</button>
				</form>
			</div>
		</div>
	)
}
