import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base path - update this with your repository name
  // For example, if your repo is 'https://github.com/username/my-blog'
  // Set base to '/my-blog/'
  // For custom domain or username.github.io, use base: '/'
  base: '/cybernotepad-website/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
