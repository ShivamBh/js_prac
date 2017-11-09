import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMeetups: [
			{
				imageUrl: 'https://cdn.tutsplus.com/vector/uploads/legacy/articles/inspir_20_vector_flickr_groups/vector_art_2.jpg', 
				id: 'asdfgaghasdf33', 
				title: 'What up !',
				date: new Date(),
				location: 'Axom',
				description: "que paso, mi hermano. NanjaKoreya temeira"				
			},
			{
				imageUrl: 'https://i.pinimg.com/564x/28/13/e2/2813e2d7581a3aaaef2b9d7f370c7fa1--ninja-girl-japanese-warrior.jpg',
			 	id: 'asdfgasdasdasdf33', 
			 	title: 'Hello peeps!',
				date: new Date(),
				location: 'Axom',
				description: "que paso, mi hermano. NanjaKoreya peeps"
			 },
			{
				imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/139/749/non_2x/bamboo-artwork-free-vector.jpg',
			 	id: 'sdfgshjsergdf', 
			 	title: 'Ki laage!',
				date: '2017-11-22',
				location: 'Axom',
				description: "que paso, mi hermano. NanjaKoreya laage"				
			}
		],
		user: null,
		loading: false,
		error: null
	},
	mutations: {
		setLoadedMeetups (state, payload) {
			state.loadedMeetups = payload
		},
		createMeetup (state, payload) {
			state.loadedMeetups.push(payload)
		},
		setUser (state, payload) {
			state.user = payload
		},
		setLoading (state, payload) {
			state.loading = payload
		},
		setError (state, payload) {
			state.error = payload
		},
		clearError (state) {
			state.error = null
		}
	},
	actions: {
		loadMeetups ({commit}) {
			commit('setLoading', true)
			firebase.database().ref('meetups').once('value')
				.then((data) => {
					const meetups = []
					const obj = data.val()
					for (let key in obj) {
						meetups.push({
							id: key,
							title: obj[key].title,
							description: obj[key].description,
							imageUrl: obj[key].imageUrl,
							date: obj[key].date,
						})
					}
					
					commit('setLoadedMeetups', meetups)
					commit('setLoading', false)
				})
				.catch(
					(error) => {
						console.log(error)
						commit('setLoading', true)
					}
				)
		},
		createMeetup ({commit}, payload) {
			const meetup = {
				title: payload.title,
				location: payload.location,
				imageUrl: payload.imageUrl,
				description: payload.description,
				date: payload.date.toISOString()
			}
			firebase.database().ref('meetups').push(meetup)
				.then((data) => {
					const key = data.key
					commit('createMeetup', {
						...meetup,
						id: key
					})
				})
				.catch((error) => {
					console.log(error)
				})
			//firebase logic 
			
		},
		signUserUp ({commit}, payload) {
			commit('setLoading', true)
			commit('clearError')
			firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
				user => {
					commit('setLoading', false)
					const newUser = {
						id: user.uid,
						registeredMeetups: []
					}
					commit('setUser', newUser)
				}
			).catch(
				error => {
					commit('setLoading', false)
					commit('setError', error)
					console.log(error)
				}
			)
		},
		signUserIn ({commit}, payload) {
			commit('setLoading', true)
			commit('clearError')
			firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
				user => {
					commit('setLoading', false)
					const newUser = {
						id: user.uid,
						registeredMeetups: []
					}
					commit('setUser', newUser)
				}
			)
			.catch(
				error => {
					commit('setLoading', false)
					commit('setError', error)
					console.log(error)
				}
			)
		},
		clearError ({commit}) {
			commit('clearError')
		}
 	},
	getters: {
		loadedMeetups (state) {
			return state.loadedMeetups.sort((meetupA, meetupB) => {
				return meetupA.date > meetupB.date
			})
		},
		featuredMeetups (state, getters) {
			return getters.loadedMeetups.slice(0, 5);
		},
		loadedMeetup (state) {
			return (meetupId) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id == meetupId
				})
			}
		},
		user (state) {
			return state.user
		},
		error (state) {
			return state.error
		},
		loading (state) {
			return state.loading
		}
	}
})