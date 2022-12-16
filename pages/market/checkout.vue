<template>
  <section>
    <div class="container">
      <client-only>
        <div class="my-5 checkout-forms">
          <b-tabs pills v-model="tabIndex">
            <b-tab active>
              <template #title>
                <span class="number-sac mr-3">1</span>
                Details
              </template>
              <b-card-text>
                <details-tab />
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <span class="number-sac mr-3">2</span>
                PAYMENT INFORMATION
              </template>
              <b-card-text>
                <payment-info />
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <span class="number-sac mr-3">3</span>
                ORDER SUMMARY
              </template>
              <b-card-text>
                <order-summary />
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <span class="number-sac mr-3">4</span>
                ORDER COMPLETE
              </template>
              <b-card-text>
                <div class="d-flex align-items-center justify-content-center mh-400">
                  <order-complete/>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </div>
      </client-only>
    </div>
  </section>
</template>

<script>
import DetailsTab from '~/components/Checkout/DetailsTab.vue'
import OrderComplete from '~/components/Checkout/OrderComplete.vue'
import OrderSummary from '~/components/Checkout/OrderSummary.vue'
import PaymentInfo from '~/components/Checkout/PaymentInfo.vue'
export default {
  middleware: 'auth',
  components: { DetailsTab, PaymentInfo, OrderSummary, OrderComplete },
  data() {
    return {
      tabIndex: 1,
    }
  },
}
</script>

<style>
.size-box {
  border-bottom: 0.3px solid #eee;
  padding: 6px 0;
}

.mh-400 {
  min-height: 80vh;
}
</style>