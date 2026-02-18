/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			letterSpacing: {
				tighter: '-0.03em',
			},
			animation: {
				'fade-in': 'fadeInUp 0.5s ease-out forwards',
				'fade-in-slow': 'fadeInUp 0.7s ease-out forwards',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
				linear: {
					"primary": "#5e6ad2",
					"primary-content": "#ffffff",
					"secondary": "#1a1a2e",
					"secondary-content": "#e4e4e7",
					"accent": "#7c3aed",
					"accent-content": "#ffffff",
					"neutral": "#16161a",
					"neutral-content": "#a1a1aa",
					"base-100": "#0a0a0f",
					"base-200": "#12121a",
					"base-300": "#1a1a24",
					"base-content": "#e4e4e7",
					"info": "#3b82f6",
					"info-content": "#ffffff",
					"success": "#22c55e",
					"success-content": "#ffffff",
					"warning": "#eab308",
					"warning-content": "#000000",
					"error": "#ef4444",
					"error-content": "#ffffff",
				},
			},
		],
		darkTheme: "linear",
		logs: false,
	}
}
