# @lewebsimple/nuxt3-svg

Nuxt3 module for importing components from SVG files.

## Install

```bash
yarn add -D @lewebsimple/nuxt3-svg
```

## Setup

#### `vite.config.js`

```ts
import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@lewebsimple/nuxt3-svg"],
});
```

## Usage

```vue
<script setup lang="ts">
import SvgImage from "~/assets/image.svg";
</script>

<template>
  <svg-image />
</template>
```

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
