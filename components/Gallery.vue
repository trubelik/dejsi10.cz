<template>
  <div v-if="gallery.photos" class="mb-4 px-6 py-4 md:px-10 md:py-6 bg-white rounded-2xl">
    <h1 class="mb-4 text-xl sm:text-2xl tracking-tight text-slate-900 font-semibold">
      <template v-if="gallery.description">
        {{ gallery.description }}
      </template>
      <template v-else>
        Fotogalerie
      </template>
    </h1>
    <CoolLightBox
      :items="galleryPhotos"
      :index="index"
      @close="index = null"
    />

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-2 items-center content-center">
      <nuxt-img
        v-for="(image, imageIndex) in galleryPhotos"
        :key="imageIndex"
        :src="image"
        class="h-32 w-full object-cover rounded-xl cursor-pointer"
        sizes="sm:250px"
        format="webp"
        quality="70"
        loading="lazy"
        @click="index = imageIndex"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtGallery',
  props: {
    gallery: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      index: null
    }
  },
  computed: {
    galleryPhotos () {
      return this.gallery.photos.map((image) => {
        return image.url
      })
    }
  }
}
</script>
