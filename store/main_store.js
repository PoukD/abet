const axios = require('axios')
export default {
  namespaced: true,
  state: () => ({
    loginDialog: false,
    registerDialog: false,
    searchDialog: false,
    contactDialog: false,
    mobileDevice: window?.innerWidth <= 960 ? true : false,
  }),
  mutations: {
    /* le */
    InitState(state) {},
    SET_LOGIN_DIALOG(state, data) {
      state.loginDialog = data
    },
    SET_REGISTER_DIALOG(state, data) {
      state.registerDialog = data
    },
    SET_IS_MOBILE_DEVICE(state) {
      state.mobileDevice = window?.innerWidth <= 960 ? true : false
    },
    SET_SEARCH_DIALOG(state, data) {
      state.searchDialog = data
    },
    SET_CONTACT_DIALOG(state, data) {
      state.contactDialog = data
    },
    /* */
  },
  actions: {},

  getters: {
    logeventList: (state) => state.logeventList,
  },
}
