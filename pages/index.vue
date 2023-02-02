<template>
  <Layout>
    <Body>
      <section>
        <div class="my-16 text-center">
          <h1 class="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
            Všechny tábory
          </h1>
          <p class="text-lg text-slate-700">
            Přečtěte si o nadcházejích i minulých táborech
          </p>
        </div>
        <div class="space-y-8 lg:divide-y lg:divide-gray-100">
          <div v-for="article in articles" :key="article.slug" class="mb-8 p-7 sm:flex lg:items-start group bg-white rounded-2xl">
            <div class="flex-shrink-0 mb-7 sm:mb-0 sm:mr-7">
              <img class="w-full rounded-md h-32 lg:w-32 object-cover" :src="article.hero.url" alt="text">
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
              <div class="mt-5 flex items-center justify-center">
                <div class="mr-auto">
                  <ClientOnly>
                    <Tag>
                      <font-awesome-icon icon="pencil" class="mr-2" />
                      {{ new Date(article.createdAt).toLocaleDateString('cs-CZ') }}
                    </Tag>
                    <Tag variant="warning">
                      <font-awesome-icon icon="calendar-week" class="mr-2" />
                      {{ new Date(article.begins).toLocaleDateString('cs-CZ') }} - {{ new Date(article.ends).toLocaleDateString('cs-CZ') }}
                    </Tag>
                  </ClientOnly>
                </div>
                <div class="self-end">
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
    </Body>
  </Layout>
</template>

<script>
import { gql } from 'graphql-request'
export default {
  name: 'IndexPage',
  async asyncData ({ $hygraph }) {
    const { articles } = await $hygraph.request(
      gql`
        {
          articles(orderBy: begins_ASC) {
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
