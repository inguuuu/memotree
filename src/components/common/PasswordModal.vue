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
            <p class="ptitle">New Password</p>
            <input class="pinput" type="password" v-model="newPw"/></br>
             <span v-on:click="PasswordTodo">
                    <p class="createContainer" aria-hidden="true">create</p>
            </span>
                
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
            newPw: ''
        }
    },
    methods: {
        PasswordTodo() {
          var myTrackz = new Audio('confirm.mp3');
         myTrackz.play();
         this.$store.dispatch('PasswordTodo', this.newPw);
         this.$store.commit('PasswordTodo', this.newPw);
         this.$store.state.showPasswordModal = false;
        } 
    }
}
</script>

<style scoped lang="css">
@media all and (max-width:499px){

.pinput{
  line-height: 35px;
  width:200px;
  border-bottom-width: 1.5px;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.ptitle{
  font-size: 12px;
  margin-right: 140px;
  font-weight: 500;
}
.createContainer{
  
  font-size:13px;
  line-height: 30px;
  margin-left:80px;
  margin-right:80px;
  font-weight: 600;
  border-radius: 1em;
  cursor: pointer;
  border: 1.2px solid rgba(0, 0, 0, 0.445);
  color:rgba(0, 0, 0, 0.76);
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  margin-bottom:-7px;
}
.createContainer:hover{
    background:rgba(28, 31, 28, 0.432);
    color:#ffffff;
  }
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  background-color: rgba(177, 204, 169, 0.5);
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  border-top: 3px solid rgb(7, 82, 7);
  width: 230px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #62acde;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
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
  .modal-container {
  border-top: 3px solid rgb(7, 82, 7);
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.pinput{
  line-height: 35px;
  width:280px;
  border-bottom-width: 1.5px;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.ptitle{
  font-size: 15px;
  margin-right: 180px;
}
.createContainer{
  
  font-size:13px;
  line-height: 30px;
  margin-left:100px;
  margin-right:100px;
  font-weight: 600;
  border-radius: 1em;
  cursor: pointer;
  border: 1.2px solid rgba(0, 0, 0, 0.445);
  color:rgba(0, 0, 0, 0.76);
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
.createContainer:hover{
    background:rgba(28, 31, 28, 0.432);
    color:#ffffff;
  }
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  background-color: rgba(177, 204, 169, 0.5);
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  border-top: 3px solid rgb(7, 82, 7);
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #62acde;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
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
