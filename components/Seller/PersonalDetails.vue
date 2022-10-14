<template>
  <section>
    <p class="text-center">
      **This section is to get your personal and business details
    </p>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="firstName" class="form-label text-black"
            >First Name</label
          >
          <input
            type="text"
            class="form-input"
            id="firstName"
            placeholder="Enter your first name"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="lastName" class="form-label text-black">Last Name</label>
          <input
            type="text"
            class="form-input"
            id="lastName"
            placeholder="Enter your last name"
          />
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="businessName" class="form-label text-black"
        >Business/Shop Name</label
      >
      <input
        type="text"
        class="form-input"
        id="lastName"
        placeholder="Business name"
      />
    </div>
    <div class="mb-3">
      <label for="address" class="form-label text-black">Address</label>
      <input
        type="text"
        class="form-input"
        id="lastName"
        placeholder="Address"
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label text-black">Email Address</label>
      <input
        type="text"
        class="form-input"
        id="email"
        placeholder="name@example.com"
      />
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="password" class="form-label text-black"
            >Password</label
          >
          <input
            type="text"
            class="form-input"
            id="firstName"
            placeholder="password"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="confirmPassword" class="form-label text-black">Confirm Password</label>
          <input
            type="text"
            class="form-input"
            id="confirmPassword"
            placeholder="password"
          />
        </div>
      </div>
    </div>
     <b-form-checkbox
      id="checkbox-1"
      name="checkbox-1"
      value="accepted"
    >
     To continue as a seller, you have to read and agree with our Terms and Privacy Policy.
    </b-form-checkbox>
  </section>
</template>

<script>
export default {}
</script>

<style>
.form-input {
  width: 100% !important;
  padding: 10px 19px;
}
</style>