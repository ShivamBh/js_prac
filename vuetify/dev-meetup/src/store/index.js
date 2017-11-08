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
		user: {
			id:'asdgasdhjdasg',
			registeredMeetups: ['asdgasdhjdasg']
		}
	},
	mutations: {
		createMeetup (state, payload) {
			state.loadedMeetups.push(payload)
		},
		setUser (state, payload) {
			state.user = payload
		}
	},
	actions: {
		createMeetup ({commit}, payload) {
			const meetup = {
				title: payload.title,
				location: payload.location,
				imageUrl: payload.imageUrl,
				description: payload.description,
				date: payload.date,
				id: "asdhfklijadgflasdkj"
			}

			//firebase logic 
			commit('createMeetup', meetup)
		},
		signUserUp ({commit}, payload) {
			firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
				user => {
					const newUser = {
						id: user.uid,
						registeredMeetups: []
					}
					commit('setUser', newUser)
				}
			).catch(
				error => {
					console.log(error)
				}
			)
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
		}
	}
})