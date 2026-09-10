import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to GitHub Pages at https://<user>.github.io/<repo>/,
// set base to '/<repo>/'. For a user/organization page (<user>.github.io)
// or Vercel/Netlify, leave it as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
