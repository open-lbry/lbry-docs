/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,md,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
 
    // Or if using `src` directory:
    './theme.config.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

