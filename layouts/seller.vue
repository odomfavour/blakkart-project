<template>
  <section class="sellers-section">
    <div class="pt-5">
      <div class="d-flex shell">
        <div class="sidebar-section">
          <div class="d-flex justify-content-end mb-3 d-lg-none">
            <b-icon
              icon="x-lg"
              role="button"
              @click="toggleSidebar"
              class="text-danger"
            ></b-icon>
          </div>
          <div class="sidebar">
            <ul class="seller-links">
              <li>
                <nuxt-link to="/seller" exact
                  ><dashboard-icon /> Overview</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/seller/items" exact
                  ><hand-coin class="mr-3" /> Items</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/seller/orders" exact>
                  <orders-icon /> Orders</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/seller/chats" exact
                  ><chat-icon /> Chats</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/seller/analytics" exact
                  ><analytics-icon /> Analytics</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/seller/earnings" exact
                  ><earning-icon /> Earnings</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="main-box">
          <button class="p-1 mb-2 d-md-none d-block" @click="toggleSidebar">
            <b-icon icon="chevron-double-right"></b-icon>
          </button>
          <!-- <div class="container">
            <button class="btn btn-orange" @click="toggleSidebar"><b-icon icon="chevron-double-right"></b-icon></button>
           </div> -->
          <Nuxt />
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
export default {
  components: {
    HandCoin,
    OrdersIcon,
    ChatIcon,
    AnalyticsIcon,
    EarningIcon,
    DashboardIcon,
  },
  data() {
    return {
      value: 4,
    }
  },
  methods: {
    toggleSidebar() {
      console.log('heee')
      document.body.classList.toggle('sidebar-open')
    },
  },
}
</script>

<style scoped>
.shell {
  position: relative;
}
.sidebar-section .sidebar {
  width: 250px;
  min-height: 100vh;
  /* position: fixed; */
}

.main-box {
  width: calc(100% - 250px);
  background: rgba(235, 61, 14, 0.03);
  /* margin-left: 250px; */
  padding: 32px;
}

.sidebar-open .sidebar-section {
  display: block;
  z-index: 9999;
}
.sidebar-section {
  /* display: none; */
  padding-top: 32px;
}
.sidebar-section .sidebar ul {
  list-style: none;
  padding-left: 0;
}
.sidebar-section .sidebar ul li {
  background: #ffffff;
  display: block;
}
.sidebar-section .sidebar .seller-links li a:hover {
  background: rgba(235, 61, 14, 0.03);
  cursor: pointer;
}

.sidebar-section .sidebar ul li a.nuxt-link-exact-active {
  background: rgba(235, 61, 14, 0.03);
}

.sidebar-section .sidebar ul li a {
  color: #241c1c;
  text-transform: capitalize;
  font-size: 14px;
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

/* .checked-green:last-child::after {
display: none !important;
} */

@media (max-width: 426px) {
  .main-box {
    width: 100%;
    margin-left: 0;
  }

  .sidebar-section {
    display: none;
  }

  .sidebar-open .sidebar-section {
    position: absolute;
    left: 0;
    background: #fff;
    height: 100vh !important;
    top: 0;
  }

  .sidebar-open .sidebar-section .sidebar {
    height: 100%;
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