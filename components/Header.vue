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
