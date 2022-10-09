<template>
  <section>
    <div class="row">
      <div class="col-md-4">
        <div class="mt-5">
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
          <div class="mt-3">
            <b-card>
              <div class="d-flex justify-content-between">
                <div>
                  <h5>Theodore M. Connolly</h5>
                  <p>
                    395 Sycamore Street<br />
                    San Jose, CA 95113 <br />United States.
                  </p>
                </div>
                <b-icon icon="star"></b-icon>
              </div>
            </b-card>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="checkout-section-heading">
          <h5 class="mb-0">Measurements</h5>
        </div>
        <div class="px-5">
          <div class="row">
            <div class="col-md-6">
              <div
                class="d-flex justify-content-between size-box"
                v-for="sizeBox in 8"
                :key="sizeBox"
              >
                <p class="mb-0">Bust</p>
                <p class="mb-0">23</p>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="d-flex justify-content-between size-box"
                v-for="sizeBox in 8"
                :key="sizeBox"
              >
                <p class="mb-0">Bust</p>
                <p class="mb-0">23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
        <button class="btn btn-outline-dark mr-3">EDIT DETAILS</button>
        <button class="btn btn-dark">PAY NOW!</button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>