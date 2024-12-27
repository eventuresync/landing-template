import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        error: 'var(--color-error)',
        rating: 'var(--color-rating)',
      },
      fontFamily: {
        titles: 'var(--font-titles)',
        body: 'var(--font-body)',
      },
      spacing: {
        section: 'var(--spacing-section)',
        card: 'var(--spacing-card)',
      },
      maxWidth: {
        container: 'var(--max-width)',
      },
      borderRadius: {
        custom: 'var(--border-radius)',
      },
      boxShadow: {
        custom: 'var(--box-shadow)',
      },
      transitionProperty: {
        custom: 'var(--transition)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;