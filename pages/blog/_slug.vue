<template>
  <Layout>
    <Body>
      <div class="md:flex md:items-center">
        <div class="my-5 md:my-16 text-left mr-7 ml-7 md:mr-16 md:ml-0">
          <h1 class="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
            {{ article.title }}
          </h1>
          <Tag>
            <font-awesome-icon icon="pencil" class="mr-2" />
            <b class="mr-2">Vytvořeno</b> {{ new Date(article.createdAt).toLocaleDateString('cs-CZ') }}
          </Tag>
          <p class="mt-6 text-lg text-slate-700">
            {{ article.shortDescription }}
          </p>
        </div>
        <div class="md:flex-shrink-0 w-10/12 sm:w-7/12 m-auto md:w-5/12 p-7 md:p-0">
          <img class="w-full rounded-2xl object-cover" :src="article.hero.url" alt="text">
        </div>
      </div>
      <div class="mb-4 flex">
        <div class="px-5 py-3 bg-green-50 border border-green-200 text-green-800 rounded-2xl mr-4">
          <font-awesome-icon icon="tree" class="mr-2" />
          <b class="mr-2">Začátek tábora:</b> {{ new Date(article.begins).toLocaleDateString('cs-CZ') }}
        </div>
        <div class="px-5 py-3 bg-amber-50 rounded-2xl inline-block border border-amber-200 text-amber-800">
          <font-awesome-icon icon="house" class="mr-2" />
          <b class="mr-2">Konec tábora:</b> {{ new Date(article.ends).toLocaleDateString('cs-CZ') }}
        </div>
      </div>
      <div class="blog-body mb-4 px-6 py-2 md:px-16 md:py-6 bg-white rounded-2xl" v-html="article.body.html" />
      <Downloads :items="article.downloads" />
      <Gallery v-if="article.photoArchive" :gallery="article.photoArchive" />
    </Body>
  </Layout>
</template>

<script>
import { gql } from 'graphql-request'
export default {
  name: 'BlogPage',
  async asyncData ({ $hygraph, params, redirect }) {
    try {
      const { slug } = params
      const { article } = await $hygraph.request(
        gql`
          query getArticle($slug: String) {
            article(where: { slug: $slug }) {
              begins
              createdAt
              ends
              title
              hero {
                url
              }
              body {
                html
              }
              shortDescription
              downloads {
                title
                description
                file {
                  url
                }
              }
              photoArchive {
                photos {
                  url
                }
              }
            }
          }
        `,
        { slug }
      )

      if (article === null) {
        // Replace by 404 - TODO
        redirect('/')
      }

      return { article, slug }
    } catch (error) {
      // Replace by 500 - TODO
      redirect('/')
    }
  }
}
</script>
