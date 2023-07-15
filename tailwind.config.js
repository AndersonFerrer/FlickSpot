const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 1000ms ease-in infinite',
        'bounce-mid': 'bounce 1200ms ease-out infinite',
        'bounce-fast': 'bounce 1400ms ease-out infinite'
      }
    }
  },
  plugins: [

  ]
})
