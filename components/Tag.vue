<template>
  <div
    :class="classes"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NuxtTag',
  props: {
    variant: {
      default: 'base',
      type: String,
      validator (value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger', 'base'].includes(value)
      }
    }
  },
  data () {
    return {
      classes: {
        'mr-2': true,
        'text-xs': true,
        'inline-flex': true,
        'items-center': true,
        'leading-sm': true,
        'px-3': true,
        'py-1': true,
        'rounded-full': true,
        'bg-white': this.variant === 'base',
        border: this.variant === 'base',
        'text-gray-700': this.variant === 'base',
        'bg-green-200': this.variant === 'success',
        'text-green-700': this.variant === 'success',
        'bg-orange-200': this.variant === 'warning',
        'text-orange-700': this.variant === 'warning',
        'bg-red-200': this.variant === 'danger',
        'text-red-700': this.variant === 'danger'
      }
    }
  }
}
</script>
