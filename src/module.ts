import { defineNuxtModule, addVitePlugin } from '@nuxt/kit'
import viteSvgLoader from 'vite-svg-loader'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@lewebsimple/nuxt3-svg',
    configKey: 'svg'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    addVitePlugin(viteSvgLoader({ defaultImport: 'component' }))
  }
})
