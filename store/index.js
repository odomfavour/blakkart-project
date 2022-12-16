export const state = () => ({
  filterOptions: [],
})

export const mutations = {
  addFilter(state, options) {
   state.filterOptions = options
//    console.log(state.filterOptions)
  },
  toggleMarketBar() {
    document.body.classList.toggle('filter-open')
  },
  toggleSellerBar() {
    document.body.classList.toggle('sidebar-open')
  },
  toggleMainNavbar() {
    document.body.classList.toggle('navbar-open')
  }
}

// export const getters = {
//   isAuthenticated(state) {
//     return state.auth.loggedIn
//   },

//   loggedInUser(state) {
//     return state.auth.user
//   }
// }
