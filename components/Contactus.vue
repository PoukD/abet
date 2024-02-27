<template>
  <v-dialog v-model="contactDialog" persistent max-width="500">
    <v-card align="center" class="rounded-xl" color="primary">
      <v-icon
        color="appwhite"
        size="30"
        style="position: absolute; right: 10px; top: 5px"
        @click="closeDialog"
      >
        mdi-close
      </v-icon>

      <v-container class="px-10">
        <h2 class="appwhite--text mt-2 mb-5">Liên hệ chúng tôi</h2>
        <v-card
          class="insideCard pa-4 rounded-xl mb-3"
          align="left"
          color="secondary"
        >
          <img
            src="/vuetify-logo.svg"
            class="mr-2"
            width="40"
            height="40"
            alt=""
          />
          <h4 class="appwhite--text">Liên hệ Telegram</h4>
        </v-card>
        <v-card
          class="insideCard pa-4 rounded-xl mb-3"
          align="left"
          color="secondary"
        >
          <img
            src="/vuetify-logo.svg"
            class="mr-2"
            width="40"
            height="40"
            alt=""
          />
          <h4 class="appwhite--text">Liên hệ Facebook</h4>
        </v-card>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    ...mapState('main_store', ['contactDialog']),
  },
  methods: {
    closeDialog() {
      this.$store.commit('main_store/SET_CONTACT_DIALOG', false)
    },
  },
}
</script>
<style scoped>
.insideCard {
  display: flex;
  align-items: center;
}
</style>
