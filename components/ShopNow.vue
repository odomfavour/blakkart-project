<template>
  <section class="enjoy-section">
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center mb-3">
            <div>
              <h2>
                <span class="enjoy">Enjoy</span><br />
                experiential<br />
                shopping with<br />
                us!
              </h2>
              <h5>TRY IT.</h5>
              <div>
                <button class="gold-btn mr-3">Enter Now</button>
                <p class="modal-trigger">How does it work</p>
              </div>
            </div>
          </div>
          <div
            class="
              col-md-6
              mb-3
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <img
              src="/categories/right-bg.png"
              class="img-fluid"
              alt="pink jacket display"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.first-slide {
  background-image: url('/hero-slide.png');
  background-size: cover;
  background-position: center;
  height: 50vh;
}

.first-slide h2 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #fff;
  margin-bottom: 20px;
}

.enjoy-section h2 span {
  font-weight: 200;
  color: #000;
}

.enjoy-section h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  color: #f7931a;
  margin-bottom: 20px;
  font-family: 'Verdana';
}

.enjoy-section h5 {
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 30.4972px;
  color: #53C23C;
}

.men-shop {
  width: 33%;
  border-right: 1px solid red;
  height: 400px;
}
</style>