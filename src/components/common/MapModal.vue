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
            위치 : <input type="text" v-model="newMapTitle" placeholder="location"></br> 
            내용 : <input class="contents"type="text" v-model="newMapContents" placeholder="contents"></br>
             <span slot="footer" v-on:click="mapInsertTodo">
                    <i class="fas fa-check-square" aria-hidden="true"></i>
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
          mapTodo:[
            {
            mapTitle: '',
            mapContents: '',
            
            }],
            newMapTitle: '',
            newMapContents: '',
            
        }
    },
    methods: {
        mapInsertTodo() {
         if(this.newMapTitle == '' || this.newMapContents == ''){
         alert("빈칸을 모두 입력해 주세요!")
         }else{
          this.$emit('mapInsertTodo', this.newMapTitle, this.newMapContents)
          console.log("ddd"+this.newMapTitle);
         }
      }
  }
  
}
</script>

<style lang="css">
.closeModalBtn {
  color: #62acde;
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
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
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
</style>
