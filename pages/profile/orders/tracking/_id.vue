<template>
  <section>
    <div class="container">
      <div class="d-flex align-items-center mb-5">
        <nuxt-link to="/profile/orders">
          <b-icon icon="arrow-left"></b-icon
        ></nuxt-link>
        <p class="mb-0 text-uppercase ml-3">TRACKING DETAILS</p>
      </div>
      <div class="mt-5">
        <div
          class="
            d-flex
            justify-content-between
            align-items-center
            flex-md-row flex-column
          "
        >
          <div class="transaction-stage green">
            <p class="mb-0">completed</p>
          </div>
          <div>
            <p class="mb-0">
              Ordered on <span class="font-weight-bold">27 Aug</span>
            </p>
          </div>
        </div>
        <hr />
        <div class="item-showbox p-md-3 px-1">
          <div class="d-flex justify-content-between align-items-center flex-md-row flex-column">
            <div class="d-flex align-items-center product-flash flex-md-row flex-column">
              <div class="image-box mr-3">
                <img src="/product.png" class="img-fluid" alt="" />
              </div>
              <div class="product-info">
                <p class="mb-0">V-Styled White Dress for Man</p>
                <p class="mb-0">CAD $ 450 <small>(Shipping Inc.)</small></p>
              </div>
            </div>
            <div>
              <div class="order-number mb-2">
                <p>
                  <span>Order №:</span>
                  <span class="font-weight-bold">11-2355FG</span>
                </p>
              </div>
              <nuxt-link to="#" class="btn orange-btn">Details</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="transaction-flow mt-5 pl-md-5 pl-0">
        <div class="d-flex align-items-center trans-stage">
          <div class="checked-green mr-3">
            <b-icon icon="check-circle-fill"></b-icon>
          </div>
          <div>
            <h5 class="mb-0">Order Placed</h5>
            <small class="mb-0">August 27, 2022</small>
          </div>
        </div>
        <div class="d-flex align-items-center trans-stage">
          <div class="checked-green mr-3">
            <b-icon icon="check-circle-fill"></b-icon>
          </div>
          <div>
            <h5 class="mb-0">Order Received by Designer</h5>
            <small class="mb-0">August 27, 2022</small>
          </div>
        </div>
        <div class="d-flex align-items-center trans-stage">
          <div class="checked-green mr-3">
            <b-icon icon="check-circle-fill"></b-icon>
          </div>
          <div>
            <h5 class="mb-0">Designer Done with Sewing Process</h5>
            <small class="mb-0">August 27, 2022</small>
          </div>
        </div>
        <div class="d-flex align-items-center trans-stage">
          <div class="checked-green mr-3">
            <b-icon icon="check-circle-fill"></b-icon>
          </div>
          <div>
            <h5 class="mb-0">Order Packed</h5>
            <small class="mb-0">August 27, 2022</small>
          </div>
        </div>
        <div class="d-flex align-items-center trans-stage">
          <div class="checked-green mr-3">
            <b-icon icon="check-circle-fill"></b-icon>
          </div>
          <div>
            <h5 class="mb-0">Delivered for Quality Check</h5>
            <small class="mb-0">August 27, 2022</small>
          </div>
        </div>
        <div class="d-flex align-items-center trans-stage">
          <div class="checked-green not-checked mr-3">
            <!-- <b-icon icon="check-circle-fill"></b-icon> -->
          </div>
          <div>
            <h5 class="mb-0">Delivered to Logistics</h5>
            <small class="mb-0">August 27, 2022</small>
          </div>
        </div>
        <div class="d-flex align-items-center trans-stage">
          <div class="checked-green not-checked mr-3">
            <!-- <b-icon icon="check-circle-fill"></b-icon> -->
          </div>
          <div>
            <h5 class="mb-0">Order Shipped</h5>
            <small class="mb-0">August 27, 2022</small>
          </div>
        </div>
        <div class="d-flex align-items-center trans-stage">
          <div class="checked-green not-checked mr-3">
            <!-- <b-icon icon="check-circle-fill"></b-icon> -->
          </div>
          <div>
            <h5 class="mb-0">Arrived in Recepient Country</h5>
            <small class="mb-0">August 27, 2022</small>
          </div>
        </div>
        <div class="d-flex align-items-center trans-stage">
          <div class="checked-green not-checked mr-3">
            <!-- <b-icon icon="check-circle-fill"></b-icon> -->
          </div>
          <div>
            <h5 class="mb-0">Delivered to Local Logistics</h5>
            <small class="mb-0">August 27, 2022</small>
          </div>
        </div>
        <div class="d-flex align-items-center trans-stage">
          <div class="checked-green not-checked mr-3">
            <!-- <b-icon icon="check-circle-fill"></b-icon> -->
          </div>
          <div>
            <h5 class="mb-0">Order Received</h5>
            <small class="mb-0">August 27, 2022</small>
          </div>
        </div>
      </div>
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
}
</script>

<style>
</style>