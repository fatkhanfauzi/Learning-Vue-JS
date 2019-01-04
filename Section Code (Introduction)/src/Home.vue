<template>
  <div>
    <p>Server : {{status}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        status: 'critical'
      }
    }
  }
</script>

<style scoped>
 div {
     border: 1px solid blue;
 }
</style>
