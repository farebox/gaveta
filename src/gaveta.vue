<template>
  <span>
    <transition name="drawer" appear>
      <div v-if="active" class="drawer" :class="size">
        <button
          class="close-button"
          @click="close"
          @keyup.esc="close" v-focus
          :class="{ 'is-default': !$slots.close }"
        >
          <template v-if="$slots.close"><slot name="close" /></template>
          <template v-else>
            <svg viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ></path>
            </svg>
          </template>
        </button>

        <template v-if="hasTitle">
          <h3 v-if="bareTitle" class="gaveta-title">
            <slot name="title" />
          </h3>
          <slot v-else name="title" class="gaveta-title" />
        </template>
        <slot name="default"></slot>
      </div>
    </transition>
    <transition name="fade" appear>
      <div v-if="active" class="screen" @click="close"></div>
    </transition>
  </span>
</template>

<script>
export default {
  props: {
    active: { type: Boolean, default: false },
    size: { 
      type: String, default: 'is-medium',
      enum: ['is-small', 'is-medium', 'is-large']
    }
  },
  directives: {
    focus: {
      inserted(elem) {
        elem.focus();
      },
    },
  },
  computed: {
    hasTitle() { return this.$slots.title; },
    bareTitle() {
      if (this.hasTitle) {
        return this.$slots.title[0].text
      }
      return false;
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
  mounted() {
    console.log(this.$slots);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drawer-enter,
.drawer-enter-from,
.drawer-leave-to {
  transform: translate3d(calc(85vw + 20px), 0, 0);
}

.drawer-enter-to {
  transform: translate3d(0px, 0, 0) !important;
}

.close-button {
  float: right;
  padding: 0.25em;
  cursor: pointer;
  border: none;
  
  background: transparent;
  color: inherit;
}

.close-button.is-default {
  fill: var(--gaveta-background, rgba(255, 255, 255, 0.851));
  background: var(--gaveta-color, rgba(32, 33, 36, 0.6));
  border-radius: 50%;
  margin: 0;

  width: 24px;
  height: 24px;
  line-height: inherit;
}

.screen {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: var(--gaveta-screen, rgba(16, 38, 56, 0.3));

  z-index: 1999;
}

.drawer {
  background: var(--gaveta-background, white);
  color: var(--gaveta-color, currentColor);

  box-sizing: border-box;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2000;
  height: 100vh;

  transition: transform 0.3s ease-in-out;
  overflow-x: scroll;
  padding: var(--gaveta-padding, 1.25em);
}
.drawer .gaveta-title {
  padding-bottom: .5em;
  border-bottom: 1px solid rgba(128, 128, 128, .5);
}

.drawer{
  box-shadow: -10px 0px 20px rgba(0, 0, 0, 0.25);
}

.drawer {
  width: 92vw;
}

@media screen and (min-width: 768px) {
  .drawer, .drawer.is-medium { width: 480px; }

  .drawer.is-large { width: 720px; }

  .drawer.is-small { width: 320px; }
  

  .drawer-enter,
  .drawer-enter-from,
  .drawer-leave-to {
    transform: translate3d(500px, 0, 0);
  }

  .drawer.is-large.drawer-enter,
  .drawer.is-large.drawer-enter-from,
  .drawer.is-large.drawer-leave-to {
    transform: translate3d(730px, 0, 0);
  }

  .drawer.is-small.drawer-enter,
  .drawer.is-small.drawer-enter-from,
  .drawer.is-small.drawer-leave-to {
    transform: translate3d(330px, 0, 0);
  }
}
</style>
