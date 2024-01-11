import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['Open sans', 'sans-serif'],
      heading: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        text: {
          DEFAULT: '#2b3d50',
          50: '#eef2f6',
          100: '#dee5ed',
          200: '#bdcbdb',
          300: '#9cb2c9',
          400: '#7a98b8',
          500: '#597ea6',
          600: '#476585',
          700: '#364c63',
          800: '#243242',
          900: '#121921',
          950: '#090d11'
        },
        background: {
          DEFAULT: '#e6e6e6',
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d'
        },
        primaryColor: {
          DEFAULT: '#00B893',
          50: '#e5fffa',
          100: '#ccfff5',
          200: '#99ffeb',
          300: '#66ffe0',
          400: '#33ffd6',
          500: '#00ffcc',
          600: '#00cca3',
          700: '#00997a',
          800: '#006652',
          900: '#003329',
          950: '#001a14'
        },
        secondary: {
          DEFAULT: '#95A5A7',
          50: '#f1f3f3',
          100: '#e3e7e8',
          200: '#c7d0d1',
          300: '#acb8b9',
          400: '#90a0a2',
          500: '#74888b',
          600: '#5d6d6f',
          700: '#465253',
          800: '#2e3738',
          900: '#171b1c',
          950: '#0c0e0e'
        },
        accent: {
          DEFAULT: '#fd7e17',
          50: '#fff1e6',
          100: '#fee3cd',
          200: '#fec79a',
          300: '#fdab68',
          400: '#fd8f35',
          500: '#fc7303',
          600: '#ca5c02',
          700: '#974502',
          800: '#652e01',
          900: '#321701',
          950: '#190c00'
        }
      }
    }
  }
};
