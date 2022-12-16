<template>
  <section class="d-flex">
    <div
      :class="`${
        tabIndex == 1
          ? 'image-section personal-section-active'
          : tabIndex == 2
          ? 'image-section question-section-active'
          : 'image-section bank-section-active'
      }`"
    ></div>
    <div class="form-section">
      <div class="d-flex justify-content-center mb-5">
        <nuxt-link to="/"
          ><img src="/main-logo.png" class="img-fluid" alt=""
        /></nuxt-link>
      </div>
      <div class="d-flex my-4">
        <div
          :class="`${
            tabIndex == 1
              ? 'personal-detail-active tab-head'
              : 'personal-detail tab-head'
          }`"
        >
          <p class="mb-0">Personal Details</p>
        </div>
        <div
          :class="`${
            tabIndex == 2
              ? 'questionaire-active tab-head'
              : 'questionaire tab-head'
          }`"
        >
          <p class="mb-0">Questionaire</p>
        </div>
        <div
          :class="`${
            tabIndex == 3
              ? 'bank-detail-active tab-head'
              : 'bank-detail tab-head'
          }`"
        >
          <p class="mb-0">Bank Details</p>
        </div>
      </div>
      <div class="section-holder">
        <div v-show="tabIndex === 1">
          <personal-details />
        </div>
        <div v-show="tabIndex === 2">
          <business-questionaire />
        </div>
        <div v-show="tabIndex === 3">
          <bank-details />
        </div>
        <div class="d-flex mt-5">
          <button
            class="btn-outline-dark mr-3 px-md-5 py-2 px-3"
            @click="tabIndex--"
            v-if="tabIndex > 1"
          >
            Back
          </button>
          <button
            class="btn-black px-md-5 py-2 px-3"
            @click="tabIndex++"
            v-if="tabIndex < 3"
          >
            Continue
          </button>
          <button
            class="btn-black px-md-5 py-2 px-3"
            @click="CreateSeller"
            v-if="tabIndex === 3"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BankDetails from '~/components/Seller/BankDetails.vue'
import BusinessQuestionaire from '~/components/Seller/BusinessQuestionaire.vue'
import PersonalDetails from '~/components/Seller/PersonalDetails.vue'
export default {
  components: { PersonalDetails, BusinessQuestionaire, BankDetails },
  layout: 'plain',
  data() {
    return {
      tabIndex: 1,
    }
  },
  methods: {
    CreateSeller() {
      this.$router.push('/seller')
    }
  },
}
</script>

<style scoped>
.image-section {
  width: 35%;
  height: 100vh;
}

.form-section {
  height: 100vh;
  overflow-y: scroll;
}

.section-holder {
  width: 70%;
  margin: 0 auto;
}

.personal-section-active {
  background: url(/seller/personal-details.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.question-section-active {
  background: url(/seller/questionaire.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.bank-section-active {
  background: url(/seller/bank-details.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.tab-head {
  width: 33%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}

.personal-detail-active {
  background: url(/seller/personal-active.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
}

.personal-detail {
  background: url(/seller/personal-inactive.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.questionaire-active {
  background: url(/seller/questionaire-active.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
}

.questionaire {
  background: url(/seller/questionaire-inactive.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.bank-detail-active {
  background: url(/seller/bank-detail-active.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
}

.bank-detail {
  background: url(/seller/bank-detail-inactive.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.form-section {
  width: 65%;
  padding: 50px 100px;
}

@media (max-width: 769px) {
  .form-section {
    width: 100%;
    padding: 50px;
  }

  .image-section {
    display: none;
  }
}

@media (max-width: 426px) {
  .tab-head {
    font-size: 12px;
  }

  .form-section {
    padding: 50px 10px;
  }

  .section-holder {
    width: 90%;
  }
}
</style>