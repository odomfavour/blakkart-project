<template>
  <section>
    <div class="inner-page">
      <div v-if="isPlain">
        <div class="">
          <div class="row">
            <div class="col-md-4">
              <div class="card" role="button" @click="showAddPage">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <img src="/seller/add.png" alt="" class="mr-3 img-fluid" />
                    <p class="mb-0">Add new item</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" role="button">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <img
                      src="/seller/archive.png"
                      alt=""
                      class="mr-3 img-fluid"
                    />
                    <p class="mb-0">Archived item(s)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="addItem">
        <div class="pt-5">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="itemName" class="form-label">Name of item</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="eg.tuxedo"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Description of item <span>*</span></label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="itemName" class="form-label">Name of item</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="eg.tuxedo"
                />
              </div>
              <div class="mb-3">
                <b-form-group
                  label="Available sizes"
                  v-slot="{ ariaDescribedby }"
                >
                  <b-form-checkbox-group
                    id="checkbox-group-2"
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-2"
                  >
                    <b-form-checkbox value="orange">Orange</b-form-checkbox>
                    <b-form-checkbox value="apple">Apple</b-form-checkbox>
                    <b-form-checkbox value="pineapple"
                      >Pineapple</b-form-checkbox
                    >
                    <b-form-checkbox value="grape">Grape</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
              </div>
              <div class="mb-3">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  Custom size order available
                </b-form-checkbox>
              </div>
              <div class="mb-3">
                <label for="itemName" class="form-label"
                  >Available accessories</label
                >
                <div class="d-flex">
                  <div class="assessory-box">
                    <div class="accessories"></div>
                  </div>
                  <div class="assessory-box">
                    <div
                      class="
                        accessories-add
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      role="button"
                    >
                      <b-icon icon="plus" font-scale="1.5"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <label for="">Add images of item(s) for sale*</label>
              <div class="mb-3">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="image-add" role="button">
                      <b-icon icon="plus" font-scale="1.5"></b-icon>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="image-add" role="button">
                      <b-icon icon="plus" font-scale="1.5"></b-icon>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="image-add" role="button">
                      <b-icon icon="plus" font-scale="1.5"></b-icon>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="image-add" role="button">
                      <b-icon icon="plus" font-scale="1.5"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="">Available Shades</label>
                <div class="assessory-box">
                  <div
                    class="
                      accessories-add
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    role="button"
                  >
                    <b-icon icon="plus" font-scale="1.5"></b-icon>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div class="row">
                  <div class="col-md-6">
                    <label for="itemName" class="form-label">Price*</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="0.00"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="itemName" class="form-label"
                      >Discount Percentage</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div class="d-flex">
                  <div class="btn btn-secondary mr-3">save</div>
                  <div class="btn btn-secondary">Report a problem</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex align-items-center justify-content-center empty-layout"
        v-else
      >
        <div class="text-center empty-inner">
          <b-icon icon="clipboard"></b-icon>
          <h6 class="mt-3">You have not added an item</h6>
        </div>
      </div>

      <div v-if="items.length > 0">
        <div class="pt-5">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <input
                  type="search"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Search keyword"
                />
              </div>
            </div>
          </div>
          <div class="pt-3">
            <div class="row">
              <div class="col-md-4 mb-3" v-for="item in 9" :key="item">
                <div class="card">
                  <div class="px-3 pt-3">
                    <div class="image-box">
                      <img src="/seller/item-pic.png" alt="" />
                    </div>
                    <div class="info py-3">
                      <h5>Summer two piece 2022</h5>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, conse ctetur adipiscing
                        elit. ipsum dolo....
                      </p>
                    </div>
                  </div>
                  <div class="p-3 base-box">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <p class="mb-0">
                        23.6K<span class="ml-2">
                          <b-icon icon="eye-fill" variant="success"></b-icon>
                        </span>
                      </p>
                      <p class="mb-0">
                        <span>
                          <b-icon
                            icon="tag-fill"
                            style="color: #eb542b"
                          ></b-icon>
                        </span>
                        237
                      </p>
                      <div>
                        <b-form-rating
                          id="rating-inline"
                          inline
                          no-border
                          value="4"
                          style=""
                        ></b-form-rating>
                      </div>
                      <div>
                        <b-icon icon="three-dots-vertical"></b-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="pt-3">
          <div class="px-3">
            <div class="row">
              <div class="col-md-6">
                <section>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <div>
                        <img src="/seller/pic-1.png" class="img-fluid" alt="" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div>
                        <img src="/seller/pic-1.png" class="img-fluid" alt="" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div>
                        <img src="/seller/pic-1.png" class="img-fluid" alt="" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div>
                        <img src="/seller/pic-1.png" class="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="mt-3 p-3" style="background: #fff">
                    <h4 class="text-orange">Reviews & Ratings</h4>
                    <div class="mt-4">
                      <div
                        class="d-flex review-card"
                        v-for="item in 4"
                        :key="item"
                      >
                        <div class="mr-3 text-center">
                          <b-img
                            v-bind="{
                              blank: true,
                              width: 30,
                              height: 30,
                              class: 'm1',
                            }"
                            rounded="circle"
                            blank-color="#777"
                            alt="Transparent image"
                          ></b-img>
                        </div>
                        <div class="w-100">
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <p class="mb-0">Ihiechi Okwelle</p>
                            <div>
                              <b-form-rating
                                id="rating-inline"
                                class="bg-lighted"
                                inline
                                no-border
                                value="4"
                                style=""
                              ></b-form-rating>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, conse ctetur adipiscing
                            elit. ipsum dolo....
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="col-md-6">
                <div style="background: #fff" class="p-3">
                  <div>
                    <b-form-rating
                      id="rating-inline"
                      class="bg-lighted"
                      inline
                      no-border
                      value="4"
                      style=""
                    ></b-form-rating>
                  </div>
                  <h5>Summer two piece 2022</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Leo,
                    enim nec urna ullamcorper et amet dictumst. Nibh nisl dolor,
                    vulputate viverra risus vulputate. Accumsan.
                  </p>
                  <div class="my-3">
                    <div class="row">
                      <div class="col-md-6">
                        <div
                          style="background: #f4f4f4; border-radius: 12px"
                          class="p-3"
                        >
                          <div class="d-flex align-items-center py-2">
                            <p class="mr-2 mb-0 text-orange">NGN</p>
                            <h4 class="mb-0">5,000</h4>
                          </div>
                          <p>Available discount 10%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <b-form-group
                      label="Available sizes"
                      v-slot="{ ariaDescribedby }"
                      class="position-relative"
                    >
                      <b-form-checkbox-group
                        id="checkbox-group-2"
                        v-model="selected"
                        :aria-describedby="ariaDescribedby"
                        name="flavour-2"
                        class=""
                      >
                        <b-form-checkbox
                          :value="size"
                          v-for="size in sizes"
                          :key="size"
                          class=""
                        >
                          <div class="p-3 border">{{ size }}</div>
                        </b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>
                  </div>
                  <div class="mb-3">
                    <b-form-checkbox
                      id="custom-size"
                      name="custom-size"
                      value="dfdf"
                    >
                      Custom size order available
                    </b-form-checkbox>
                  </div>
                  <div class="mb-3">
                    <label for="itemName" class="form-label"
                      >Available shades of material</label
                    >
                    <div class="d-flex">
                      <div class="assessory-box">
                        <div class="accessories"></div>
                        <p class="text-center">Blue</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="itemName" class="form-label"
                      >Available accessories</label
                    >
                    <div class="d-flex">
                      <div class="assessory-box">
                        <div class="accessories"></div>
                        <p class="text-center">Beads</p>
                      </div>
                      <div class="assessory-box">
                        <div class="accessories"></div>
                        <p class="text-center">Beads</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'seller',
  data() {
    return {
      selected: [],
      status: 'not_accepted',
      sizes: ['L', 'XL', 'XXL'],
      isPlain: true,
      addItem: false,
      items: [],
    }
  },
  methods: {
    showAddPage() {
      this.isPlain = false
      this.addItem = true
    },
  },
}
</script>

<style>
.round-icon {
  background: rgba(235, 167, 148, 0.2);
  height: 48px;
  width: 48px;
  border-radius: 50%;
  color: red;
}

.inner-page {
  padding: 32px;
}

.round-icon .add {
  fill: #eb3d0e;
}

.empty-layout {
  min-height: 80vh;
}

.empty-layout .empty-inner svg {
  color: #eb3d0e;
  font-size: 100px;
}

.assessory-box {
  width: 20%;
  margin-right: 10px;
}

.accessories {
  background: #000;
  height: 80px;
}

.accessories-add {
  background: rgba(235, 61, 14, 0.1);
  height: 80px;
}

.accessories-add svg,
.image-add svg {
  color: #eb3d0e;
  font-weight: 700;
}

.image-add {
  height: 100px;
  background: rgba(235, 61, 14, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-box {
  height: 150px;
}
.image-box img {
  object-fit: cover !important;
  width: 100%;
  height: 100%;
}

.base-icon {
  width: 50%;
}

.base-box {
  border-top: 1px solid #eba794;
}

.bg-lighted {
  background: transparent;
  padding: 0;
}

.bg-lighted svg {
  color: #eb3d0e;
}

.top-right {
  right: 0;
}
</style>