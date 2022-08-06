<template>
  <div>
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
          <p class="mb-0">Welcome to African’s ONESTOP LIFESTYLE Marketplace</p>
          <ul class="d-flex align-items-center flex-md-row flex-column mb-0">
            <li><a href="#" class="mr-3">Browse Designers</a></li>
            <li>
              <ul class="d-flex">
                <li>
                  <b-dropdown
                    variant="link"
                    toggle-class="text-decoration-none"
                    class="top-drop text-dark"
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
                  <a href="#" class="btn btn-dark text-white mb-0"
                    >Become a Seller</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="logo-box text-center py-3">
      <img src="/main-logo.png" alt="blakkart logo" />
    </div>
    <b-navbar toggleable="lg" type="light" variant="white">
      <div class="container">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-icon icon="grid-fill" class="mr-2"></b-icon>Browse Categories
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

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
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <b-icon icon="person-circle" class="mr-2"></b-icon>Account
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item href="#">
                <img src="/bag-1.png" class="img-fluid mr-2" />Cart</b-nav-item
              >
              <b-nav-item href="#">
                <b-icon icon="question-circle-fill" class="mr-2"> </b-icon
                >Help</b-nav-item
              >
              <b-nav-item-dropdown text="Lang" right>
                <template #button-content>
                  <img src="/canada.png" alt="canada flag" class="img-fluid mr-1"> CAD
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
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.top-section {
  background: #e2e2e2;
}

.top-section ul {
  list-style: none;
  padding-left: 0;
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

@media (max-width: 769px) {
  .navbar .form-inline {
    width: 100%;
  }

  .navbar .form-inline input[type='text'] {
    width: 80% !important;
  }
}

@media (max-width: 426px) {
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
}
</style>