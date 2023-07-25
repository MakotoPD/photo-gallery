export default defineNuxtConfig({
  modules: [
    '../src/module',

  ],
  photoGallery: {
    rounded: true,
    rowNumbers: 3,
  },
  devtools: { enabled: true }
})
