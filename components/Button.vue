<template>
  <NuxtLink :to="to" :class="classes">
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  name: 'NuxtButton',
  props: {
    to: {
      required: true,
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'primary'
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      base: {
        'flex-auto': true,
        'inline-block': true,
        shadow: true,
        'rounded-md': true,
        'text-sm': true,
        'border-y': true,
        'border-transparent': true,
        'py-2': true,
        'font-semibold': true,
        'px-3': true,
        'focus:outline-none': true,
        'pointer-events-none': this.disabled,
        'opacity-50': this.disabled
      },
      primary: {
        'bg-white': true,
        'text-black': true,
        'hover:bg-gray-50': true,
        'focus:ring-sky-400': true,
        'focus:ring-2': true,
        'bg-gray-100': this.active,
        'text-gray-400': this.disabled
      },
      secondary: {
        'bg-amber-600': true,
        'text-white': true,
        'hover:bg-amber-700': true,
        'bg-amber-700': this.active,
        'bg-gray-100': this.disabled,
        'text-gray-400': this.disabled
      }
    }
  },
  computed: {
    classes () {
      return {
        ...this.base,
        ...this[this.variant]
      }
    }
  }
}
</script>
