<template>
  <section>
    <div class="category-banner"></div>
    <div class="pt-5">
      <div class="filter-display mb-2 d-none d-lg-block">
        <b-form-tags
          input-id="tags-pills"
          tag-variant="secondary"
          v-model="filterOptions"
          separator=" "
          disabled
        ></b-form-tags>
      </div>
      <div class="d-md-none">
        <div
          class="
            mobile-filter
            d-flex
            justify-content-between
            align-items-center
            py-3
          "
        >
          <p role="button"><b-icon icon="menu-button-wide"></b-icon> Filter</p>
          <p><b-icon icon="menu-button-wide"></b-icon>Filter</p>
        </div>
      </div>
      <div class="clothes-display">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-12 mb-4 text-center"
            v-for="product in 10"
            :key="product"
          >
            <div class="product-card">
              <nuxt-link to="/product">
                <img
                  src="/product-image.png"
                  alt=" product"
                  class="img-fluid"
                />
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-between
                    px-3
                    pt-2
                  "
                >
                  <p class="mb-0">Ankara Jesu</p>
                  <p class="mb-0">CAD $200</p>
                </div></nuxt-link
              >
              <hr />
              <div
                class="d-flex justify-content-between align-items-between px-3"
              >
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
        <section class="pagination-block">
          <div class="my-3">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              align="center"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
            ></b-pagination>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { watch } from 'vue'
export default {
  layout: 'market',
  data() {
    return {
      value: 4,
      filteredOptions: ['apple', 'orange', 'grape'],
      rows: 100,
      currentPage: 3,
    }
  },
  computed: {
    // count() {
    //     return this.$store.state.counter;
    // },
    filterOptions: {
      get() {
        return this.$store.state.filterOptions
      },
      set(newValue) {
        console.log(newValue)
      },
    },
  },
  watch: {
    filterOptions(newVal, oldVal) {
      /* Finds the value(s) that  got removed */
      const removed = oldVal.filter((v) => !newVal.includes(v))
      if (removed && removed.length > 0) {
        alert(`${removed} was removed from the list`)
        /* Do something here */
      }
    },
  },
}
</script>

<style>
.category-banner {
  background: url('/men.png') no-repeat;
  height: 220px;
  background-size: cover;
  background-position: center;
  width: 100%;
}

.b-rating {
  width: 50%;
}

.mobile-filter {
  display: block;
}

@media (max-width: 426px) {
  .category-banner {
    width: 100%;
  }
  .mobile-filter {
    display: none;
  }
}
</style>