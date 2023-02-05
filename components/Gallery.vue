<template>
  <div>
    there should be gallery
    <CoolLightBox
      :items="items"
      :index="index"
      @close="index = null"
    />

    <div class="images-wrapper">
      <div
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        class="image"
        :style="{ backgroundImage: 'url(' + image + ')' }"
        @click="index = imageIndex"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtGallery',
  data: function () {
    return {
      items: [
        'https://pix10.agoda.net/hotelImages/1199068/-1/09cb9a2780bf41ad1e8f8a3d2e074754.jpg?s=1024x768',
        'https://pix10.agoda.net/hotelImages/1199068/-1/09cb9a2780bf41ad1e8f8a3d2e074754.jpg?s=1024x768'
      ],
      index: null
    }
  }
}
</script>
