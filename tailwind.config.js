module.exports = {
	purge: {
		content: [
			'./pages/**/*.{js,jsx,ts,tsx}',
			'./components/**/*.{js,jsx,ts,tsx}'
		]
	},
	theme: {
		
		extend: {
			colors: {
				"red-principal": "#ff441f",
				"purple-principal": "#5B3093"
			},
		},
	},
	variants: {
		opacity: ['responsive', 'hover', 'focus', 'disabled'],
	},
	plugins: [],
}
