<template>
  <div>
    <div class="my-16 text-center">
      <h1 class="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
        {{ teamPage.title }}
      </h1>
      <p class="text-lg text-slate-700">
        {{ teamPage.description }}
      </p>
    </div>
    <div class="grid md:grid-cols-2 gap-x-8 gap-y-10 items-center">
      <div
        v-for="(teamMember, index) in teamPage.teamMembers"
        :key="'member_' + index"
        class="bg-white rounded-2xl p-6 md:px-10 md:py-8 mt-40 relative"
      >
        <div class="-top-40 left-0 w-full absolute">
          <nuxt-img
            class="rounded-xl mx-auto drop-shadow-xl max-w-full"
            :src="teamMember.photo.url"
            loading="lazy"
            height="200"
            format="webp"
          />
        </div>
        <h1 class="mt-8 mb-3 text-xl sm:text-2xl tracking-tight text-slate-900 font-extrabold">
          {{ teamMember.name }}
        </h1>
        <p>
          {{ teamMember.description }}
        </p>
        <div v-if="teamMember.motto" class="text-center mt-3">
          <div>
            <font-awesome-icon icon="quote-left" class="text-4xl text-amber-200" />
          </div>
          <blockquote class="text-xl italic">
            "{{ teamMember.motto }}"
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request'
export default {
  name: 'IndexPage',
  async asyncData ({ $hygraph, redirect }) {
    const { teamPages } = await $hygraph.request(
      gql`
        {
          teamPages(first: 1) {
            teamMembers(first: 30) {
              ... on TeamMember {
                name
                motto
                description
                photo {
                  url
                }
              }
            }
            title
            description
          }
        }
      `
    )

    if (teamPages.length === 0) { redirect('/error') }

    return { teamPage: teamPages[0] }
  }
}
</script>
