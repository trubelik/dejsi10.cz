<template>
  <Body>
    <nav class="py-5 px-2 flex flex-wrap items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold">
        Dejsi10
      </NuxtLink>
      <button type="button" class="inline-flex items-center p-2 text-gray-700 rounded-lg md:hidden hover:bg-gray-100 text-xl" @click="hide = !hide">
        <font-awesome-icon icon="bars" />
      </button>
      <div :class="{'hidden': hide, 'flex': !hide, 'main-navigation': true}">
        <NuxtLink to="/" class="main-page">
          Hlavní stránka
        </NuxtLink>
        <NuxtLink to="/team">
          Táborový tým
        </NuxtLink>
        <NuxtLink to="/photos">
          Fotografie
        </NuxtLink>
      </div>
    </nav>
  </Body>
</template>

<script>
export default {
  name: 'NuxtHeader',
  data () {
    return {
      hide: true
    }
  },
  watch: {
    $route (to, from) {
      if (to !== from) { this.hide = true }
    }
  }
}
</script>

<style>
  nav .main-navigation .nuxt-link-exact-active,
  nav .main-navigation .nuxt-link-active:not(.main-page) {
    @apply text-white bg-amber-600 font-semibold md:bg-transparent md:text-black;
  }

  nav .main-navigation {
    @apply w-full bg-white md:block md:w-auto flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:bg-transparent;
  }

  nav .main-navigation > * {
    @apply block py-2 pl-3 pr-4 text-gray-700 rounded md:inline-block md:border-0 md:p-0;
  }

  nav .main-navigation > *:not(.nuxt-link-active),
  nav .main-navigation > .main-page:not(.nuxt-link-exact-active) {
    @apply hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700;
  }
</style>
