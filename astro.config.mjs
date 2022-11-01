import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://fedpre.github.io/wdd330-frontend-dev-II/',
  integrations: [sitemap(), react(), image(), tailwind()]
})
