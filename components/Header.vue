<template>
  <div>
    <section class="d-none d-lg-block">
      <div class="top-section py-2 text-center">
        <div class="container">
          <div
            class="
              d-flex
              align-items-md-center
              justify-content-between
              flex-lg-row flex-column
            "
          >
            <p class="mb-0">
              Welcome to African’s ONESTOP LIFESTYLE Marketplace
            </p>
            <ul class="d-flex align-items-center flex-md-row flex-column mb-0">
              <li><a href="#" class="mr-3">Browse Designers</a></li>
              <li>
                <ul class="d-flex">
                  <li>
                    <b-dropdown
                      variant="link"
                      toggle-class="text-decoration-none"
                      class="top-drop text-dark mr-2"
                    >
                      <template #button-content class="text-dark">
                        Impact
                      </template>
                      <b-dropdown-item href="#">Action</b-dropdown-item>
                      <b-dropdown-item href="#">Another action</b-dropdown-item>
                      <b-dropdown-item href="#"
                        >Something else here...</b-dropdown-item
                      >
                    </b-dropdown>
                  </li>
                  <li>
                    <nuxt-link
                      to="/seller/signup"
                      class="btn btn-dark text-white mb-0"
                      >Become a Seller</nuxt-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section class="main-header">
        <div class="logo-box text-center py-3">
          <nuxt-link to="/">
            <img src="/main-logo.png" alt="blakkart logo"
          /></nuxt-link>
        </div>
        <b-navbar toggleable="lg" type="light" variant="white">
          <div class="container">
            <nuxt-link
              to="#categoriesSlider"
              class="text-dark d-flex align-items-center"
              ><b-icon icon="grid-fill" class="mr-2 icon-browse"></b-icon>Browse
              Categories</nuxt-link
            >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-lg-auto">
                <b-nav-form>
                  <b-form-input
                    placeholder="What are you looking for?"
                  ></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit"
                    ><b-icon icon="search"></b-icon
                  ></b-button>
                </b-nav-form>
                <div class="d-flex flex-lg-row flex-column">
                  <b-nav-item-dropdown right class="mr-3">
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                      <b-icon icon="person-circle" class="mr-2"></b-icon>Account
                    </template>
                    <b-dropdown-item href="/profile/overview"
                      >Overview</b-dropdown-item
                    >
                    <b-dropdown-item href="/login">Log in</b-dropdown-item>
                    <b-dropdown-item href="#" @click="logout"
                      >Sign Out</b-dropdown-item
                    >
                  </b-nav-item-dropdown>
                  <b-nav-item href="#" class="mr-3">
                    <img
                      src="/bag-1.png"
                      class="img-fluid mr-2"
                    />Cart</b-nav-item
                  >
                  <b-nav-item href="#" class="mr-3">
                    <b-icon icon="question-circle-fill" class="mr-2"> </b-icon
                    >Help</b-nav-item
                  >
                  <b-nav-item-dropdown text="Lang" right class="mr-3">
                    <template #button-content>
                      <img
                        src="/canada.png"
                        alt="canada flag"
                        class="img-fluid mr-1"
                      />
                      CAD
                    </template>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                  </b-nav-item-dropdown>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </div>
        </b-navbar>
      </section>
    </section>
    <section class="mobile-nav d-md-none">
      <div class="container-fluid">
        <div class="py-3">
          <div class="d-flex justify-content-between align-items-center">
            <div
              class="hamburger"
              role="button"
              @click="$store.commit('toggleMainNavbar')"
            >
              <img src="/hamburger.svg" class="img-fluid" alt="" />
            </div>
            <div class="logo-box">
              <img src="/main-logo.png" class="img-fluid" alt="" />
            </div>
            <div class="links-section" role="button">
              <img src="/bag-1.png" class="img-fluid mr-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main-mobile-nav pt-2 px-3">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <b-icon
            icon="x-lg"
            role="button"
            @click="$store.commit('toggleMainNavbar')"
          ></b-icon>
        </div>

        <div class="logo-box" @click="$store.commit('toggleMainNavbar')">
          <nuxt-link to="/">
            <img src="/main-logo.png" class="img-fluid" alt="" />
          </nuxt-link>
        </div>
        <div></div>
      </div>

      <div class="welcome" v-if="!isLoggedIn">
        <h3 class="mt-4">Welcome</h3>
        <div class="my-3">
          <div class="d-flex text-uppercase">
            <nuxt-link to="/signup" class="btn-orange btn mr-3"
              >Sign up</nuxt-link
            >
            <nuxt-link to="/login" class="btn btn-orange">Sign in</nuxt-link>
          </div>
        </div>
      </div>
      <div class="user-info" v-else>
        <div class="person-info text-center">
          <h2>
            Hi,
            <span class="text-orange text-capitalize">Ngozi</span>
          </h2>
          <div>
            <p>
              Update your measurements to<br />
              request custom order
            </p>
            <div class="d-flex justify-content-center">
              <nuxt-link
                to="/profile/measurements"
                class="
                  d-flex
                  justify-content-center
                  align-items-center
                  btn-filled-orange-sq
                "
                style="font-size: 12px; padding: 10px 15px; cursor: pointer"
              >
                UPDATE PROFILE
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="inner-links d-inline-flex flex-column text-left">
        <b-dropdown
          id="dropdown-left"
          variant="light"
          text="Browse Categories"
          class="m-2"
        >
        <template #button-content>
            <b-icon icon="grid-fill" class="mr-2"></b-icon>Browse Categories
          </template>
          <b-dropdown-item
            v-for="category in categories"
            class="text-lowercase"
            :key="category.id"
            :to="category.url"
            @click="$store.commit('toggleMainNavbar')"
            >{{ category.name }}</b-dropdown-item
          >
        </b-dropdown>
        <b-dropdown
          id="dropdown-left"
          variant="light"
          text="Account"
          class="m-2"
        >
          <template #button-content>
            <b-icon icon="person-circle" class="mr-2"></b-icon>Account
          </template>
          <b-dropdown-item
            v-for="category in account"
            class="text-lowercase"
            :key="category.id"
            :to="category.url"
            @click="$store.commit('toggleMainNavbar')"
            >{{ category.name }}</b-dropdown-item
          >
        </b-dropdown>
        <b-dropdown id="dropdown-left" variant="light" text="Lang" class="m-2">
          <template #button-content>
            <img src="/canada.png" alt="canada flag" class="img-fluid mr-1" />
            CAD
          </template>
          <b-dropdown-item href="#" @click="$store.commit('toggleMainNavbar')"
            >EN</b-dropdown-item
          >
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-dropdown>
        <!-- <div>
          <nuxt-link to="/help" class="d-flex align-items-center"><b-icon icon="question-circle-fill" class="mr-2"></b-icon>Help</nuxt-link>
        </div> -->

        <div class="">
          <button class="btn btn-orange">Logout</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: 'MEN’S CLOTHINGS', url: '' },
        { id: 2, name: 'WOMEN’S CLOTHINGS', url: '' },
        { id: 3, name: 'FOOTWEARS', url: '' },
        { id: 4, name: 'BABIES’CLOTHINGS', url: '' },
        { id: 5, name: 'BAGS', url: '' },
        { id: 6, name: 'JEWELRIES', url: '' },
        { id: 7, name: 'HAIR PRODUCTS', url: '' },
        { id: 8, name: 'ARTWORKS', url: '' },
        { id: 9, name: 'FABRIC', url: '' },
        { id: 10, name: 'HEAD PIECE', url: '' },
      ],
      account: [
        { id: 1, name: 'OVERVIEW', url: '/profile/overview' },
        { id: 2, name: 'ORDERS', url: '/profile/orders' },
        { id: 3, name: 'MEASUREMENTS', url: '/profile/measurements' },
        { id: 4, name: 'PAYMENT METHODS', url: '/profile/payment-methods' },
        { id: 5, name: 'SHIPPING ADDRESS', url: '/profile/shipping-address' },
        { id: 6, name: 'MESSAGE CENTER', url: '/profile/message-center' },
        { id: 7, name: 'ACCOUNT SETTING', url: '/profile/account-settings' },
        { id: 8, name: 'SUPPORT CENTER', url: '/profile/support-center' },
      ],
      isLoggedIn: false,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('blacArtUser')
      this.$auth.logout()
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.main-mobile-nav {
  position: fixed;
  height: 100%;
  width: 100%;
  background: #fff;
  top: 0;
  z-index: 900;
}
.hamburger img {
  height: 25px;
}
.top-section {
  background: #e2e2e2;
}

.main-mobile-nav {
  display: none;
}

.top-section ul {
  list-style: none;
  padding-left: 0;
}

.user-info h2 {
  font-size: 24px;
}

.mobile-links {
  padding-left: 0;
  text-align: left;
  text-transform: capitalize;
}

.mobile-links li {
  list-style: none;
}

.mobile-links li a {
  text-transform: capitalize !important;
}

.navbar svg {
  height: 24px;
  width: 24px;
}

.top-section ul a {
  color: #000;
  font-size: 14px;
  font-weight: 600;
}

.navbar li {
  list-style: none;
}

.navbar-nav {
  justify-content: space-between !important;
  width: 80%;
}

.top-section p {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}

.top-section .dropdown .btn {
  padding: 0 !important;
  color: #000 !important;
}

.main-header {
  background: #fff;
}

@media (max-width: 769px) {
  .navbar .form-inline {
    width: 100%;
  }

  .navbar .form-inline input[type='text'] {
    width: 80% !important;
  }
}

@media (max-width: 426px) {
  .icon-browse {
    display: none;
  }

  .navbar-nav {
    flex-direction: column;
    width: 100%;
  }

  .navbar .form-inline {
    width: 100%;
  }

  .navbar .form-inline input[type='text'] {
    width: 80% !important;
  }

  .mobile-nav .links-section ul {
    list-style: none;
    display: flex;
    margin-bottom: 0;
  }

  .mobile-nav .links-section ul li {
    margin-left: 10px;
  }

  .navbar-open .main-mobile-nav {
    display: block;
  }

  .logo-box {
    width: 60%;
  }

  .inner-links {
    height: 80vh;
    overflow-y: scroll;
  }
}
</style>