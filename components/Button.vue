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
    }
  },
  data () {
    return {
      classes: {
        'bg-amber-600': true,
        'flex-auto': true,
        'inline-block': true,
        shadow: true,
        'text-white': true,
        'rounded-md': true,
        'text-sm': true,
        'border-y': true,
        'border-transparent': true,
        'py-2': true,
        'font-semibold': true,
        'px-3': true,
        'hover:bg-amber-700': true,
        'focus:outline-none': true,
        'focus:ring-2': true,
        'focus:ring-offset-2': true,
        'focus:ring-sky-300': true
      }
    }
  }
}
</script>
