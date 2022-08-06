<template>
  <section>
    <VueSlickCarousel v-bind="settings" :dots="true" :arrows="true">
      <div
        class="user-card d-flex justify-content-center align-items-center"
        v-for="pic in 10"
        :key="pic"
      >
        <button class="btn-outline-main cat-btn">men</button>
      </div>
    </VueSlickCarousel>
    <section class="join-section">
      <div class="container">
        <div class="d-flex align-items-center inner-join">
          <div class="d-flex align-items-center flex-md-row flex-column">
            <h3 class="Invite-text">
              Join our platform as a designer to showcase your products.
            </h3>
            <button class="black-btn">Join Blakkart Now!</button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        touchTreshold: 5,
        // autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style>
.slick-slider .slick-next {
  right: 50px !important;
}

.slick-slider .slick-prev {
  left: 70px !important;
  z-index: 10;
}

.cat-btn {
  width: 196px !important;
}

.slick-slider .user-card {
  background: url(/person.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  height: 520px;
}

.slick-slider .user-card:hover {
  background: linear-gradient(45deg, #0000005e, #0000005e),
    url(/person.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.join-section {
  height: 240px;
  position: relative;
  text-align: center;
  background-image: linear-gradient(
      90deg,
      #f4f4f4 35.61%,
      rgba(237, 237, 237, 0) 104.45%
    ),
    url(/join-bg.png);
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.join-section .inner-join {
  height: 240px;
}

.black-btn {
  width: 196px !important;
  background: #000;
  color: #fff;
  border: none;
  padding: 12.396px 19.0072px;
}

.join-section h3 {
  margin-right: 100px;
}

@media (max-width: 426px) {
  .join-section h3 {
    margin-right: 0;
  }
}
</style>