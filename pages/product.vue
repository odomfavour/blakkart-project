<template>
  <div>
    <section>
      <div class="container">
     <div class="my-5">
       <div class="row">
        <div class="col-md-6">
          <img src="/product.png" class="img-fluid prod-img" alt="" />
          <div class="my-4">
            <div class="row">
              <div class="col-md-3 col-3 px-2">
                <img src="/product.png" class="img-fluid prod-img" alt="" />
              </div>
              <div class="col-md-3 col-3 px-2">
                <img src="/product.png" class="img-fluid prod-img" alt="" />
              </div>
              <div class="col-md-3 col-3 px-2">
                <img src="/product.png" class="img-fluid prod-img" alt="" />
              </div>
              <div class="col-md-3 col-3 px-2">
                <img src="/product.png" class="img-fluid prod-img" alt="" />
              </div>
            </div>
          </div>
        </div>
       <div class="col-md-6">
         <div class="pl-5">
          <h3 class="mt-3">Styled White dress for men</h3>
          <div class="d-flex align-items-center">
            <h3 class="mr-3">CAD $250</h3>
            <h6><del>CAD $450</del></h6>
          </div>
          <h6>Made by: <span class="text-orange text-underline">Tomilola</span></h6>
          <h6 class="my-3">Variations:</h6>
          <b-form-group
            label="FABRIC COLOR AND PATTERN"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio-group
              id="radio-group-1"
              :aria-describedby="ariaDescribedby"
              name="radio-options"
            >
              <b-form-radio
                :value="fabricPattern.id"
                v-for="fabricPattern in fabricPatterns"
                :key="fabricPattern.id"
                ><div class="option-box">
                  <img
                    :src="`/fabric/fabric-${fabricPattern.image}.png`"
                    class="img-fluid"
                    alt=""
                  /><br />
                  <small>{{ fabricPattern.text }}</small>
                </div></b-form-radio
              >
            </b-form-radio-group>
          </b-form-group>
          <div class="mt-3">
            <b-form-group label="ACCESSORIES" v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                id="radio-group-1"
                :aria-describedby="ariaDescribedby"
                name="radio-options"
              >
                <b-form-checkbox
                  :value="accessory.id"
                  v-for="accessory in accessories"
                  :key="accessory.id"
                  ><div class="option-box">
                    <img
                      :src="`/fabric/accessory-1.png`"
                      class="img-fluid"
                      alt=""
                    /><br />
                    <small>{{ accessory.text }}</small>
                  </div></b-form-checkbox
                >
              </b-form-checkbox-group>
            </b-form-group>
          </div>
          <div class="mt-3 mb-5">
            <div class="d-flex">
              <div v-for="sizeVariation in sizeVariations" :key="sizeVariation.id" class="size-box">
                {{sizeVariation.text}}
              </div>
            </div>
            <small><b-icon icon="info-circle"></b-icon> Don't know your size? <span class="text-orange"> Use the measuring chart</span></small>
          </div>
          <div>
             <b-button block class="text-uppercase mb-3 btn-black py-3">Check how this looks on you!</b-button>
             <p class="text-center">How does it work?</p>
             <div class="d-flex mb-3">
              <button class="btn btn-orange mr-2 text-uppercase">Buy now</button>
              <button class="btn btn-outline-black mr-2 text-uppercase">Add to cart</button>
              <button class="btn btn-outline-black"><b-icon icon="heart"></b-icon></button>
             </div>
             <p>Have a special request? Contact <span class="text-orange text-underline"> the designer</span></p>
          </div>
          <div class="about-section">
            <b-tabs pills>
              <b-tab title="DESCRIPTION" active
                ><b-card-text class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  dolor distinctio ratione vero dolores blanditiis laborum
                  quibusdam praesentium id, libero tenetur iste aliquid quis
                  illo recusandae fugiat ipsam expedita illum?
                </b-card-text></b-tab
              >
              <b-tab title="ABOUT DESIGNER"
                ><b-card-text class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat omnis consequatur nam ad tempora quaerat amet atque,
                  vel consequuntur enim fugiat! Adipisci iste quam voluptas
                  magni debitis porro ullam deleniti!
                </b-card-text></b-tab
              >
              <b-tab title="REVIEWS"
                ><b-card-text class="mt-4">Tab contents 2</b-card-text></b-tab
              >
            </b-tabs>
          </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    </section>
    <section>
      <div class="container">
       <div class="mb-5">
         <h3 class="text-uppercase mb-5">More from <span class="text-orange">Tomilola Stitches</span></h3>
        <div class="row">
          <div class="col-md-2" v-for="product in 6" :key="product">
             <div class="product-card">
              <img src="/product-image.png" alt=" product" class="img-fluid" />
              <div
                class="
                  d-flex
                  justify-content-between
                  align-items-between
                  pt-2
                "
              >
                <p class="mb-0">Ankara Jesu</p>
                <p class="mb-0">CAD $200</p>
              </div>
              <hr />
              <div
                class="d-flex justify-content-between align-items-between"
              >
                <b-form-rating
                  v-model="value"
                  readonly
                  no-border
                  size="sm"
                  class="p-0"
                ></b-form-rating>
                <div class="d-flex">
                  <div class="mr-3"><b-icon icon="heart" role="button"></b-icon></div>
                  <div><b-icon icon="handbag" role="button"></b-icon></div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div class="mb-5">
         <h3 class="text-uppercase mb-5">More from <span class="text-orange">Men Clothing</span></h3>
        <div class="row">
          <div class="col-md-2" v-for="product in 6" :key="product">
             <div class="product-card">
              <img src="/product-image.png" alt=" product" class="img-fluid" />
              <div
                class="
                  d-flex
                  justify-content-between
                  align-items-between
                  pt-2
                "
              >
                <p class="mb-0">Ankara Jesu</p>
                <p class="mb-0">CAD $200</p>
              </div>
              <hr />
              <div
                class="d-flex justify-content-between align-items-between"
              >
                <b-form-rating
                  v-model="value"
                  readonly
                  no-border
                  size="sm"
                  class="p-0"
                ></b-form-rating>
                <div class="d-flex">
                  <div class="mr-3"><b-icon icon="heart" role="button"></b-icon></div>
                  <div><b-icon icon="handbag" role="button"></b-icon></div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fabricPatterns: [
        { id: 1, text: 'Yellow Stripes', image: 'p1' },
        { id: 2, text: 'Black and White Pattern', image: 'p2' },
        { id: 3, text: 'Plain Army Green', image: 'p3' },
      ],
      value: 4,
      accessories: [{ id: 1, text: 'Beads', image: 'p1' }, { id: 2, text: 'Beads', image: 'p1' }, { id: 3, text: 'Beads', image: 'p1' }],
      sizeVariations: [{ id: 1, text: 'S', }, { id: 2, text: 'M' }, { id: 3, text: 'L' }, { id: 4, text: 'XL' }, { id: 5, text: 'XXL' }],
    }
  },
}
</script>

<style>
.prod-img {
  object-fit: cover;
  width: 100% !important;
}

.option-box {
  width: 80px;
}

.size-box {
  padding: 6px 10px;
  border: 1px solid #000;
  margin-bottom: 15px;
  margin-right: 10px;
  cursor: pointer;
}

.about-section .nav-pills .nav-link.active {
  background: #000 !important;
  color: white !important;
}

.text-underline {
  text-decoration: underline;
  color: #EB3D0E;
}
</style>