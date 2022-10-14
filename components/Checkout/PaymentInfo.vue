<template>
  <section>
    <div class="checkout-first-section mt-5">
      <div class="checkout-section-heading">
        <h5 class="mb-0">Card Details</h5>
      </div>
      <div class="checkout-form-section my-5">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Card Number <span>*</span></label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="First Name"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Card Holder <span>*</span></label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Expiration Date<span>*</span></label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="MM/YY"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >CVV <span>*</span></label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="CVV"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center my-5">
      <button class="btn btn-primary mr-3" @click="tabIndex--">Details</button>
      <button class="btn btn-black" @click="tabIndex++">
        Summary <b-icon icon="chevron-right"></b-icon>
      </button>
    </div>
    <div class="checkout-cards-section">
      <div class="d-flex">
        <hr class="or-border" />
        <span class="or-text">or</span>
        <hr class="or-border" />
      </div>
      <div class="payment d-flex my-3">
        <div class="card-choice">
          <nuxt-link to="">
            <img
              src="/payment/PayPal.png"
              alt="master card"
              class="img-fluid"
            />
          </nuxt-link>
        </div>
        <div class="card-choice">
          <nuxt-link to="">
            <img
              src="/payment/Bitcoin.png"
              alt="master card"
              class="img-fluid"
            />
          </nuxt-link>
        </div>
        <div class="card-choice">
          <nuxt-link to="">
            <img
              src="/payment/Payoneer.png"
              alt="master card"
              class="img-fluid"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>