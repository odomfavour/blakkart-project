<template>
  <section class="sellers-section">
    <seller-header @open-chats="isChatsOpen = true" />
    <div class="main-pack">
      <div class="d-flex shell">
        <div class="sidebar-section">
          <div class="d-flex justify-content-end mb-3 d-lg-none">
          </div>
          <div class="sidebar d-flex flex-column justify-content-between">
            <ul class="seller-links">
              <li @click="$store.commit('toggleSellerBar')" v-for="link in sellerLinks" :key="link.id">
                <nuxt-link :to="link.url" exact
                  ><b-icon :icon="link.icon"></b-icon> {{link.name}}</nuxt-link
                >
              </li>
            </ul>
            <div class="bottom-links">
              <ul>
               <li @click="$store.commit('toggleSellerBar')" v-for="link in sellerBottomLinks" :key="link.id">
                <nuxt-link :to="link.url" exact
                  ><b-icon :icon="link.icon"></b-icon> {{link.name}}</nuxt-link
                >
              </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="main-box pt-5">
          <!-- <div class="container">
            <button class="btn btn-orange" @click="toggleSidebar"><b-icon icon="chevron-double-right"></b-icon></button>
           </div> -->
          <Nuxt />
        </div>
      </div>
    </div>
    <div
      :class="isIndividualOpen ? 'chat-card right-400' : 'chat-card right-180'"
      v-if="isChatsOpen"
    >
      <div
        class="chat-header d-flex justify-content-between align-items-center"
      >
        <h4 style="font-weight: 500; font-size: 24px">Admin Chats</h4>
        <b-icon
          icon="x-circle-fill"
          font-scale="1.4"
          role="button"
          @click="isChatsOpen = false"
        ></b-icon>
      </div>
      <div class="chats">
        <div
          class="d-flex admin-user-card px-2"
          v-for="item in 4"
          :key="item"
          role="button"
          @click="isIndividualOpen = true"
        >
          <div class="mr-3 text-center">
            <b-img
              v-bind="{
                blank: true,
                width: 30,
                height: 30,
                class: 'm1',
              }"
              rounded="circle"
              blank-color="#777"
              alt="Transparent image"
            ></b-img>
          </div>
          <div class="w-100 mr2">
            <div class="d-flex justify-content-between align-items-center">
              <p class="mb-0">
                Ihiechi Okwelle
                <b-icon icon="patch-check-fill" font-scale="0.8"></b-icon>
              </p>
            </div>
            <p class="mb-0">
              <b-icon icon="circle-fill" font-scale="0.5"></b-icon> Lorem ipsum
              ipsum dolo....
            </p>
          </div>
          <p class="text-orange" style="font-size: 14px">12:04</p>
        </div>
      </div>
      <div class="chat-footer"></div>
    </div>
    <div class="individual-chat" v-if="isIndividualOpen">
      <div
        class="chat-header d-flex justify-content-between align-items-center"
      >
        <div></div>
        <div class="d-flex align-items-center">
          <div class="mr-2 text-center">
            <b-img
              v-bind="{
                blank: true,
                width: 30,
                height: 30,
                class: 'm1',
              }"
              rounded="circle"
              blank-color="#777"
              alt="Transparent image"
            ></b-img>
          </div>
          <p class="mb-0">
            Ihiechi Okwelle
            <b-icon
              icon="patch-check-fill"
              font-scale="0.8"
              style="color: #eb542b"
            ></b-icon>
          </p>
        </div>
        <b-icon
          icon="x-circle-fill"
          font-scale="1.4"
          role="button"
          style="color: #eb542b"
          @click="isIndividualOpen = false"
        ></b-icon>
      </div>
      <div class="chat-main-layout">
        <p class="text-center">Today</p>
        <div class="admin-section">
          <p>
            Yes Ihiechi, It has been reviewed you will get a feedback very soon
          </p>
          <p class="text-right">12:04</p>
        </div>
        <div class="d-flex justify-content-end">
          <div class="seller-section">
            <p>
              Yes Ihiechi, It has been reviewed you will get a feedback very
              soon
            </p>
            <p class="text-right">12:04</p>
          </div>
        </div>
        <p class="text-italics">Typing.....</p>
        <div>
          <div class="d-flex">
            <div role="button" class="attachment text-center pt-3">
              <b-icon icon="paperclip" font-scale="1.3" style="color: #eb542b;"></b-icon>
            </div>
            <div class="textarea-section">
              <textarea name="" id="" class="form-control" rows="4"></textarea>
            </div>
            <div class="text-center chat-button d-flex justify-content-center align-items-center">
              <button class="btn px-4" style="background: #CCCCCC;">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HandCoin from '@/components/Icons/HandCoin.vue'
import OrdersIcon from '@/components/Icons/OrdersIcon.vue'
import ChatIcon from '@/components/Icons/ChatIcon.vue'
import AnalyticsIcon from '@/components/Icons/AnalyticsIcon.vue'
import EarningIcon from '@/components/Icons/EarningIcon.vue'
import DashboardIcon from '@/components/Icons/DashboardIcon.vue'
import SellerHeader from '~/components/Seller/SellerHeader.vue'
export default {
  components: {
    HandCoin,
    OrdersIcon,
    ChatIcon,
    AnalyticsIcon,
    EarningIcon,
    DashboardIcon,
    SellerHeader,
  },
  data() {
    return {
      value: 4,
      isChatsOpen: false,
      isIndividualOpen: false,
      sellerLinks: [
        {id: 1, name: 'Overview', url: '/seller', icon:'grid1x2-fill'},
        {id: 2, name: 'Items', url: '/seller/items', icon:'bag-fill'},
        {id: 3, name: 'Orders', url: '/seller/orders', icon:'file-earmark-spreadsheet-fill'},
        {id: 4, name: 'Analytics', url: '/seller/analytics', icon:'file-bar-graph-fill'},
        {id: 5, name: 'Items', url: '/seller/earnings', icon:'cash-stack'},
      ],
       sellerBottomLinks: [
        {id: 1, name: 'Profile', url: '/seller/profile', icon:'person-fill'},
        {id: 2, name: 'Settings', url: '/seller/settings', icon:'gear-fill'},
      ]
    }
  },
  methods: {
    toggleSidebar() {
      document.body.classList.toggle('sidebar-open')
    },
  },
}
</script>

<style scoped>
.sellers-section {
  font-family: 'Inter', sans-serif;
  transition: 0.4s all ease-in-out;
}
.chat-card {
  height: 400px;
  background: #fff;
  border-radius: 10px;
  position: fixed;
  top: 150px;
  width: 25%;
  z-index: 99999;
  padding-bottom: 20px;
}

.right-180 {
  right: 180px;
}

.right-400 {
  left: 400px;
}

.chat-card svg {
  color: #eb542b;
}

.chat-card .chat-header {
  padding: 36px 24px 24px 24px;
  border-bottom: 0.5px solid #ddd;
}

.chat-card .chats {
  height: 270px;
  overflow-y: scroll;
}

.chat-card .admin-user-card {
  padding: 20px 0;
  border-bottom: 0.5px solid #ddd;
}

.chat-card .admin-user-card:hover {
  background: rgba(235, 61, 14, 0.03);
}

.individual-chat {
  min-height: 450px;
  position: fixed;
  z-index: 9999;
  width: 40%;
  top: 150px;
  right: 100px;
  background: #fff;
  border-radius: 10px;
}

.individual-chat .chat-header {
  background: rgba(235, 84, 43, 0.1);
  padding: 42px 20px;
  border-radius: 10px 10px 0 0;
}

.individual-chat .chat-main-layout {
  padding: 30px 20px;
}

.individual-chat .admin-section {
  background: #f4f4f4;
  border-radius: 20px 20px 20px 0px;
  width: 60%;
  padding: 16px 24px;
  margin-bottom: 20px;
}

.individual-chat .seller-section {
  background: #eb542b;
  border-radius: 20px 20px 0px 20px;
  color: #fff;
  width: 60%;
  padding: 16px 24px;
  margin-bottom: 20px;
}

.attachment {
  width: 10%;
}

.textarea-section {
  width: 70%;
}

.chat-button {
  width: 20%;
}

/* .chat-card .chat-footer {
  padding: 25px;
  bac
} */
.shell {
  position: relative;
  background: rgba(235, 61, 14, 0.03);
}
.sidebar-section .sidebar {
  width: 250px;
  min-height: 100vh;
  transition: 0.4s all ease-in-out;
  /* position: fixed; */
}

.main-pack {
  margin-top: 100px;
}

.main-box {
  width: calc(100% - 250px);
  background: rgba(235, 61, 14, 0.03);
  margin-left: 250px;
  padding: 32px 16px 0 16px;
  min-height: 100vh;
}

.sidebar-open .sidebar-section {
  display: block;
  z-index: 9999;
}
.sidebar-section {
  /* display: none; */
  position: fixed;
  height: 100vh;
  padding-top: 32px;
  background: #fff;
}
.sidebar-section .sidebar ul {
  list-style: none;
  padding-left: 0;
}
.sidebar-section .sidebar ul li {
  background: #ffffff;
  display: block;
}

.sidebar-section .sidebar ul li a {
  color: #4d4d4d;
  font-weight: 500;
}
.sidebar-section .sidebar .seller-links li a:hover {
  background: rgba(235, 61, 14, 0.03);
  cursor: pointer;
  color: #eb542b;
}

.sidebar-section .sidebar ul li a.nuxt-link-exact-active {
  color: #eb542b;
  font-weight: 500;
  border-right: 4px solid #eb542b;
  background: rgba(235, 61, 14, 0.03);
}

.sidebar-section .sidebar ul li svg {
  font-size: 20px;
  margin-right: 7px;
  color: #4d4d4d;
}

.sidebar-section .sidebar ul li a.nuxt-link-exact-active svg {
  color: #eb542b;
}

.sidebar-section .sidebar ul li a {
  color: #4D4D4D;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding: 15px 0 15px 80px;
  display: block;
  cursor: pointer;
  /* border: 0.2px solid #ccc; */
  border-right: 0;
  border-left: 0;
  border-bottom: 0.2px solid #ccc;
}

.sidebar-section .sidebar ul li a:hover svg {
  fill: red !important;
}

.item-showbox {
  min-height: 115px;
  border: 1px solid #ccc;
}

.item-showbox .product-flash {
  width: 40%;
}

.item-showbox .product-flash .image-box {
  width: 25%;
}

.transaction-stage {
  padding: 8px 20px;
}

.green {
  background: green;
  color: white;
}

.red {
  background: red;
  color: #fff;
}

.yellow {
  background: yellow;
  color: black;
}

.orange-btn {
  background: #eb542b;
  color: #fff;
  padding: 10px 32px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}

.orange-btn:hover {
  color: #fff;
}

.orange-outline-btn {
  border: 2px solid #eb542b;
  padding: 10px 32px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}

.orange-outline-btn:hover {
  border: 2px solid #fff !important;
  background: #eb542b;
  color: #fff;
}

.blue {
  background: blue;
  color: white;
}

/* .orders-tab .nav-pills .nav-item:nth-child(1) {
  display: none !important;
} */

.orders-tab .nav-pills .nav-link.active {
  background: #241c1c !important;
  color: #fff !important;
}

.orders-tab .nav-pills .nav-link {
  border: none !important;
}

.number-sac {
  border-radius: 50%;
  padding: 1px 6px;
}

.orders-tab .nav-pills .nav-link .number-sac {
  background: #241c1c;
  color: #fff;
}

.orders-tab .nav-pills .nav-link.active .number-sac {
  color: #241c1c;
  background: #fff;
}

.checked-green svg {
  fill: #2e7d32;
  font-size: 40px;
}

.trans-stage {
  margin-bottom: 50px;
  position: relative;
}

.checked-green {
  position: relative;
}

.checked-green:not(:last-child)::before {
  content: '';
  width: 2px;
  min-height: 60px;
  background: #2e7d32;
  position: absolute;
  top: 40px;
  left: 20px;
}

.not-checked {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.not-checked:not(:last-child)::before {
  content: '';
  width: 2px;
  height: 60px;
  background: #ccc !important;
  position: absolute;
  top: 40px;
  left: 20px;
}

.bottom-links {
  /* position: absolute;
  bottom: 150px;
  width: 100%; */
  margin-bottom: 250px;
}

/* .checked-green:last-child::after {
display: none !important;
} */
@media (max-width: 769px) {
  .sidebar-section {
    display: none;
  }

  .main-box {
    width: 100%;
    margin-left: 0;
  }
}
@media (max-width: 426px) {
  .main-box {
    width: 100%;
    margin-left: 0;
  }

  .main-pack {
    margin-top: 40px;
  }

  .sidebar-section {
    display: none;
  }

  .sidebar-open .sidebar-section {
    position: fixed;
    left: -100%;
    transform: translateX(100%);
    background: #fff;
    min-height: 100vh !important;
    top: 50px;
    width: 100%;
    transition: 0.4s all ease-in-out;
  }

  .sidebar-open .sidebar-section .sidebar {
    height: 100%;
    width: 100%;
  }

  .main-box .container {
    padding-left: 0;
    padding-right: 0;
  }

  .item-showbox .product-flash {
    width: 100%;
  }

  .sidebar-open .sidebar-section ul {
    padding-left: 0;
  }

  .sidebar-section {
    /* display: none; */
    padding-top: 0px;
  }

  
}
</style>