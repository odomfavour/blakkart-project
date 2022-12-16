<template>
  <section class="my-5">
    <div class="d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column">
      <div class="transaction-stage" :class="order.stage === 'processing' ? 'green': order.stage === 'cancelled' ? 'red' : order.stage === 'completed' ? 'blue' : 'yellow' ">
        <p class="mb-0">{{order.stage}}</p>
      </div>
      <p>Ordered on <span class="font-weight-bold">{{order.date}}</span></p>
    </div>
    <hr />
    <div class="item-showbox p-3">
      <div class="d-flex justify-content-between align-items-center flex-md-row flex-column">
        <div class="d-flex align-items-center product-flash">
          <div class="image-box mr-3">
            <img src="/product.png" class="img-fluid" alt="" />
          </div>
          <div class="product-info">
            <p class="mb-0">{{order.name}}</p>
            <p class="mb-0">CAD $ 450 <small>(Shipping Inc.)</small></p>
          </div>
        </div>
        <div>
          <div class="order-number mb-2">
            <p>
              <span>Order №:</span>
              <span class="font-weight-bold">{{order.order_number}}</span>
            </p>
          </div>
          <nuxt-link :to="`/profile/orders/${order.order_number}`" class="btn orange-btn">Details</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Orders',
  props: {
      order: {
        type: Object
      },
  }
}
</script>

<style>

@media (max-width: 426px) {
  .product-flash {
    flex-direction: column;
    text-align: center;
  }
}
</style>