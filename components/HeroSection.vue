<template>
  <section
    id="hero-section"
    class="d-flex justify-content-center align-items-center text-center"
  >
    <div>
      <h3>Add Colours to</h3>
      <h1>Lifestyle</h1>
      <p>
        Rep your culture with a made-to-fit attire from our designers across
        Africa.
      </p>
      <div class="mb-3">
        <button class="white-outined-btn hero-btn mr-md-3 mr-1">
          Customise Fashion
        </button>
        <button class="white-outined-btn hero-btn">Customize Art</button>
      </div>

      <p class="modal-trigger" role="button" v-b-modal.modal-center>details</p>
      <b-modal id="modal-center" centered title="BootstrapVue" hide-footer>
        <p class="my-4">Vertically centered modal!</p>
      </b-modal>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
#hero-section {
  height: 100vh;
  background: linear-gradient(45deg, #00000026, #00000026),
    url(/hero.png) no-repeat center center;
  background-size: cover;
  color: #fff;
}

#hero-section h1 {
  font-style: normal;
  font-weight: 400;
  font-size: 168.934px;
}

#hero-section h3 {
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
}

#hero-section p {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
}

@media (max-width: 426px) {
  #hero-section h1 {
    font-size: 50px;
  }
  #hero-section h3 {
    font-size: 40px;
  }
  #hero-section p {
    font-size: 20px;
  }

  .hero-btn {
    padding: 10px;
    margin-bottom: 20px;
  }
  
}

</style>