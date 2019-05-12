<template>
  
  <div class="treecontainer">
      <div class="MyTree">MyTree</div>
      <span class="leaf fas fa-leaf" v-for="n in $store.state.leaf" :key = "n"></span>
      <div class="root"></div>
  </div>
 
        
</template>

<script>
export default {

    
}
</script>

<style scoped>

i{
  margin-top:0px;
   margin-bottom:0px;
}
.treecontainer{
   width:200px;
   height:300px;
   background-color:#00000000
}
.leaf{
  display:inline-block;
   margin-top:0px;
   margin-bottom:0px;
   color:green;
    width:15px;
    height:15px;
    background-color:#ffffff
}
.root{
    width:40px;
    height:50px;
    margin-left:80px;
    background-color:#7c4101;
}
.MyTree{
  margin-top:30px;
  margin-bottom:20px;
  margin-left:20px;
  font-weight:bolder;
  font-family: Times ;
    color:green;
}
  
</style>
