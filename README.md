# Nuxt photos gallery

[![pack version][npm-pack-version-src]][npm-pack-version-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]


## Features
<!-- Highlight some of the features your module provide here -->
- Nuxt3 ready
- Gallery in grid

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
[npm-version-src]: https://img.shields.io/npm/v/npm.svg?logo=npm&style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://www.npmjs.com/package/nuxt-photos-gallery

[npm-pack-version-src]: https://img.shields.io/npm/v/nuxt-photos-gallery?style=flat&labelColor=18181B&color=28CF8D&label=Package%20verison
[npm-pack-version-href]: https://www.npmjs.com/package/nuxt-photos-gallery

[npm-downloads-src]: https://img.shields.io/npm/dw/nuxt-photos-gallery?style=flat&labelColor=18181B&color=28CF8D
[npm-downloads-href]: https://www.npmjs.com/package/nuxt-photos-gallery

[license-src]: https://img.shields.io/npm/l/nuxt-photos-gallery?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-photos-gallery

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
