<template>
  <section>
    <div class="container-fluid">
      <div class="person-info-section">
        <div class="row">
          <div class="col-lg-5 col-md-12 col-12 mb-3">
            <div class="d-flex align-items-center person-content">
              <div class="img-box mr-2">
                <img src="/profile-img.png" class="w-100" alt="person" />
              </div>
              <div class="person-info">
                <h4>Ngozi Chinedum</h4>
                <p class="mb-0">ChinedumNgozi991@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-12 col-12 mb-3">
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                component-showcase
              "
            >
              <nuxt-link
                to="/profile/measurements"
                class="card-box text-center"
              >
                <b-icon icon="view-stacked"></b-icon>
                <p class="text-uppercase">Measurements</p>
              </nuxt-link>
              <div class="card-box text-center">
                <b-icon icon="person-lines-fill"></b-icon>
                <p class="text-uppercase">Following</p>
              </div>
              <div class="card-box text-center">
                <b-icon icon="heart-fill"></b-icon>
                <p class="text-uppercase">Wish List</p>
              </div>
              <div class="card-box text-center">
                <b-icon icon="view-stacked"></b-icon>
                <p class="text-uppercase">Viewed</p>
              </div>
              <nuxt-link
                to="/profile/account-settings"
                class="card-box text-center"
              >
                <b-icon icon="gear"></b-icon>
                <p class="text-uppercase">Setting</p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div class="orders-section">
          <div class="d-flex justify-content-between align-items-center">
            <h5>My Orders</h5>
            <nuxt-link to="#" class="text-uppercase"
              >view all <b-icon icon="chevron-right" class="ml-3"></b-icon
            ></nuxt-link>
          </div>
          <hr />
          <div class="transaction-flow">
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                px-lg-5 px-2
              "
            >
              <div class="stage">
                <div class="icon-box">
                  <img src="/profile/cart.png" alt="" />
                </div>
                <p class="text-center">Cart</p>
              </div>
              <div class="stage">
                <div class="icon-box">
                  <img src="/profile/processing.png" alt="" />
                </div>
                <p class="text-center">Processing</p>
              </div>
              <div class="stage">
                <div class="icon-box">
                  <img src="/profile/shipped.png" alt="" />
                </div>
                <p class="text-center text-uppercase">Shipped</p>
              </div>
              <div class="stage">
                <div class="icon-box">
                  <img src="/profile/completed.png" alt="" />
                </div>
                <p class="text-center text-uppercase">completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div class="others-section">
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="d-flex justify-content-between align-items-center">
                <p class="text-uppercase mb-0">payment methods</p>
                <nuxt-link to="/profile/orders" class="text-uppercase"
                  >view all <b-icon icon="chevron-right" class="ml-2"></b-icon
                ></nuxt-link>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="d-flex justify-content-between align-items-center">
                <p class="text-uppercase mb-0">shipping address</p>
                <nuxt-link to="/profile/shipping-address" class="text-uppercase"
                  >view all <b-icon icon="chevron-right" class="ml-2"></b-icon
                ></nuxt-link>
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
  layout: 'profile',
}
</script>

<style scoped>
.card-box svg {
  height: 26px;
  width: 26px;
  color: #eb542b;
  margin-bottom: 12px;
}

.orders-section a,
.transaction-flow a,
.others-section a {
  color: #000;
  text-decoration: none;
}

.others-section a {
  font-size: 10px;
}

.orders-section a {
  font-size: 12px;
}

.person-info-section,
.orders-section {
  margin-bottom: 100px;
}

.others-section {
  margin-bottom: 60px;
}

.component-showcase {
  flex-wrap: wrap;
  margin-top: 20px;
}

.stage {
  width: 25%;
  text-align: center;
}

.person-content .img-box {
  width: 20%;
}

.person-content .person-info {
  width: 80%;
  /* word-wrap: break-word; */
}

@media (max-width: 769px) {
  .card-box {
    width: 25%;
    margin-bottom: 30px;
  }

  .person-info-section,
  .orders-section {
    margin-bottom: 50px;
  }

  /* .person-content .person-info {
    word-wrap: break-word;
  } */
  .person-content .person-info p {
    font-size: 14px;
  }
}

@media (max-width: 426px) {
  .person-content {
    flex-direction: column;
  }

  .person-content .person-info {
    width: 100%;
    margin-top: 20px;
  }
  .card-box {
    width: 50%;
    margin-bottom: 30px;
  }

  .card-box p,
  .stage p {
    font-size: 14px;
  }

  .stage {
    width: 50%;
  }

  .transaction-flow > div {
    flex-wrap: wrap;
  }

  .others-section p {
    font-size: 14px;
  }
}
</style>