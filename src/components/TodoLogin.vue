<template>
  <div>
    <audio controls autoplay class="audio">
      <source src="sample.mp3">
    </audio>
    <div class="loginlayout">
    <h1>
   <i class="me">Memoº</i><i class="tree">Tree</i>
    </h1>
    <p class="googlebtn" @click=gLogin>Google Login</p>
    </div>
    <KakaoLogin
      api-key="a1419a0d87e506b578df33ad8e2ccce0"
      image="kakao_login_btn_small"
      :on-success=onSuccess
      :on-failure=onFailure
      />
     
  </div>
  
</template>
<script>
import KakaoLogin from 'vue-kakao-login';
import { authRef } from '../store/db.js';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import axios from 'axios';

let onFailure = (data) => {
  console.log(data)
  console.log("failure")
}
export default {
  
    methods:{
      onSuccess(data){
          //console.log(data.access_token)
          this.$store.commit('userAuth',data.access_token);
          firebase.User.uid = data.access_token;
          firebase.auth.uid = data.access_token;
          this.$router.push('menu');
      },
      onFailure,
        gLogin(){
            this.$store.dispatch('userAuth');
        }
    },
    beforeCreate(){
        authRef.onAuthStateChanged(user=>{
          if(user){
            this.$store.commit('userAuth',user.uid);
            this.$store.dispatch("getTodos",user.uid);
            this.$router.push('menu');            
          }
        });
    },
    components: {
    KakaoLogin
  },    
}

</script>
<style>
.audio{
  height: 2.5em;
}
 h1 {
   font-family: Georgia , Times ,serif;
    font-weight: 900;
    font-size:30px;
    display:flex;
    justify-content:center;
    align-items: center;
    height:100px;
    
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
  body {
    text-align: center;
    background-color: #F6F6F8;
  }  
  
  @media all and (max-width:500px){
   .googlebtn{
     width: 50%;
    height: 20px;
    margin: 0 auto;
    font-weight: 600;
    border-radius: 2em;
  padding: 0.5em;
  cursor: pointer;
  border: 1px solid;
  color: #4fc08d;
  border: 1.5px solid;
  font-size:9px;
   margin-bottom:10px;
  }
  }
   @media all and (min-width:501px){
   .googlebtn{
     width: 50%;
    height: 30px;
    margin: 0 auto;
    font-weight: 600;
    border-radius: 2em;
  padding: 0.5em;
  cursor: pointer;
  border: 1px solid;
  color: #4fc08f;
  border: 1.5px solid;
  margin-bottom:10px;
  }
  }
@media all and (max-height:400px){
 .loginlayout{
    margin-top:80px;
    background-color: #EFFCF7;
    height:200px;
    width:60%;
    margin-left:20%;
    color: #4fc08d;
      border-radius: 2em;
      border: 2px solid;
  }
}
@media all and (min-height:401px){
 .loginlayout{
    margin-top:120px;
   background-color: #EFFCF7;
    height:200px;
    width:60%;
    margin-left:20%;
    color: #4fc08d;
      border-radius: 2em;
      border: 2px solid;
      margin-bottom: 30px;
  }
}
@media all and (min-height:601px){
 .loginlayout{
    margin-top:180px;
    background-color: #EFFCF7;
    height:200px;
    width:60%;
    margin-left:20%;
    color: #4fc08d;
      border-radius: 2em;
      border: 2px solid;
      margin-bottom: 40px;
  }
}
@media all and (min-height:801px){
 .loginlayout{
    margin-top:260px;
    background-color: #EFFCF7;
    height:200px;
    width:60%;
    margin-left:20%;
    color: #4fc08d;
      border-radius: 2em;
      border: 2px solid;
      margin-bottom: 50px;
  }
}
  
</style>
