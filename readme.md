# Gaveta.vue 

## A flexible drawer for your UI

#### Meet <strong>Gaveta</strong>, the open-source and mobile-friendly drawer component bulit for Vue.js. Put anything you want in this drawer and have it animate into and out of your interface beautifully using Vue's transition framework.
  
<slot>

## 👉 [Live Demo](https://farebox.github.io/gaveta/) 👈

</slot>

---

### Reasons to love Gaveta

 * Customizable title and close affordance
 * Vue2 and Vue3 compatible
 * Configurable with CSS variables
 * Sensible and minimal stylesheet that's probably compatible with your framework of choice
 * Mobile optimized sizing, without need to target screen sizes within drawer content
 * Powered by Vue's transition framework
 * Uses CSS 3d transforms for hardware acceleration on some devices
 * Visibility is fully controlled by parent component
 * Close button automatically captures focus and listens for `esc` key

---

### Using Gaveta

#### Installation

```
npm install vue-gaveta
```

#### Basic Usage

```vue
<template>
<div>
  <Gaveta :active="active" @close="active=false">
    /* Info to show when the drawer is open! */
  </Gaveta>
</div>
</template>
<script>
import Gaveta from 'vue-gaveta';
export default {
  components: { Gaveta }
  data() { return { active: false }}
}
</script>
```
  
#### Customize Styles

```css
:root {
/* drawer background */
--gaveta-background: purple;

/* main text color */
--gaveta-color: yellow;

/* interior padding - useful to set to zero if using container helpers */
--gaveta-padding: 2em;

/* color to fade out background UI - note that solid colors will not be transparent */
--gaveta-screen: rgba(16, 38, 56, 0.3)
}
```

#### Use Slots

```vue
<Gaveta :active="active" @close="active=false">
<template v-slot:title>A custom title!</template>
<template v-slot:close>Pass in anything to click on</template>

<template v-slot:default>Default slot can be implied or defined explicitly</template>
</Gaveta>
```

Created by [@13protons](https://13protons.com) for [Farebox.io](https://farebox.io)