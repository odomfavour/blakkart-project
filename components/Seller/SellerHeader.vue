<template>
  <section>
    <section class="py-3 fixed-top bg-white seller-header d-none d-lg-block">
      <div class="container">
        <section
          class="
            d-flex
            justify-content-between
            align-items-center
            flex-md-row flex-column
          "
        >
          <div
            class="
              d-flex
              justify-content-between
              flex-lg-row flex-column-reverse
            "
          >
            <div
              class="
                d-flex
                align-items-center
                justify-content-center
                mb-2 mb-md-0
              "
            >
              <div class="seller-img mr-2">
                <b-img
                  v-bind="{
                    blank: true,
                    width: 72,
                    height: 72,
                    class: 'm1',
                  }"
                  rounded="circle"
                  blank-color="#777"
                  alt="Transparent image"
                ></b-img>
              </div>
              <div class="seller-lication">
                <h5 class="mb-0 font-weight-bold seller-name">
                  Blakkart Fashionia
                </h5>
                <p class="mb-0 seller-location">
                  <b-icon icon="geo-alt-fill" class="mr-2"></b-icon>Port
                  Harcourt, Nigeria
                </p>
              </div>
            </div>
            <div class="blackart-logo d-block d-md-none text-center">
              <nuxt-link to="/">
                <img
                  src="/main-logo.png"
                  class="img-fluid logo"
                  alt="main logo"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="blackart-logo d-none d-md-block">
            <nuxt-link to="/">
              <img
                src="/main-logo.png"
                class="img-fluid logo"
                alt="main logo"
              />
            </nuxt-link>
          </div>
          <div class="primary-btns">
            <button
              class="btn chat-btn mr-2 mb-md-0 mb-3"
              @click="$emit('open-chats')"
            >
              <chats-icon /> Chats (1)
            </button>
            <button class="btn logout-btn mb-md-0 mb-3">
              <logout-icon />
              Logout
            </button>
          </div>
        </section>
      </div>
    </section>
    <section class="py-3 fixed-top bg-white d-lg-none">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div
            class="hamburger"
            role="button"
            @click="$store.commit('toggleSellerBar')"
          >
            <img src="/seller/menu.png" class="img-fluid" alt="" />
          </div>
          <div class="logo">
            <nuxt-link to="/">
              <img src="/main-logo.png" class="img-fluid" alt="" />
            </nuxt-link>
          </div>
          <div class="chatty-btn">
            <img src="/seller/chat-alt-2.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import LogoutIcon from '~/components/Icons/LogoutIcon.vue'
import ChatsIcon from '~/components/Icons/ChatsIcon.vue'
export default {
  components: {
    LogoutIcon,
    ChatsIcon,
  },
}
</script>

<style scoped>
.chat-btn {
  background: rgba(116, 176, 219, 0.2);
  border-radius: 12px;
  color: #4d4d4d;
  padding: 12px 30px;
}

.logout-btn {
  background: rgba(244, 76, 76, 0.1);
  border-radius: 8px;
  padding: 12px 30px;
  color: #dd3131;
}

.seller-name {
  color: #1f1f1f;
  font-size: 24px;
}

.seller-location {
  color: #4d4d4d;
}

.seller-location svg {
  color: #2bc40c;
}

@media (max-width: 769px) {
  .seller-name {
    font-size: 18px;
  }

  .chat-btn,
  .logout-btn {
    padding: 10px;
    font-size: 14px;
  }

  .seller-header .blackart-logo {
    width: 30% !important;
  }
}

@media (max-width: 426px) {
  .seller-name {
    font-size: 20px;
  }

  .seller-header .blackart-logo {
    width: 100% !important;
  }

  .logo {
    width: 50%;
  }
}
</style>