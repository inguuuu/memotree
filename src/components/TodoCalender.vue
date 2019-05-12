<template>
  <div><i class="fas fa-home" @click="back"></i>
  <vue-event-calendar :events="calendarData">
      <template slot-scope="props">
        <div v-for="(event, index) in props.showEvents" :key="index" class="event-item">
          <!-- In here do whatever you want, make you owner event template -->
            <h3 class="title">{{event.title}}</h3>
            <p class="time">{{event.date}}</p>
            <p class="desc">{{event.desc}}</p>       
         </div>
      </template>
    </vue-event-calendar>
    </div>
</template>

<script>
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import { authRef } from '../store/db.js';


export default {
   data () {
    return {
      demoEvents: [{
      //   date: '2018/12/4', // Required
      //   title: 'Foo' // Required
      // }, {
      //   date: '2018/12/15',
      //   title: 'Bar',
      //   desc: 'description',
      //   customClass: 'disabled highlight' // Custom classes to an calendar cell
      }]
    }
  },
  methods:{
    back(){
      this.$router.push('/');
      this.$store.commit('refresh');
    }
  },
  created(){
  },
  computed:{
    calendarData: function(){
        this.demoEvents = clone(this.$store.state.calData);
        return this.demoEvents;
    } 
  },
  beforeCreate(){
    authRef.onAuthStateChanged(user=>{
      if(user){
        this.$store.commit('userAuth',user.uid);
        this.$store.dispatch("getTodos",user.uid);
      }
        this.$store.state.calData = [];
        this.$store.dispatch('getCalData');    });
  }       

}
function clone(obj) {
  if (obj === null || typeof(obj) !== 'object')
  return obj;

  var copy = obj.constructor();

  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = obj[attr];
    }
  }

  return copy;
}
</script>
<style>
</style>
