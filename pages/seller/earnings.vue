<template>
  <section class="earnings-section">
    <div class="wallet-section">
      <div class="d-flex justify-content-between align-items-center px-4 flex-md-row flex-column">
        <h4>Wallet Balance</h4>
        <div class="d-flex align-items-center">
          <p class="mb-0 mr-2">Account details</p>
          <div class="mr-2">
            <p class="mb-0">Access Bank</p>
            <p class="mb-0">0700364512</p>
            <p class="mb-0">Okwelle Ihiechi Justice</p>
          </div>
          <div>
            <b-icon icon="pen"></b-icon>
          </div>
        </div>
      </div>
      <div
        class="
          withdraw-section
          d-flex
          align-items-center
          justify-content-between
          flex-md-row
          flex-column
          p-4
        "
        style="background: #f4f4f4"
      >
        <div class="d-flex">
          <h5 class="mr-2">NGN</h5>
          <h4>5,000,000</h4>
        </div>
        <button
          class="btn"
          v-b-modal.modal-center
          style="
            background: #fcfcfc;
            border: 1px solid #eb3d0e;
            padding: 12px 32px;
          "
        >
          <withdraw-icon /> Withdraw
        </button>
      </div>
    </div>
    <section class="my-3">
      <client-only>
        <b-tabs pills>
          <b-tab title="Outstanding" active
            ><b-card-text class="mt-4">
              <earning-layout :name="'Outstanding'" /> </b-card-text
          ></b-tab>
          <b-tab title="Credit"
            ><b-card-text class="mt-4">
              <earning-layout :name="'Credit'" /> </b-card-text
          ></b-tab>
          <b-tab title="Withdrawals"
            ><b-card-text class="mt-4">
              <earning-layout :name="'Withdrawals'" /> </b-card-text
          ></b-tab>
        </b-tabs>
      </client-only>
    </section>
    <b-modal id="modal-center" centered title="BootstrapVue" hide-footer>
      <div class="px-3">
        <p>Destination account details</p>
        <div
          class="d-flex justify-content-between align-items-center p-2"
          style="
            background: rgba(95, 182, 99, 0.2);
            border: 0.5px solid #2e7d32;
            border-radius: 16px;
          "
        >
          <div>
            <p class="mb-0">IHIECHI JUSTICE OKWELLE</p>
            <p class="mb-0">0700364512</p>
            <p class="mb-0">Access Bank</p>
          </div>
          <div class="d-flex align-items-center">
            <b-icon icon="pen" class="mr-2"></b-icon>
            <p class="mb-0">Change</p>
          </div>
        </div>
        <div class="mt-5 mb-4">
          <form action="">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Amount
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Pin</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="d-flex justify-content-center">
              <button
                class="text-white"
                style="padding: 16px 40px; background: #241c1c"
              >
                Withdraw money
              </button>
            </div>
          </form>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import EarningLayout from '~/components/SellerEarning/EarningLayout.vue'
import WithdrawIcon from '~/components/Icons/WithdrawIcon.vue'
export default {
  components: { EarningLayout, WithdrawIcon },
  layout: 'seller',
}
</script>

<style>
.earnings-section {
  font-family: 'Inter', sans-serif;
}

.earnings-section .nav {
  background: #fff;
}

.earnings-section .nav-pills .nav-item {
  width: 33% !important;
}

.earnings-section .nav-pills .nav-item .nav-link {
  text-align: center;
}

.earnings-section .nav-pills .nav-link.active {
  background: #fff;
  color: #eb3d0e !important;
  font-weight: 500;
}

.search-input,
.sort-input {
  width: 35%;
}

.sort-input p {
  width: 40%;
}

.price-box {
  width: 15%;
  border-right: 1px solid #ccc;
  padding: 15px;
}

.order-info {
  width: 85%;
}

.order-main-info {
  width: 45%;
  padding: 0 12px;
}

@media (max-width: 769px) {
  .price-box {
    width: 30%;
  }

  .order-info {
    width: 70%;
  }
}

@media (max-width: 426px) {
  .price-box,
  .order-info, .sort-input, .search-input {
    width: 100%;
  }

  .search-input {
    margin-bottom: 20px;
  }

  .order-main-info {
    width: 90%;
    padding: 0;
  }

}
</style>