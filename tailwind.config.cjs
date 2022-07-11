const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: 'hsl(172, 67%, 45%)',
				cyan: {
					'very-dark': 'hsl(183, 100%, 15%)',
					'dark-grayish': 'hsl(186, 14%, 43%)',
					grayish: 'hsl(184, 14%, 56%)',
					'very-light-grayish': 'hsl(189, 41%, 97%)'
				}
			},
			fontFamily: {
				mono: ["'Space Mono'", ...defaultTheme.fontFamily.mono]
			},
			fontSize: {
				input: '1.5rem'
			}
		}
	},

	plugins: []
};

module.exports = config;
