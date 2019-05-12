<template>
    
  <div>
    <!--==========테마1===========-->
    <div class="thema1" v-if="themacode==1">
    <TodoHeader class="header"></TodoHeader>
    <i  class="helpbtn far fa-question-circle" aria-hidden="true" @click="openHelpModal"></i>
    <i  class="themabtn fas fa-tv" aria-hidden="true" @click="themaBoxOn()"></i>
      <select id="themas" class="themaDropBox" v-model="themacode" v-if="themaBoxState">
      <option value="1" class="themaDropBoxul">Hard</option>
      <option value="2">Soft</option>
      <option value="3">Basic</option>
     </select>
    <i  class="chartbtn fas fa-chart-line" aria-hidden="true" @click="chartOn()"></i>

    <HelpModal
    v-if="$store.state.showHelpModal"
    @close="$store.state.showHelpModal = false">
      <span slot="footer" @click="$store.state.showHelpModal = false"> 
       <i class="fas fa-check-square" aria-hidden="true"></i>
      </span>
    </HelpModal> 
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
    <i class="treeBtn fas fa-tree" aria-hidden="true" @click="TreeOn()"></i>
    <i class="resetBtn fas fa-sync-alt" aria-hidden="true" @click="reset()"></i>
      <Chart v-if="chartflag"></Chart> 
      <Tree v-if="treeflag"></Tree>
  </div>
   <!--==========테마2===========-->
  <div class="thema2" v-if="themacode==2">
    <TodoHeader class="header"></TodoHeader>

     <i  class="helpbtn far fa-question-circle" aria-hidden="true" @click="openHelpModal"></i>
     <i  class="themabtn fas fa-tv" aria-hidden="true" @click="themaBoxOn()"></i>

     <select id="themas" class="themaDropBox" v-model="themacode" v-if="themaBoxState">
      <option value="1" class="themaDropBoxul">Hard</option>
      <option value="2">Soft</option>
      <option value="3">Basic</option>  
     </select>
     <i  class="chartbtn fas fa-chart-line" aria-hidden="true" @click="chartOn()"></i>
    <HelpModal
    v-if="$store.state.showHelpModal"
    @close="$store.state.showHelpModal = false">
    <span slot="footer" @click="$store.state.showHelpModal = false"> 
       <i class="fas fa-check-square" aria-hidden="true"></i>
      </span> 
    </HelpModal> 
    <TodoInput ></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
    <i class="treeBtn fas fa-tree" aria-hidden="true" @click="TreeOn()"></i>
    <i class="resetBtn fas fa-sync-alt" aria-hidden="true" @click="reset()"></i>
      <Chart v-if="chartflag"></Chart> 
      <Tree v-if="treeflag"></Tree>
  </div>
    <!--==========테마3===========-->
  <div class="thema3" v-if="themacode==3">
    <TodoHeader class="header">  </TodoHeader>
  
     <i  class="helpbtn far fa-question-circle" aria-hidden="true" @click="openHelpModal"></i>
     <i  class="themabtn fas fa-tv" aria-hidden="true" @click="themaBoxOn()"></i>
     <select id="themas" class="themaDropBox" v-model="themacode" v-if="themaBoxState">
      <option value="1" class="themaDropBoxul">Hard</option>
      <option value="2">Soft</option>
      <option value="3">Basic</option>
         <i  class="checkBtn fas fa-chart-line" aria-hidden="true" @click="chartOn()"></i>
     </select>
     <i  class="chartbtn fas fa-chart-line" aria-hidden="true" @click="chartOn()"></i>
    <HelpModal
    v-if="$store.state.showHelpModal"
    @close="$store.state.showHelpModal = false">
    <span slot="footer" @click="$store.state.showHelpModal = false"> 
       <i class="fas fa-check-square" aria-hidden="true"></i>
      </span> 
    </HelpModal> 
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
   <i class="treeBtn fas fa-tree" aria-hidden="true" @click="TreeOn()"></i>
   <i class="resetBtn fas fa-sync-alt" aria-hidden="true" @click="reset()"></i>
    <Chart v-if="chartflag"></Chart> 
    <Tree v-if="treeflag"></Tree>
  </div>
</div>
</template>


<script>
import Chart from './Chart.vue'
import TodoHeader from './TodoHeader.vue'
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'
import HelpModal from './HelpModal.vue'
import Tree from './Tree.vue'
import { authRef } from '../store/db.js';



export default {
  data() {
    return {
      total:0,
      completenum:0,
      chartflag:false,
      treeflag:false,
      themacode:3,
      themaBoxState:false,
    }
  },
  methods: {
    openHelpModal(){
      this.$store.state.showHelpModal=!this.$store.state.showHelpModal;
    },
    chartOn(){
      this.chartflag=!this.chartflag;
    },
    themaBoxOn(){
     this.themaBoxState=!this.themaBoxState
    },
     TreeOn(){
      this.treeflag=!this.treeflag;
    },
    reset(){
      alert("모든 설정을 초기화 합니다.");
       navigator.vibrate([200,200,200,200,200]);  
      //localStorage.clear();
      this.$store.state.todoItems = [];
      this.$store.state.total=0;
      this.$store.state.completenum=0;
      this.$store.state.password="";
      this.$store.state.leaf=0;
      this.themacode=3;
      this.$store.dispatch('reset');
    }
  },

  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
    Chart: Chart,
    HelpModal: HelpModal,
    Tree:Tree
  },
}
</script>

<style>
  body {
   
    text-align: center;
    background-color: #ffffff;
  }
   .themaDropBox{
margin:0px 5px 3px 5px;
 padding:0 0 3px 0;
-moz-border-radius: 3px;
-khtml-border-radius: 3px;
-webkit-border-radius: 3px;
border-radius: 3px;

  }
   .themaDropBoxul{
    box-shadow: 0px 0px 15px rgba(0,0,0,.3);
   -moz-box-shadow: 0px 0px 15px rgba(0,0,0,.3);
-webkit-box-shadow: 0px 0px 15px rgba(0,0,0,.3);
-o-box-shadow: 0px 0px 15px rgba(0,0,0,.3);
background-color:#5c5c5c; 
  }
  .thema1{
    font-weight:bolder;
     font-style:italic;
    text-align: center;
    background-color: #EBEBEB;
  }
  .thema2{
    font-weight:lighter;
     font-style:normal;
    text-align: center;
    background-color: #F5F6EB;
  }
   .thema3{
  
    text-align: center;
   background-color: #Ffffff;
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
  .helpbtn{
    margin-left: 5em;
    margin-bottom:20px;
    float: left;
  }
  .themabtn{
 
    margin-bottom:20px;
    
  }
   .chartbtn{
    margin-right: 5em;
    margin-bottom:20px;
    float: right;
  }
  .privatemode{
    float:right;
    margin-left:20px;
  }
  .onoffbox{
    margin-left:10px;
  font-family: Times ;
  margin-right: 1em;
  border-radius: 2em;
  padding: 0.3em 0.7em;
  font-size:14px;
  color:#ffffff;
  background:#4fc08d;
 float:right;
}
.treeBtn{
  background:#00000000;
  margin-left:30px;
  float:left;
  color:green;
}
 .resetBtn{
  background:#00000000;
  margin-right:30px;
  float:right;
  color:black;
}
 @media all and (max-height:450px){
 .helpbtn{
    margin-left: 5em;
    margin-bottom:20px;
    float: left;
    display:none;
  }
  .themabtn{
  display:none;
    margin-bottom:20px;
    
  }
   .chartbtn{
    margin-right: 5em;
    margin-bottom:20px;
    float: right;
     display:none;
  }
  .treeBtn{
  background:#00000000;
  margin-left:30px;
  float:left;
  color:green;
    display:none;
}
 .resetBtn{
  background:#00000000;
  margin-right:30px;
  float:right;
  color:black;
    display:none;
}
 }
    
</style>