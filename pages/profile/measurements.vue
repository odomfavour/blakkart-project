<template>
  <section class="measurements-tab">
    <div class="container">
      <client-only>
        <b-tabs pills>
          <b-tab title="Tab 1" active>
            <template #title> CORE MEASUREMENTS </template>
            <b-card-text>
              <core-measurment /> </b-card-text
          ></b-tab>
          <b-tab title="Tab 2">
            <template #title> ADDITIONAL MEASUREMENTS </template>
            <b-card-text> </b-card-text
          ></b-tab>
          <b-tab title="Tab 2">
            <template #title> RECENT PHOTO OF YOU </template>
            <b-card-text>Tab contents 2</b-card-text></b-tab
          >
        </b-tabs>
      </client-only>
    </div>
  </section>
</template>

<script>
import CoreMeasurment from '~/components/Profile/CoreMeasurment.vue'
export default {
  layout: 'profile',
  components: { CoreMeasurment },
}
</script>

<style>
.core-box {
  width: 80% !important;
  margin: 0 auto;
  padding: 15px;
}
</style>