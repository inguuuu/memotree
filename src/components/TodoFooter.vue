<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      var myTrack = new Audio('clearall.mp3');
      myTrack.play();
      navigator.vibrate([2000]);      
      // this.$store.commit('clearAll',);
      this.$store.dispatch('clearAll',5000);
    }
  }
}
</script>

<style scoped>
  
@media all and (max-width:499px){
.clearAllContainer {
    width: 4rem;
    height: 25px;
    line-height: 25px;
    background-color: white;
    border-radius: 20px;
    margin: 0 auto;
    border:1px solid rgba(255, 0, 0, 0.644);
    box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(231, 9, 9);
    color: #e20303;
    font-weight:border;
    font-size:13px;
  }

}
@media all and (min-width:500px){
.clearAllContainer {
    width: 7.5rem;
    height: 40px;
    line-height: 40px;
    background-color: white;
    border-radius: 20px;
    margin: 0 auto;
    border:1px solid rgba(255, 0, 0, 0.644);
    box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(231, 9, 9);
    color: #e20303;
    font-weight:border;
  }

}
@media all and (max-height:450px){
  .clearAllContainer {
    width: 7.5rem;
    height: 40px;
    line-height: 40px;
    background-color: white;
    border-radius: 20px;
    margin: 0 auto;
    border:1px solid rgba(255, 0, 0, 0.644);
    box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(231, 9, 9);
    color: #e20303;
    font-weight:border;
    display:none;
  }
}
  .clearAllContainer:hover{
    background: #e00003;
    color:#ffffff; 
  }
 
</style>
