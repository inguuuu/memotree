<template>
  <div>
    <Weather></Weather>
  </div>
</template>

<script>
import Weather from './Weather.vue'

export default {
  name: 'ap',
  components:{
      'Weather' : Weather
  }
}
</script>

<style>
  #ap{
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content: space-around;
  }
</style>





