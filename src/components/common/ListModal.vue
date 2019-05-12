<template lang="html">
  <transition name="modal">
    <div class="modal-mask" @keyup.esc="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <!--  -->
            </slot>
          </div>
            <div>
            Date<div class="date1"> <div class="innertext">{{ this.$store.state.todoItems[this.$store.state.idx].date }}</div> </div>
            Title<div class="title1"> <div class="innertext">{{ this.$store.state.todoItems[this.$store.state.idx].title }}</div></div>
            Contents<div class="contents1"> <div class="innertext">{{ this.$store.state.todoItems[this.$store.state.idx].contents }}</div></div>

            <span v-on:click="closeListModal">
             <p class="confirmtext">Confirm</p>
            </span>
            </div>
          <div class="modal-footer">
            <slot name="footer">
              <!--  -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default{
    data(){
        return{
          
        }
    },
    methods:{
        closeListModal(){
          var myTrack = new Audio('click.mp3');
          myTrack.play();
          this.$store.state.showListModal = !this.$store.state.showListModal
        }
   }
}
</script>

<style scoped lang="css">
/* 텍스트 */
@media all and (max-width:499px){
   .group1{
      margin-top:-10px;
     font-size:12px;
  }
.innertext{
  font-size:12px;
  margin-left:10px;
}
.confirmtext{
  margin : 10px;
  margin-top:20px;
  margin-bottom:10px;
  style:bold; 
  border-radius: 1em;
  cursor: pointer;
  border: 1px solid;
  color: rgb(21, 134, 27);
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  text-align: center;
  height: 40px;
  line-height:40px;
}
.confirmtext:hover{
    background:rgba(87, 190, 87, 0.753);
    color:#ffffff;
  }
  /* 경계포함 */
.date1{
  margin-top:-10px;
  font-size:12px;
  border: 1px solid rgba(128, 128, 128, 0.473);
  border-radius: 5px;
  padding: 0 0.9rem;
  line-height:30px;
  width:100px;
  border-bottom-width: 2px;

}
.title1{
   margin-top:-10px;
  border: 1px solid rgba(128, 128, 128, 0.473);
  border-radius: 10px;
  border-bottom-width: 2px;
  height: 40px;
  line-height:40px;

  }
.contents1{
   margin-top:-10px;
  border: 1px solid rgba(128, 128, 128, 0.473);
  border-radius: 10px;
  border-bottom-width: 2px;
  height: 100px;
  line-height:40px;
  }

.modal-mask {
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

.modal-container {
  width: 230px;
  margin: 0px auto;
  padding: 15px 25px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  font-size:15px;
}
.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.contents{
  height:200px;
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
}



@media all and (min-width:500px){
 
 .innertext{
  font-size:15px;
  margin-left:15px;
}
.confirmtext{
  margin : 15px;
  margin-top:30px;
  margin-bottom:30px;
  style:bold; 
  border-radius: 1em;
  cursor: pointer;
  border: 1px solid;
  color: rgb(21, 134, 27);
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  text-align: center;
}
.confirmtext:hover{
    background:rgba(87, 190, 87, 0.753);
    color:#ffffff;
  }
  /* 경계포함 */
.date1{
  border: 1px solid rgba(128, 128, 128, 0.473);
  border-radius: 5px;
  padding: 0 0.9rem;
  line-height:30px;
  width:200px;

  border-bottom-width: 2px;

}
.title1{
  border: 1px solid rgba(128, 128, 128, 0.473);
  border-radius: 10px;
  border-bottom-width: 2px;

  }
.contents1{
  border: 1px solid rgba(128, 128, 128, 0.473);
  border-radius: 10px;
  border-bottom-width: 2px;
  height: 200px;

  }

.modal-mask {
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

.modal-container {
  width: 350px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  font-size:15px;
}
.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.contents{
  height:200px;
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
}

@media all and (max-height:500px){
  div{
    margin-top:-10px;
  }
 .innertext{
  font-size:15px;
  margin-left:25px;
}
.confirmtext{
  margin-left : 15%;
  margin-right : 15%;
  margin-top:10px;
  margin-bottom:10px;
  style:bold; 
  height:30px;
  width:70%;
  border-radius: 1em;
  cursor: pointer;
  border: 1px solid;
  color: rgb(21, 134, 27);
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  text-align: center;
  line-height:30px;
}
.confirmtext:hover{
    background:rgba(87, 190, 87, 0.753);
    color:#ffffff;
  }
  /* 경계포함 */
.date1{
   margin-top:-22px;
  border: 1px solid rgba(128, 128, 128, 0.473);
  border-radius: 5px;
  padding: 0 0.9rem;
  width:200px;
  border-bottom-width: 2px;
  line-height:4px;

}
.title1{
   margin-top:-10px;
  border: 1px solid rgba(128, 128, 128, 0.473);
  border-radius: 10px;
  border-bottom-width: 2px;
  height: 25px;
  width:100%;
  line-height:42px;
  }
.contents1{
  margin-top:-10px;
  border: 1px solid rgba(128, 128, 128, 0.473);
  border-radius: 10px;
  border-bottom-width: 2px;
  height: 75px;
  width:100%;

  }

.modal-mask {
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

.modal-container {
  width: 70%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  font-size:15px;
}
.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.contents{
  height:200px;
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
}

</style>
