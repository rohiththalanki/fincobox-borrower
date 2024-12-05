import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fontFamily: {
          // sans: ['Albert Sans', 'sans-serif'],
        },
        fontSize: {
          28: '1.75rem',
          40: '2.5rem',
        },
        colors: {
          primaryNeon: '#2CFDA3',
          secondaryNeon: '#00BFAC',
          tertiaryNeon: '#0FB2C3',
          primaryBlue: '#0453E9',
          secondaryBlue: '#1C70E2',
          black: '#0E0B14',
          gray06: '#3F3F3F',
          gray05: '#E8E8E9',
          gray04: '#E4E4E4',
          gray03: '#E9EBED',
          gray02: '#F3F5F7',
          gray01: '#F0F1F2',
          error01: '#dc3545'
        },
        width: {
          400: '25rem',
          592: '37rem',
          785: '49rem',
        },
        lineHeight: {
          '48': '3rem'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
