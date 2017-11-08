import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import Meetup from '@/components/Meetup/Meetup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/meetups',
    	name: 'MeetupsList',
    	component: Meetups
    },

    {
    	path: '/meetup/new',
    	name: 'CreateMeetups',
    	component: CreateMeetup
    },

    {
    	path: '/meetups/:id',
    	name: 'MeetupDetail',
    	props: true,
    	component: Meetup
    },
    {
    	path: '/profile',
    	name: 'Profile',
    	component: Profile
    },
    {
    	path: '/signup',
    	name: 'Signup',
    	component: Signup
    },
    {
    	path: '/signin',
    	name: 'Signin',
    	component: Signin
    }
  ],
  mode: 'history'
})