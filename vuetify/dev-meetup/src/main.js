
import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'


Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyCCouONOA1GP_4vJMmSiqaNVrjJmKLy_jk",
      authDomain: "vue-meetup-a1bc8.firebaseapp.com",
      databaseURL: "https://vue-meetup-a1bc8.firebaseio.com",
      projectId: "vue-meetup-a1bc8",
      storageBucket: "vue-meetup-a1bc8.appspot.com",
      messagingSenderId: "132262969031"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
