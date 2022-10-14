<template>
  <section>
    <p class="text-center">
      **In this section, fill in the bank details you wil like to use to receive
      payment for your services.
    </p>
    <div class="mt-5">
      <div class="mb-3">
        <label for="address" class="form-label text-black">Account Number</label>
        <input
          type="number"
          class="form-input"
          id="lastName"
          placeholder="0000000"
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label text-black">Account Name</label>
        <input
          type="text"
          class="form-input"
          id="lastName"
          placeholder="John Doe"
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label text-black">Bank Name</label>
        <b-form-select v-model="selected">
          <b-form-select-option :value="null"
            >Please select your bank</b-form-select-option
          >
          <b-form-select-option :value="bank.name" v-for="bank in banks" :key="bank.slug">{{bank.name}}</b-form-select-option>
        </b-form-select>
      </div>
      <hr />
      <h5 class="my-3">Create Transaction Pin</h5>
      <div class="mb-3">
        <label for="address" class="form-label text-black">Enter Pin</label>
        <input
          type="text"
          class="form-input"
          id="lastName"
          placeholder="Address"
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label text-black"
          >Enter Pin again</label
        >
        <input
          type="text"
          class="form-input"
          id="lastName"
          placeholder="Address"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { nigerianBanks } from '~/banks'
export default {
  data() {
    return {
      selected: null,
      banks: nigerianBanks,
    }
  },
}
</script>

<style>
.form-input {
  width: 100% !important;
  padding: 10px 19px;
}
</style>