<template>
  <div class="about-section">
    <client-only>
      <b-tabs pills>
        <b-tab title="DESCRIPTION" active
          ><b-card-text class="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor
            distinctio ratione vero dolores blanditiis laborum quibusdam
            praesentium id, libero tenetur iste aliquid quis illo recusandae
            fugiat ipsam expedita illum?
          </b-card-text></b-tab
        >
        <b-tab title="ABOUT DESIGNER"
          ><b-card-text class="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            omnis consequatur nam ad tempora quaerat amet atque, vel
            consequuntur enim fugiat! Adipisci iste quam voluptas magni debitis
            porro ullam deleniti!
          </b-card-text></b-tab
        >
        <b-tab title="REVIEWS"
          ><b-card-text class="mt-4">
            <div class="row">
              <div class="col-md-6">
                <div class="mt-4">
                  <div class="d-flex align-items-center">
                    <h5 class="mr-2">25 Reviews</h5>
                    <b-form-rating
                      id="rating-inline"
                      class="bg-lighted"
                      no-border
                      inline
                      value="4"
                    ></b-form-rating>
                  </div>
                  <div class="mt-5">
                    <div
                      class="
                        d-flex
                        justify-content-between
                        align-items-center
                        rating-holder
                        mb-3
                      "
                      v-for="(userRating, index) in userRatings"
                      :key="index"
                    >
                      <p>{{ userRating.star }} Stars</p>
                      <div class="progress-box">
                        <b-progress
                          :value="userRating.value"
                          :max="max"
                          variant="dark"
                          class="mb-3"
                        ></b-progress>
                      </div>
                      <p>({{ userRating.count }})</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mt-5">
                  <div class="d-flex review-card" v-for="item in 4" :key="item">
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
                  <div class="mt-4">
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <div
                        class="btn btn-outline-dark mr-3"
                        style="
                          font-size: 12px;
                          padding: 10px 15px;
                          cursor: pointer;
                        "
                      >
                        Previous
                      </div>
                      <div
                        class="btn orange-btn"
                        style="
                          font-size: 12px;
                          padding: 10px 15px;
                          cursor: pointer;
                        "
                      >
                        Next
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-card-text></b-tab
        >
      </b-tabs>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: 100,
      userRatings: [
        { star: 5, value: 100, count: 12 },
        { star: 4, value: 80, count: 18 },
        { star: 3, value: 60, count: 11 },
        { star: 2, value: 40, count: 9 },
        { star: 1, value: 20, count: 1 },
      ],
    }
  },
}
</script>

<style>
.rating-holder .progress-box {
  width: 80%;
}

@media (max-width: 476px) {
  .rating-holder .progress-box {
    width: 60%;
  }
}
</style>