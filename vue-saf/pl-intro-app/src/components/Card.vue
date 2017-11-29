<template>
  <div class="card text-white bg-dark mb-2" v-bind:class="{ 'card-outline-success' : message.isFirst  }">
      <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <h6 class="card-text">{{ text }}</h6>
          <p class="card-text">
              <small class="text-muted">{{ footer }}</small>
          </p>
      </div>
  </div>
</template>

<script>
    
    export default {
        props: ['title', 'text', 'footer']
    }

</script>
