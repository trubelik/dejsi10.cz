<template>
  <section>
    <div class="my-16 text-center">
      <h1 class="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
        Poslední tábory
      </h1>
      <p class="text-lg text-slate-700">
        Přečtěte si o více táborech v sekci <nuxt-link class="underline" to="/articles">
          Všechny tábory
        </nuxt-link>
      </p>
    </div>
    <div class="space-y-4 lg:divide-y lg:divide-gray-100">
      <SingleArticle v-for="article in articles" :key="'article_' + article.slug" :article="article" />
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
          articles(first: 3, orderBy: begins_DESC) {
            slug
            title
            shortDescription
            hero {
              url
            }
            updatedAt
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

<style>
  .limit-words {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
</style>
