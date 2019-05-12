<template>
  <div class="container" id="news">
    <div class="googlebtn" @click="GoMemo()">메모하기</div>
    <SourceSelection v-on:sourceChanged="sourceChanged">sourceChanged</SourceSelection>
    <input class="transinput" type="text" v-model="input">
    <a class="googlebtn" @click="href" target="_blank">구글번역</a>
   
    <NewsList v-bind:source="source">NewsList</NewsList>>
  </div>
</template>

<script>
import SourceSelection from './SourceSelection'
import NewsList from './NewsList'

export default {
  name: 'news',
  components: {
    SourceSelection,
    NewsList
  },
  data(){
    return {
      source: "",
       input:'',
       c:'https://translate.google.com/#view=home&op=translate&sl=auto&tl=ko&text='
    }
  },
  methods:{
    sourceChanged: function(source) {
      this.source = source;
    },
    GoMemo(){
    this.$router.push('todo'); 
   },
   href(){
     location.href = this.c+this.input;
   }
  },
}
</script>

<style>
.transinput{
  width:170px;
  margin-left:10px;
  border-style: none;
  font-size: 0.9rem;
  background: #00000000;
  border-bottom:1px solid;
}
#news {
  padding-top: 20px
}
.googlebtn{
 text-decoration:none;
   color:#ffffff;
     background:#4fc08d;
     border-radius: 2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    padding-left:0.2em;
    padding-right:0.2em;
    font-weight: 900;
    font-size:15px;
}
</style>
