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
      <div class="card text-white bg-dark mb-2" v-for="message in messages">
        <div class="card-body" >
          <h4 class="card-title">{{message.title}}</h4>
          <h6 class="card-subtitle mb-2 text-muted"> added on: {{message.timestamp}}</h6>
          <p class="card-text">{{message.text}}</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import Firebase from 'firebase'

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
      }
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
