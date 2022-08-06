<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <template v-for="(slider, index) in sliders">
        <!-- Slides with custom text -->
        <b-carousel-slide :img-src="slider.image" :key="index">
          <h3 class="hero-small">{{ slider.smallText }}</h3>
          <h1 class="text-warning hero-large">{{ slider.bigText }}</h1>
        </b-carousel-slide>
      </template>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliders: [
        {
          image: '/hero-slide.png',
          smallText: 'Add Colours to',
          bigText: 'Lifestyle',
        },
        {
          image: '/slider-1.png',
          smallText: 'Add Colours to',
          bigText: 'Things',
        },
      ],
    }
  },
}
</script>

<style>
.carousel-caption {
  text-align: left;
}

.text-yellow {
  color: #fad647;
}

.hero-large {
  font-weight: 700;
  font-size: 160px;
}

.hero-small {
  font-weight: 700;
  font-size: 58px;
}

.btn-black {
  background-color: #000;
  color: #fff;
}

.btn-black:hover {
  background-color: #000;
  color: #fff;
}

.btn-outline-black {
  background-color: transparent;
  border: 1px solid #000;
  color: #000;
}

.carousel-indicators {
    top: 10px;
}
</style>