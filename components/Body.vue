<template>
  <div :class="classes">
    <section>
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: 'NuxtBody',
  props: {
    wide: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      classes: {
        'xl:max-w-screen-lg mx-auto max-w-screen-md': !this.wide,
        'xl:max-w-screen-xl mx-auto max-w-screen-lg': this.wide
      }
    }
  }
}
</script>
