<template>
 
  <section>
  
   <li class="FavoriteTag">
    <p class="AllContainer" @click="AllState()">All</p> <!--state==0-->
   <p class="FavoriteContainer" @click="FavoriteState()">Favorite</p> 
   </li>

   <!--검색기능-->
    <div class="inputBox shadow">
    <span class="searchOffBtn " v-if="searchstate==false" type="button">
          <i class="fas fa-search  " aria-hidden="true"></i>
   </span>    
    <span class="searchOnBtn " v-if="searchstate" type="button">
          <i class="fas fa-search  " aria-hidden="true"></i>
   </span>    
    <input class="inputoff" type="text" v-if="searchstate==false" @click="searchOn()" placeholder="   search for your keyword">
    <input class="inputon" type="text" v-if="searchstate"  @click="searchOn()" v-model="keyword">
     <input class="inputon" type="text"  v-model="speechresult" >
    <i class="fas fa-microphone" aria-hidden="true" @click="checkApi()"></i>
    <i class="fas fa-ban" aria-hidden="true" @click=" Speechclear()"></i>
   </div>
   <div>
    {{SpeechResult}}
   </div>

    <!--여기부터 리스트-->
    <transition-group name="list" tag="ul">
      <!--전체보기일경우-->
      <!--전체보기일경우-->

      <li v-for="(todoItem, index) in items" :key="todoItem.title" class="listli"
       v-if="todoItem.title&&!todoItem.complete&&state==0&&todoItem.title.indexOf(keyword)>=0&&todoItem.title.indexOf(speechresult)>=0">

        <ModifyModal 
           v-if="$store.state.showModifyModal" 
           v-on:esc="$store.state.showModifyModal = false" 
           @close="$store.state.showModifyModal = false">
          
       </ModifyModal>
        <i  class="favoriteBtn far fa-star" aria-hidden="true" @click="favoriteTodo(todoItem.title,index)" v-if="todoItem.favorite==false"></i>
        <i  class="favoriteBtn fas fa-star" aria-hidden="true" @click="favoriteTodo(todoItem.title,index)" v-if="todoItem.favorite"></i>

        <span class="ct" v-if="todoItem.complete">
         <div>{{todoItem.title}} </div>
        </span>
        <span class="cf" v-if="todoItem.complete==false" >
            <div>{{todoItem.title}}</div>
        </span>

        <div class="Btn">
        <span class="showList" v-on:click="openEPasswordModal" @click="indexset(index)" >
         <i class="info fas fa-info" aria-hidden="true"></i>
        </span>
        <span class="modifyBtn" v-on:click="openModal" @click="indexset(index)">
           <i class="modify fas fa-cut" aria-hidden="true"></i>
         </span>
         <i  class="checkBtn fas fa-check" aria-hidden="true" @click="confirmTodo(todoItem.title,index)"></i>
        <span class="removeBtn" type="button" @click="removeTodo(todoItem.title,index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>    
        </div>


        <EPasswordModal
          v-if="$store.state.showEPasswordModal" 
          v-on:esc="$store.state.showEPasswordModal = false" 
          @close="$store.state.showEPasswordModal = false">
       </EPasswordModal>
        
        <ListModal v-if="$store.state.showListModal" @close="$store.state.showListModal = false">
        
       </ListModal>
       </li>

      <!-- 완료 리스트 -->
      <!-- 완료 리스트 -->

      <li class="completeli" v-for="(todoItem, index) in items" :key="todoItem.title" 
      v-if="todoItem.title&&todoItem.complete&&state==0&&todoItem.title.indexOf(keyword)>=0&&todoItem.title.indexOf(speechresult)>=0">


        <i  class="favoriteBtn far fa-star" aria-hidden="true" @click="favoriteTodo(todoItem.title,index)" v-if="todoItem.favorite==false"></i>
        <i  class="favoriteBtn fas fa-star" aria-hidden="true" @click="favoriteTodo(todoItem.title,index)" v-if="todoItem.favorite"></i>


        <span class="ct" v-if="todoItem.complete">
         <div>{{todoItem.title}} </div>
        </span>
        <span class="cf" v-if="todoItem.complete==false">
            <div>{{todoItem.title }}</div>
        </span>
        
        <div class="Btn">
        <span class="showList" v-on:click="openEPasswordModal" @click="indexset(index)" >
         <i class="info fas fa-info" aria-hidden="true"></i>
        </span>
        <span class="modifyBtn" v-on:click="openModal" @click="indexset(index)">
           <i class="modify fas fa-cut" aria-hidden="true"></i>
         </span>
         <i  class="checkBtn fas fa-check" aria-hidden="true" @click="confirmTodo(todoItem.title,index)"></i>
        <span class="removeBtn" type="button" @click="removeTodo(todoItem.title,index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>    
        </div>
        <EPasswordModal
          v-if="$store.state.showEPasswordModal" 
          v-on:esc="$store.state.showEPasswordModal = false" 
          @close="$store.state.showEPasswordModal = false">
       </EPasswordModal>
        
        <ListModal v-if="$store.state.showListModal" @close="$store.state.showListModal = false">
        
       </ListModal>
      </li>



      <!--즐겨찾기일경우-->
      <!--즐겨찾기일경우-->
        <li v-for="(todoItem, index) in items" :key="todoItem.title" class="listli" 
         v-if="todoItem.title&&!todoItem.complete&&state==1&&todoItem.favorite&&todoItem.title.indexOf(keyword)>=0&&todoItem.title.indexOf(speechresult)>=0">

        <ModifyModal 
          v-if="$store.state.showModifyModal" 
          v-on:esc="$store.state.showModifyModal = false" 
          @close="$store.state.showModifyModal = false">
  
       </ModifyModal>

        <i  class="favoriteBtn far fa-star" aria-hidden="true" @click="favoriteTodo(todoItem.title,index)" v-if="todoItem.favorite==false"></i>
        <i  class="favoriteBtn fas fa-star" aria-hidden="true" @click="favoriteTodo(todoItem.title,index)" v-if="todoItem.favorite"></i>

        <span class="ct" v-if="todoItem.complete">
         <div>{{todoItem.title}} </div>
        </span>
        <span class="cf" v-if="todoItem.complete==false">
            <div>{{todoItem.title }}</div>
        </span>


       <div class="Btn">
        <span class="showList" v-on:click="openEPasswordModal" @click="indexset(index)" >
         <i class="info fas fa-info" aria-hidden="true"></i>
        </span>
        <span class="modifyBtn" v-on:click="openModal" @click="indexset(index)">
           <i class="modify fas fa-cut" aria-hidden="true"></i>
         </span>
         <i  class="checkBtn fas fa-check" aria-hidden="true" @click="confirmTodo(todoItem.title,index)"></i>
        <span class="removeBtn" type="button" @click="removeTodo(todoItem.title,index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>    
        </div>
        <EPasswordModal
          v-if="$store.state.showEPasswordModal" 
          v-on:esc="$store.state.showEPasswordModal = false" 
          @close="$store.state.showEPasswordModal = false">
       </EPasswordModal>
        
        <ListModal v-if="$store.state.showListModal" @close="$store.state.showListModal = false">
         
       </ListModal>
      </li>

      <!-- 완료 리스트 -->
      <li class="completeli" v-for="(todoItem, index) in items"  :key="todoItem.title"
      v-if="todoItem.title&&todoItem.complete&&state==1&&todoItem.favorite&&todoItem.title.indexOf(keyword)>=0&&todoItem.title.indexOf(speechresult)>=0">


        <i  class="favoriteBtn far fa-star" aria-hidden="true" @click="favoriteTodo(todoItem.title,index)" v-if="todoItem.favorite==false"></i>
        <i  class="favoriteBtn fas fa-star" aria-hidden="true" @click="favoriteTodo(todoItem.title,index)" v-if="todoItem.favorite"></i>

        <span class="ct" v-if="todoItem.complete">
         <div>{{todoItem.title}} </div>
        </span>
        <span class="cf" v-if="todoItem.complete==false">
            <div>{todoItem.title }}</div>
        </span>
        
     
        <div class="Btn">
        <span class="showList" v-on:click="openEPasswordModal" @click="indexset(index)" >
         <i class="info fas fa-info" aria-hidden="true"></i>
        </span>
        <span class="modifyBtn" v-on:click="openModal" @click="indexset(index)">
           <i class="modify fas fa-cut" aria-hidden="true"></i>
         </span>
         <i  class="checkBtn fas fa-check" aria-hidden="true" @click="confirmTodo(todoItem.title,index)"></i>
        <span class="removeBtn" type="button" @click="removeTodo(todoItem.title,index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>    
        </div>
        <EPasswordModal
          v-if="$store.state.showEPasswordModal" 
          v-on:esc="$store.state.showEPasswordModal = false" 
          @close="$store.state.showEPasswordModal = false">
       </EPasswordModal>
        
        <ListModal v-if="$store.state.showListModal" @close="$store.state.showListModal = false">
        
       </ListModal>
      </li>


    </transition-group>
      {{create}}
      <!--비밀번호 설정 기능-->
     <div>
       <i v-if="$store.state.password!=''" class="onoffbox" v-on:click="openPasswordUnlockModal">On</i>
       <PasswordUnlockModal 
           v-on:passwordUnlockTodo="passwordUnlockTodo" 
           v-if="$store.state.showPasswordUnlockModal"
           v-on:esc="$store.state.showPasswordUnlockModal = false" 
           @close="$store.state.showPasswordUnlockModal = false">
          </PasswordUnlockModal>
       <i v-if="$store.state.password==''" class="onoffbox" v-on:click="openPasswordModal">Off</i>
          <PasswordModal 
          v-if="$store.state.showPasswordModal" 
          v-on:esc="$store.state.showPasswordModal = false" 
          @close="$store.state.showPasswordModal = false">
       </PasswordModal>
       <i class="privatemode">Private Mode:</i>
      </div>
  </section>

</template>

<script>

import ModifyModal from './common/ModifyModal.vue'
import ListModal from './common/ListModal.vue'
import PasswordModal from './common/PasswordModal.vue'
import EPasswordModal from './common/EPasswordModal.vue'
import PasswordUnlockModal from './common/PasswordUnlockModal.vue'
import { SwipeList, SwipeOut } from 'vue-swipe-actions';
import 'vue-swipe-actions/dist/vue-swipe-actions.css';

let aself = this;
export default {
  name: 'vue-speech',
     props: { 
     lang: { 
     type: String, 
     default: 'ko' 
     } 
   }, 
  data(){
   return{ 
     temp:"",
     state:0,// All Favorite 상태 구분하는 값 -> getter로 해결가능?
     keyword:"",
      searchstate:false,
     runtimeTranscription: '', 
    transcription: [],
    speechresult:"",
    speechstate:false
   }
  },
  methods: {

      openModal(){
          var myTrack1 = new Audio('click.mp3');
      myTrack1.play();
      this.$store.state.showModifyModal = true;
    },
    openPasswordModal(){
      this.$store.state.showPasswordModal = true;
    },
    openPasswordUnlockModal(){
      this.$store.state.showPasswordUnlockModal = true;
    },
    passwordUnlockTodo(){
      this.$store.state.showPasswordUnlockModal = true;
    },
    openEPasswordModal(){
       var myTrack2 = new Audio('click.mp3');
      myTrack2.play();
      if(this.$store.state.password != ""){
        this.$store.state.showEPasswordModal = true;
      }else{
        this.$store.state.showListModal = true;
      }
    },
    removeTodo(id,index) {
       var myTrack3 = new Audio('click.mp3');
      myTrack3.play();
      navigator.vibrate([2000]);      
      this.$store.dispatch('removeTodo',id);
      this.$store.commit('removeTodo',index);
    },
    confirmTodo(id,index) {
        var myTrack4 = new Audio('click.mp3');
      myTrack4.play();
      this.$store.dispatch('confirmTodo',id);
      this.$store.commit('confirmTodo',index);
    },
    favoriteTodo(id,index) {
      this.$store.dispatch('favoriteTodo',id);
      this.$store.commit('favoriteTodo', index);
    },
    indexset(index2){
     this.$store.state.idx = index2;
    },
    AllState(){
       this.state=0;
    },
    FavoriteState(){
       this.state=1;
    },
     searchOn(){
       this.searchstate=!this.searchstate;
    },
     SpeechState(){
        this.speechstate=!this.speechstate;
     // console.log(this.speechstate);
               
    },
    Speechclear(){
 
            for(var i=0;i<this.transcription.length;i++){
          this.transcription.splice(this.transcription[i]);
         }
         
    },
     SpeechStop(){
           this.recognition.stop()
          
         
    },
    checkApi () { 
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition 
  
        if (!SpeechRecognition && process.env.NODE_ENV !== 'production') { 
          throw new Error('Speech Recognition does not exist on this browser. Use Chrome or Firefox') 
        } 
   
        if (!SpeechRecognition) { 
          return 
        }    
       
   const recognition = new SpeechRecognition() 
        recognition.lang = this.lang 
        recognition.interimResults = true 
      //if(this.speechstate==true){
         var self= this;
        var isEnd=false;
        recognition.addEventListener('result', event => { 
          const text = Array.from(event.results) 
            .map(result => result[0]) 
            .map(result => result.transcript) 
            .join('') 
   
          this.runtimeTranscription = text 
          
          console.log("stop");
          isEnd = true;
          recognition.stop();
        }) 
   
        recognition.addEventListener('end', () => { 
          if (this.runtimeTranscription !== '') { 
            this.transcription.push(this.runtimeTranscription) 
   
            this.$emit('onTranscriptionEnd', { 
              transcription: this.transcription, 
              lastSentence: this.runtimeTranscription 
            }) 
          } 
   
          this.runtimeTranscription = '' 
         if(!isEnd){
          recognition.start() 
         }
          console.log("start")


         //setTimeout(function() {recognition.stop()}, 3000);
        }) 
        recognition.start() 
        console.log("first start")

          
      //   recognition.start() 
      //  setTimeout(()=>recognition.stop(),5000);
        //setTimeout(function() {recognition.stop()}, 3000);
       
    // }
   },

  },
  computed:{
    create:function(){
    },
    items (){
      return this.$store.getters.getTodos;
    },
     SpeechResult:function(){
      
       this.speechresult='';
       
       
        for(var i=0;i<this.transcription.length;i++){
       
         this.speechresult=this.speechresult+this.transcription[i];
         }
         //console.log(this.transcription.length);
   
    },
  },
  // created(){ // ListView 생성 시 getTodos Action 수행    
  //    this.$store.dispatch('getTodos');
  // },
  
  components:{
    ModifyModal: ModifyModal,
    ListModal: ListModal,
    PasswordModal:PasswordModal,
    EPasswordModal:EPasswordModal,
    PasswordUnlockModal:PasswordUnlockModal,
    SwipeOut,
    SwipeList
  }
}

</script> 



<style scoped lang="css">
section{
  background:#00000000;
}
div{
  background:#00000000;
  
}
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
 
 
   .listli:hover{
    background: #dffaea;
  }
  .ct{
    color: green;
    text-decoration: line-through;
  }
  .modify{
  font-size:14px;
  padding: 0.3em;
  padding-right: 0.35em;
  padding-left: 0.35em;
  margin-left:-6px;

  border: 1.2px solid;
  color: rgb(98, 173, 13);
  border-radius:5px;
  }
  .info{
  font-size:14px;
  padding: 0.3em;
  padding-left: 0.55em;
  padding-right: 0.55em;
  border: 1.2px solid;
  border-radius:5px;
  color: #0f580c;
  }
   .removeBtn {
    font-size:13px;
     padding: 0.4em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.2px solid;
     border-radius:5px;
     margin-left:3px;
     color: #b30909bd;
  }
    .checkBtn {
      font-size:14px;
      padding: 0.3em;
      border: 1.2px solid;
     border-radius:5px;
     margin-left:3px;
     /* line-height: 60px; */
    color: #2a28b4c4;
  }
  .Btn{
    margin-left:auto;
  }
  .com{
    background: red;
    min-height: 2px;
    line-height: 2px;
    text-decoration:line-through;
  }
   .favoriteBtn {
     line-height: 60px;
    color: rgb(255, 215, 50);
    margin-right: 5px;
  }

.list li.cf {
    color: #d9d9d9;
    text-decoration: line-through;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)

}
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .showList{
    margin-left:20px;
    margin-right: 10px;
  }
  .AllContainer {
    width: 45%;
    height: 30px;
    margin: 0 auto;
    font-weight: 600;
    border-radius: 2em;
  padding: 0.5em;
  cursor: pointer;
  border: 1px solid;
  color: #4fc08d;
  border: 1.5px solid;
    float:left;  
    margin-left:10px;
 
  }
   .FavoriteContainer {
    width: 45%;
    height: 30px;
    margin: 0 auto;
    font-weight: 600;
    border-radius: 2em;
   padding: 0.5em;
   cursor: pointer;
   border: 1px solid;
   color: #4fc08d;
    border: 1.5px solid;
    float:right;
     margin-right:10px;
     margin-left:10px;
  }
  .FavoriteContainer:hover{
    background:#4fc08d;
    color:#ffffff;
  }
   .AllContainer:hover{
    background:#4fc08d;
    color:#ffffff;
  }

  .FavoriteTag{ 
       margin-top:10px;
       line-height: 30px;
    height: 50px;
    background-color: #00000000;
  }
   .listli{
    display: flex;
    min-height: 60px;
    height: 40px;
    line-height: 60px;
    padding: 0 0.9rem;
    background: white;
    border-radius: 20px;
    margin-top:10px;
    box-shadow: 1px 1px 1px 1px #86A593;
    
  }
  .completeli{
    padding: 0 0.9rem;
     margin-top:10px;
    border-radius: 20px;
     background-color:#4fc08d;
     box-shadow: 1px 1px 1px 1px #014d20;
     
  }
  input:focus {
  outline: none;
}

.inputoff {
  width:170px;
  float:left;
  margin-left:10px;
  border-style: none;
  font-size: 0.9rem;
  background: #00000000;
  border-bottom:1px solid;
}
.inputon {
  width:170px;
  float:left;
  margin-left:10px;
  border-style: none;
  font-size: 0.9rem;
  background: #00000000;
  border-bottom:1.5px solid;
  color:#4fc08d;
}
.searchOffBtn{
  float:left;
  margin-left:20px;
  background: #00000000;
}
.searchOnBtn{
  float:left;
  margin-left:20px;
  color:#4fc08d;
  background: #00000000;
  
}

@media all and (max-width:499px){
.onoffbox{
  color: #ffffff;
  background: #4fc08d;
  font-size: 11px;
  
}
.inputBox {
   display: flex;
  margin-top:10px;
  background: #00000000;
  height: 20px;
  line-height: 20px;
 width:180px;
}
.inputoff {
  width:120px;
  float:left;
  margin-left:10px;
  border-style: none;
  font-size: 8px;
  background: #00000000;
  border-bottom:1px solid;
}
.inputon {
  width:120px;
  float:left;
  margin-left:10px;
  border-style: none;
  font-size: 9px;
  background: #00000000;
  border-bottom:1.5px solid;
  color:#4fc08d;
}
.privatemode{
  font-size: 12px;
}
 li {
    display: flex;
    min-height: 60px;
    height: 40px;
    line-height: 60px;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;    
    font-size:12px;
  }
}
@media all and (min-width:500px){
  .inputBox {
   display: flex;
  margin-top:10px;
  background: #00000000;
  height: 20px;
  line-height: 20px;
 width:250px;
}
.inputoff {
  width:170px;
  float:left;
  margin-left:10px;
  border-style: none;
  font-size: 0.9rem;
  background: #00000000;
  border-bottom:1px solid;
}
.inputon {
  width:170px;
  float:left;
  margin-left:10px;
  border-style: none;
  font-size: 0.9rem;
  background: #00000000;
  border-bottom:1.5px solid;
  color:#4fc08d;
}
 li {
    display: flex;
    min-height: 60px;
    height: 40px;
    line-height: 60px;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;    
  }
}
@media all and (max-height:450px){
 .removeBtn{
   display:none;
 }
 .modifyBtn{
   display:none;
 }
}

</style>