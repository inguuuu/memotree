<template>
    
  <div>
     <h1>
   
    <i class="me">Memoº</i><i class="tree">Tree</i>
    </h1>
    <i class="logout">로그아웃</i>
   <ul>
   <div class="weatherbtn" @click="GoWeather()">오늘의 날씨</div>
   <div class="newsbtn" @click="GoNews()">해외 뉴스</div>
   </ul>
  </div>

</template>

<script>

export default {

  methods: {
    back(){
      this.$router.push('/');
      this.$store.commit('refresh');
    },
  GoWeather(){
    this.$router.push('weather'); 
   },
  GoNews(){
    this.$router.push('news');
   }
 
  },

}
</script>

<style scoped>
.fas{
    float: left;
    font-size: 20px;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
@media all and (max-height:440px){
ul{
    display:flex;
    justify-content:center;
    height:220px;
    margin-top:30px;
    width:60%;
    margin-left:20%;
    text-align:center;
    font-size:15px;
    font-weight:900;
  }
   .weatherbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(weather.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
  .newsbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(news.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
}
@media all and (min-height:441px){

ul{
    display:flex;
    justify-content:center;
   height:230px;
    margin-top:100px;
    text-align:center;
    font-size:20px;
    font-weight:900;
  }
  
   .weatherbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(weather.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
  .newsbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(news.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
}

@media all and (min-height:800px){
   h1 {
   margin-left:30px;
   font-family: Georgia , Times ,serif;
    font-weight: 900;
    font-size:30px;
    display:flex;
    justify-content:center;
    height:100px;
    margin-bottom:20px;
  }
ul{
    display:flex;
    justify-content:center;
    margin-top:120px;
   height:330px;
    text-align:center;
    font-size:20px;
    font-weight:900;
  }
}

 h1 {
   margin-left:30px;
   font-family: Georgia , Times ,serif;
    font-weight: 900;
    font-size:30px;
    display:flex;
    justify-content:center;
    align-items: center;
    height:100px;
    margin-bottom:-5px;
     margin-top:-5px;
  }
 .logout{
      color:#ffffff;
      font-family: Georgia , Times ,serif;
     background:#4fc08d;
     border-radius: 2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    padding-left:0.3em;
    padding-right:0.3em;
    font-weight: 900;
    font-size:18px;
    margin-left:70%;
    width:20%;
   

  }
  .me{
      color:#ffffff;
     background:#4fc08d;
     border-radius: 2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    padding-left:0.4em;
    padding-left:0.2em;
    font-family: Georgia , Times ,serif;
    font-weight: 900;
    font-size:25px;
  
  }
  .tree{
     font-family: Georgia , Times ,serif;
    font-weight: 900;
    font-size:25px;
   
  }
  div{
    margin-left:-27px;
  }
  
   .weatherbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(weather.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
  .newsbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(news.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }

  body {
   
    text-align: center;
    background-color: #ffffff;
  }
    
</style>


