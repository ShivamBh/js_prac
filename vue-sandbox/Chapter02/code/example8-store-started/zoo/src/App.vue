<template>
  <div id="app" class="jumbotron">
    <div class="row">
      <div class="col-9"><h1><span v-if="name">Hello, <strong>{{name}}</strong>! </span><span>Let’s learn Vue.js</span></h1></div>
      <div class="col-3"><img width="100%" :src="name ? gladSrc : sadSrc"></div>
    </div>
    <hr />
    <introduction></introduction>
    <hr />
    <h2><span v-if="name">{{name}}! </span>Select your animals</h2>
    <div class="row">
      <select v-model="animalsForZoo" class="col-12" multiple="multiple" name="animals" id="animals">
        <option v-for="animal in animals" :value="animal">{{animal}}</option>
      </select>
    </div>
    <hr />
    <zoo :animals="animalsForZoo" :animalsCodes="animalsCodes" :name="name"></zoo>
  </div>
</template>

<script>
  import Zoo from './components/Zoo'
  import Introduction from './components/Introduction'
  
  export default {
    name: 'app',
    components: {
      Zoo,
      Introduction
    },
    data () {
      return {
        animalsForZoo: []
      }
    },
    methods: {
      onNameChanged (newName) {
        this.name = newName
      }
    },
    computed: {
      name () {
        this.$store.state.name
      },
      animals () {
        this.$store.state.animals
      },
      animalCodes () {
        this.$store.state.animalCodes
      },
      sadSrc () {
        this.$store.state.sadSrc
      },
      gladSrc () {
        this.$store.state.gladSrc
      }
    }
  }
</script>

<style>
  #app {
    margin-top: 60px;
    width: 60%;
    margin: 20px auto auto auto;
  }
  input {
    padding-left: 10px;
  }
  .animal {
    font-size: 4em;
  }
  .red {
    color: red;
  }
  .green {
    color: green;
  }
</style>
