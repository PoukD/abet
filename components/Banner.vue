<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="banner secondary rounded-xl">
            <img :src="img" class="imgbanner" alt="" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: '/nohu/banner.png',
    },
  },
}
</script>
<style scoped>
.banner {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.imgbanner {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>
