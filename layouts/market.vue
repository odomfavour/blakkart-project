<template>
  <section>
    <Header />
    <main>
      <div class="container">
        <div class="d-flex">
          <div class="side-info-section px-2 pt-5">
            <div class="person-info text-center">
              <h2>Hi, <span class="text-orange">Ngozi</span></h2>
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
                    orange-btn
                  "
                  style="font-size: 12px; padding: 10px 15px; cursor: pointer"
                >
                  UPDATE PROFILE
                </nuxt-link>
             </div>
              </div>
             <div v-else>
               <p>
                Need a style not listed here? <b>Create a custom request for the designer.</b>
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
      <section class="py-5">
        <h4 class="text-center mb-5">BROWSE OTHER CATEGORIES</h4>
        <ShopCategories />
      </section>
    </main>
    <Footer />
  </section>
</template>

<script>
export default {
  data() {
    return {
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
  },
  computed: {
    mergedOptions() {
      // console.log(this.$store.state.filterOptions)
      return this.selectedStyles.concat(this.selectedFabrics)
    },
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

.b-rating {
  width: 50%;
}

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

@media (max-width: 426px) {
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
}
</style>