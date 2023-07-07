import { resolve } from 'path'
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config'


const config = defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    coverage: {
      all: true,
      branches: 100,
      clean: true,
      cleanOnRerun: true,
      functions: 100,
      lines: 100,
      reporter: ['text'],
      statements: 100,
    },
    environment: 'node',
    globals: true,
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})

export default config
