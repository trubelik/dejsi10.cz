<template>
  <div>
    <div class="my-16 text-center">
      <h1 class="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
        Fotografie
      </h1>
      <p class="text-lg text-slate-700">
        Galerie fotografií z našich táborů
      </p>
    </div>
    <Gallery v-for="(edge, index) in photoArchivesConnection.edges" :key="'gallery_' + index" :gallery="edge.node" />
    <div class="mb-4 grid grid-cols-2">
      <div>
        <Button
          v-if="photoArchivesConnection.pageInfo.hasPreviousPage"
          :to="'/photos' + (pointer !== 1 ? '/' + (pointer - 1) : '')"
        >
          Předchozí
        </Button>
      </div>
      <div class="text-right">
        <Button
          v-if="photoArchivesConnection.pageInfo.hasNextPage"
          :to="'/photos/' + (pointer + 1)"
        >
          Další
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request'
export default {
  name: 'PhotosPage',
  async asyncData ({ $hygraph, params, redirect }) {
    const { page } = params
    const skip = page ? (page * 5) : 0
    const pointer = parseInt(page) || 0
    try {
      const { photoArchivesConnection } = await $hygraph.request(
        gql`
          query getArticle($skip: Int) {
            photoArchivesConnection(first: 5, skip: $skip, orderBy: year_DESC) {
              edges {
                node {
                  description
                  photos {
                    url
                  }
                  article {
                    title
                    slug
                  }
                }
              }
              pageInfo {
                hasPreviousPage
                hasNextPage
              }
            }
          }
        `,
        { skip }
      )

      if (!photoArchivesConnection.edges || photoArchivesConnection.edges.length === 0) {
        redirect('/photos')
      }

      return { photoArchivesConnection, pointer }
    } catch (error) {
      redirect('/error')
    }
  }
}
</script>
