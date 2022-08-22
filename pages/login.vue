<template>
  <section class="d-flex">
    <div class="image-section"></div>
    <div class="form-section">
      <div class="p-lg-5 p-3">
        <div class="mb-5">
          <nuxt-link to="/" class="text-dark">
            <b-icon icon="arrow-left"></b-icon>
            <span>Back</span>
          </nuxt-link>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div class="form-container">
            <h3 class="text-center">Welcome Back</h3>
            <div class="social-section">
              <div class="px-4 py-3">
                <div class="mb-2">
                  <button class="social-btn">Continue with Google</button>
                </div>
                <div class="mb-2">
                  <button class="social-btn facebook-btn">
                    <span><b-icon icon="facebook"></b-icon></span>
                    Continue with Facebook
                  </button>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <hr class="or-border" />
              <span class="or-text">or</span>
              <hr class="or-border" />
            </div>
            <div class="px-4 py-3">
              <form action="">
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-input"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-input"
                    id="email"
                    placeholder="Password"
                  />
                </div>
                <div class="mb-3 d-flex justify-content-center">
                  <button class="black-btn">Sign In</button>
                </div>
                <div class="text-center">
                  <a href="#">Forgot Password?</a>
                  <p class="pt-3">
                    New user? <nuxt-link to="/signin" class="text-danger">Sign Up</nuxt-link>
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
  min-height: 100vh;
  background-color: #f5f5f5;
}

.form-container {
  width: 55%;
  min-height: 400px;
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