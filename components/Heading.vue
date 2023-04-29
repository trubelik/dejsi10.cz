<template>
  <h1 :class="classes">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'NuxtHeading',
  props: {
    variant: {
      type: String,
      default: 'normal',
      validator (value) {
        // The value must match one of these strings
        return ['normal', 'big', 'small', 'xs'].includes(value)
      }
    }
  },
  data () {
    return {
      classes: {
        'text-3xl': this.variant === 'normal',
        'sm:text-4xl': this.variant === 'normal',
        'tracking-tight': true,
        'text-slate-900': true,
        'font-extrabold': true,
        'text-4xl': this.variant === 'big',
        'sm:text-5xl': this.variant === 'big',
        'text-xl': this.variant === 'small',
        'sm:text-2xl': this.variant === 'small',
        'text-md': this.variant === 'xs',
        'sm:text-lg': this.variant === 'xs',
        'font-semibold': this.variant === 'xs'
      }
    }
  }
}
</script>
