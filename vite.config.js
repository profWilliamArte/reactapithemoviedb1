import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// prueba
export default defineConfig({
  plugins: [react()],
    base: "https://profWilliamArte.github.io/reactapithemoviedb1",
  })
