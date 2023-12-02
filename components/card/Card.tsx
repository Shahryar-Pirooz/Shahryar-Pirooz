export default function Card({ children }: { children: JSX.Element }) {
	return (
		<div className='items-center justify-center rounded-lg p-3 shadow-none shadow-shadow transition-all duration-300 hover:shadow-md'>
			{children}
		</div>
	)
}
