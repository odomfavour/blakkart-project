<template>
  <section>
    <div class="container">
      <client-only>
        <div class="my-5 checkout-forms">
        <b-tabs pills v-model="tabIndex">
          <b-tab active>
            <template #title>
              <span class="number-sac mr-3">1</span>
              Details
            </template>
            <b-card-text>
              <div class="checkout-first-section">
                <div class="checkout-section-heading">
                  <h5 class="mb-0">Shipping information</h5>
                </div>
                <div class="checkout-form-section my-5">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="firstName" class="form-label"
                          >First Name <span>*</span></label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="firstName"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="lastName" class="form-label"
                          >Last Name <span>*</span></label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="phoneNumber" class="form-label"
                          >Phone Number<span>*</span></label
                        >
                        <input
                          type="tel"
                          class="form-control"
                          id="phoneNumber"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="email" class="form-label"
                          >Email Address <span>*</span></label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="address1" class="form-label"
                          >Address 1 <span>*</span></label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="address1"
                          placeholder="address"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="address2" class="form-label"
                          >Address 2</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="address2"
                          placeholder="address2"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Email address</label
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
                          >Email address</label
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
                          >City <span>*</span></label
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
                          >Zip/Postal Code <span>*</span></label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="checkout-first-section mt-5">
                <div class="checkout-section-heading">
                  <h5 class="mb-0">Measurements</h5>
                </div>
                <p>Do you know your size? Here is a DIY Content</p>
                <div class="checkout-form-section my-5">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Arm Length <span>*</span></label
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
                          >Waist Size <span>*</span></label
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
                          >Height<span>*</span></label
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
                          >Bust <span>*</span></label
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
                          >Collarbone <span>*</span></label
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
                          >Another required</label
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
                          >Email address</label
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
                          >Email address</label
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
                          >City <span>*</span></label
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
                          >Zip/Postal Code <span>*</span></label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button class="btn-black" @click="tabIndex++">
                  Proceed to Payment <b-icon icon="chevron-right"></b-icon>
                </button>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab>
            <template #title>
              <span class="number-sac mr-3">2</span>
              PAYMENT INFORMATION
            </template>
            <b-card-text>
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
            </b-card-text>
          </b-tab>
          <b-tab>
            <template #title>
              <span class="number-sac mr-3">3</span>
              ORDER SUMMARY
            </template>
            <b-card-text>
              <div class="checkout-first-section">
                <div class="checkout-section-heading">
                  <h5 class="mb-0">Shipping information</h5>
                </div>
                <div class="checkout-form-section my-5">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                          >First Name <span>*</span></label
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
                          >Last Name <span>*</span></label
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
                          >Phone Number<span>*</span></label
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
                          >Email Address <span>*</span></label
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
                          >Address 1 <span>*</span></label
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
                          >Address 2</label
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
                          >Email address</label
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
                          >Email address</label
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
                        <label for="city" class="form-label"
                          >City <span>*</span></label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="city"
                          placeholder="city"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="postalCode" class="form-label"
                          >Zip/Postal Code <span>*</span></label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="postalCode"
                          placeholder="11232"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="checkout-first-section mt-5">
                <div class="checkout-section-heading">
                  <h5 class="mb-0">Measurements</h5>
                </div>
                <p>Do you know your size? Here is a DIY Content</p>
                <div class="checkout-form-section my-5">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="armLength" class="form-label"
                          >Arm Length <span>*</span></label
                        >
                        <input
                          type="number"
                          class="form-control"
                          id="armLength"
                          placeholder="112"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Waist Size <span>*</span></label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Height<span>*</span></label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Bust <span>*</span></label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Collarbone <span>*</span></label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Another required</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Email address</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Email address</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div class="text-center">
                <button class="btn-dark">Pay Now</button>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab>
            <template #title>
              <span class="number-sac mr-3">4</span>
              ORDER COMPLETE
            </template>
            <b-card-text> Tab contents 2 </b-card-text>
          </b-tab>
        </b-tabs>
      </div>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 1,
    }
  },
}
</script>

<style>
</style>