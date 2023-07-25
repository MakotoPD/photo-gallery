# Nuxt photos gallery

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

## Features

<!-- Highlight some of the features your module provide here -->
- &nbsp;Gallery in grid

## Quick Setup

1. Add `nuxt-photos-gallery` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-photos-gallery

# Using yarn
yarn add --dev nuxt-photos-gallery

# Using npm
npm install --save-dev nuxt-photos-gallery
```

2. Add `nuxt-photo-gallery` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-photos-gallery'
  ]
})
```

3. Manage your gallery

```html
<Nuxt-gallery rows="5">
  <Nuxt-gallery-image
    image-src="path/to/image.png"
  />
  <Nuxt-gallery-image
    rounded="true"
    image-src="path/to/image.jpg"
  />
</Nuxt-gallery>

```

You can edit numbers of rows using `rows=5` in `<Nuxt-gallery rows="5">` minimum is **3**.

if you want your gallery to be rounded use `rounded="true"`


That's it! You can now use Nuxt-Photos-Gallery in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
