<template>
  <div>
    <CoolLightBox
      :items="galleryPosterLight"
      :index="showPoster ? 0 : null"
      @close="showPoster = false"
    />
    <CoolLightBox
      :items="galleryDiaryLight"
      :index="showDiary ? 0 : null"
      @close="showDiary = false"
    />
    <div class="grid grid-cols-1 lg:grid-rows-1 place-items-center mb-8 lg:mb-4">
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
              <p class="pb-6">
                {{ heroPage.description }}
              </p>
              <div>
                <Button class="text-center mr-2" size="big" variant="primary" @click.native="showPoster = true">
                  Táborový leták
                </Button>
                <Button
                  class="text-center"
                  :to="'/blog/' + heroPage.summerCamp.slug"
                  variant="secondary"
                  size="big"
                >
                  Aktuality
                </Button>
              </div>
            </div>
            <div class="hidden lg:block" />
          </div>
        </Body>
      </div>
    </div>
    <Body>
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10 justify-items-center">
        <div class="col-span-1 bg-white rounded-2xl overflow-hidden self-center max-w-md order-2 md:order-1 mx-5 md:mx-0">
          <div class="relative pb-5">
            <nuxt-img
              :src="heroPage.summerCamp.hero.url"
              class="w-full"
              sizes="sm:500px"
              format="webp"
              quality="100"
            />
            <div class="bg-gradient-to-t from-white to-transparent absolute bottom-0 h-full w-full mb-5" />
            <Heading variant="small" class="mb-3 mr-5 ml-5 absolute bottom-0">
              Pořádáme...
            </Heading>
            <Tag class="mb-2 absolute top-0 m-3 opacity-80">
              <font-awesome-icon icon="pencil" class="mr-2" />
              <b class="mr-2">Aktualizováno</b>
              {{ dateUpdated }}
            </Tag>
          </div>
          <div class="px-5">
            <Heading variant="xs" class="mb-1">
              <NuxtLink :to="'/blog/' + heroPage.summerCamp.slug">
                {{ heroPage.summerCamp.title }}
              </NuxtLink>
            </Heading>
            <p class="pb-6">
              <font-awesome-icon icon="calendar-week" class="mr-1 text-amber-500" />
              {{ dateInterval }}
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 pb-4 gap-3 xl:gap-5">
              <Button class="text-center" variant="primary" @click.native="showPoster = true">
                Leták
              </Button>
              <Button
                class="text-center"
                :to="'/blog/' + heroPage.summerCamp.slug"
                variant="secondary"
              >
                Číst více
                <font-awesome-icon icon="chevron-right" class="ml-1" />
              </Button>
            </div>
          </div>
        </div>
        <div class="md:col-span-2 order-1 md:order-2">
          <div class="px-5 md:px-0">
            <Heading variant="normal" class="mb-3 lg:mt-4">
              O spolku
            </Heading>
            <ClientOnly>
              <p class="description-body mb-8" v-html="heroPage.about.html" />
            </ClientOnly>
          </div>
          <div class="px-5 py-3 mx-5 md:mx-0 md:flex items-center gap-4 mb-8 m-auto border-l-2 border-amber-700">
            <span class="pb-4 md:pb-0 block md:inline">{{ heroPage.summerCampDiary }}</span>
            <Button class="text-center whitespace-nowrap" variant="primary" @click.native="showDiary = true">
              <font-awesome-icon icon="book-open-reader" class="mr-1 text-amber-600" />
              Táborový deník
            </Button>
          </div>
        </div>
      </div>
    </Body>
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
import { gql } from 'graphql-request'
export default {
  name: 'IndexPage',
  async asyncData ({ $hygraph }) {
    const { heroPages } = await $hygraph.request(
      gql`
        {
          heroPages(first: 1) {
            about {
              html
            }
            description
            poster {
              url
            }
            summerCamp {
              slug
              title
              begins
              ends
              updatedAt
              hero {
                url
              }
            }
            summerCampDiary
            summerCampDiaryLink {
              url
            }
          }
        }
      `
    )
    return { heroPage: heroPages[0] }
  },
  data () {
    return {
      showPoster: false,
      showDiary: false
    }
  },
  computed: {
    dateInterval () {
      const begin = new Date(this.heroPage.summerCamp.begins).toLocaleDateString('cs-CZ')
      const end = new Date(this.heroPage.summerCamp.ends).toLocaleDateString('cs-CZ')
      return begin + ' - ' + end
    },
    dateUpdated () {
      return new Date(this.heroPage.summerCamp.updatedAt).toLocaleDateString('cs-CZ')
    },
    galleryPosterLight () {
      return [
        this.$img(this.heroPage.poster.url, {
          width: 1280,
          quality: 70,
          format: 'webp'
        })
      ]
    },
    galleryDiaryLight () {
      return [
        this.$img(this.heroPage.summerCampDiaryLink.url, {
          width: 1280,
          quality: 70,
          format: 'webp'
        })
      ]
    }
  },
  watch: {
    showPoster (val) {
      if (val) { this.showDiary = false }
    },
    showDiary (val) {
      if (val) { this.showPoster = false }
    }
  }
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

  .description-body > * {
    @apply my-6;
  }

  .description-body a {
    @apply text-amber-600 font-semibold;
  }

  .description-body a:hover {
    @apply underline text-amber-500;
  }

  .description-body b {
    @apply font-semibold;
  }
</style>
