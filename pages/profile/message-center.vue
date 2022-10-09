<template>
  <section>
    <div class="container-fluid">
      <div class="d-flex align-items-center mb-5">
        <nuxt-link to="/profile/overview">
          <b-icon icon="arrow-left"></b-icon
        ></nuxt-link>
        <p class="mb-0 text-uppercase ml-3">Payment methods</p>
      </div>
      <div class="mt-5 px-5">
        <div class="message-center-heading">
          <h5 class="mb-0">BLAKKART SUPPORT</h5>
        </div>
        <div class="chat-layout">
          <div class="blakart-support">
            <div class="d-flex">
              <div class="image-box mr-2">
                <img src="/support.png" class="img-fluid" alt="" />
              </div>
              <div class="convo-box">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  impedit incidunt, quos magni vero corrupti, magnam ad
                  voluptatem eos sed odit cupiditate, praesentium itaque? Harum
                  rerum alias consequatur ab modi.
                </p>
              </div>
            </div>
          </div>
          <div class="buyer-response">
            <div class="d-flex buyer-content">
                 <div class="convo-box mr-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  impedit incidunt, quos magni vero corrupti, magnam ad
                  voluptatem eos sed odit cupiditate, praesentium itaque? Harum
                  rerum alias consequatur ab modi.
                </p>
              </div>
              <div class="image-box">
                <img src="/support.png" class="img-fluid" alt="" />
              </div>
             
            </div>
          </div>
          <div class="chat-input-box d-flex">
            <div class="input-section mr-1">
                <textarea name="" id="" rows="2" class="form-control"></textarea>
            </div>
            <div class="send-icon" role="button">
                <b-icon icon="cursor-fill" font-scale="1.5"></b-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'profile',
}
</script>

<style>
.blakart-support {
  width: 60%;
  margin-bottom: 30px;
}

.blakart-support .image-box {
  width: 30%;
}

.blakart-support .convo-box {
  background: #f4f4f4;
  border-radius: 0px 30px 0px 0px;
  padding: 24px 36px;
}

.buyer-response {
    display: flex;
    justify-content: end;
}

.buyer-response .buyer-content {
    width: 60%;
    margin-bottom: 30px;
}

.buyer-response .image-box {
  width: 30%;
}

.buyer-response .convo-box {
  background: #EB542B;
  border-radius: 30px 0px 0px 0px;
  padding: 24px 36px;
  color: #fff;
}

.message-center-heading {
 
 
    background: #eb542b;
    color: #fff;
    padding: 15px 20px;
    margin: 20px 0;
}

.chat-input-box .input-section {
    width: 95%;
}

.chat-input-box .send-icon {
    transform: rotate(35deg);
    width: 5%;
    padding: 0;
}
</style>