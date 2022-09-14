<template>
  <section>
    <Header />
    <div class="mt-5">
      <div class="container">
        <div class="d-flex">
          <div class="sidebar-section">
            <div class="sidebar">
              <ul>
                <li>
                  <nuxt-link to="/profile/overview" exact>overview</nuxt-link>
                </li>
                <li><nuxt-link to="/profile/orders">orders</nuxt-link></li>
                <li><nuxt-link to="#">measurements</nuxt-link></li>
                <li>
                  <nuxt-link to="/profile/payment-methods"
                    >payment methods</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/profile/shipping-address"
                    >shipping address</nuxt-link
                  >
                </li>
                <li><nuxt-link to="#">message center</nuxt-link></li>
                <li><nuxt-link to="#">account settings</nuxt-link></li>
                <li><nuxt-link to="#">support setting</nuxt-link></li>
                <li>
                  <div class="text-center">
                    <button class="btn orange-btn">logout</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="main-box">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
    <div class="my-5">
      <div class="container">
        <div class="px-5">
          <h5>Items Handpicked For You</h5>
          <div class="row">
            <div class="col-md-3" v-for="product in 4" :key="product">
              <div class="product-card">
                <img
                  src="/product-image.png"
                  alt=" product"
                  class="img-fluid"
                />
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-between
                    pt-2
                  "
                >
                  <p class="mb-0">Ankara Jesu</p>
                  <p class="mb-0">CAD $200</p>
                </div>
                <hr />
                <div class="d-flex justify-content-between align-items-between">
                  <b-form-rating
                    v-model="value"
                    readonly
                    no-border
                    size="sm"
                    class="p-0"
                  ></b-form-rating>
                  <div class="d-flex">
                    <div class="mr-3">
                      <b-icon icon="heart" role="button"></b-icon>
                    </div>
                    <div><b-icon icon="handbag" role="button"></b-icon></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
    }
  },
}
</script>

<style>
.sidebar-section .sidebar {
  width: 250px;
}

.main-box {
  width: calc(100% - 250px);
}
.sidebar-section .sidebar ul {
  list-style: none;
}
.sidebar-section .sidebar ul li {
  margin-bottom: 15px;
  display: block;
}
.sidebar-section .sidebar ul li a:hover {
  border-left: 4px solid #eb542b;
  cursor: pointer;
  background: #f4f4f4;
}

.sidebar-section .sidebar ul li a.nuxt-link-exact-active {
  border-left: 4px solid #eb542b;
  background: #f4f4f4;
}

.sidebar-section .sidebar ul li a {
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
</style>