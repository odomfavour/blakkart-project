<template>
  <footer>
    <div class="container">
      <div class="logo-section">
        <img src="/footer-logo.png" class="img-fluid" alt="" />
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nam
            eos quam debitis pariatur dolorum modi quo beatae saepe deleniti
            accusamus, error, aut aspernatur nobis velit impedit non illo
            aliquid.
          </p>
          <div class="contact-info">
            <p>
              <b-icon icon="envelope-fill" variant="white" />
              <span class="ml-3">hello@blakkart.com</span>
            </p>
            <p>
              <b-icon icon="telephone-fill" variant="white" />
              <span class="ml-3">+1-111-23456</span>
            </p>
          </div>
          <div class="social-icons d-flex">
            <div class="social-box facebook">
              <nuxt-link to="">
                <b-icon icon="facebook" variant="white" />
              </nuxt-link>
            </div>
            <div class="social-box twitter">
              <nuxt-link to="">
                <b-icon icon="twitter" variant="white" />
              </nuxt-link>
            </div>
            <div class="social-box instagram">
              <nuxt-link to="">
                <b-icon icon="instagram" variant="white" />
              </nuxt-link>
            </div>
            <div class="social-box youtube">
              <nuxt-link to="">
                <b-icon icon="youtube" variant="white" />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6  mb-3">
          <h3>Newsletter</h3>
          <p>
            Get all the latest developements, information, event sales and
            offers.
          </p>
          <div class="newsletter">
            <form action="">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control py-4"
                  placeholder="Enter your email"
                />
              </div>
              <div class="d-flex justify-content-end align-items-center">
                <button type="submit" class="btn sub-btn">Go</button>
              </div>
            </form>
          </div>
          <div class="payment d-flex">
            <div class="card-choice">
              <nuxt-link to="">
                <img src="/payment/MasterCard.png" alt="master card" class="img-fluid" />
              </nuxt-link>
            </div>
            <div class="card-choice">
              <nuxt-link to="">
                <img src="/payment/PayPal.png" alt="master card" class="img-fluid"/>
              </nuxt-link>
            </div>
            <div class="card-choice">
              <nuxt-link to="">
                <img src="/payment/Bitcoin.png" alt="master card" class="img-fluid"/>
              </nuxt-link>
            </div>
            <div class="card-choice">
              <nuxt-link to="">
                <img src="/payment/Payoneer.png" alt="master card" class="img-fluid"/>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-6  mb-3">
          <ul>
            <li><nuxt-link to="#">Home</nuxt-link></li>
            <li><nuxt-link to="#">About Us</nuxt-link></li>
            <li><nuxt-link to="#">Blog</nuxt-link></li>
            <li><nuxt-link to="#">Market Place</nuxt-link></li>
            <li><nuxt-link to="#">Contact Us</nuxt-link></li>
            <li><nuxt-link to="#">Impact</nuxt-link></li>
            
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 col-6 mb-3">
          <ul>
            <li><nuxt-link to="#">Support Center</nuxt-link></li>
            <li><nuxt-link to="#">FAQs</nuxt-link></li>
            <li><nuxt-link to="#">Privacy Policy</nuxt-link></li>
            <li><nuxt-link to="#">Terms and Conditions</nuxt-link></li>
            <li><nuxt-link to="#">Refund Policy</nuxt-link></li>
            <li><nuxt-link to="#">Cookie Policy</nuxt-link></li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="py-3 mb-0 text-center">
        Copyright © 2022 Blakkart. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
footer {
  background: #000;
  color: #fff;
  padding-top: 60px;
}

footer ul {
  list-style: none;
  padding-left: 0;
}

footer a {
  color: #fff;
  font-size: 16px;
}

footer a:hover {
  color: #fff;
  text-decoration: none;
}

.social-icons .social-box {
  margin-right: 10px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.youtube {
  background: #d42428;
}
.facebook {
  background: #3b5998;
}
.twitter {
  background: #00aced;
}
.instagram {
  background: #6c27b3;
}

.newsletter {
  padding-top: 20px;
  position: relative;
}

.newsletter .sub-btn {
  margin-top: -80px;
  margin-right: 15px;
  background: #000;
  color: #fff;
}

.card-choice {
  margin-right: 10px;
  width: 20%;
}

footer ul li {
  margin-bottom: 10px;
}
</style>