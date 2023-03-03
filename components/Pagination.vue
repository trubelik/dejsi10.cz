<template>
  <div class="flex justify-center ">
    <div class="flex gap-1">
      <Button
        :disabled="pointer <= 1"
        :to="link + '/' + (pointer - 1 !== 1 ? pointer - 1 : '')"
      >
        <font-awesome-icon icon="chevron-left" />
        <span class="sr-only">Předchozí</span>
      </Button>
      <Button
        v-for="page in Math.ceil(total / perPage)"
        :key="'pagination_' + page"
        :to="link + (page !== 1 ? '/' + page : '')"
        :active="page === pointer"
      >
        {{ page }}
      </Button>
      <Button
        :disabled="pointer >= Math.ceil(total / perPage)"
        :to="link + '/' + (pointer + 1)"
      >
        <span class="sr-only">Další</span>
        <font-awesome-icon icon="chevron-right" />
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtPagination',
  props: {
    pointer: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      default: 5
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
