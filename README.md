# Nuxt3 SVG

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Simple SVG loader for Nuxt 3.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

<!-- Highlight some of the features your module provide here -->
- 📦 &nbsp;Import components from `.svg` files

## Quick Setup

1. Add `@lewebsimple/nuxt3-svg` dependency to your project

```bash
# Using pnpm
pnpm add -D @lewebsimple/nuxt3-svg

# Using yarn
yarn add --dev @lewebsimple/nuxt3-svg

# Using npm
npm install --save-dev @lewebsimple/nuxt3-svg
```

2. Add `@lewebsimple/nuxt3-svg` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@lewebsimple/nuxt3-svg'
  ]
})
```

3. Add the following in `types/svg.d.ts`
```ts
declare module "*.svg" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}
```

That's it! You can now use Nuxt3 SVG in your Nuxt app ✨

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
[npm-version-src]: https://img.shields.io/npm/v/@lewebsimple/nuxt3-svg/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@lewebsimple/nuxt3-svg

[npm-downloads-src]: https://img.shields.io/npm/dm/@lewebsimple/nuxt3-svg.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@lewebsimple/nuxt3-svg

[license-src]: https://img.shields.io/npm/l/@lewebsimple/nuxt3-svg.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@lewebsimple/nuxt3-svg

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
