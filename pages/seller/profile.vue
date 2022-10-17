<template>
  <section class="profile-section">
    <client-only>
      <b-tabs pills>
        <b-tab title="Personal information " active
          ><b-card-text class="mt-4">
            <div class="d-flex justify-content-between my-3">
              <p><b-icon icon="pen"></b-icon> Edit profile</p>
              <p class="text-orange">Change pin/password</p>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h5>Personal information</h5>
              </div>
            </div>
          </b-card-text></b-tab
        >
        <b-tab title="Shop information"
          ><b-card-text class="mt-4"> </b-card-text
        ></b-tab>
        <b-tab title="Security settings"
          ><b-card-text class="mt-4"> </b-card-text
        ></b-tab>
      </b-tabs>
    </client-only>
  </section>
</template>

<script>
export default {
  layout: 'seller',
}
</script>

<style>
.profile-section .nav {
  background: #fff;
}

.profile-section .nav-pills .nav-item {
  width: 33% !important;
}

.profile-section .nav-pills .nav-item .nav-link {
  text-align: center;
}

.profile-section .nav-pills .nav-link.active {
  background: #fff;
  color: #eb3d0e !important;
  font-weight: 500;
}
</style>