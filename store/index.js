export const state = () => ({
  pageTitle: '서브페이지',
  customButtonText: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H12H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z" fill="#495062"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#495062"/></svg>',
    text: '커스텀 버튼'
  }
})

export const mutations = {
  setPageTitle(state, title) {
    state.pageTitle = title
  },
  setCustomButtonText(state, customButtonText) {
    state.customButtonText = customButtonText
  },
  setCustomButtonLink(state, customButtonLink) {
    state.customButtonLink = customButtonLink
  }
}