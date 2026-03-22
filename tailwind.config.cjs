/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				serif: ['Newsreader', 'Georgia', 'serif'],
				mono: ['JetBrains Mono', 'Courier New', 'monospace'],
			},
			letterSpacing: {
				tighter: '-0.03em',
			},
			colors: {
				// Pre-computed muted colors (no opacity) for iOS compatibility
				'muted': '#71717a',      // For secondary text
				'muted-light': '#a1a1aa', // For less muted text
				'muted-dark': '#52525b',  // For very muted text
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
				cogniswitch: {
					"primary": "#6366f1",
					"primary-content": "#ffffff",
					"secondary": "#272048",
					"secondary-content": "#ffffff",
					"accent": "#7c3aed",
					"accent-content": "#ffffff",
					"neutral": "#272048",
					"neutral-content": "#ffffff",
					"base-100": "#ffffff",
					"base-200": "#f9f9f7",
					"base-300": "#f0f0eb",
					"base-content": "#272048",
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
