<template>
  <section>
    <div class="container">
      <div class="d-flex align-items-center mb-5">
        <nuxt-link to="/profile/orders"> <b-icon icon="arrow-left"></b-icon></nuxt-link>
        <p class="mb-0 text-uppercase ml-3">ORDER DETAILS</p>
      </div>
      <div class="mt-5" v-for="(order, index) in selectedOrder" :key="index">
        <div
          class="
            d-flex
            justify-content-between
            align-items-center
            flex-md-row flex-column
          "
        >
          <div
            class="transaction-stage"
            :class="
              order.stage === 'processing'
                ? 'green'
                : order.stage === 'cancelled'
                ? 'red'
                : order.stage === 'completed'
                ? 'blue'
                : 'yellow'
            "
          >
            <p class="mb-0">{{ order.stage }}</p>
          </div>
          <div>
            <p class="mb-0">
              Ordered on <span class="font-weight-bold">{{ order.date }}</span>
            </p>
            <p class="mb-0">
              <span>Order №:</span>
              <span class="font-weight-bold">{{ order.order_number }}</span>
            </p>
          </div>
        </div>
        <hr />
        <div class="item-showbox p-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center product-flash">
              <div class="image-box mr-3">
                <img src="/product.png" class="img-fluid" alt="" />
              </div>
              <div class="product-info">
                <p class="mb-0">{{ order.name }}</p>
                <p class="mb-0">CAD $ 450 <small>(Shipping Inc.)</small></p>
              </div>
            </div>
            <div class="text-center">
              <div class="mb-2">
                <nuxt-link class="btn orange-btn" :to="`/profile/orders/tracking/${order.order_number}`">TRACK ORDER</nuxt-link>
              </div>
              <div>
                <button class="btn orange-outline-btn">OPEN DISPUTE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="mt-5">
        <div class="row">
          <div class="col-md-6">
            <p>SHIPPING ADDRESS:</p>
            <h5 class="font-weight-bold">Theodore M. Connolly</h5>
            <p class="mb-0">395 Sycamore Street, San Jose, CA 95113</p>
            <p class="mb-0">+1 123 456 7899</p>
          </div>
          <div class="col-md-6">
            <p>PAYMENT INFORMATION:</p>
            <div class="mt-3">
              <div class="row">
                <div class="col-md-5">
                  <p class="mb-0 font-weight-bold">Payment Method:</p>
                  <p class="mb-0">Credit Card</p>
                </div>
                <div class="col-md-7">
                  <p class="mb-0 font-weight-bold">Payment Breakdown:</p>
                  <p class="mb-0">Product total: CAD $450</p>
                  <p class="mb-0">Shipping Fees: CAD $100</p>
                  <p class="mb-0">Total Cost: CAD $550</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="my-5">
        <div class="text-center">
            <button class="btn orange-btn">NEED HELP ON THIS ORDER?</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'profile',
  data() {
    return {
      orders: [
        {
          stage: 'processing',
          name: 'V-Styled White Dress for Man',
          image: 'product',
          order_number: '11-2355FG',
          date: '1 Jan',
        },
        {
          stage: 'in transit',
          name: 'Gucchi Bags',
          image: 'product',
          order_number: '11-2390FL',
          date: '31 May',
        },
        {
          stage: 'completed',
          name: 'Senator for Man',
          image: 'product',
          order_number: '11-2345MD',
          date: '29 Aug',
        },
        {
          stage: 'cancelled',
          name: 'Turtle neck polo',
          image: 'product',
          order_number: '11-2885OI',
          date: '1 Jun',
        },
        {
          stage: 'processing',
          name: 'Tuxedo Suits',
          image: 'product',
          order_number: '11-2099UG',
          date: '22 Nov',
        },
        {
          stage: 'completed',
          name: 'Blue Tuxedo',
          image: 'product',
          order_number: '11-2300PO',
          date: '14 Apr',
        },
      ],
    }
  },
  computed: {
    selectedOrder() {
      return this.orders.filter(
        (order) => order.order_number === this.$route.params.id
      )
    },
  },
}
</script>

<style>
</style>