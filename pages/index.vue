<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-rows-1 place-items-center">
      <!-- bottom layer -->
      <div class="cst-place-first-col order-2 lg:order-none">
        <Body :wide="true">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 justify-center">
            <div class="hidden lg:block" />
            <div class="grid grid-cols-1 grid-rows-1 w-[34rem] max-w-full lg:w-auto">
              <div class="pr-14 sm:pr-20 lg:pr-36 pt-6 sm:pt-10 lg:pt-16 pb-8 sm:pb-12 lg:pb-20 cst-place-first-col-img">
                <img src="/hero01.jpg" class="rounded-2xl shadow-lg">
              </div>
              <div class="grid grid-cols-[1fr_35%] cst-place-first-col-img">
                <img src="/hero02.jpg" class="rounded-2xl cst-white-shadow" style="grid-area: 1 / 2 / 1 / 2;">
              </div>
              <div class="grid grid-cols-[1fr_22%_10%] items-end cst-place-first-col-img">
                <img src="/hero03.jpg" class="rounded-2xl cst-white-shadow-up rotate-3" style="grid-area: 1 / 2 / 1 / 2;">
              </div>
            </div>
          </div>
        </Body>
      </div>
      <!-- top layer -->
      <div class="cst-place-first-col order-1 lg:order-none">
        <Body>
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
            <div class="px-5 py-8 lg:py-16">
              <Heading variant="small" class="mb-2">
                Letní dětské tábory
              </Heading>
              <Heading variant="big" class="mb-8">
                Dej si deset
              </Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni excepturi optio error asperiores voluptatibus, beatae porro culpa, quis facilis cupiditate, quasi modi eveniet libero omnis quidem dolor autem fuga.
              </p>
            </div>
            <div class="hidden lg:block" />
          </div>
        </Body>
      </div>
    </div>
    <!-- <Body>
      <div class="my-16 text-center">
        <Heading class="mb-4">
          Nejnovější tábory
        </Heading>
        <p class="text-lg text-slate-700">
          Přečtěte si o více táborech v sekci <nuxt-link class="underline" to="/articles">
            Všechny tábory
          </nuxt-link>
        </p>
      </div>
      <div class="space-y-4 lg:divide-y lg:divide-gray-100">
        <SingleArticle v-for="article in articles" :key="'article_' + article.slug" :article="article" />
      </div>
    </Body> -->
  </div>
</template>

<script>
// import { gql } from 'graphql-request'
export default {
  name: 'IndexPage'
  // async asyncData ({ $hygraph }) {
  //   const { articles } = await $hygraph.request(
  //     gql`
  //       {
  //         articles(first: 3, orderBy: begins_DESC) {
  //           slug
  //           title
  //           shortDescription
  //           hero {
  //             url
  //           }
  //           updatedAt
  //           begins
  //           ends
  //         }
  //       }
  //     `
  //   )
  //   return { articles }
  // }
}
</script>

<style>
  @media only screen and (min-width: 1024px) {
    .cst-place-first-col {
      @apply justify-self-stretch;
      grid-area: 1 / 1 / 1 / 1;
    }
  }

  .cst-place-first-col-img {
    @apply justify-self-stretch;
    grid-area: 1 / 1 / 1 / 1;
  }

  .cst-white-shadow {
    box-shadow: -9px 8px 16px -8px rgba(20,20,20,0.8),
                -20px 10px 25px 15px rgb(237, 233, 222,0.7);
  }

  .cst-white-shadow-up {
    box-shadow: -9px -8px 16px -8px rgba(20,20,20,0.7),
                -15px -6px 40px 15px rgb(237, 233, 222,0.4);
  }
</style>
