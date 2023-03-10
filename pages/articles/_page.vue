<template>
  <Body>
    <section>
      <div class="my-16 text-center">
        <Heading class="mb-4">
          Všechny tábory
        </Heading>
        <p class="text-lg text-slate-700">
          Přečtěte si o nadcházejících i minulých táborech
        </p>
      </div>
      <Pagination class="mb-4" :total="articlesConnection.aggregate.count" :pointer="pointer" link="/articles" />
      <div class="mb-4 space-y-4 lg:divide-y lg:divide-gray-100">
        <SingleArticle v-for="article in articlesConnection.edges" :key="'article_' + article.node.slug" :article="article.node" />
      </div>
      <Pagination :total="articlesConnection.aggregate.count" :pointer="pointer" link="/articles" />
    </section>
  </Body>
</template>

<script>
import { gql } from 'graphql-request'
export default {
  name: 'IndexPage',
  async asyncData ({ $hygraph, params, redirect }) {
    const { page } = params
    const pointer = parseInt(page) || 1
    const skip = pointer !== 1 ? ((pointer - 1) * 5) : 0

    try {
      const { articlesConnection } = await $hygraph.request(
        gql`
          query getArticle($skip: Int) {
            articlesConnection(first: 5, skip: $skip, orderBy: begins_DESC) {
              edges {
                node {
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

      if (!articlesConnection.edges || articlesConnection.edges.length === 0) {
        redirect('/articles')
      }

      return { articlesConnection, pointer }
    } catch (error) {
      redirect('/error')
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
