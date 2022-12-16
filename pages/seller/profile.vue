<template>
  <section class="profile-section">
    <client-only>
      <b-tabs pills class="profile-tabs">
        <b-tab title="Personal information " active
          ><b-card-text class="mt-4">
            <div class="d-flex justify-content-between my-3">
              <p><b-icon icon="pen"></b-icon> Edit profile</p>
              <p class="text-orange">Change pin/password</p>
            </div>
            <div class="my-5 personal-section">
              <div class="row">
                <div class="col-md-6">
                  <h5>Personal information</h5>
                  <div class="mt-5">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >First name</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="First name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Last name</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Last name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Phone number</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="+2349030780505"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="address-section mb-5">
              <h5 class="text-orange">Address</h5>
              <div class="mt-5">
                <div class="row">
                  <div class="col-md-9">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Address</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="First name"
                      />
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >First name</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="First name"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Last name</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Last name</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="payment-section mb-5">
              <h5 class="text-orange">Payment options</h5>

              <div class="row">
                <div class="col-md-10">
                  <div class="mt-5">
                    <div class="row">
                      <div class="col-md-3">
                        <label for="">Select Bank</label>
                        <select
                          class="form-select form-control"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Account Number</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Account Name</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> </b-card-text
        ></b-tab>
        <b-tab title="Shop information"
          ><b-card-text class="mt-4">
            <div class="d-flex justify-content-between my-3">
              <p><b-icon icon="pen"></b-icon> Edit</p>
            </div>
            <div class="mt-5">
              <h4 class="text-orange mb-4">Shop information</h4>
              <div class="row">
                <div class="col-md-4">
                  <form action="">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Onye Obi"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Address</label
                      >
                      <input
                        type="address"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div> </b-card-text
        ></b-tab>
        <b-tab title="Security settings"
          ><b-card-text class="mt-4">
            <security-settings /> </b-card-text
        ></b-tab>
      </b-tabs>
    </client-only>
  </section>
</template>

<script>
import SecuritySettings from '~/components/Seller/SecuritySettings.vue'
export default {
  components: { SecuritySettings },
  layout: 'seller',
}
</script>

<style>
.profile-section .nav {
  background: #fff;
}

.profile-section .profile-tabs .nav-pills .nav-item {
  width: 33% !important;
}

.profile-section .nav.nav-pills.flex-column {
  background: transparent;
}

.profile-section .nav.nav-pills.flex-column .nav-item {
  width: 100% !important;
}

.profile-section .nav.nav-pills.flex-column .nav-item .nav-link {
  font-size: 16px;
  text-align: left;
}
.profile-section .nav.nav-pills.flex-column .nav-item .nav-link.active {
  font-size: 16px;
  background: transparent;
}

.profile-section .nav-pills .nav-item .nav-link {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
}

.profile-section .nav-pills .nav-link.active {
  background: #fff;
  color: #eb3d0e !important;
  font-weight: 600;
  font-size: 24px;
}

.personal-section,
.address-section {
  border-bottom: 0.5px solid #eb8467;
  padding-bottom: 50px;
}
</style>