<template> 
  <div>
    <div>
    <div id="head3">
    <i class="me">Memoº</i><i class="tree">Canvas</i>
    </div>
    
    </div>
    <div class="padbox">
    <VueSignaturePad
      width="100%"
      height="100%"
      border="1.2px solid"
      font-weight="950"
      ref="signaturePad"/>
      </div>
    <div id="btns">
      <button id="btn1" @click="save">Save</button>
      <button id="btn2" @click="undo">Undo</button>
       <button id="btn3" @click="clear">Clear</button>
      <button id="btn4" @click="refresh">Load</button>
      </div>
    
  </div>
</template>

<script>
import { authRef } from '../store/db.js';

  export default {
    name: 'MySignaturePad',
    methods: {
      back(){
      this.$router.push('/');
      this.$store.commit('refresh');
    },
      refresh(){
        this.$refs.signaturePad.fromDataURL(this.$store.state.imgData);
      },
      clear(){
        this.$refs.signaturePad.clearSignature();
      },
      undo() {
        this.$refs.signaturePad.undoSignature();
      },
      save() {
        const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
        // console.log(isEmpty);
        // console.log(data);
        this.$store.dispatch('setCanvas',data);
        this.$router.go(-1);
      }
    },
    created(){
    },
    beforeCreate(){
    authRef.onAuthStateChanged(user=>{
      if(user){
        this.$store.commit('userAuth',user.uid);
        this.$store.dispatch("getTodos",user.uid);
      }
      this.$store.dispatch('getCanvas');
    });
  }   
  }
</script >

<style scope lang="css">
    #btn1{
margin: 1%;
      font-size: 1em;
      font-weight: 900;
      border-radius: 0.8em;
      padding: 0.5em 1.2em;
      cursor: pointer;
      border: 2px solid;
      letter-spacing: 1px;
      color: #4fc08d;
      background: #ffffff;
      transition: 250ms ease-out;
      width:23%;
    }
    #btn2{
      margin: 1%;
     font-size: 1em;
      font-weight: 900;
      border-radius: 0.8em;
      padding: 0.5em 1.2em;
      cursor: pointer;
      border: 2px solid;
      letter-spacing: 1px;
      color: #ebe850;
       background: #ffffff;
      transition: 250ms ease-out;
     width:23%;
    }
    #btn3{
      margin: 1%;
     font-size: 1em;
      font-weight: 900;
      border-radius: 0.8em;
      padding: 0.5em 1.2em;
      cursor: pointer;
      border: 2px solid;
      letter-spacing: 1px;
      color: #b82b36;
       background: #ffffff;
      transition: 250ms ease-out;
     width:23%;
    }
     #btn4{
      margin: 1%;
     font-size: 1em;
      font-weight: 900;
      border-radius: 0.8em;
      padding: 0.5em 1.2em;
      cursor: pointer;
      border: 2px solid;
      letter-spacing: 1px;
      color: #318cd6;
       background: #ffffff;
      transition: 250ms ease-out;
      width:23%;
    }
   
    #head3{
      padding-top: 10px;
    }
    #btns{
      margin-top:20px;
      display: flex;
    }
    #btns2{
      padding-top:30px;
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
  .padbox{
    margin-top: 10px;
border: 1.2px solid;
border-color:#ffffff;
background:#edf8f3;
  }
  .tree{
     font-family: Georgia , Times ,serif;
    font-weight: 900;
    font-size:25px;
   padding-top:0.2em;
  }
    @media all and (max-height:379px){
    .padbox{
    margin-top: 20px;
border: 1.2px solid;
border-color:#ffffff;
background:#edf8f3;
height:200px;
  }
  }
  @media all and (min-height:380px){
    .padbox{
    margin-top: 20px;
border: 1.2px solid;
border-color:#ffffff;
background:#edf8f3;
height:250px;
  }
  }
   @media all and (min-height:440px){
    .padbox{
    margin-top: 20px;
border: 1.2px solid;
border-color:#ffffff;
background:#edf8f3;
height:330px;
  }
   }
     @media all and (min-height:520px){
    .padbox{
    margin-top: 20px;
border: 1.2px solid;
border-color:#ffffff;
background:#edf8f3;
height:400px;
  }
   }
   @media all and (min-height:630px){
    .padbox{
    margin-top: 20px;
border: 1.2px solid;
border-color:#ffffff;
background:#edf8f3;
height:500px;
  }
   }
     @media all and (min-height:750px){
    .padbox{
    margin-top: 20px;
border: 1.2px solid;
border-color:#ffffff;
background:#edf8f3;
height:600px;
  }
}
</style>


