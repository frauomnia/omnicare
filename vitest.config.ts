import { defineConfig } from 'vitest/config';

// source: https://v0.vitest.dev/config/
export default defineConfig({
  test: {
    globals: true, // to use the APIs globally 
    setupFiles: './vitest.setup.ts', 
    environment: 'jsdom', // to use browser-like environment
  },
});
