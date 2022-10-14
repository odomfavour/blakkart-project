<template>
  <section>
    <p class="text-center">
      **This section is to know more about your business and also understand
      your operations.
    </p>
    <div class="mt-5">
      <div class="mb-3">
        <label for="tags-basic"
          >Kindly list out your services (Type a services and press
          enter)</label
        >
        <b-form-tags input-id="tags-basic" v-model="value"></b-form-tags>
      </div>
      <div class="mb-3">
        <label for="durationOfService"
          >How long have you been rendering this services</label
        >
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>
      <div class="mb-3">
        <label for="durationOfProduce"
          >How long does it take to produce on an average</label
        >
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: ['apple', 'orange'],
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
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