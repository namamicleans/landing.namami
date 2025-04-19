
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0b4251',
					foreground: '#ffffff',
					50: '#e6f0f2',
					100: '#b3d5dd',
					200: '#80bbca',
					300: '#4ea0b6',
					400: '#1b86a3',
					500: '#0b4251',
					600: '#093c49',
					700: '#072f39',
					800: '#052229',
					900: '#021519',
				},
				secondary: {
					DEFAULT: '#ffd166',
					foreground: '#000000',
					50: '#fffaed',
					100: '#ffecbd',
					200: '#ffe08d',
					300: '#ffd55c',
					400: '#ffc92c',
					500: '#ffc000',
					600: '#e6ad00',
					700: '#b38700',
					800: '#806100',
					900: '#4d3a00',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"fade-out": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" }
				},
				"slide-up": {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"slide-down": {
					"0%": { transform: "translateY(-20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"slide-in-left": {
					"0%": { transform: "translateX(-20px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"slide-in-right": {
					"0%": { transform: "translateX(20px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"pulse-gentle": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out",
				"fade-out": "fade-out 0.5s ease-out",
				"slide-up": "slide-up 0.5s ease-out",
				"slide-down": "slide-down 0.5s ease-out",
				"slide-in-left": "slide-in-left 0.5s ease-out",
				"slide-in-right": "slide-in-right 0.5s ease-out",
				"float": "float 3s ease-in-out infinite",
				"pulse-gentle": "pulse-gentle 3s ease-in-out infinite"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
