<template>
  <div class="xl:grid xl:grid-cols-3 xl:gap-4 mb-6">
    <div v-for="(download, index) in items" :key="name + '_download_' + index" class="p-3 pr-4 bg-white bg-white rounded-2xl flex mb-4 xl:mb-0">
      <div class="p-2 bg-gray-300 text-gray-600 rounded-md flex items-center h-12 w-12 place-content-center mr-3 shrink-0">
        <font-awesome-icon icon="download" />
      </div>
      <div class="flex flex-col">
        <template v-if="download.file">
          <a :href="download.file.url" class="font-semibold text-sky-600">{{ download.title }}</a>
        </template>
        <div v-else class="font-medium text-gray-600">
          {{ download.title }}
        </div>
        <p class="text-sm">
          {{ download.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtDownloads',
  props: {
    items: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: false,
      default: 'download-component'
    }
  }
}
</script>
