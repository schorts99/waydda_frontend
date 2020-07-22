module.exports = {
	purge: {
		content: [
			'./pages/**/*.{js,jsx,ts,tsx}',
			'./components/**/*.{js,jsx,ts,tsx}'
		]
	},
	theme: {
		
		borderRadius: {
			'none': '0',
			'sm': '0.125rem',
			default: '0.25rem',
			'md': '0.375rem',
			'lg': '0.5rem',
			'full': '9999px',
			'large': '1.5em',
		},
		extend: {
			colors: {
				"red-principal": "#ff441f",
				"purple-principal": "#5B3093",
				background: "#fafafa"
			},
			height: {
				"xxl": "24em"
			},
		},
	},
	variants: {
		opacity: ['responsive', 'hover', 'focus', 'disabled'],
	},
	plugins: [],
}
