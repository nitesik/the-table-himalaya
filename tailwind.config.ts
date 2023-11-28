import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#26554fff',
        'primary-blur': '#26554f33',
      },
      backgroundImage: {
        'nav-bg': "url('/navbar-background.jpg')",
        'wallpaper1': "url('/snow.jpg')",
        'restaurant': "url('/bar.jpg')",
        'reservation': "url('/reservation_wallpaper.jpg')",
        'wallpaper2': "url('/wallpaper1.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
