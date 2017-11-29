<template>
  <div id="app" class="jumbotron">
    <div class="container">
      <h1>What up, my glip glops?</h1>
      <hr>
      
      <form @submit="addMessage">
        <div class="form-group">
          <input v-model="newMessage.title" maxlength="40" autofocus placeholder="Please introduce yourself :)" class="form-control"/>
        </div>
        <div class="form-group">
          <textarea v-model="newMessage.text" placeholder="Leave your message!"  rows="3" class="form-control">
          </textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>

      <hr>
       <div class="card-columns">
        <card class="card-outline-success"
        :title="'Hello!'"
        :text="'This is our fixed card!'"
        :footer="'Added on ' + dateToString(Date.now())">
        </card>

        <card v-for="message in reverse(messages)" 
        v-bind:message="message">
        </card>
      </div>
      
    </div>
    
  </div>
</template>

<script>
  import Firebase from 'firebase'
  import { dateToString, reverse } from '../utils/utils'
  import Card from './components/Card'

  let config = {
    apiKey: "AIzaSyBVV9al1VAgOzs5_yxQOPU_DBrJAkUTVr8",
    authDomain: "pleaseintroduceyourself-c5587.firebaseapp.com",
    databaseURL: "https://pleaseintroduceyourself-c5587.firebaseio.com",
    projectId: "pleaseintroduceyourself-c5587",
    storageBucket: "pleaseintroduceyourself-c5587.appspot.com",
    messagingSenderId: "520750499249"
  }

  let app = Firebase.initializeApp(config)
  let db = app.database()
  let messagesRef = db.ref('messages')

  export default {
    data () {
      return {
        newMessage: {
          title: '',
          text: '',
          timestamp: null
        }
      }
    },
    name: 'app',
    firebase: {
      messages: messagesRef
    },
    methods: {
      addMessage (e) {
        e.preventDefault()
        if (this.newMessage.title === '') {
          return
        }
        this.newMessage.timestamp = Date.now()
        messagesRef.push(this.newMessage)
        this.newMessage.text = ''
        this.newMessage.title = ''
        this.newMessage.timestamp = null
      },
      dateToString: dateToString,
      reverse
    },
    components: {
      Card
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
