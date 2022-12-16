<template>
  <div class="my-5">
    <div class="container">
      <h5 class="mb-3">Items Handpicked For You</h5>
      <div class="row">
        <div
          class="col-lg-3 col-md-4 col-6 mb-3"
          v-for="product in 4"
          :key="product"
        >
          <div class="product-card text-center">
            <img src="/product-image.png" alt=" product" class="img-fluid" />
            <div
              class="d-flex justify-content-between align-items-between pt-2"
            >
              <p class="mb-0">Ankara Jesu</p>
              <p class="mb-0">CAD $200</p>
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-between">
              <b-form-rating
                v-model="value"
                readonly
                no-border
                size="sm"
                class="p-0"
              ></b-form-rating>
              <div class="d-flex">
                <div class="mr-3">
                  <b-icon icon="heart" role="button"></b-icon>
                </div>
                <div><b-icon icon="handbag" role="button"></b-icon></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
    }
  },
}
</script>

<style>
</style>