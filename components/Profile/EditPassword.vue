<template>
  <section>
    <h5>CHANGE PASSWORD</h5>
    <form action="">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Old Password</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Doe"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >New Password</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Doe"
        />
      </div>
      <div
        class="
          d-flex
          justify-content-between
          align-items-center
          flex-md-row flex-column
        "
      >
        <div class="d-flex auth-label align-items-center mb-2 mb-0">
          <span class="mr-2"
            ><b-icon icon="shield-lock-fill" class="text-orange"></b-icon
          ></span>
          <p class="mb-0">TWO-FACTOR AUTENTICATION</p>
        </div>
        <div>
          <b-form-group label="" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="checkbox-group-1"
              v-model="selected"
              :options="options"
              :aria-describedby="ariaDescribedby"
              name="flavour-1"
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
      </div>
      <div>
        <button class="btn btn-primary">Update password</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: ['email', 'password'],
      selected: null,
    }
  },
}
</script>

<style>
@media (max-width: 426px) {
  .auth-label p {
    font-size: 12px;
  }
}
</style>