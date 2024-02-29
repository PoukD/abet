<template>
  <div class="py-10 px-10 myfooter">
    <v-container>
      <div class="d-flex justify-center white--text">
        <h3>Sản phẩm của chúng tôi</h3>
      </div>
      <div class="img-container mt-4">
        <img
          class="my-2 mx-4"
          :src="'/footer/' + (i == 23 || i == 33 ? '50' : i) + '.webp'"
          width="60"
          height="60"
          alt=""
          v-for="i in 60"
        />
      </div>
      <div class="img-container mt-4">
        <img
          class="my-2 mx-4"
          src="/footer/bt1.png"
          style="width: 30%"
          alt=""
        />
      </div>
      <div class="img-container mt-4">
        <div class="d-flex">
          <img
            class="my-2 mx-4"
            src="/footer/gamcare.png"
            width="30"
            height="30"
            alt=""
          />
          <h2 class="ma-0" style="color: gray">
            <strong>Be</strong>Gamble<strong>Aware</strong> <strong>18+</strong>
          </h2>
        </div>
      </div>
      <div class="d-flex justify-center white--text mt-4">
        <p>&#169;2024 Bảo lưu mọi quyền.</p>
      </div>
    </v-container>
  </div>
</template>
<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%; /* Adjust this value as needed */
}
.myfooter {
  border-top: 3px solid #ddb72c;
  background-color: #560202;
}
</style>
