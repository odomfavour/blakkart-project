<template>
  <div class="d-flex seller-orders">
    <div class="left-section">
      <div v-if="orders.length > 0">
        <div v-for="order in orders" :key="order.orderId">
          <div
            class="d-flex align-items-center justify-content-between order-card"
            :class="`${
              currentOrder !== null && order.orderId == currentOrder.orderId
                ? 'active-card'
                : ''
            }`"
            role="button"
            @click="displayOrder(order.orderId)"
          >
            <div class="d-flex">
              <div class="mr-2 text-center">
                <b-img
                  v-bind="{
                    blank: true,
                    width: 40,
                    height: 40,
                    class: 'm1',
                  }"
                  rounded="circle"
                  blank-color="#777"
                  alt="Transparent image"
                ></b-img>
              </div>
              <div class="mr-3">
                <p class="mb-0 font-weight-bold">{{ order.name }}</p>
                <p class="mb-0" style="color: #4D4D4D;">{{ order.desc.substring(0, 18) + '...' }}</p>
              </div>
            </div>
            <small class="mb-0">21:56</small>
          </div>
        </div>
      </div>
    </div>
    <div class="right-section">
      <div v-if="currentOrder !== null">
        <div class="person-info">
          <div class="d-flex">
            <div class="mr-3 text-center">
              <b-img
                v-bind="{
                  blank: true,
                  width: 50,
                  height: 50,
                  class: 'm1',
                }"
                rounded="circle"
                blank-color="#777"
                alt="Transparent image"
              ></b-img>
            </div>
            <div class="mr-2">
              <p class="mb-0">{{ currentOrder.user }}</p>
              <p class="mb-0">
                <span
                  ><b-icon icon="geo-alt-fill" style="color: #2bc40c"></b-icon
                ></span>
                {{ currentOrder.location }}
              </p>
            </div>
          </div>
        </div>
        <div class="my-3">
          <div class="d-flex">
            <div
              class="order-id mr-2"
              style="background: #f4f4f4; border-radius: 12px; padding: 10px"
            >
              <p class="text-orange mb-0">
                Order ID : {{ currentOrder.orderId }}
              </p>
            </div>
            <div
              class="order-price d-flex align-items-center"
              style="
                background: rgba(0, 82, 180, 0.1);
                border-radius: 12px;
                padding: 8px 24px;
              "
            >
              <p class="mb-0 mr-1" style="color: #428bc1">NGN</p>
              <h5 class="mb-0" style="color: #3b5998">
                {{ currentOrder.price }}
              </h5>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <p class="mb-0 font-weight-bold">{{ currentOrder.name }}</p>
          <p class="mb-0">{{ currentOrder.desc }}</p>
        </div>
        <div class="mb-3">
          <div class="row">
            <div class="col-md-4" v-for="item in 3" :key="item">
              <img src="/seller/pic-1.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <h5 class="mb-3">Preferences</h5>
        <p>Sizes</p>
        <div class="d-flex">
          <div
            class="text-center size-box"
            v-for="(item, propertyName) in currentOrder.sizes"
            :key="propertyName"
          >
            <p class="mb-0">{{ propertyName }}</p>
            <h5 class="mb-0">{{ item }}</h5>
          </div>
        </div>
        <div class="mt-3">
          <div class="row">
            <div class="col-md-3">
              <p class="mb-0">Shade</p>
              <div>
                <img src="/seller/bead.png" class="w-100" alt="" />
                <p>Blue Shade</p>
              </div>
            </div>
            <div class="col-md-3">
              <p class="mb-0">Accessories</p>
              <div>
                <img src="/seller/bead.png" class="w-100" alt="" />
                <p>Stones</p>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex mt-5">
          <button class="btn-black mr-3 px-3 py-2">Accept</button>
          <button class="btn-outline-dark px-3 py-2">Report a problem</button>
        </div>
      </div>
      <div v-else>
        <p>Nothing yet</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentOrder: null,
    }
  },
  props: {
    orders: Array,
  },
  methods: {
    displayOrder(id) {
      let currentItem = this.orders.filter((item) => item.orderId === id)
      this.currentOrder = currentItem[0]
      console.log(this.currentOrder)
    },
  },
}
</script>

<style>
.order-card {
  padding: 20px;
  border: 0.5px solid #dddddd;
}

.active-card {
  background: linear-gradient(
      0deg,
      rgba(235, 61, 14, 0.1),
      rgba(235, 61, 14, 0.1)
    ),
    #ffffff;
  border: 0.5px solid rgba(235, 61, 14, 0.1) !important;
}
.seller-orders {
  min-height: 100vh;
}

.seller-orders .left-section {
  width: 35%;
}

.seller-orders .right-section {
  width: 65%;
  background: #fff;
  padding: 20px;
}

.size-box {
  width: 15%;
  border-right: 1px solid #ccc;
}
</style>