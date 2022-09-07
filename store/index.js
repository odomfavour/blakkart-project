export const state = () => ({
  filterOptions: [],
})

export const mutations = {
  addFilter(state, options) {
   state.filterOptions = options
//    console.log(state.filterOptions)
  },
}
