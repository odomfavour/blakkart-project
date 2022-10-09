<template>
  <section>
    <div class="container">
      <div class="d-flex align-items-center mb-5">
        <nuxt-link to="/profile/overview">
          <b-icon icon="arrow-left"></b-icon
        ></nuxt-link>
        <p class="mb-0 text-uppercase ml-3">Payment methods</p>
      </div>
      <div class="row">
        <div class="col-md-5 mb-3" v-for="(card, index) in 3" :key="index">
          <b-card>
            <div class="d-flex justify-content-between">
              <div>
                <p>Card Type</p>
                <p>Card Number</p>
                <p>Expiry Date</p>
                <p>CVV</p>
              </div>
              <div>
                <p>VISA</p>
                <p>4916 **** **** 3422</p>
                <p>12/2025</p>
                <p>***</p>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <img src="/profile/Mastercard.png" class="img-fluid" alt="" />
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'profile',
}
</script>

<style>
</style>