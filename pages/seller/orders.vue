<template>
  <section class="seller-orders">
    <client-only>
      <b-tabs pills>
        <b-tab title="New orders" active
          ><b-card-text class="mt-4">
            <orders-layout :orders="newOrders" /> </b-card-text
        ></b-tab>
        <b-tab title="Pending orders"
          ><b-card-text class="mt-4">
            <orders-layout :orders="pendingOrders" /> </b-card-text
        ></b-tab>
        <b-tab title="Completed orders"
          ><b-card-text class="mt-4">
            <orders-layout :orders="completedOrders" /> </b-card-text
        ></b-tab>
      </b-tabs>
    </client-only>
  </section>
</template>

<script>
import OrdersLayout from '~/components/SellerOrders/OrdersLayout.vue'
export default {
  components: { OrdersLayout },
  layout: 'seller',
  data() {
    return {
      currentOrder: null,
      orders: [
        {
          name: 'Winter two piece 2022',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          orderId: '234fgrg9u30e9',
          sizes: { waist: 12, thigh: 23, bust: 22, hips: 14 },
          shade: { color: 'blue', image: 'hfdjhj' },
          accesories: { type: 'stone' },
          price: 5000,
          user: 'James Bond',
          location: 'Nigeria',
          status: 'pending',
        },
        {
          name: 'Summer three piece 2022',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          orderId: '234rrtrt0e9',
          sizes: { waist: 12, thigh: 23, bust: 22, hips: 14 },
          shade: { color: 'red', image: 'hfdjhj' },
          accesories: { type: 'brick' },
          price: 7000,
          user: 'Ben Mea',
          location: 'Usa',
          status: 'completed',
        },
        {
          name: 'Winter Sutan',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          orderId: '23jdy443',
          sizes: { waist: 12, thigh: 23, bust: 12, hips: 24 },
          shade: { color: 'blue', image: 'hfdjhj' },
          accesories: { type: 'bead' },
          price: 6000,
          user: 'Paul Brown',
          location: 'India',
          status: 'pending',
        },
        {
          name: 'Spongebob',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          orderId: '236734763478',
          sizes: { waist: 13, thigh: 33, bust: 22, hips: 14 },
          shade: { color: 'blue', image: 'hfdjhj' },
          accesories: { type: 'stone' },
          price: 5000,
          user: 'James Brown',
          location: 'China',
          status: 'new',
        },
      ],
    }
  },
  computed: {
    pendingOrders() {
      return this.orders.filter((item) => item.status === 'pending')
    },
    completedOrders() {
      return this.orders.filter((item) => item.status === 'completed')
    },
    newOrders() {
      return this.orders.filter((item) => item.status === 'new')
    },
  },
}
</script>

<style>
.seller-orders .nav {
  background: #fff;
}

.seller-orders .nav-pills .nav-item {
  width: 33% !important;
}

.seller-orders .nav-pills .nav-item .nav-link {
  text-align: center;
}

.seller-orders .nav-pills .nav-link.active {
  background: #fff;
  color: #eb3d0e !important;
  font-weight: 500;
}
</style>