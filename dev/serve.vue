<script>
import Vue from 'vue';
import Gaveta from '@/gaveta.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Gaveta
  }
});
</script>

<template>
  <div id="app">
    <gaveta />
  </div>
</template>
