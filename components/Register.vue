<template>
  <div>
    <v-dialog
      v-model="registerDialog"
      :fullscreen="mobileDevice"
      persistent
      max-width="700"
    >
      <v-card align="center" class="rounded-xl px-8 py-6" color="primary">
        <v-icon
          color="appwhite"
          size="30"
          style="position: absolute; right: 10px; top: 5px"
          @click="closeDialog"
        >
          mdi-close
        </v-icon>

        <v-container class="myinput px-8">
          <v-row>
            <v-col cols="12" align="center">
              <h2 class="appwhite--text mt-2 pb-4">Đăng ký</h2>
            </v-col>
            <v-col cols="12" sm="6" lg="6" class="py-0 px-1">
              <v-text-field
                dense
                class="rounded-lg"
                color="white"
                outlined
                label="Tên tài khoản"
                :rules="[(v) => !!v || 'tên người dùng là bắt buộc']"
              >
                <v-icon slot="prepend-inner" color="appwhite">
                  mdi-account
                </v-icon>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" lg="6" class="py-0 px-1">
              <v-text-field
                dense
                class="rounded-lg"
                color="white"
                outlined
                label="Số điện thoại"
                :rules="[(v) => !!v || 'số điện thoại là bắt buộc']"
              >
                <v-icon slot="prepend-inner" color="appwhite">
                  mdi-account
                </v-icon>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" lg="6" class="py-0 px-1">
              <v-text-field
                dense
                class="rounded-lg"
                color="white"
                outlined
                :rules="[(v) => !!v || 'mật khẩu là bắt buộc']"
                :type="showpass1 ? 'text' : 'password'"
              >
                <v-icon slot="prepend-inner" color="appwhite"> mdi-key </v-icon>
                <v-icon
                  @click="showpass1 = !showpass1"
                  slot="append"
                  color="appwhite"
                  >{{ showpass1 ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon
                >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" lg="6" class="py-0 px-1">
              <v-text-field
                dense
                class="rounded-lg"
                color="white"
                outlined
                :rules="[(v) => !!v || 'mật khẩu là bắt buộc']"
                :type="showpass2 ? 'text' : 'password'"
              >
                <v-icon slot="prepend-inner" color="appwhite"> mdi-key </v-icon>
                <v-icon
                  @click="showpass2 = !showpass2"
                  slot="append"
                  color="appwhite"
                  >{{ showpass2 ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon
                >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" lg="6" class="py-0 px-1">
              <v-select
                class="rounded-lg"
                :items="selectItems"
                label="Bạn biết đến chúng tôi qua kênh nào"
                outlined
                dense
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="myinput px-8">
          <v-row>
            <v-col cols="12" sm="6" lg="6" class="py-0 px-1">
              <recaptcha />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              lg="6"
              class="px-3 py-0 pt-4 d-flex justify-center"
              style="align-items: center"
            >
              <v-text-field
                dense
                class="rounded-lg"
                color="white"
                outlined
                label="Mã xác thực"
                :rules="[(v) => !!v || 'mã xác thực là bắt buộc']"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" align="center">
              <v-checkbox
                v-model="checkbox"
                label="Tôi đồng đã đủ 18 tuổi, tôi đã đọc và đồng ý với quy định này"
                color="white"
              ></v-checkbox>
            </v-col>
            <v-col cols="12">
              <v-btn
                block
                color="secondary"
                rounded
                :disabled="!checkbox"
                x-large
                >Xác nhận</v-btn
              >
            </v-col>
            <v-col cols="12" class="pa-0">
              <p style="text-align: center" class="mt-3 appwhite--text">
                Đã có tài khoản?
                <span class="secondary--text" @click="openLogin"
                  ><u> Đăng nhập!</u></span
                >
              </p>
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
      checkbox: false,
      showpass1: false,
      showpass2: false,
      selectItems: [
        'Facebook',
        'Line',
        'Twitter',
        'Bạn bè',
        'Tin nhắn SMS',
        'KÊNH QUẢNG CÁO KHÁC',
      ],
    }
  },
  computed: {
    ...mapState('main_store', ['registerDialog', 'mobileDevice']),
  },
  methods: {
    openLogin() {
      this.$store.commit('main_store/SET_REGISTER_DIALOG', false)
      this.$store.commit('main_store/SET_LOGIN_DIALOG', true)
    },
    closeDialog() {
      this.$store.commit('main_store/SET_REGISTER_DIALOG', false)
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
.myinput .v-text-field .v-select__selection,
.myinput .v-label {
  color: white !important;
}
.v-input--selection-controls__input {
  border: white solid 3px !important;
  padding: 0; /* Default border color */
}
.theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(
    .v-btn-outlined
  ) {
  background-color: gray !important;
}
</style>
