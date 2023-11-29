import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				accent: 'var(--accent-color)',
				background: 'var(--background-color)',
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				text: 'var(--text-color)',
			},
		},
	},
	plugins: [],
}
export default config
