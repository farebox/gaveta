<template>
  <main class="container" id="app">
    <Readme>
      <button @click="active=true">You Can't Argue With Results</button>
    </Readme>

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
  </main>
</template>

<script>


import Vue from 'vue';
import Gaveta from '@/gaveta.vue';
import Readme from '../readme.md'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Gaveta,
    Readme: Readme.vue.component
  },
  data() {
    return {
      active: false,
    };
  },
});
</script>

<style>
@import '../node_modules/normalize.css';
@import '../node_modules/milligram/dist/milligram.min.css';

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

.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 400;
  padding-top: 60px !important;
}

</style>

