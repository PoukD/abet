<template>
  <div class="primary">
    <Banner img="/thethao/banner.png" />
    <SearchBar
      title="THỂ THAO"
      img="/sidemenu/thethao.png"
      :showSearch="false"
    />
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          lg="4"
          class="pa-2"
          v-for="(item, index) in items"
          :key="index"
        >
          <div
            style="height: 200px; border: 4px solid red; overflow: hidden"
            class="d-flex rounded-xl pa-2"
          >
            <v-row>
              <v-col cols="6">
                <h1 class="appwhite--text">{{ item }}</h1>
                <v-btn color="secondary" large rounded block
                  >Bắt đầu chơi</v-btn
                >
              </v-col>
              <v-col cols="6">
                <img
                  :src="'/thethao/' + (index + 1) + '.png'"
                  style="width: 100%; height: 100%; object-fit: contain"
                  alt=""
                />
              </v-col>
            </v-row>
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
      items: ['Thể thao ASKMEBET', 'Thể thao IBC', 'Thể thao SBO'],
    }
  },
}
</script>

<style scoped>
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
