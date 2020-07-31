/*
 *  Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *
 *  Proprietary and confidential
 *
 *  Written by AzaChii <hello@azachii.dev>, July 2020
 *
 *  https://azachii.dev/
 *
 *  LICENSE file in the root directory of this source tree.
 */

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
				background: "#fafafa",
				"dark": "#2c2c2c",
				"secondary-dark": "#1c1c1c"
			},
			height: {
				"large": "20em",
				"xxl": "24em",
				"xxxl": "30em"
			},
			inset: {
				"4": "1em"
			},
		},
	},
	variants: {
		opacity: ['responsive', 'hover', 'focus', 'disabled'],
	},
	plugins: [],
}
