import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    {
      name: 'markdown-loader',
      transform(code, id) {
        if (id.endsWith('.md')) {
          // Transforms raw markdown file content into a standard string export
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
  ],
  // base: '/bishan-batel/'
})
