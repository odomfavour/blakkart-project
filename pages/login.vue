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
              <h5>Sign in using</h5>
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
              <p class="text-mild main-intro">Fill in your details to <span class="text-black">Log in</span></p>
              <form action="">
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
                  <label for="password" class="form-label text-black">Enter Password</label>
                  <input
                    type="password"
                    class="form-input"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div class="mb-3 d-flex justify-content-end">
                  <nuxt-link to="#" class="text-black">Forgot Password?</nuxt-link>
                </div>
                <div class="mb-3">
                  <button class="black-btn">Join Blakkart Now</button>
                </div>
                <div>
                 
                  <p class="pt-3 text-mild">
                    Not registered?
                    <nuxt-link to="/signup" class="text-oranged"
                      >Sign up</nuxt-link
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
export default {
  layout: 'plain',
}
</script>

<style scoped>
.image-section {
  width: 50%;
  min-height: 100vh;
  background: url('/login.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.form-section {
  width: 50%;
  height: 100vh;
  overflow-y: auto;
  background-color: #fff;
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

.form-input,
.social-btn {
  width: 100%;
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