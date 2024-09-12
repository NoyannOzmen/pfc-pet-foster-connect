/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/**/*.{html,js,ejs,jsx}", "./src/assets/integration/**/*.{html,js,ejs,jsx}", "./src/views/partials/**/*.ejs"],
  theme:{
        backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      'left-4':'center left -40vw',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    colors: {
      'fond': '#fffbe4',
      'zoning': '#d5edb7',
      'texte': '#382821',
      'accents1':{
        light: '#ff7438',
        DEFAULT: '#dd4302',
        dark: '#b83700'
      },
      'accents2':{
        light: '#a0bc7d',
        DEFAULT: '#758a5a',
        dark: '#536140'
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',},
        
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        
        fontFamily: {      
          'grands': ['Grandstander', 'cursive'],
          'body': ['"Noto Sans"', 'sans-serif']
        },
        backgroundImage: {
          'unai': "url('../images/unai.png')",
        },
      }
    },
    plugins: [],
  }
  
