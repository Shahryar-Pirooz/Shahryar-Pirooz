'use client'
import { addDoc, collection } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { db } from '@/configs/firebase/firebase'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
	name: yup.string().min(3).max(20).required(),
	email: yup.string().email().required(),
	message: yup.string().max(600).required(),
})

type FormatData = yup.InferType<typeof schema>
export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormatData>({
		resolver: yupResolver(schema),
	})
	const submitHandler = async (data: FormatData) => {
		const now = Date.now()
		try {
			await addDoc(collection(db, 'email'), { ...data, date: now })
		} catch (error) {
			console.error(`error`)
			if (error instanceof Error) new Error(error.message)
		}
	}
	return (
		<div className='flex h-full w-full  items-center justify-center md:p-8'>
			<div className='card group w-full  p-2 md:w-1/3 md:p-8'>
				<h1 className='transition-color w-full pb-8 text-center text-xl font-bold duration-300 group-hover:text-primary'>
					Get In Touch
				</h1>
				<form
					onSubmit={handleSubmit(submitHandler)}
					className='flex flex-col space-y-3'
				>
					<div className='flex flex-col justify-between'>
						<label className='' htmlFor='name'>
							Name
						</label>
						{errors.name && (
							<span className='text-red-400'>
								{errors.name.message}
							</span>
						)}
						<input
							className={`w-full rounded-lg px-4 outline-1 ${
								errors.name
									? 'bg-red-200 outline-red-400'
									: 'bg-shadow outline-primary'
							}`}
							type='text'
							{...register('name')}
						/>
					</div>
					<div className='flex flex-col justify-between'>
						<label className='' htmlFor='email'>
							Email
						</label>
						{errors.email && (
							<span className='text-red-400'>
								{errors.email.message}
							</span>
						)}
						<input
							className={`w-full rounded-lg px-4 outline-1 ${
								errors.email
									? 'bg-red-200 outline-red-400'
									: 'bg-shadow outline-primary'
							}`}
							type='email'
							{...register('email')}
						/>
					</div>
					<div className='flex flex-col justify-between'>
						<label className='' htmlFor='message'>
							Message
						</label>
						{errors.message && (
							<span className='text-red-400'>
								{errors.message.message}
							</span>
						)}
						<textarea
							className={`w-full rounded-lg px-4 py-4 outline-1 ${
								errors.message
									? 'bg-red-200 outline-red-400'
									: 'bg-shadow outline-primary'
							}`}
							{...register('message')}
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
