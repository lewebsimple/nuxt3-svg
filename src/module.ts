import { defineNuxtModule } from '@nuxt/kit'
import svgLoader from 'vite-svg-loader'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-svg',
    configKey: 'svg'
  },
  defaults: {},
  setup (options, nuxt) {
    // Configure vite-svg-loader
    nuxt.hook('vite:extendConfig', (config) => {
      config.plugins = config.plugins || []
      config.plugins.push(svgLoader({ defaultImport: 'component' }))
    })
  }
})
