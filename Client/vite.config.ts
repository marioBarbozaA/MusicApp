import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {//Implemented to centralize the Routes
      "@": path.resolve(__dirname, "./src"),
      "@API": path.resolve(__dirname, "./src/API"),
      '@Components': path.resolve(__dirname, './src/Components'),
      '@Pages': path.resolve(__dirname, './src/Pages'),
      '@Interfaces': path.resolve(__dirname, './src/Interfaces'),
      '@Styles': path.resolve(__dirname, './src/Styles'),
      '@Utils': path.resolve(__dirname, './src/utils'),
    },
  },
})