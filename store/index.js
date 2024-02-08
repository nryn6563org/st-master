export const state = () => ({
  pageTitle: '서브페이지'
})

export const mutations = {
  setPageTitle(state, title) {
    state.pageTitle = title
  }
}