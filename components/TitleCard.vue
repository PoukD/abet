<template>
  <div class="pa-4">
    <div
      class="rounded-xl appwhite--text py-4 px-6 d-flex justify-space-between"
      style="background-color: rgba(0, 0, 0, 0.35)"
    >
      <div class="d-flex">
        <img :src="img" alt="Card image" width="50" height="50" />
        <div class="ml-4" style="display: flex; align-items: center">
          <p class="ma-0" style="font-size: 30px">{{ title }}</p>
        </div>
      </div>
      <div v-if="showEndImg">
        <img :src="endImg" alt="Card image" width="50" height="50" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Welcome',
    },
    img: {
      type: String,
      default: ' /vuetify-logo.svg',
    },
    showEndImg: {
      type: Boolean,
      default: false,
    },
    endImg: {
      type: String,
      default: ' /vuetify-logo.svg',
    },
  },
}
</script>
<style>
.position-relative {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Adjust opacity here */
  z-index: 1; /* Ensure the overlay is above the content */
}
</style>
