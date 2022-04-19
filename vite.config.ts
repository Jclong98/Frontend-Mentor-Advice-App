import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      theme: {
        colors: {
          lightCyan: 'hsl(193, 38%, 86%)',
          neonGreen: 'hsl(150, 100%, 66%)',
          grayishBlue: 'hsl(217, 19%, 38%)',
          darkGrayishBlue: 'hsl(217, 19%, 24%)',
          darkBlue: 'hsl(218, 23%, 16%)',
        },
      },
      presets: [
        presetUno(),
        presetWebFonts({
          provider: 'google', // default provider
          fonts: {
            manrope: ['Manrope', 'Manrope:800'],
          },
        }),
      ],
      rules: [
        ['icon', { width: '1.25em', height: '1.25em' }],
        ['text-28', { 'font-size': '28px' }],
        ['tracking-widester', { 'letter-spacing': '0.25em' }],
        ['glow', { 'box-shadow': '0 0 1.5em' }],
      ],
    }),
  ],
})
