<template>
  <section class="profile">
    <Header />
    <div class="mt-5">
      <div class="container">
        <div class="d-flex shell">
          <div class="sidebar-section">
            <div class="d-flex justify-content-end mb-3 d-lg-none px-3 pt-3">
              <b-icon
                icon="x-lg"
                role="button"
                @click="toggleSidebar"
                class="text-danger"
              ></b-icon>
            </div>
            <div class="sidebar">
              <ul>
                <li v-for="link in profileLinks" :key="link.id">
                  <nuxt-link :to="link.url" exact>{{link.name}}</nuxt-link>
                </li>
                <li>
                  <div class="text-center">
                    <button class="btn orange-btn">logout</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="main-box">
            <div class="container">
              <button class="p-1 mb-2 d-md-none d-block" @click="toggleSidebar">
                <b-icon icon="chevron-double-right"></b-icon>
              </button>
            </div>
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
    <featured-designers />
    <Footer />
  </section>
</template>

<script>
import FeaturedDesigners from '~/components/FeaturedDesigners.vue'
export default {
  components: { FeaturedDesigners },
  data() {
    return {
      value: 4,
      profileLinks: [
        { id: 1, name: 'OVERVIEW', url: '/profile/overview' },
        { id: 2, name: 'ORDERS', url: '/profile/orders' },
        { id: 3, name: 'MEASUREMENTS', url: '/profile/measurements' },
        { id: 4, name: 'PAYMENT METHODS', url: '/profile/payment-methods' },
        { id: 5, name: 'SHIPPING ADDRESS', url: '/profile/shipping-address' },
        { id: 6, name: 'MESSAGE CENTER', url: '/profile/message-center' },
        { id: 7, name: 'ACCOUNT SETTING', url: '/profile/account-settings' },
        { id: 8, name: 'SUPPORT CENTER', url: '/profile/support-center' },
      ],
      // isSidebar: t
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

<style>
.shell {
  position: relative;
}
.sidebar-section {
  width: 250px;
}

.main-box {
  width: calc(100% - 250px);
}

.sidebar-open .sidebar-section {
  display: block;
  z-index: 9999;
}

.profile .sidebar-section .sidebar ul {
  list-style: none;
}
.profile .sidebar-section .sidebar ul li {
  margin-bottom: 15px;
  display: block;
}
.profile .sidebar-section .sidebar ul li a:hover {
  border-left: 4px solid #eb542b;
  cursor: pointer;
  background: #f4f4f4;
}

.profile .sidebar-section .sidebar ul li a.nuxt-link-exact-active {
  border-left: 4px solid #eb542b;
  background: #f4f4f4;
}

.profile .sidebar-section .sidebar ul li a {
  color: #241c1c;
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: none;
  padding: 5px 0 5px 22px;
  display: block;
  cursor: pointer;
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

.orders-tab .nav-pills .nav-link.active,
.measurements-tab .nav-pills .nav-link.active {
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

.account-section .nav-pills .nav-link.active {
  background: #f4f4f4 !important;
  border-left: 4px solid #eb542b !important;
}

.account-section .nav-pills .nav-link {
  border-left: 4px solid transparent !important;
}

.account-section .nav-pills .nav-link:hover {
  background: #f4f4f4 !important;
  border-left: 4px solid #eb542b !important;
}

@media (max-width: 769px) {
  .sidebar-open .sidebar-section {
    /* display: none; */
    position: fixed;
    top: 50px;
    z-index: 999999;
    background: #fff;
    height: 100vh;
  }

  .sidebar-section {
    display: none;
  }

  .main-box {
    width: 100%;
  }
}

@media (max-width: 426px) {
  .main-box {
    width: 100%;
  }

  .main-box .container {
    padding-left: 0;
    padding-right: 0;
  }

  .item-showbox .product-flash {
    width: 100%;
  }

  /* .sidebar-section {
    display: none;
  } */

  .sidebar-open .sidebar-section {
    position: fixed;
    left: 0;
    background: #fff;
    height: 100vh !important;
  }

  .sidebar-open .sidebar-section .sidebar {
    height: 100%;
  }

  .sidebar-open .sidebar-section ul {
    padding-left: 0;
  }

  .item-showbox .product-flash .image-box {
    width: 100%;
  }

  .account-section .nav-pills .nav-link {
    font-size: 14px;
  }
}
</style>