<template>
  <section>
    <h5 class="section-title">NEWSLETTER AND EMAIL NOTIFICATIONS</h5>
    <div class="d-flex justify-content-between option-box">
      <p>Fashion Inspiration Newsletter</p>
      <div>
        <b-form-checkbox v-model="checked" name="check-button" switch>
        </b-form-checkbox>
      </div>
      <hr />
    </div>
    <div class="d-flex justify-content-between option-box">
      <p>New Products and Development</p>
      <div>
        <b-form-checkbox v-model="checked" name="check-button" switch>
        </b-form-checkbox>
      </div>
      <hr />
    </div>
    <div class="d-flex justify-content-between option-box">
      <p>Order Receipts</p>
      <div>
        <b-form-checkbox v-model="checked" name="check-button" switch>
        </b-form-checkbox>
      </div>
      <hr />
    </div>
    <div class="d-flex justify-content-between option-box">
      <p>Discounts and Coupons</p>
      <div>
        <b-form-checkbox v-model="checked" name="check-button" switch>
        </b-form-checkbox>
      </div>
      <hr />
    </div>
    <div class="d-flex justify-content-between option-box">
      <p>Sign-in Notification</p>
      <div>
        <b-form-checkbox v-model="checked" name="check-button" switch>
        </b-form-checkbox>
      </div>
      <hr />
    </div>
   <div class="d-flex justify-content-center mt-3">
    <button class="btn btn-primary mr-3">SAVE CHANGES</button>
    <button class="btn btn-primary">UNSUBSCRIBE FROM ALL</button>
   </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
        checked: false,

    }
  }
}
</script>

<style scoped>
.option-box{
    border-bottom: 1px solid #000;
    padding: 15px 0;
    align-items: center;
}

.option-box p {
width: 100%;
margin-bottom: 0;
font-size: 14px;
font-weight: 600;
}

.section-title {
    color: #EB3D0E;
    font-size: 18px;
}
</style>