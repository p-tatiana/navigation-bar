/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			gridTemplateRows: {
				'menu': "repeat(9, minmax(64px, auto))",
			},
			boxShadow: {
				"navigation-bar":
					"0 0 4px 0 rgba(0,0,0,.1), 0 -10px 15px rgba(0,0,0,.08)",
				'menu': "0 7px 14px rgba(11,31,53,.1)",
				"round-button": "0px 5px 5px -5px rgba(48, 59, 67, 1) inset;",
			},
		},
		fontFamily: {
			'oswald': ["Oswald", "sans-serif"],
		},
	},
	plugins: [],
};
