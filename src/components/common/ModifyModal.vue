<template lang="html">
  <transition name="modal">
    <div class="modal-mask" @keyup.esc="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
          </div>
            <div class="mblock">
              <b class="guide">Date</b>
              <i class="fas fa-undo-alt" @click="itemset"></i>
              <datepicker input-class="date" v-model="newDate" format="yyyy-MM-dd" placeholder="Click me!"></datepicker></br>
            </div>
            <div class="mblock">
              <b class="guide3">Title</b></br><textarea class="title" type="text" v-model="newTitle" /></br></br>
            </div>
              <div class="mblock">
                <b class="guide2">Contents</b></br><textarea class="contents" type="text" v-model="newContents"/>
              </div>
              <span  v-on:click="ModifyTodo">
                <p class="ConfirmContainer">Modify</p> 
              </span>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
export default{
  components:{
      Datepicker
    },
  
    data(){
        return{
          mTodo:[{
            id:'',
            mTitle:'',
            mContents:'',
            mDate:''
          }],
            newTitle:'',
            newContents: '',
            newDate:'',
        }
    },
    methods: {
      itemset(){
        this.newTitle = this.$store.state.todoItems[this.$store.state.idx].title;
        this.newContents = this.$store.state.todoItems[this.$store.state.idx].contents;
        this.newDate = this.$store.state.todoItems[this.$store.state.idx].date;
      },
        ModifyTodo() {
        if(this.newTitle == '' || this.Contents == '' || this.newDate == ''){
         alert("수정할 사항을 기입해주세요!")
          navigator.vibrate([200,200,200,200,200]);  
         }else{
          this.mTodo.mTitle = this.newTitle;
          this.mTodo.mContents = this.newContents;
          this.mTodo.mDate = this.newDate;
          this.mTodo.id = this.$store.state.todoItems[this.$store.state.idx].title;
         this.$store.commit('ModifyTodo', this.mTodo);
         this.$store.dispatch('ModifyTodo',this.mTodo);
         var myTrack = new Audio('confirm.mp3');
          myTrack.play();
         }
        }
    }
}
</script>
<style scoped lang="css">
@media all and (max-width:499px){
   /* 내부 글자들 바꿈 */
/* .return{
  border-radius: 1em;
  cursor: pointer;
  border: 1px solid;
  color: rgb(21, 134, 27);
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
} */
.mblock{
  line-height: 230%;
  font-size:12px;
  margin-top:-10px;
}
.guide{
  margin-top:10px;
  margin-left:15px;
  display:inline-block;
  margin-right:260px;
}
.guide2{
  margin-right:200px;
}
.title{
  line-height: 20px;
  width:200px;
  border-bottom-width: 1.5px;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  }
.contents{
  width:200px;
  border-bottom-width: 1.5px;
  height:100px;
  line-height: 20px;
  padding: 0 0.9rem;
   background: white;
   border-radius: 5px;
   
}
.date{
  margin-right: 100px;
  border-bottom-width: 200px;
  line-height: 30px;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  cursor: pointer;

}
.closeModalBtn {
  color: #62acde;
}
.ConfirmContainer{
  margin-top:20px;
  margin-bottom:20px;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  border-radius: 1em;
  height:40px;
  line-height:40px;
  cursor: pointer;
  border: 1px solid;
  color: rgb(21, 134, 27);
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
.ConfirmContainer:hover{
    background:rgba(87, 190, 87, 0.753);
    color:#ffffff;
  }
/* 회색화면 전체까지 */
.modal-mask { 
  font-size:13.5px;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(177, 204, 169, 0.5);
  display: table;
  
  transition: opacity .3s ease;

}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
/* 모달창 */
.modal-container {
  border-top: 3px solid rgb(7, 82, 7);
  width: 230px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 20;
  color: #62acde;
}

.modal-body {
  margin: 20px 0;
  
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
textarea {
  resize: none;
}
}
@media all and (min-width:499px){
  /* 내부 글자들 바꿈 */
/* .return{
  border-radius: 1em;
  cursor: pointer;
  border: 1px solid;
  color: rgb(21, 134, 27);
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
} */
.mblock{
  line-height: 230%;
}
.guide{
  margin-left:15px;
  display:inline-block;
  margin-right:260px;
}
.guide2{
  margin-right:200px;
}
.title{
  line-height: 20px;
  width:300px;
  border-bottom-width: 1.5px;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  }
.contents{
  width:300px;
  border-bottom-width: 1.5px;
  height:200px;
  line-height: 20px;
  padding: 0 0.9rem;
   background: white;
   border-radius: 5px;
   
}
.date{
  margin-right: 100px;
  border-bottom-width: 200px;
  line-height: 30px;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  cursor: pointer;

}
.closeModalBtn {
  color: #62acde;
}
.ConfirmContainer{
  margin-top:50px;
  margin-bottom:50px;
  margin-right: 23px;
  text-align: center;
  border-radius: 1em;
  cursor: pointer;
  border: 1px solid;
  color: rgb(21, 134, 27);
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
.ConfirmContainer:hover{
    background:rgba(87, 190, 87, 0.753);
    color:#ffffff;
  }
/* 회색화면 전체까지 */
.modal-mask { 
  font-size:13.5px;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(177, 204, 169, 0.5);
  display: table;
  
  transition: opacity .3s ease;

}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
/* 모달창 */
.modal-container {
  border-top: 3px solid rgb(7, 82, 7);
  width: 350px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 20;
  color: #62acde;
}

.modal-body {
  margin: 20px 0;
  
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
textarea {
  resize: none;
}
}

</style>
