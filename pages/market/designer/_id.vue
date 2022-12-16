<template>
  <section>
    <div class="px-md-5">
      <div
        class="
          text-md-left text-center
          designer
          d-flex
          flex-md-row flex-column
          align-items-center
          mt-5
        "
      >
        <img
          :src="`/market/${designerInfo[0].image}.png`"
          class="img-fluid"
          alt=""
        />
        <div class="ml-md-3">
          <h4 class="text-orange my-3 fw-bolder">{{ designerInfo[0].name }}</h4>
          <p class="name">by {{ designerInfo[0].owner }}</p>
          <p>
            <b-icon icon="geo-alt" class="text-orange"></b-icon>
            <span class="location">{{ designerInfo[0].location }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="pt-md-5">
      <div class="px-md-5">
        <p class="mt-3">
          Over 100 male clothing stores to select from and blahh blahh blahhh
        </p>
        <div class="my-4">
          <div class="search-section">
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
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <b-icon
                icon="ui-radios"
                font-scale="2"
                role="button"
                @click="$store.commit('toggleMarketBar')"
                class="text-danger mr-2"
              ></b-icon>
              <p class="mb-0">Filter</p>
            </div>
          </div>
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
            v-for="product in designerInfo[0].products"
            :key="product.id"
          >
            <div class="product-card">
              <nuxt-link :to="`/product/${product.name.replaceAll(' ', '-')}`">
                <div class="text-center image-card">
                  <img
                    :src="`/market/${product.image}.png`"
                    alt="product"
                    class="img-fluid"
                  />
                </div>
                <div class="">
                  <h5 class="mt-3 mb-0">Summer piece 2022</h5>
                  <p class="desc mb-0">Men’s casual fashion short....</p>
                  <p class="price mb-0">₦17,000</p>
                  <div class="d-flex justify-content-start d-md-none mb-3">
                    <b-form-rating
                      v-model="value"
                      readonly
                      no-border
                      size="sm"
                      class="p-0"
                    ></b-form-rating>
                  </div>
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      flex-md-row flex-column
                    "
                  >
                    <div class="d-none d-md-block">
                      <b-form-rating
                        v-model="value"
                        readonly
                        no-border
                        size="sm"
                        class="p-0"
                      ></b-form-rating>
                    </div>
                    <button class="btn btn-outline-orange">Add to cart</button>
                  </div>
                </div>
              </nuxt-link>
              <div class="favorite-stamp">
                <b-icon icon="heart" class="text-outline-dark"></b-icon>
              </div>
              <div class="discount-box">
                <p class="mb-0">-30%</p>
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
  data() {
    return {
      value: 4,
      filteredOptions: ['apple', 'orange', 'grape'],
      rows: 100,
      currentPage: 3,
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
              name: 'Summer piece one',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece two',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece three',
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
              name: 'Summer piece one',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece two',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece three',
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
              name: 'Summer piece one',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece two',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece three',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-3',
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
              name: 'Summer piece one',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece two',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece three',
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
              name: 'Summer piece one',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece two',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece three',
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
              name: 'Summer piece one',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece two',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece three',
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
              name: 'Summer piece one',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-1',
            },
            {
              id: 2,
              name: 'Summer piece two',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-2',
            },
            {
              id: 3,
              name: 'Summer piece three',
              desc: 'Men’s casual fashion short hdgdj jhdihyuydsydysidusidudusidhsdhiidisdisdiss....',
              image: 'prod-3',
            },
          ],
        },
      ],
      selectedDesigner: [],
    }
  },
  methods: {
    //  toggleSidebar() {
    //   console.log('heee')
    //   document.body.classList.toggle('filter-open')
    // },
  },
  created() {
    console.log(this.$route.params)
  },
  computed: {
    // count() {
    //     return this.$store.state.counter;
    // },
    designerInfo() {
      return this.designers.filter(
        (item) => item.name.replaceAll(' ', '-') === this.$route.params.id
      )
    },
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
<style style="scoped">
.product-card {
  background: #fdfdfd;
  /* padding: 30px; */
}

.image-card {
  position: relative;
}

.product-card .favorite-stamp {
  position: absolute;
  top: 30px;
  right: 30px;
}

.product-card .discount-box {
  position: absolute;
  top: 30px;
  left: 30px;
  background: pink;
  color: red;
  padding: 3px;
  border-radius: 4px;
}

.designer h4 {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 12px;
}

.designer .name {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000;
  margin-bottom: 10px;
}

.designer .location {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
}

.product-card .b-rating {
  font-size: 14px;
  width: 50%;
}

@media (max-width: 426px) {
  .category-banner {
    height: 100px !important;
  }

  .category-banner h3 {
    font-size: 18px;
  }

  .product-card {
    padding: 0;
  }

  .product-card h5 {
    font-size: 12px;
    font-weight: 500;
  }
  .product-card .desc {
    font-size: 12px;
    font-weight: 400;
  }

  .product-card .price {
    font-size: 14px;
    font-weight: 500;
  }

  .product-card .b-rating {
    margin: 0 !important;
  }

  .discount-box p {
    font-size: 12px;
  }

  .product-card .discount-box,
  .product-card .favorite-stamp {
    top: 0;
  }

  .favorite-stamp svg {
    height: 18px !important;
  }
}
</style>
