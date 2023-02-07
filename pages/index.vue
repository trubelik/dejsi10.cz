<template>
  <section>
    <div class="my-16 text-center">
      <h1 class="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
        Všechny tábory
      </h1>
      <p class="text-lg text-slate-700">
        Přečtěte si o nadcházejících i minulých táborech
      </p>
    </div>
    <div class="space-y-8 lg:divide-y lg:divide-gray-100">
      <div v-for="article in articles" :key="article.slug" class="mb-8 p-7 lg:flex lg:items-start group bg-white rounded-2xl">
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
                <Tag class="mb-2 sm:mb-0">
                  <font-awesome-icon icon="pencil" class="mr-2" />
                  {{ new Date(article.createdAt).toLocaleDateString('cs-CZ') }}
                </Tag>
                <Tag variant="warning" class="mb-4 sm:mb-0">
                  <font-awesome-icon icon="calendar-week" class="mr-2" />
                  {{ new Date(article.begins).toLocaleDateString('cs-CZ') }} - {{ new Date(article.ends).toLocaleDateString('cs-CZ') }}
                </Tag>
              </ClientOnly>
            </div>
            <div class="self-end text-right">
              <Button :to="'/blog/' + article.slug" class="self-end">
                Číst více
                <font-awesome-icon icon="chevron-right" class="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gql } from 'graphql-request'
export default {
  name: 'IndexPage',
  async asyncData ({ $hygraph }) {
    const { articles } = await $hygraph.request(
      gql`
        {
          articles(orderBy: begins_DESC) {
            slug
            title
            shortDescription
            hero {
              url
            }
            createdAt
            begins
            ends
          }
        }
      `
    )
    return { articles }
  }
}
</script>
