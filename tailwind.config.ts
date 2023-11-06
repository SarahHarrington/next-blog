import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'hexagons-dark': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'49\' viewBox=\'0 0 28 49\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg id=\'hexagons\' fill=\'%23694873\' fill-opacity=\'0.31\' fill-rule=\'nonzero\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        'hexagons-light': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'49\' viewBox=\'0 0 28 49\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg id=\'hexagons\' fill=\'%23694873\' fill-opacity=\'0.13\' fill-rule=\'nonzero\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',  
      },
    },
    colors: {
      'black-russian': {
        '50': '#f6edff',
        '100': '#f1dfff',
        '200': '#e6c4ff',
        '300': '#daa1ff',
        '400': '#d57cfd',
        '500': '#d25df7',
        '600': '#d03fec',
        '700': '#ba31d1',
        '800': '#932ba8',
        '900': '#742a85',
        '950': '#19091c',
      },
      'alto': {
        '50': '#f7f7f7',
        '100': '#edeced',
        '200': '#dfdedf',
        '300': '#c9c7c9',
        '400': '#aeacae',
        '500': '#9a979a',
        '600': '#8a8689',
        '700': '#7c797c',
        '800': '#686568',
        '900': '#555355',
        '950': '#363536',
      }, 
    },
    fontFamily: {
      satisfy: ["Satisfy", "cursive"],
      lato: ["Lato", "sans-serif"],
    }
  },
  plugins: [require("@tailwindcss/typography")],
}

export default config
