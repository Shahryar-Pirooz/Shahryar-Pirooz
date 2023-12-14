import type { Metadata } from 'next'
import './globals.css'

import { IBM_Plex_Sans_KR } from 'next/font/google'

import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/Navbar'

const ipsk = IBM_Plex_Sans_KR({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' data-theme='default'>
			<body className={ipsk.className}>
				<Navbar />
				<main className='space-y-10'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
