module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily:{
            'roboto':['Roboto','sans-serif'],

        },

        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
          {
            'Automaton': {
               'primary' : '#4265b8',
               'primary-focus' : '#164692',
               'primary-content' : '#201047',
    
               'secondary' : '#20c552',
               'secondary-focus' : '#00cc4e',
               'secondary-content' : '#201047',
    
               'accent' : '#f3cc30',
               'accent-focus' : '#f6d860',
               'accent-content' : '#201047',
    
               'neutral' : '#20134e',
               'neutral-focus' : '#140a2e',
               'neutral-content' : '#f9f7fd',
    
               'base-100' : '#000019',
               'base-200' : '#ffd500',
               'base-300' : '#140a2e',
               'base-content' : '#f9f7fd',
    
               'info' : '#4fbff3',
               'success' : '#71ead2',
               'warning' : '#f3cc30',
               'error' : '#e13d53',
    
              '--rounded-box': '1rem',          
              '--rounded-btn': '.5rem',        
              '--rounded-badge': '1.9rem',      
    
              '--animation-btn': '.25s',       
              '--animation-input': '.2s',       
    
              '--btn-text-case': 'uppercase',   
              '--navbar-padding': '.5rem',      
              '--border-btn': '1px',            
            },
          },
        ],
      },
};