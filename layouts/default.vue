<template>
  <v-app dark style="height: 100vw">
    <Contactus />
    <Login />
    <Register />
    <AdsDialog />
    <SearchDialog />
    <div class="contopMenus" v-if="!mobileDevice">
      <div
        class="itemtopMenus elevation-3 rounded-b-xl"
        align="center"
        v-for="(item, index) in topMenus"
        :key="index"
        @click="routingTo(item.to)"
      >
        <img
          :src="'/topmenu/tm' + (index + 1) + '.png'"
          class="mx-auto"
          width="30"
          height="30"
          alt=""
        />
        <h3>{{ item.title }}</h3>
      </div>
    </div>
    <div class="fab1">
      <img src="/bottomrightbtn/chat.png" width="80" height="80" alt="" />
    </div>
    <div class="fab2">
      <img src="/bottomrightbtn/minigame.gif" width="80" height="80" alt="" />
    </div>
    <v-app-bar
      :clipped-left="true"
      fixed
      app
      style="z-index: 7; width: 100vw"
      color="primary"
    >
      <v-app-bar-nav-icon
        v-if="!mobileDevice"
        @click.stop="drawer = !drawer"
        color="appwhite"
      />
      <img class="mr-2" src="/footer/bt1.png" style="width: 30%" alt="" />
      <v-spacer />
      <div
        :class="mobileDevice ? 'px-1 py-0' : 'px-4 py-1'"
        class="selectingBg rounded-pill mr-3 appwhite--text navbtn"
        @click="openLogin"
      >
        Đăng ký
      </div>
      <div
        :class="mobileDevice ? 'px-1 py-0' : 'px-4 py-1'"
        class="secondary rounded-pill appwhite--text navbtn"
        @click="openRegister"
      >
        Đăng nhập
      </div>

      <v-menu offset-y v-if="!mobileDevice">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="d-flex"
            color="primary mx-2"
            elevation="0"
          >
            <img
              src="/common/vn.webp"
              width="20"
              height="20"
              alt=""
              style="border-radius: 100%"
            />
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in languages" :key="index">
            <v-list-item-title
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                :src="item.image"
                style="border-radius: 100%"
                width="20"
                height="20"
                alt=""
              />
              &nbsp; <span>{{ item.code }}</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      app
      class="mt-15"
      color="primary"
      v-if="!mobileDevice"
    >
      <v-container>
        <router-link
          v-for="(item, index) in menus"
          :key="index"
          :to="item.to"
          class="d-flex my-3 px-1 py-4 menus menu-link"
          :class="selectingMenus == index ? 'selectingBg' : 'secondary'"
          @click.native="setTab(index)"
        >
          <img class="mr-2" :src="item.image" width="40" height="40" alt="" />
          <h3 class="appwhite--text">{{ item.title }}</h3>
        </router-link>
      </v-container>
    </v-navigation-drawer>

    <v-main>
      <div v-if="mobileDevice" class="topmenuMobile primary d-flex darkbg">
        <div
          v-for="(item, index) in menus"
          :key="index"
          style="white-space: nowrap"
          @click="routingTo(item.to)"
        >
          <div class="d-flex justify-center mx-6">
            <img :src="item.image" width="28" height="28" alt="" />
          </div>
          <div class="d-flex justify-center appwhite--text">
            <span style="font-size: 14px">{{ item.title }}</span>
          </div>
        </div>
      </div>
      <Nuxt />
    </v-main>
    <v-bottom-navigation
      v-model="bottomModel"
      background-color="secondary"
      grow
      fixed
      bottom
      class="rounded-t-xl"
      v-if="mobileDevice"
    >
      <v-btn
        v-for="(item, index) in bottomItems"
        :key="index"
        @click="setBottomNavigate(index, item.to)"
        :color="bottomModel == index ? 'primary' : ''"
      >
        <div>
          <div>
            <img :src="item.image" width="25" height="25" alt="" />
          </div>
          <div class="appwhite--text">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { getData, setData } from 'nuxt-storage/local-storage'
import { mapState } from 'vuex'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      bottomModel: getData('bottomNavigate') || 0,
      clipped: false,
      drawer: true,
      fixed: false,
      selectingMenus: getData('currentTab') || 0,
      languages: [
        { image: '/common/vn.webp', code: 'vn' },
        { image: '/common/en.png', code: 'en' },
      ],
      bottomItems: [
        {
          image: '/topmenu/tm1.png',
          title: 'Trang chủ',
          to: '/',
        },
        {
          image: '/topmenu/tm5.png',
          title: 'Nạp tiền-Rút tiền',
          to: 'login',
        },
        {
          image: '/topmenu/tm2.png',
          title: 'Tôi',
          to: 'login',
        },
      ],
      topMenus: [
        {
          image: '/vuetify-logo.svg',
          title: 'Trang chủ',
          to: '/',
        },
        {
          image: '/vuetify-logo.svg',
          title: 'Khuyến mãi',
          to: '/khuyenmai',
        },
        {
          image: '/vuetify-logo.svg',
          title: 'Tin tức',
          to: '/tintuc',
        },
        {
          image: '/vuetify-logo.svg',
          title: 'CSKH',
          to: 'cskh',
        },
        {
          image: '/vuetify-logo.svg',
          title: 'Nạp/Rút tiền',
          to: 'naptien',
        },
      ],
      menus: [
        {
          image: '/sidemenu/nohu.png',
          title: 'Nổ hũ',
          to: '/nohu',
        },
        {
          image: '/sidemenu/songbac.png',
          title: 'Sòng bạc',
          to: '/songbac',
        },
        {
          image: '/sidemenu/thethao.png',
          title: 'Thể thao',
          to: '/thethao',
        },
        {
          image: '/sidemenu/banca.png',
          title: 'Bắn cá',
          to: '/banca',
        },
        {
          image: '/sidemenu/daga.png',
          title: 'Đá gà',
          to: '/daga',
        },
        {
          image: '/sidemenu/danhbai.png',
          title: 'Đánh bài',
          to: '/danhbai',
        },
        {
          image: '/sidemenu/keno.png',
          title: 'Keno',
          to: '/keno',
        },
        {
          image: '/sidemenu/giaodich.png',
          title: 'Giao dịch',
          to: '/giaodich',
        },
        {
          image: '/sidemenu/thethaodientu.png',
          title: 'Thể thao điẹn tử',
          to: '/thethaodientu',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  computed: {
    ...mapState('main_store', ['mobileDevice']),
  },
  created() {
    window?.addEventListener('resize', this.myEventHandlerResizeScreen)
  },
  destroyed() {
    window?.removeEventListener('resize', this.myEventHandlerResizeScreen)
  },
  methods: {
    setTab(tab) {
      this.selectingMenus = tab
      setData('currentTab', tab)
    },
    setBottomNavigate(index, path) {
      this.bottomModel = index
      setData('bottomNavigate', index)
      if (path == 'login') {
        this.$store.commit('main_store/SET_LOGIN_DIALOG', true)
      } else {
        this.$router.push(path)
      }
    },
    myEventHandlerResizeScreen(e) {
      this.$store.commit('main_store/SET_IS_MOBILE_DEVICE')
    },
    openLogin() {
      this.$store.commit('main_store/SET_LOGIN_DIALOG', true)
    },
    openRegister() {
      this.$store.commit('main_store/SET_REGISTER_DIALOG', true)
    },
    routingTo(path) {
      if (path == 'cskh') {
        this.$store.commit('main_store/SET_CONTACT_DIALOG', true)
      } else if (path == 'naptien') {
        this.$store.commit('main_store/SET_LOGIN_DIALOG', true)
      } else {
        this.$router.push(path)
      }
    },
  },
}
</script>
<style scoped>
.menus {
  align-items: center;
  border-radius: 10px;
  width: 90%;
}
.menus:hover {
  background-image: linear-gradient(#ddb72c, #cc0000);
}
.selectingBg {
  background-image: linear-gradient(#ddb72c, #cc0000);
}
.navbtn {
  border: 0.5px white solid;
}
.fab1 {
  position: fixed;
  bottom: 8vh;
  right: 30px;
  z-index: 8;
}
.fab2 {
  position: fixed;
  bottom: 23vh;
  right: 30px;
  z-index: 8;
}
.topmenuMobile {
  position: sticky;
  top: 56px;
  padding: 15px 0px;
  z-index: 6;
  overflow-y: auto;
}
.contopMenus {
  position: fixed;
  top: 0;
  left: calc(50% - 350px);
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 8;
}
.itemtopMenus {
  height: 75px;
  margin: 0 6px;
  padding: 7px 10px 20px 12px;
  background-color: #940000;
  color: white;
  transition: 0.35s;
  text-decoration: none;
}
.itemtopMenus:hover {
  background-color: #ddb72c;
}
.menu-link {
  text-decoration: none; /* Remove underline */
}
</style>
