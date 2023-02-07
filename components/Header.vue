<template>
  <Body>
    <div class="py-5 px-2 flex">
      <NuxtLink to="/" class="text-xl font-bold">
        Dejsi10
      </NuxtLink>
      <nav class="ml-auto">
        <NuxtLink to="/">
          Hlavní stránka
        </NuxtLink>
        <NuxtLink to="/photos">
          Fotografie
        </NuxtLink>
      </nav>
    </div>
  </Body>
</template>

<script>
export default {
  name: 'NuxtHeader'
}
</script>
