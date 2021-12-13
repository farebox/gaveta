<template>
  <span>
    <transition name="drawer" appear>
      <div v-if="active" class="drawer is-medium">
        <span
          class="close-button"
          @click="close"
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
        </span>
        <template v-if="$slots.title">
          <h3 class="gaveta-title"><slot name="title" /></h3>
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
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
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
  margin: 0.5em 0;
}

.close-button.is-default {
  fill: var(--gaveta-background, rgba(255, 255, 255, 0.851));
  background: var(--gaveta-color, rgba(32, 33, 36, 0.6));
  border-radius: 50%;
  width: 24px;
  height: 24px;
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
  padding-bottom: 0.5em;
  border-bottom: 1px solid #888;
}

.drawer.is-medium {
  width: 92vw;
  box-shadow: -10px 0px 20px rgba(0, 0, 0, 0.25);
}

@media screen and (min-width: 768px) {
  .drawer.is-medium {
    width: 480px;
  }
  .drawer-enter,
  .drawer-enter-from,
  .drawer-leave-to {
    transform: translate3d(500px, 0, 0);
  }
}
</style>
