<template>
  <div class="primary">
    <div class="banner secondary">
      <img src="/vuetify-logo.svg" class="imgbannerdaga" alt="" />
      <div class="center-btn">
        <v-btn color="primary" @click="openLogin" x-large class="rounded-xl"
          >Bắt đầu chơi</v-btn
        >
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {}
  },
  methods: {
    openLogin() {
      this.$store.commit('main_store/SET_LOGIN_DIALOG', true)
    },
  },
}
</script>

<style scoped>
.banner {
  height: 500px;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.imgbannerdaga {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.center-btn {
  position: absolute;
  top: 80%;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
