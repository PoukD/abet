<template>
  <div>
    <v-dialog
      v-model="searchDialog"
      :fullscreen="mobileDevice"
      persistent
      max-width="800"
    >
      <v-card align="center" class="rounded-xl pb-3" color="primary">
        <v-icon
          color="appwhite"
          size="30"
          style="position: absolute; right: 10px; top: 5px"
          @click="closeDialog"
        >
          mdi-close
        </v-icon>
        <v-container class="myinput appwhite--text px-8">
          <h2 class="appwhite--text mt-2 mb-3">Tìm kiếm</h2>
          <v-text-field dense class="rounded-lg" color="white" outlined>
            <v-icon slot="prepend-inner" color="appwhite"> mdi-magnify </v-icon>
          </v-text-field>
        </v-container>
        <v-container class="px-8">
          <v-row>
            <v-col
              cols="6"
              md="3"
              sm="6"
              class="pa-0 mt-2 mb-2 px-2"
              v-for="i in 12"
              :key="i"
            >
              <div
                class="card rounded-xl"
                style="height: 100px"
                @mouseover="isHover = true"
                @mouseleave="isHover = false"
              >
                <img
                  :src="'/nohu/' + listImg[i - 1] + '.png'"
                  alt="Card image"
                  class="card-img"
                />
                <div class="card-overlay" v-if="isHover">
                  <v-btn rounded color="secondary" @click="openLogin"
                    >chơi</v-btn
                  >
                </div>
                <div class="card-title" style="text-align: left">
                  <h4>Game</h4>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="7"
              md="7"
              lg="7"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
              class="appwhite--text"
            >
              Tổng số mặt hàng : 45
            </v-col>
            <v-col
              cols="12"
              sm="5"
              md="5"
              lg="5"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <v-pagination
                v-model="page"
                color="secondary"
                :length="4"
              ></v-pagination>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      page: 1,
      listImg: [],
      isHover: false,
    }
  },
  mounted() {
    for (let index = 0; index < 32; index++) {
      this.listImg.push(Math.floor(Math.random() * (12 - 1) + 1))
    }
  },
  computed: {
    ...mapState('main_store', ['searchDialog', 'mobileDevice']),
  },
  methods: {
    closeDialog() {
      this.$store.commit('main_store/SET_SEARCH_DIALOG', false)
    },
    openLogin() {
      this.$store.commit('main_store/SET_LOGIN_DIALOG', true)
      this.$store.commit('main_store/SET_SEARCH_DIALOG', false)
    },
  },
}
</script>
<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: white;
}

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
