<template>
  <section>
    <Header />
    <main>
      <div class="container">
        <div class="d-flex">
          <div class="side-info-section px-2 pt-5">
            <button
              class="p-1 mb-2 d-lg-none d-block"
              @click="$store.commit('toggleMarketBar')"
            >
              <b-icon icon="chevron-double-right"></b-icon>
            </button>
            <div class="person-info text-center">
              <h2>
                Hi,
                <span class="text-orange text-capitalize" v-if="$auth.user">{{
                  $auth.user.first_name
                }}</span>
              </h2>
              {{ $auth.loggedIn }}
              <!-- {{$auth.loggedIn}} -->
              <div v-if="$route.path === '/market'">
                <p>
                  Update your measurements to<br />
                  request custom order
                </p>
                <div class="d-flex justify-content-center">
                  <nuxt-link
                    to="/profile/measurements"
                    class="
                      d-flex
                      justify-content-center
                      align-items-center
                      btn-filled-orange-sq
                    "
                    style="font-size: 12px; padding: 10px 15px; cursor: pointer"
                  >
                    UPDATE PROFILE
                  </nuxt-link>
                </div>
              </div>
              <div v-else>
                <p>
                  Need a style not listed here?
                  <b>Create a custom request for the designer.</b>
                </p>
                <div class="d-flex justify-content-center">
                  <nuxt-link
                    to="/custom"
                    class="
                      d-flex
                      justify-content-center
                      align-items-center
                      orange-btn
                    "
                    style="font-size: 12px; padding: 10px 15px; cursor: pointer"
                  >
                    MAKE CUSTOM REQUEST
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="pt-5 filter-section">
              <p>Filter By:</p>
              <div class="pt-5">
                <form>
                  <section v-if="$route.path === '/market'">
                    <div>
                      <b-form-group
                        label="LOCATION"
                        v-slot="{ ariaDescribedby }"
                      >
                        <b-form-checkbox-group
                          id="checkbox-group-2"
                          v-model="selectedStyles"
                          :aria-describedby="ariaDescribedby"
                          name="flavour-2"
                          @change="addFilter"
                        >
                          <b-form-checkbox
                            :value="location.name"
                            v-for="location in locations"
                            :key="location.id"
                            class="mb-2"
                            >{{ location.name }} ({{
                              location.count
                            }})</b-form-checkbox
                          >
                        </b-form-checkbox-group>
                      </b-form-group>
                    </div>
                    <div>
                      <b-form-group label="GENDER" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group
                          id="checkbox-group-2"
                          v-model="selectedStyles"
                          :aria-describedby="ariaDescribedby"
                          name="flavour-2"
                          @change="addFilter"
                        >
                          <b-form-checkbox
                            :value="location.name"
                            v-for="location in locations"
                            :key="location.id"
                            class="mb-2"
                            >{{ location.name }} ({{
                              location.count
                            }})</b-form-checkbox
                          >
                        </b-form-checkbox-group>
                      </b-form-group>
                    </div>
                  </section>
                  <section v-if="$route.path !== '/market'">
                    <div>
                      <b-form-group label="STYLE" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group
                          id="checkbox-group-2"
                          v-model="selectedStyles"
                          :aria-describedby="ariaDescribedby"
                          name="flavour-2"
                          @change="addFilter"
                        >
                          <b-form-checkbox
                            :value="style.name"
                            v-for="style in styles"
                            :key="style.id"
                            class="mb-2"
                            >{{ style.name }} ({{
                              style.count
                            }})</b-form-checkbox
                          >
                        </b-form-checkbox-group>
                      </b-form-group>
                    </div>
                    <div class="pt-5">
                      <b-form-group
                        label="Fabrics"
                        v-slot="{ ariaDescribedby }"
                      >
                        <b-form-checkbox-group
                          id="checkbox-group-2"
                          v-model="selectedFabrics"
                          :aria-describedby="ariaDescribedby"
                          name="flavour-2"
                          @change="addFilter"
                        >
                          <b-form-checkbox
                            :value="fabric.name"
                            v-for="fabric in fabrics"
                            :key="fabric.id"
                            class="mb-2"
                            >{{ fabric.name }} ({{
                              fabric.count
                            }})</b-form-checkbox
                          ><br />
                        </b-form-checkbox-group>
                      </b-form-group>
                    </div>
                  </section>
                </form>
              </div>
            </div>
          </div>
          <div class="main-section">
            <div class="px-2">
              <nuxt />
            </div>
          </div>
        </div>
      </div>
      <section class="py-5" v-if="$route.path === '/market'">
        <h4 class="text-center mb-5">BROWSE OTHER CATEGORIES</h4>
        <ShopCategories />
      </section>
      <section class="py-5" v-else>
        <featured-designers />
      </section>
    </main>
    <Footer />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import FeaturedDesigners from '~/components/FeaturedDesigners.vue'
export default {
  components: { FeaturedDesigners },
  // middleware: 'auth',
  data() {
    return {
      user: {},
      styles: [
        { id: 1, name: 'One Kind of Style', count: 11 },
        { id: 2, name: 'Another One', count: 11 },
        { id: 3, name: 'Ankara Style', count: 11 },
        { id: 4, name: 'Jumpsuit', count: 11 },
        { id: 5, name: 'Iro and Buba', count: 11 },
      ],
      fabrics: [
        { id: 1, name: 'Lace', count: 11 },
        { id: 2, name: 'Ankara', count: 13 },
        { id: 3, name: 'Satin', count: 9 },
        { id: 4, name: 'Silk', count: 0 },
        { id: 5, name: 'Cotton', count: 5 },
      ],
      locations: [
        { id: 1, name: 'Port Harcourt', count: 11 },
        { id: 2, name: 'FCT', count: 11 },
        { id: 3, name: 'Lagos', count: 11 },
        { id: 4, name: 'Abeokuta', count: 11 },
        { id: 5, name: 'Ogun State', count: 11 },
        { id: 6, name: 'Ibadan', count: 11 },
      ],
      genders: [
        { id: 1, name: 'Male', count: 11 },
        { id: 1, name: 'Female', count: 11 },
      ],
      selectedStyles: [],
      selectedFabrics: [],
    }
  },
  methods: {
    addFilter() {
      this.$store.commit('addFilter', this.mergedOptions)
    },
    toggleSidebar() {
      console.log('heee')
      document.body.classList.toggle('filter-open')
    },
  },
  computed: {
    //  ...mapGetters(['isAuthenticated', 'loggedInUser']),
    mergedOptions() {
      // console.log(this.$store.state.filterOptions)
      return this.selectedStyles.concat(this.selectedFabrics)
    },
  },
  created() {
    if (process.client) {
      this.$auth.setUser(JSON.parse(localStorage.getItem('blacArtUser')))
      // console.log(this.$auth.user)
    }
  },
}
</script>

<style>
.side-info-section {
  width: 330px;
  min-height: 100vh;
  /* background: blue; */
}

.main-section {
  width: calc(100% - 330px);
  min-height: 100vh;
}

.person-info .black-btn {
  font-size: 12px;
}

/* .person-info span, .text-gradient {
    background: linear-gradient(229.78deg, #EB542B 51.16%, #F9DF49 110.69%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} */

.filter-section .custom-control-inline {
  display: block !important;
}

/* .b-rating {
  width: 50%;
} */

.text-orange {
  color: #eb3d0e;
}

.btn-orange {
  background: #eb3d0e;
  color: white;
  padding: 10px 32px;
}

.checkout-form-section {
  width: 60%;
  margin: 0 auto;
}

.checkout-section-heading {
  width: 90%;
  margin: 20px auto;
  background: #eb542b;
  color: #fff;
  padding: 15px 0;
}

.checkout-section-heading h5 {
  font-size: 18px !important;
  font-weight: 400;
}

.checkout-section-heading ~ p {
  width: 70%;
  margin: 0 auto;
}

.checkout-section-heading h5 {
  width: 90%;
  margin: 0 auto;
}

.checkout-cards-section {
  width: 20%;
  margin: 0 auto;
}

.checkout-cards-section .card-choice {
  justify-content: space-between;
  width: 33%;
}

.checkout-forms .nav-pills .nav-link.active {
  background: #241c1c !important;
  color: #fff !important;
}

.checkout-forms .nav-pills .nav-link {
  border: none !important;
}

.number-sac {
  border-radius: 50%;
  padding: 1px 6px;
}

.checkout-forms .nav-pills .nav-link .number-sac {
  background: #241c1c;
  color: #fff;
}

.checkout-forms .nav-pills .nav-link.active .number-sac {
  color: #241c1c;
  background: #fff;
}

/* .checkout-forms .nav-pills .nav-item:nth-child(1) {
  display: none !important;
} */

.checkout-forms .nav {
  width: 100% !important;
}

.checkout-forms .nav li {
  width: 25%;
}

.category-banner {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.518), rgba(0, 0, 0, 0.326)),
    url('/men.png') no-repeat;
  height: 220px;
  background-size: cover;
  background-position: center;
  width: 100%;
}

.product-card {
  transition: 0.4s all ease-in-out;
}

.product-card a {
  color: #000;
  text-decoration: none;
}

/* .product-card .favorite-stamp {
  display: none;
}

.product-image-box {
  position: relative;
}

.product-card:hover .favorite-stamp {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.626);
  display: flex;
  justify-content: flex-end;
  padding: 10px;
} */

.favorite-stamp svg{
  height: 31px;
  width: 30px;
}

.search-section .input-group-text {
  border-radius: 0.25rem 0 0 0.25rem;
  background: #fff;
  border-right: none;
}

.product-card .b-rating {
  font-size: 20px;
  padding: 0 !important;
  width: 70%;
  color: #eb3d0e;
}

@media (max-width: 426px) {
  .product-card .b-rating {
    font-size: 10px;
  }
  .side-info-section {
    display: none;
  }

  .main-section {
    width: 100%;
  }

  main {
    background: #FBFBFB;
  }
  .checkout-forms .nav li {
    width: auto;
  }

  .checkout-section-heading,
  .checkout-form-section,
  .checkout-section-heading ~ p {
    width: 100%;
  }

  .checkout-cards-section {
    width: 100%;
  }

  .btn-orange {
    font-size: 14px;
  }

  .filter-open .side-info-section {
    position: fixed !important;
    left: 0;
    background: #fff;
    min-height: 100vh !important;
    top: 0;
    z-index: 9999;
    display: block;
    width: 70%;
  }

  /* .filter-open .filter-section {
    height: 100%;
  } */
}
</style>