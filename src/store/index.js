import Vue from 'vue'
import Vuex from 'vuex'
import REVIEWS_DATA from "@/data/reviews.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overlay: false,
    review_list: REVIEWS_DATA,
    header_menu_open: false,
    totalEnabledReviews: 8
  },
  getters: {
    overlayStatus: state => {
      return state.overlay
    },
    reviews: state => {
      return state.review_list
    },
    headerMenuStatus: state => {
      return state.header_menu_open
    },
    getTotalEnabledReviews: state=> {
      return state.totalEnabledReviews
    },
    getLoadMoreButtonStatus: state => {
      return state.totalEnabledReviews < state.review_list.length
    }
  },
  mutations: {
    UPDATE_OVERLAY_STATUS: (state, payload) => {
      state.overlay = payload;
    },
    UPDATE_HEADER_MENU_STATUS: (state) => {
      state.header_menu_open = !state.header_menu_open;
    },
    UPDATE_TOTAL_ENABLED_REVIEWS: (state, payload) => {
      if(state.totalEnabledReviews < state.review_list.length){
        state.totalEnabledReviews = state.totalEnabledReviews + payload
      }
    }
  },
  actions: {
    updateOverlayStatus: (context, payload) => {
      context.commit('UPDATE_OVERLAY_STATUS', payload)
    },
    updateHeaderMenuStatus: (context) => {
      context.commit('UPDATE_HEADER_MENU_STATUS')
    },
    updateTotalEnabledReviews: (context, payload) => {
      context.commit('UPDATE_TOTAL_ENABLED_REVIEWS', payload)
    }
  },
  modules: {
  }
})
