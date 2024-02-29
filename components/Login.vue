<template>
  <div>
    <v-dialog
      v-model="loginDialog"
      :fullscreen="mobileDevice"
      persistent
      max-width="500"
    >
      <v-card align="center" class="rounded-xl" color="primary">
        <v-icon
          color="appwhite"
          size="30"
          style="position: absolute; right: 10px; top: 5px"
          @click="closeDialog"
        >
          mdi-close
        </v-icon>
        <v-container class="myinput px-8">
          <h2 class="appwhite--text mt-2">Đăng nhập</h2>
          <div style="text-align: left; width: 100%">
            <p class="appwhite--text ma-0">Tài khoản</p>
            <v-text-field
              dense
              class="rounded-lg"
              color="white"
              outlined
              :rules="[(v) => !!v || 'tên người dùng là bắt buộc']"
            >
              <v-icon slot="prepend-inner" color="appwhite">
                mdi-account
              </v-icon></v-text-field
            >
            <p class="appwhite--text ma-0">Mật khẩu</p>
            <v-text-field
              dense
              class="rounded-lg"
              color="white"
              outlined
              :rules="[(v) => !!v || 'mật khẩu là bắt buộc']"
              :type="showpass ? 'text' : 'password'"
            >
              <v-icon slot="prepend-inner" color="appwhite"> mdi-key </v-icon>
              <v-icon
                @click="showpass = !showpass"
                slot="append"
                color="appwhite"
                >{{ showpass ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon
              >
            </v-text-field>
            <p class="secondary--text" style="text-align: end">
              <u>Quên mật khẩu</u>
            </p>
            <v-btn block color="secondary" rounded>Đăng nhập</v-btn>
            <p style="text-align: center" class="mt-3 appwhite--text">
              Bạn chưa có tài khoản?
              <span class="secondary--text" @click="openRegister"
                ><u> Đăng ký ngay!</u></span
              >
            </p>
          </div>
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
      showpass: false,
    }
  },
  computed: {
    ...mapState('main_store', ['loginDialog', 'mobileDevice']),
  },
  methods: {
    openRegister() {
      this.$store.commit('main_store/SET_REGISTER_DIALOG', true)
      this.$store.commit('main_store/SET_LOGIN_DIALOG', false)
    },
    closeDialog() {
      this.$store.commit('main_store/SET_LOGIN_DIALOG', false)
    },
  },
}
</script>
<style scoped>
.insideCard {
  display: flex;
  align-items: center;
}
.v-text-field--outlined >>> fieldset {
  border-color: white;
}
</style>
<style>
.myinput .v-text-field input,
.myinput .v-text-field .v-label,
.myinput .v-text-field .v-icon,
.myinput .v-text-field .v-select__selection {
  color: white !important;
}
</style>
