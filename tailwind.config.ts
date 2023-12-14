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
				accent: 'rgb(var(--accent-color))',
				background: 'rgb(var(--background-color))',
				primary: 'rgb(var(--primary-color))',
				secondary: 'rgb(var(--secondary-color))',
				text: 'rgb(var(--text-color))',
				shadow: 'rgba(var(--shadow-color))',
			},
		},
	},
	plugins: [],
}
export default config
