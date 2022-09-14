<template>
  <section class="orders-tab">
    <div class="container">
      <client-only>
        <b-tabs pills>
          <b-tab title="Tab 1" active>
            <template #title>
              All
              <span class="number-sac ml-3">{{orders.length}}</span>
            </template>
            <b-card-text>
              <Orders
                v-for="(order, index) in orders"
                :key="index"
                :order="order"
              /> </b-card-text
          ></b-tab>
          <b-tab title="Tab 2">
            <template #title>
              Processing
              <span class="number-sac ml-3">{{processingOrders.length}}</span>
            </template>
            <b-card-text>
              <Orders
                v-for="(order, index) in processingOrders"
                :key="index"
                :order="order"
              /> </b-card-text
          ></b-tab>
          <b-tab title="Tab 2">
            <template #title>
              Shipped
              <span class="number-sac ml-3">1</span>
            </template>
            <b-card-text>Tab contents 2</b-card-text></b-tab
          >
          <b-tab title="Tab 2">
            <template #title>
              Completed
              <span class="number-sac ml-3">{{completedOrders.length}}</span>
            </template>
            <b-card-text>
              <Orders
                v-for="(order, index) in completedOrders"
                :key="index"
                :order="order"
              /> </b-card-text
          ></b-tab>
        </b-tabs>
      </client-only>
    </div>
  </section>
</template>

<script>
import Orders from '~/components/Profile/Orders.vue'

export default {
  name: 'orders-tab',
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
  components: {
    Orders,
  },
  computed: {
    processingOrders() {
      return this.orders.filter((order) => order.stage === 'processing')
    },
    completedOrders() {
      return this.orders.filter((order) => order.stage === 'completed')
    },
  },
}
</script>

<style>
</style>