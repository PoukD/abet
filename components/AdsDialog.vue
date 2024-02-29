<template>
  <div>
    <v-dialog v-model="dialog" max-width="500">
      <v-card color="secondary" class="pa-0 rounded-xl">
        <v-row>
          <v-col cols="12" class="pa-0 rounded-xl">
            <div
              class="secondary rounded-circle pa-1"
              style="position: absolute; top: 14px; right: 1%"
              @click="dialog = false"
            >
              <v-icon color="white" size="30">mdi-close</v-icon>
            </div>
            <img
              src="/common/ads.jpg"
              style="width: 100%; height: 100%; object-fit: cover"
              class="rounded-xl"
              alt=""
            />
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      dialog: true,
    }
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
