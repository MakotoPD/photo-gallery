import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'
// Module options TypeScript interface definition
export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'photoGallery',
    configKey: 'photoGallery',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    addPlugin: false
  },
  setup (_moduleOptions, nuxt) {
    const resolver = createResolver(import.meta.url)
    const runtimeDir = resolver.resolve('/runtime')

    nuxt.options.build.transpile.push(runtimeDir);

    addComponent({
      name: 'nuxt-gallery',
      filePath: resolver.resolve('runtime/components/nuxt-gallery.vue')
    })
  
    addComponent({
      name: 'nuxt-gallery-image',
      filePath: resolver.resolve('runtime/components/nuxt-gallery-image.vue')
    })
  }
})
