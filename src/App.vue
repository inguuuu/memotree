<template>
  <div id="app">
    <!-- <vue-audio class="audio" :file="file1" :loop="true" :autoPlay="true" preload="auto"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import VueAudio from 'vue-audio';
import { authRef } from './store/db.js';

export default {
  data() {
    return {
    file1: 'sample.mp3',
    file2: 'dist/1.mp3'
    }
  },
  components: {
  'vue-audio': VueAudio
  },
  beforeCreate(){
    authRef.onAuthStateChanged(user=>{
      if(user){
        this.$store.commit('userAuth',user.uid);
        this.$store.dispatch("getTodos",user.uid);
      }
    });
  }   
}
</script>
<style>
  body {
    margin:0;
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>
