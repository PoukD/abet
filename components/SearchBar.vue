<template>
  <div class="pa-4">
    <div class="d-flex justify-space-between">
      <div class="d-flex justify-center align-center appwhite--text">
        <img :src="img" width="30" height="30" alt="" class="mr-3" />
        <h3>{{ title }}</h3>
      </div>
      <div v-show="showSearch">
        <v-btn rounded color="secondary" @click="openSearchDialog">
          <div class="d-flex justify-center align-center">
            <v-icon>mdi-magnify</v-icon>
            <span>Tìm kiếm</span>
          </div>
        </v-btn>
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
    showSearch: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    openSearchDialog() {
      this.$store.commit('main_store/SET_SEARCH_DIALOG', true)
    },
  },
}
</script>
