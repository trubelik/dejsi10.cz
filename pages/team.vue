<template>
  <Body>
    <div class="my-16 text-center">
      <Heading class="mb-4">
        {{ teamPage.title }}
      </Heading>
      <p class="text-lg text-slate-700">
        {{ teamPage.description }}
      </p>
    </div>
    <div class="grid md:grid-cols-2 gap-x-8 gap-y-10 items-center">
      <div
        v-for="(teamMember, index) in teamPage.teamMembers"
        :key="'member_' + index"
        class="relative pt-40"
      >
        <div class="top-0 left-0 w-full absolute" style="height: 200px;">
          <nuxt-img
            class="rounded-xl mx-auto shadow-xl max-w-full max-h-full"
            :src="teamMember.photo.url"
            sizes="sm:300px"
            loading="lazy"
            format="webp"
          />
        </div>
        <div class="bg-white rounded-2xl p-6 md:px-10 md:py-8">
          <Heading variant="small" class="mt-8 mb-3">
            {{ teamMember.name }}
          </Heading>
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
  </Body>
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
