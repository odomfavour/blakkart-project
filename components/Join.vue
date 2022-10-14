<template>
  <section>
     <section class="join-section">
      <div class="container">
        <div class="d-flex align-items-center inner-join">
          <div class="d-flex align-items-center flex-md-row flex-column">
            <h3 class="invite-text">
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
export default {

}
</script>

<style>
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

.invite-text {
  font-size: 24px;
}


@media (max-width: 426px) {
  .join-section h3 {
    margin-right: 0;
  }
}
</style>