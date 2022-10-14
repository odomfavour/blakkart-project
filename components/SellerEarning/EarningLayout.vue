<template>
  <section>
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="d-flex align-items-center">
        {{ name }}
        <span class="ml-2" v-if="name == 'Outstanding'"
          ><b-icon icon="stopwatch" font-scale="1.5" style="color: #EB3D0E;"></b-icon
        ></span>
        <span class="ml-2" v-if="name == 'Credit'"> <arrow-down /> </span>
        <span class="ml-2" v-if="name == 'Withdrawals'"> <arrow-up /> </span>
      </h6>
      <div class="search-input">
        <input
          type="search"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Search by order number"
        />
      </div>
      <div class="d-flex sort-input align-items-center">
        <p class="mb-0">select by</p>
        <select class="form-control" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
    <p class="my-5 text-center">28 SEPTEMBER 2021</p>
    <div
      class="bg-white d-flex align-items-center p-3 mb-2"
      v-for="card in 5"
      :key="card"
    >
      <div class="price-box">
        <h3
          class="text-center"
          :style="
            name == 'Credit'
              ? 'color: #2E7D32;'
              : name == 'Outstanding'
              ? 'color: #1F1F1F;'
              : 'color: #F30909;'
          "
        >
          ₦800,000
        </h3>
      </div>
      <div
        class="order-info d-flex justify-content-between align-items-center p-2"
      >
        <div class="order-main-info">
          <p class="mb-0" v-if="name == 'Outstanding' || name == 'Credit'">
            Order ID 23439r99u30e9
          </p>
          <p class="mb-0" v-if="name == 'Outstanding'">
            The due date for this payment is on the 28th of October 2022
          </p>
          <p v-if="name == 'Withdrawals'" style="color: #4d4d4d">
            Awaiting Approval
          </p>
        </div>
        <div class="d-flex align-items-center">
          <p
            v-if="name == 'Outstanding'"
            class="mb-0 mr-3"
            style="border-bottom: 0.5px solid #1f1f1f"
          >
            This order is ready
            <span><b-icon icon="check2" style="color: #2e7d32"></b-icon></span>
          </p>
          <div v-else class="d-flex">
            <p class="mb-0 mr-3">28 Sep 2022</p>
            <p class="mb-0 mr-3">17:43PM</p>
          </div>
          <div role="button">
            <b-icon icon="three-dots-vertical" font-scale="1.5"></b-icon>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowDown from '~/components/Icons/ArrowDown.vue'
import ArrowUp from '~/components/Icons/ArrowUp.vue'
export default {
  components: {
    ArrowDown,
    ArrowUp,
  },
  props: {
    name: String,
    orders: Array,
  },
}
</script>

<style>
</style>