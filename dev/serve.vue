<template>
  <div id="app">
    <h1>Gaveta.vue</h1>
    <h2>A flexible drawer for your UI</h2>

    <h4>
      Meet <strong>Gaveta</strong>, the open-source and mobile-friendly drawer component bulit for Vue.js. Put anything you want in this drawer and have it animate into and out of your interface beautifully using Vue's transition framework.
    </h4>


    <button @click="active = true">Show Drawer</button>
    <br/><br/>
    <div class="row">
      <div class="column">.column</div>
      <div class="column">.column</div>
    </div>
    
    <hr />
    <h3>Reasons to love Gaveta:</h3>
    <ul>
      <li>Customizable title and close affordance</li>
      <li>Vue2 and Vue3 compatible</li>
      <li>Configurable with CSS variables</li>
      <li>
        Mobile optimized sizing, without need to target screen sizes within
        drawer content
      </li>
      <li>Powered by Vue's transition framework</li>
      <li>Use CSS 3d transforms for hardware acceleration on some devices</li>
      <li>Works with any CSS framework</li>
      <li>Visibility is fully controlled by parent component</li>
    </ul>

    <hr />
    <h3>Using Gaveta</h3>

<h4>Install Gaveta</h4>
<pre><code>npm install vue-Gaveta</code></pre>

<h4>Basic Usage</h4>

<pre><code>&lt;template&gt;
  &lt;div>
    &lt;Gaveta :active="active" @close="active=false">
      /* Info to show when the drawer is open! */
    &lt;/Gaveta>
  &lt;/div>
&lt;/template&gt;
&lt;script>
  import Gaveta from 'vue-Gaveta';
  export default {
    components: { Gaveta }
    data() { return { active: false }}
  }
&lt;/script>
</code></pre>
    
<h4>Customize Styles</h4>

<pre><code>:root {
  /* drawer background */
  --gaveta-background: purple;

  /* main text color */
  --gaveta-color: yellow;

  /* interior padding - useful to set to zero if using container helpers */
  --gaveta-padding: 2em;

  /* color to fade out background UI - note that solid colors will not be transparent */
  --gaveta-screen: rgba(16, 38, 56, 0.3)
}
</code></pre>

<h4>Use Slots</h4>

<pre><code>&lt;Gaveta :active="active" @close="active=false">
  &lt;template v-slot:title>A custom title!&lt;/template>
  &lt;template v-slot:close>Pass in anything to click on&lt;/template>

  &lt;template v-slot:default>Default slot can be implied or defined explicitly&lt;/template>
&lt;/Gaveta>
</code></pre>

<p>
      Created by <a href="https://13protons.com">@13protons</a> for <a href="https://farebox.io">Farebox.io</a><br>
    </p>

    <Gaveta :active="active" @close="active = false">
      <template v-slot:title>A flexible drawer for your UI</template>
      <!-- <template v-slot:close>Done</template> -->

      <p>
        <strong>Gaveta</strong> is a fully controlled Vue component with a
        customizable title and close button.
      </p>
      <p>
        It's made to work well with your own CSS framework, has thoughtful default styles, and can be customized with CSS variables.
      </p>

      <div
        style="width: 100%; height: 0; padding-bottom: 75%; position: relative"
      >
        <iframe
          src="https://giphy.com/embed/xT5LMUT8Yy1hjMSZ5C"
          width="100%"
          height="100%"
          style="position: absolute"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a
          href="https://giphy.com/gifs/season-12-the-simpsons-12x3-xT5LMUT8Yy1hjMSZ5C"
          >via GIPHY</a
        >
      </p>

      <h4>This drawer is using the default styles</h4>

<pre><code>:root {
  --gaveta-background: white;
  --gaveta-color: currentColor;
  --gaveta-padding: 1.25em;
  --gaveta-screen: rgba(16, 38, 56, 0.3)
}
</code></pre>
    </Gaveta>
  </div>
</template>

<script>
import 'milligram';

import Vue from 'vue';
import Gaveta from '@/gaveta.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Gaveta,
  },
  data() {
    return {
      active: false,
    };
  },
});
</script>

<style>
html {
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 0.25) 0%,
    rgba(253, 187, 45, 0.12) 100%
  );

  background-repeat: no-repeat;
  min-height: 100vh;
}
hr {
  border-color: rgba(0, 0, 0, .2);
}

h1 {
  font-weight: bold;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 1em;
}

</style>

