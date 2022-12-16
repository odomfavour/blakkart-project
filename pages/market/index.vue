<template>
  <section>
    <div class="category-banner"></div>
    <div class="pt-5">
      <div class="search-section d-md-none d-block">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <b-icon icon="search"></b-icon>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search here..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div class="filter-display mb-2 d-none d-md-block">
        <b-form-tags
          input-id="tags-pills"
          tag-variant="secondary"
          v-model="filterOptions"
          separator=" "
          disabled
        ></b-form-tags>
      </div>
      <div class="clothes-display">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-6 mb-4"
            v-for="(designer, index) in designers"
            :key="index"
          >
            <div class="product-card designer-card">
              <nuxt-link
                :to="`/market/designer/${designer.name.replaceAll(' ', '-')}`"
              >
                <section class="product-image-box text-center">
                  <img
                    :src="`/market/${designer.image}.png`"
                    alt=" product"
                    class="img-fluid"
                  />
                </section>
                <div class="pt-2 text-center">
                  <h5 class="business">{{ designer.name }}</h5>
                  <p class="mb-0 text-orange fw-semibold location">
                    {{ designer.location }}, {{ designer.country }}
                  </p>
                  <b-form-rating
                    v-model="designer.rating"
                    readonly
                    no-border
                    size="sm"
                    class="p-0 mx-auto"
                  ></b-form-rating>
                  <div class="d-flex justify-content-center align-items-center">
                    <b-icon icon="tag-fill" class="text-orange"></b-icon>
                    <p class="mb-0 ml-2">{{ designer.purchases }}</p>
                  </div>
                  <div class="favorite-stamp">
                    <b-icon icon="heart" class="text-dark"></b-icon>
                  </div></div
              ></nuxt-link>
            </div>
          </div>
        </div>
        <section class="pagination-block">
          <div class="my-3">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              align="center"
              prev-text="Prev"
              next-text="Next"
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
  // middleware: 'auth',
  data() {
    return {
      value: 4,
      filteredOptions: ['apple', 'orange', 'grape'],
      rows: 100,
      currentPage: 3,
      isOnsite: true,
      isOnline: false,
      designers: [
        {
          id: 1,
          name: 'NGZ Fashion hauz',
          location: 'Port Harcourt',
          country: 'Nigeria',
          image: 'product',
          owner: 'Ngozi Chika',
          rating: 3,
          purchases: 2000,
          products: [
            {
              id: 1,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-3',
            },
          ],
        },
        {
          id: 2,
          name: 'Luiz Fashion',
          location: 'Texas',
          country: 'US',
          image: 'vitton',
          owner: 'Luiz',
          rating: 5,
          purchases: 20000,
          products: [
            {
              id: 1,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod',
            },
            {
              id: 3,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-3',
            },
          ],
        },
        {
          id: 3,
          name: 'Descobee',
          location: 'Lagos',
          country: 'Nigeria',
          image: 'zara',
          owner: 'Desco',
          rating: 4,
          purchases: 1000,
          products: [
            {
              id: 1,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod',
            },
          ],
        },
        {
          id: 4,
          name: 'Far Away',
          location: 'lafod',
          country: 'China',
          image: 'product',
          owner: 'Farell',
          rating: 4,
          purchases: 1500,
          products: [
            {
              id: 1,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-3',
            },
          ],
        },
        {
          id: 5,
          name: 'Billya Ona',
          location: 'Port Harcourt',
          country: 'Nigeria',
          owner: 'Billy',
          image: 'product',
          rating: 3,
          purchases: 2000,
          products: [
            {
              id: 1,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-3',
            },
          ],
        },
        {
          id: 6,
          name: 'Zara fair',
          location: 'South Hampton',
          country: 'Canada',
          image: 'zara',
          owner: 'Zarar',
          rating: 5,
          purchases: 2000,
          products: [
            {
              id: 1,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-3',
            },
          ],
        },
        {
          id: 7,
          name: 'Nosa Oba',
          location: 'Port Harcourt',
          country: 'Nigeria',
          image: 'vitton',
          rating: 3,
          purchases: 1100,
          products: [
            {
              id: 1,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece 2022',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-3',
            },
          ],
        },
      ],
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
  methods: {
    changeOnline() {
      this.isOnline = true
      this.isOnsite = false
    },
  },
  created() {
    // console.log(params)
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
.prod-img {
  height: 300px;
  object-fit: cover;
}

.designer-card {
  border: 1px solid #cccccc;
  border-radius: 12px;
  padding: 30px;
  position: relative;
}

.designer-card .favorite-stamp {
  position: absolute;
  top: 30px;
  right: 30px;
}

@media (max-width: 478px) {
  .product-card .business {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
  }

  .product-card .location {
    font-style: normal;
    font-weight: 600;
    font-size: 8px;
    font-family: 'Montserrat';
  }
}

.product-image-box img {
  width: 144px;
  height: 144px;
  border-radius: 50%;
}
</style>