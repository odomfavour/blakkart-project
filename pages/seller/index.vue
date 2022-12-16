<template>
  <section class="overview-section">
    <div class="row">
      <div class="col-lg-2 col-md-6 mb-3">
        <div class="card text-center h-100">
          <div class="card-body">
            <div class="d-flex justify-content-center align-items-center mb-3">
              <seller-orders-icon />
              <p class="mb-0 ml-2">New orders</p>
            </div>
            <p>(12)</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card text-center h-100">
          <div class="card-body">
            <div class="d-flex justify-content-center align-items-center mb-3">
              <seller-orders-icon />
              <p class="mb-0 ml-2">Pending orders</p>
            </div>
            <p>(12)</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card text-center h-100">
          <div class="card-body">
            <div class="d-flex justify-content-center align-items-center mb-3">
              <seller-orders-icon />
              <p class="mb-0 ml-2">Completed orders</p>
            </div>
            <p>(12)</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-3">
        <div
          class="card text-center h-100"
          style="background: rgba(235, 61, 14, 0.08); color: #4d4d4d"
        >
          <div class="card-body">
            <div class="d-flex justify-content-center align-items-center mb-3">
              <h5 class="mr-3 mb-0">
                NGN
                <span style="font-weight: 500; font-size: 24px">5,000,000</span>
              </h5>
              <b-icon icon="eye-fill" style="color: #4d4d4d"></b-icon>
            </div>
            <p>Withdraw</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-3">
          <div class="card h-100">
            <p class="text-center py-3 section-title">
              Your items or collections
            </p>
            <hr />
            <div class="d-flex justify-content-center mb-3">
              <button class="add-btn btn text-orange">
                <b-icon icon="plus-circle"></b-icon>
                Add new
              </button>
            </div>
            <nuxt-link to="#" class="text-center text-orange"
              >View all</nuxt-link
            >
          </div>
        </div>
        <div class="col-lg-8 col-md-6 mb-3">
          <div class="card h-100">
            <div class="p-4">
              <h4 class="mb-0 section-title">Today</h4>
            </div>
            <hr />
            <section class="analytics">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-3 col-6 mb-3">
                    <div class="text-center">
                      <h3 class="mb-3 today-count" style="color: #2e7d32">
                        12
                      </h3>
                      <p>Sales</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-6 mb-3">
                    <div class="text-center">
                      <h3 class="mb-3 text-orange today-count">12</h3>
                      <p>Profile visits</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-6 mb-3">
                    <div class="text-center">
                      <h3 class="mb-3 today-count">12</h3>
                      <p>New orders</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-6 mb-3">
                    <div class="text-center">
                      <h3 class="mb-3 today-count">12</h3>
                      <p>Completed orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="row">
        <div class="col-lg-8 mb-3">
          <div class="card h-100">
            <div class="p-4">
              <div
                class="d-flex justify-content-between align-items-center flex-"
              >
                <h5 class="section-title">Income Analytics</h5>
                <nuxt-link to="#" class="text-orange d-none d-md-block"
                  >View transactions
                </nuxt-link>
              </div>
              <hr />
              <div class="d-flex justify-content-center align-items-center">
                <nuxt-link to="#" class="text-orange d-md-none"
                  >View transactions
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SellerOrdersIcon from '~/components/Icons/SellerOrdersIcon.vue'
export default {
  layout: 'seller',
  components: {
    SellerOrdersIcon,
  },
}
</script>

<style scoped>
.overview-section {
  font-family: 'Inter', sans-serif;
}

.section-title {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #1f1f1f;
}

.today-count {
  font-weight: 600;
  font-size: 40px;
}
.add-btn {
  border: 1px solid #eb542b;
  border-radius: 12px;
  padding: 8px 22px;
}

.add-btn svg {
  color: #eb542b;
}

@media (max-width: 426px) {
  .analytics p {
    font-size: 14px;
  }
}
</style>