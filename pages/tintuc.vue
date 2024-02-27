<template>
  <div class="primary">
    <SearchBar title="TIN TỨC" :showSearch="false" />
    <div class="pa-4">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="4"
            lg="4"
            class="py-0 px-2 appwhite--text"
            style="height: 400px"
            v-for="i in 1"
          >
            <div style="height: 60%">
              <img
                src="/vuetify-logo.svg"
                style="width: 100%; height: 100%; object-fit: cover"
                alt=""
              />
            </div>
            <div style="height: 40%; overflow-y: auto" class="secondary pa-2">
              <h1>hello</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem expedita quidem non assumenda dolores modi
                perspiciatis nam. Laboriosam maxime fugit tenetur enim facilis?
                Explicabo, dolores. Iusto porro voluptates tempore vero?
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <br />
    </div>
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 20px;
}
.gamehots {
  box-shadow: 0 2px 4px 1px #ddb72c;
  text-align: center;
  width: 120px;
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
