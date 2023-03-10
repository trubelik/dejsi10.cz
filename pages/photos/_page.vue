<template>
  <Body>
    <div class="my-16 text-center">
      <Heading class="mb-4">
        Fotografie
      </Heading>
      <p class="text-lg text-slate-700">
        Galerie fotografií z našich táborů
      </p>
    </div>
    <Pagination class="mb-4" :total="photoArchivesConnection.aggregate.count" :pointer="pointer" link="/photos" />
    <Gallery v-for="(edge, index) in photoArchivesConnection.edges" :key="'gallery_' + index" :gallery="edge.node" />
    <Pagination :total="photoArchivesConnection.aggregate.count" :pointer="pointer" link="/photos" />
  </Body>
</template>

<script>
import { gql } from 'graphql-request'
export default {
  name: 'PhotosPage',
  async asyncData ({ $hygraph, params, redirect }) {
    const { page } = params
    const pointer = parseInt(page) || 1
    const skip = pointer !== 1 ? ((pointer - 1) * 5) : 0
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
              aggregate {
                count
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
