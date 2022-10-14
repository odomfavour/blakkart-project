<template>
  <section class="d-flex">
    <div class="image-section"></div>
    <div class="form-section">
      <div class="p-lg-5 p-3">
        <div class="mb-5 back-btn-container">
          <nuxt-link to="/" class="text-dark back-btn">
            <b-icon icon="arrow-left"></b-icon>
          </nuxt-link>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div class="form-container">
            <div class="top-section">
              <h5>Sign up using</h5>
              <div class="social-section">
                <div class="text-center">
                  <nuxt-link to="#" class="social-link">
                    <img src="/google.png" alt="" class="img-fluid"
                  /></nuxt-link>
                  <p>GMAIL</p>
                </div>
                <div class="text-center">
                  <nuxt-link to="#" class="social-link">
                    <img src="/mail.png" alt="" class="img-fluid"
                  /></nuxt-link>
                  <p>EMAIL</p>
                </div>
                <div class="text-center">
                  <nuxt-link to="#" class="social-link">
                    <img src="/facebook.png" alt="" class="img-fluid"
                  /></nuxt-link>
                  <p>FACEBOOK</p>
                </div>
              </div>
              <div class="d-flex">
                <hr class="or-border" />
                <span class="or-text">or</span>
                <hr class="or-border" />
              </div>
            </div>

            <div class="login-main">
              <p class="text-mild main-intro">
                Fill in your details to <span class="text-black">Sign up</span>
              </p>
              <form action="" @submit.prevent="SignupUser">
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
                      <label for="lastName" class="form-label text-black"
                        >Last Name</label
                      >
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
                  <label for="email" class="form-label text-black">Email</label>
                  <input
                    type="email"
                    class="form-input"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="country" class="form-label text-black"
                    >Country</label
                  ><br>
                  <select
                    class=""
                    aria-label="Default select example"
                  >
                    <option selected>Select your Country</option>
                    <option :value="country.name" v-for="(country, index) in countries" :key="index">{{country.name}}</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label text-black"
                    >Enter Password</label
                  >
                  <input
                    type="password"
                    class="form-input"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label text-black"
                    >Re-enter Password</label
                  >
                  <input
                    type="password"
                    class="form-input"
                    id="confirmPassword"
                    placeholder="Password"
                  />
                </div>
                <div class="mb-3 d-flex justify-content-end">
                  <p>
                    By clicking on sign up, you agree with our
                    <nuxt-link to="#" class="text-black">Terms</nuxt-link> and
                    <nuxt-link to="#" class="text-black"
                      >Privacy Policy</nuxt-link
                    >.
                  </p>
                </div>
                <div class="mb-3">
                  <button class="black-btn">Join Blakkart Now</button>
                </div>
                <div>
                  <p class="pt-3 text-mild">
                    Already registered?
                    <nuxt-link to="/login" class="text-oranged"
                      >Sign in</nuxt-link
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { allCountries } from '~/countries'
export default {
  layout: 'plain',
  data() {
    return {
      countries: allCountries,
    }
  },
  methods: {
    SignupUser() {
      this.$router.push('/market')
    },
  },
}
</script>


<style scoped>
.image-section {
  width: 50%;
  min-height: 100vh;
  background: url('/sigin.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.form-section {
  width: 50%;
  height: 100vh;
  background-color: #fff;
  overflow-y: scroll;
}

.back-btn {
  width: 48px;
  height: 48px;
  background: #cccccc;
  border-radius: 50%;
  padding: 12px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-btn-container {
  width: 75%;
  margin: 0 auto;
}

.login-main .main-intro {
  font-size: 14px;
}

.form-container {
  width: 75%;
}

.form-container .top-section {
  width: 60%;
}

.form-container h5 {
  font-size: 18px;
  margin-bottom: 15px;
}

.social-section {
  display: flex;
  justify-content: space-between;
}

.social-section p {
  font-size: 12px;
}

.social-section .social-link {
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 50%;
  margin-bottom: 10px;
}

.form-input, .form-container select
.social-btn {
  width: 100% !important;
  padding: 10px 19px;
}

.form-input:focus {
  outline: none;
}

.facebook-btn {
  background: #3b5998;
  color: #fff;
  border: 1px solid #3b5998;
  font-size: 14px;
}

.facebook-btn svg {
  font-size: 20px;
}

.or-border {
  width: 43%;
  background-color: #000;
}

@media (max-width: 769px) {
  .form-container {
    width: 100%;
  }
}

@media (max-width: 426px) {
  .image-section {
    display: none;
  }

  .form-section {
    width: 100%;
  }

  .form-container {
    width: 100%;
  }
}
</style>