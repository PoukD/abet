<template>
  <div class="primary">
    <Anoucement />
    <Banner img="/keno/banner.png" />
    <SearchBar title="KENO" img="/sidemenu/keno.png" />
    <TitleCard title="KENO" img="/keno/keno.webp" />
    <v-container>
      <v-row>
        <v-col
          cols="6"
          md="3"
          sm="6"
          class="pa-0 mt-2 mb-2 px-2"
          v-for="i in 4"
          :key="i"
        >
          <div
            class="card rounded-xl"
            style="height: 100px"
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
          >
            <img
              :src="'/keno/' + i + '.png'"
              alt="Card image"
              class="card-img"
            />
            <div class="card-overlay" v-if="isHover">
              <v-btn rounded color="secondary" @click="openLogin">chơi</v-btn>
            </div>
            <div class="card-title">
              <h4>Game</h4>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <MyFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      isHover: false,
    }
  },
  methods: {
    openLogin() {
      this.$store.commit('main_store/SET_LOGIN_DIALOG', true)
    },
  },
}
</script>

<style scoped>
.card-title {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  padding-left: 10px;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 20px;
}

.card {
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 #ddb72c;
  height: 110px;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .card-overlay {
  opacity: 1;
}

.btn {
  padding: 10px 20px;
  background-color: #ddb72c;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
.toplist {
  display: block;
}
@media (min-width: 1000px) {
  .toplist {
    display: flex;
  }
}
@media (max-width: 768px) {
  .card-container {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
</style>
