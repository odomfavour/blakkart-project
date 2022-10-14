<template>
  <section>
    <div class="container">
        <div class="d-flex align-items-center mb-5">
           <nuxt-link to="#"> <b-icon icon="arrow-left"></b-icon></nuxt-link>
            <p class="mb-0 text-uppercase ml-3">Shipping address</p>
        </div>
      <div class="row">
        <div class="col-md-5 mb-3" v-for="(card, index) in 3" :key="index">
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
       <div class="my-5">
        <div class="text-center">
            <button class="btn btn-black"><span><b-icon icon="pen"></b-icon></span> Edit</button>
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