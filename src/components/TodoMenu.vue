<template>
    
  <div>
     <h1>
   <i class="me">Memoº</i><i class="tree">Tree</i>
    </h1>
    <i class="logout" @click="logout()">로그아웃</i>
   <ul>
   <div class="memobtn" @click="GoMemo()">메모트리</div>
   <div class="mapbtn" @click="GoMap()">지도메모</div>
   </ul>
   <ul>
   <div class="drawbtn" @click="GoDraw()">그림메모</div>
   <div class="calenderbtn" @click="GoCal()">달력보기</div>
    </ul>
    <ul>
   <div class="viewbtn" @click="GoView()">정보보기</div>
   <div class="optionbtn" @click="GoCon()">환경설정</div>
    </ul>
  </div>

</template>

<script>
import { authRef } from '../store/db.js';

export default {

  methods: {
  logout(){
    this.$store.dispatch('signOut')
    this.$router.push('/');
  },
  GoMemo(){
    this.$router.push('todo'); 
   },
  GoMap(){
    this.$router.push('map');
   },
  GoCal(){
    this.$router.push('cal');
   },
  GoDraw(){
    this.$router.push('draw');
   },
   GoView(){
    this.$router.push('view');
   },
   GoCon(){
     this.$router.push('con');
   }

  },
  beforeCreate(){
    authRef.onAuthStateChanged(user=>{
      if(user){
        this.$store.commit('userAuth',user.uid);
        this.$store.dispatch("getTodos",user.uid);
      }
    });
  },
}
</script>

<style scoped>
@media all and (max-height:480px){
ul{
    display:flex;
    justify-content:center;
    height:60px;
    width:60%;
    margin-left:20%;
    text-align:center;
    font-size:15px;
    font-weight:900;
  }
  .memobtn{
    width:40%;
    height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
     background-image:url(tree.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 60%  50%;
    
  
  }
    .drawbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(draw.png);
     background-repeat:no-repeat;
    background-position:50% 50%;
     background-size: 50%  40%;
  
  }
    .calenderbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(cal.png);
     background-repeat:no-repeat;
    background-position:50% 50%;
     background-size: 50%  40%;
  
  }
    .mapbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(map.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
 
   .viewbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(view.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
  .optionbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(option.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
}
@media all and (min-height:481px){

ul{
    display:flex;
    justify-content:center;
    height:85px;
    text-align:center;
    font-size:20px;
    font-weight:900;
  }
  
  .memobtn{
    width:40%;
    height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
     background-image:url(tree.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 60%  50%;
    
  
  }
    .drawbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(draw.png);
     background-repeat:no-repeat;
    background-position:50% 50%;
     background-size: 50%  40%;
  
  }
    .calenderbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(cal.png);
     background-repeat:no-repeat;
    background-position:50% 50%;
     background-size: 50%  40%;
  
  }
    .mapbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(map.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
   .viewbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(view.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
  .optionbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(option.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
}
@media all and (min-height:540px){
ul{
   
    display:flex;
    justify-content:center;
     height:110px;
      text-align:center;
      font-size:20px;
    font-weight:900;
    
  }
}
@media all and (min-height:600px){
ul{
  
    display:flex;
    justify-content:center;
     height:135px;
      text-align:center;
      font-size:20px;
    font-weight:900;
    
  }
  
  .memobtn{
    width:30%;
    height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
     background-image:url(tree.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 60%  60%;
    
  
  }
    .drawbtn{
     width:30%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(draw.png);
     background-repeat:no-repeat;
    background-position:50% 50%;
     background-size: 50%  50%;
  
  }
    .calenderbtn{
     width:30%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(cal.png);
     background-repeat:no-repeat;
    background-position:50% 50%;
     background-size: 50%  50%;
  
  }
    .mapbtn{
     width:30%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(map.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  50%;
  
  }
   .viewbtn{
     width:30%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(view.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
  .optionbtn{
     width:30%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(option.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }

}
@media all and (min-height:750px){
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
   height:170px;
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
  
  .memobtn{
    width:40%;
    height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
     background-image:url(tree.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 60%  60%;
    
  
  }
    .drawbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(draw.png);
     background-repeat:no-repeat;
    background-position:50% 50%;
     background-size: 50%  50%;
  
  }
    .calenderbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(cal.png);
     background-repeat:no-repeat;
    background-position:50% 50%;
     background-size: 50%  50%;
  
  }
    .mapbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(map.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  50%;
  
  }
   .viewbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(view.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }
  .optionbtn{
     width:40%;
     height:100%;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.5px solid;
     border-radius:5px;
     margin-left:3px;
     color: #4fc08d;
      background-image:url(option.png);
     background-repeat:no-repeat;
     background-position:50% 50%;
     background-size: 50%  40%;
  
  }

  body {
   
    text-align: center;
    background-color: #ffffff;
  }
    
</style>


