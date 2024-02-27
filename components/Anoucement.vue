<template>
  <div class="conAnouncement secondary rounded-b-xl">
    <div class="text-container" style="white-space: nowrap">
      <p>{{ announcementText }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      announcementText:
        'CHÀO MỪNG BẠN ĐẾN VỚI AQUAXBET!!! NHÀ CÁI UY TÍN HÀNG ĐẦU CHÂU Á',
    }
  },
}
</script>
<style scoped>
.conAnouncement {
  height: 50px;
  overflow: hidden;
}
.text-container {
  padding-top: 12px;
  animation: slideRightToLeft 35s linear infinite;
  color: white;
}
@keyframes slideRightToLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
