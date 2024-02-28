<template>
  <div class="primary">
    <Anoucement />
    <Banner />
    <div class="pa-4">
      <div class="appwhite--text darkbg rounded-xl">
        <v-container>
          <div class="d-flex justify-center my-3">
            <img src="/vuetify-logo.svg" width="40" height="40" alt="" />
            <h3 class="mx-2">GAME HOT</h3>
            <img src="/vuetify-logo.svg" width="40" height="40" alt="" />
          </div>
          <div class="my-3 d-flex justify-center gamehotcon">
            <div
              v-for="(item, index) in titleGamehot"
              :key="index"
              class="mx-2 gamehots rounded-xl"
              :class="selectingHotgame == index ? 'secondary' : ''"
              @click="
                ;(selectingHotgame = index),
                  (listgame =
                    index + Math.floor(Math.random() * (15 - 8 + 1)) + 8)
              "
            >
              <img src="/vuetify-logo.svg" width="50" height="50" alt="" />
              <p>
                {{ item.title }}
              </p>
            </div>
          </div>
        </v-container>
        <v-container>
          <v-row>
            <v-col
              cols="6"
              md="2"
              sm="6"
              class="pa-0 mt-2 mb-2 px-2"
              v-for="i in listgame"
              :key="i"
            >
              <div
                class="card rounded-xl"
                style="height: 100px"
                @mouseover="isHover = true"
                @mouseleave="isHover = false"
              >
                <img src="/bc.png" alt="Card image" class="card-img" />
                <div class="card-overlay" v-if="isHover">
                  <v-btn rounded color="secondary" @click="openLogin"
                    >chơi</v-btn
                  >
                </div>
                <div class="card-title">
                  <h4>hello</h4>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <SearchBar title="Nổ hũ" />
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4" class="pa-2">
          <div
            class="card rounded-xl"
            style="height: 220px"
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
          >
            <img src="/BG.png" alt="Card image" class="card-img" />
            <div class="card-overlay" v-if="isHover">
              <v-btn rounded color="secondary" @click="openLogin">chơi</v-btn>
            </div>
            <div class="card-title py-2">
              <h4>hello</h4>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="8" lg="8" class="pa-0">
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="3"
                sm="6"
                class="pa-0 mt-2 mb-2 px-2"
                v-for="i in 8"
                :key="i"
              >
                <div
                  class="card rounded-xl"
                  style="height: 100px"
                  @mouseover="isHover = true"
                  @mouseleave="isHover = false"
                >
                  <img src="/bc.png" alt="Card image" class="card-img" />
                  <div class="card-overlay" v-if="isHover">
                    <v-btn rounded color="secondary" @click="openLogin"
                      >chơi</v-btn
                    >
                  </div>
                  <div class="card-title">
                    <h4>hello</h4>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <SearchBar title="Sòng bạc" />
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4" class="pa-2">
          <div
            class="card rounded-xl"
            style="height: 220px"
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
          >
            <img src="/BG.png" alt="Card image" class="card-img" />
            <div class="card-overlay" v-if="isHover">
              <v-btn rounded color="secondary" @click="openLogin">chơi</v-btn>
            </div>
            <div class="card-title py-2">
              <h4>hello</h4>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="8" lg="8" class="pa-0">
          <v-container>
            <v-row>
              <v-col
                cols="6"
                md="3"
                sm="6"
                class="pa-0 mt-2 mb-2 px-2"
                v-for="i in 8"
                :key="i"
              >
                <div
                  class="card rounded-xl"
                  style="height: 100px"
                  @mouseover="isHover = true"
                  @mouseleave="isHover = false"
                >
                  <img src="/bc.png" alt="Card image" class="card-img" />
                  <div class="card-overlay" v-if="isHover">
                    <v-btn rounded color="secondary" @click="openLogin"
                      >chơi</v-btn
                    >
                  </div>
                  <div class="card-title">
                    <h4>hello</h4>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
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
      selectingHotgame: 0,
      isHover: false,
      listgame: 8,
      titleGamehot: [
        {
          img: '',
          title: 'Sòng bạc',
        },
        {
          img: '',
          title: 'Trò chơi đánh xẻng',
        },
        {
          img: '',
          title: 'Câu cá',
        },
        {
          img: '',
          title: 'Thẻ',
        },
      ],
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
.gamehotcon {
  display: flex;
  padding: 10px 0;
  overflow-x: auto;
  width: 100%;
}
.gamehots {
  box-shadow: 0 2px 4px 1px #ddb72c;
  text-align: center;
  min-width: 110px;
  max-width: 120px;
  padding: 10px;
  height: 140;
}
.gamehots:hover {
  transform: scale(1.1);
  background-color: #ddb72c;
}
.gamehots img {
  object-fit: cover;
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
  .gamehotcon {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    /* Adjust the minmax and other properties as needed */
  }
}
</style>
