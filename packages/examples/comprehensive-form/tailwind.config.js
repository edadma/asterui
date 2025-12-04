import daisyui from 'daisyui'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../asterui/src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark'],
  },
}
