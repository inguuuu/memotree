<template>
  <div class="inputBox shadow">
 
   <i class=yt>Your Tasks</i>
  <i class=ct>Complete</i>
  <span class=ratebox> {{this.$store.state.completenum}}</span>
  <i class=tt> Todo(s)</i> 
  <span class=ratebox>{{this.$store.state.total}}</span>
    <span class="addContainer" v-on:click="openModal">Add</span>

    <TodoModal v-if="$store.state.showTodoModal" @close="$store.state.showTodoModal = false"></TodoModal>
  </div>

</template>

<script>
import TodoModal from './common/InputModal.vue'


export default {
  data() {
    return {
      newTodoItem: '',
      showTodoModal: false,
      complete:false,
    }
  },
  methods: {
    
    openModal(){
      var myTrackA = new Audio('add.mp3');
      myTrackA.play();
      // this.showTodoModal = true;
      this.$store.state.showTodoModal = true;
    },

    // addTodo(title,contents,date) {
    //     this.showTodoModal = !this.showTodoModal
		// 		this.$emit('addTodo',title, contents,false,false,date.toISOString().substring(0,10));
    //     this.clearInput();
     
    // },
    // clearInput() {
    //   this.newTodoItem = '';
    // }
  },
  components: {
    TodoModal: TodoModal
  }
}
</script>
<style>
@media all and (min-width:511px){
.inputBox {
  
  background: #00000000;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
 font-size: 16px;
  margin: 0.5em;
  font-weight: 800;
  border-radius: 2em;
  padding: 0.5em 1.2em;
  cursor: pointer;
  border: 1.2px solid;
  letter-spacing: 1px;
  color: #4fc08d;
  transition: 250ms ease-out;
  margin-left:3%;

}
.addContainer:hover{
    background:#4fc08d;
    color:#ffffff;
}
.yt{
  font-family: Georgia , Times ,serif;
  margin-right:10px;
  margin-left:10px;
  font-size:22px;
  color:#4fc08d;
}
.ratebox{
  font-family: Times ;
  margin-right: 1em;
  border-radius: 2em;
  padding: 0.4em 1em;
  font-size:16px;
  color:#ffffff;
  background:#4fc08d;
 
}
.none{
  background:#00000000
}
}

@media all and (max-width:510px){
.inputBox {
  
  background: #00000000;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
 font-size: 13px;
  margin: 0.2em;
  font-weight: 800;
  border-radius: 2em;
  padding: 0.4em 1em;
  cursor: pointer;
  border: 1.2px solid;
  letter-spacing: 1px;
  color: #4fc08d;
  transition: 250ms ease-out;
  margin-left:7px;

}
.addContainer:hover{
    background:#4fc08d;
    color:#ffffff;
}
.yt{
  font-family: Georgia , Times ,serif;
  margin-right:3px;
  margin-left:2px;
  font-size:17px;
  color:#4fc08d;
}
.tt{
  font-family: Georgia , Times ,serif;
  font-size:12px;

}
.ct{
  font-family: Georgia , Times ,serif;
  font-size:12px;
  
}
.ratebox{
  font-family: Times ;
  margin-right: 0.5em;
  border-radius: 1.5em;
  padding: 0.3em 0.8em;
  font-size:12px;
  color:#ffffff;
  background:#4fc08d;
 
}
.none{
  background:#00000000
}
}
@media all and (max-height:450px){
.addContainer {
 font-size: 13px;
  margin: 0.2em;
  font-weight: 800;
  border-radius: 2em;
  padding: 0.4em 1em;
  cursor: pointer;
  border: 1.2px solid;
  letter-spacing: 1px;
  color: #4fc08d;
  transition: 250ms ease-out;
  margin-left:7px;
  display:none;
}
}
</style>
