<template>
  <section class="custom-section">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h2>
            Let’s show you<br />
            the magic...
          </h2>
          <p>Upload a style and let our designers work on it.</p>
          <div class="row">
            <div class="col-md-8">
              <img src="/measure.png" class="img-fluid" alt="" />
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="mb-3">
            <label for="">Add images of styles you want </label>
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
          </div>
          <div class="mb-3">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Drop a note for the designer</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="What do you want to tell the designer"
              ></textarea>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn-filled-orange-sq">SUBMIT REQUEST</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'custom'
}
</script>

<style scoped>
.image-add {
  height: 100px;
  background: rgba(235, 121, 14, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-section {
  min-height: 100vh;
  padding-top: 50px;
}

.custom-section img {
  object-fit: cover;
  width: 100%;
}

.custom-section h2 {
  font-size: 40px;
  font-weight: 600;
}
</style>