<template>
  <div class="p-7 pb-5 lg:flex lg:items-start group bg-white rounded-2xl">
    <div class="flex-shrink-0 mb-7 lg:mb-0 lg:mr-7 max-w-full">
      <nuxt-img
        :src="article.hero.url"
        class="w-full rounded-md h-32 lg:w-32 object-cover"
        sizes="sm:450px"
        format="webp"
        quality="100"
      />
    </div>
    <div>
      <p class="leading-6 tracking-tight">
        <NuxtLink :to="'/blog/' + article.slug" class="text-lg font-semibold">
          {{ article.title }}
        </NuxtLink>
      </p>
      <p class="mt-2 text-base text-gray-700 limit-words">
        {{ article.shortDescription }}
      </p>
      <div class="mt-5 sm:flex items-center justify-center">
        <div class="mr-auto">
          <ClientOnly>
            <Tag v-if="updatedAvailable" class="mb-2 sm:mb-0">
              <font-awesome-icon icon="pencil" class="mr-2" />
              <b class="mr-2">Aktualizováno</b>
              {{ dateUpdated }}
            </Tag>
            <Tag variant="warning" class="mb-4 sm:mb-0">
              <font-awesome-icon icon="calendar-week" class="mr-2" />
              {{ dateInterval }}
            </Tag>
          </ClientOnly>
        </div>
        <div class="self-end text-right">
          <Button :to="'/blog/' + article.slug" class="self-end" variant="secondary">
            Číst více
            <font-awesome-icon icon="chevron-right" class="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtSingleArticle',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateInterval () {
      const begin = new Date(this.article.begins).toLocaleDateString('cs-CZ')
      const end = new Date(this.article.ends).toLocaleDateString('cs-CZ')
      return begin + ' - ' + end
    },
    updatedAvailable () {
      const updated = new Date(this.article.updatedAt)
      const end = new Date(this.article.ends)
      return end.getFullYear() >= updated.getFullYear()
    },
    dateUpdated () {
      return new Date(this.article.updatedAt).toLocaleDateString('cs-CZ')
    }
  }
}
</script>

<style>
  .limit-words {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
</style>
