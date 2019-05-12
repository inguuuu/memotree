<template lang="html">
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
            <!-- 설명 기능 -->
            <div class="total">
                <i class="addContainer" aria-hidden="true">Add</i> : 할일을 추가하는 창이 나옵니다</br></br>
                <i class="info fas fa-info" aria-hidden="true"></i> : 할일의 정보를 보여줍니다</br></br>
                <i class="modify fas fa-cut" aria-hidden="true"></i> : 할일을 수정할 수 있는 버튼입니다</br></br>
                <i class="fas fa-undo-alt" aria-hidden="true"></i> : 수정사항을 불러옵니다</br></br>
                <i class="removeBtn far fa-trash-alt" aria-hidden="true"></i> : 해당하는 할일을 삭제합니다</br></br>
                <i class="clearAllContainer" aria-hidden="true">Clear All</i> : 모든 할일을 삭제합니다</br>
                <i  class="checkBtn fas fa-check" aria-hidden="true"></i> : 할일을 완료상태로 바꿉니다</br></br>
                <i  class="favoriteBtn far fa-star" aria-hidden="true"></i> : 클릭시 즐겨찾기로 설정됩니다</br></br>
                <i  class="favoriteBtn fas fa-star" aria-hidden="true"></i> : 클릭시 즐겨찾기가 해제됩니다</br></br>
                <i class="AllContainer" aria-hidden="true"> All</i> : 모든 목록 보여줍니다</br></br>
                <i class="FavoriteContainer" aria-hidden="true">Favorite</i> : 즐겨찾기 목록을 보여줍니다</br></br>
                <i class="fas fa-search" aria-hidden="true"></i> : 할일을 검색합니다</br></br>
                <i class="onoffboxs" aria-hidden="true">off</i> : 비밀번호를 설정합니다</br></br>
                <i class="onoffboxs" aria-hidden="true">on</i> : 비밀번호를 해제합니다</br></br>
                <i  class="fas fa-chart-line" aria-hidden="true"></i> : 진행률을 차트로 보여줍니다</br></br>
                <i  class="fas fa-tv" aria-hidden="true"></i> : 테마를 바꿉니다</br></br>
                <i class="tree fas fa-tree" aria-hidden="true"></i>: 나의 트리를 보여줍니다</br></br>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped lang="css">
@media all and (max-width:499px){
.total{
  /* text-align: left; */
  font-size:8px;
}
.tree{
 
  color:green;
}
.clearAllContainer {
    font-size:5px;
    width: 5rem;
    padding: 0.5em;
    height: 25px;
    line-height: 25px;
    background-color: white;
    border-radius: 20px;
    margin: 0 auto;
    color:red;
    border:1px solid rgba(255, 0, 0, 0.644);
    box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(231, 9, 9);
  }
 .onoffboxs{
  cursor: pointer;
  font-family: Times ;
  border-radius: 2em;
  padding: 0.2em 0.5em;
  color:#ffffff;
  background:#4fc08d;
}
 .AllContainer {
  width: 30%;
   height: 20px;
   margin: 0 auto;
   font-weight: 600;
   border-radius: 1em;
  padding: 0.3em;
  cursor: pointer;
  border: 1px solid;
  color: #4fc08d;
  border: 1.5px solid;
 
  }
   .FavoriteContainer {
    width: 30%;
    height: 20px;
    margin: 0 auto;
    font-weight: 600;
    border-radius: 1em;
   padding: 0.3em;
   cursor: pointer;
   border: 1px solid;
   color: #4fc08d;
    border: 1.5px solid;
  }
.favoriteBtn {
    color: rgb(255, 215, 50);
  }
.modify{
  font-size:5px;
  padding: 0.2em;
  padding-right: 0.25em;
  padding-left: 0.25em;
  border: 1.2px solid;
  color: rgb(98, 173, 13);
  border-radius:5px;
  }
  .info{
  font-size:5px;
  padding: 0.2em;
  padding-left: 0.55em;
  padding-right: 0.55em;
  border: 1.2px solid;
  border-radius:5px;
  color: #0f580c;
  }
   .removeBtn {
    font-size:5px;
     padding: 0.2em;
     padding-top: 0.2em;
     padding-bottom:0.2em;
     border: 1.2px solid;
     border-radius:5px;
     margin-left:3px;
     color: #b30909bd;
  }
    .checkBtn {
      font-size:5px;
      padding: 0.3em;
      border: 1.2px solid;
     border-radius:5px;
     margin-left:3px;
     /* line-height: 60px; */
    color: #2a28b4c4;
  }
.addContainer {
 font-size: 5px;
  margin: 0.3em;
  font-weight: 800;
  border-radius: 2em;
  padding: 0.3em 0.9em;
  cursor: pointer;
  border: 1.2px solid;
  letter-spacing: 1px;
  color: #4fc08d;
  transition: 250ms ease-out;

}
.addContainer:hover{
    background:#4fc08d;
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
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 200px;
  margin: 0px auto;
  padding: 17px 25px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
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
  .total{
  /* text-align: left; */
}
.tree{
 
  color:green;
}
.clearAllContainer {
    font-size:10px;
    width: 7.5rem;
    padding: 0.5em;
    height: 40px;
    line-height: 40px;
    background-color: white;
    border-radius: 20px;
    margin: 0 auto;
    color:red;
    border:1px solid rgba(255, 0, 0, 0.644);
    box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(231, 9, 9);
  }
 .onoffboxs{
  cursor: pointer;
  font-family: Times ;
  border-radius: 2em;
  padding: 0.3em 0.7em;
  color:#ffffff;
  background:#4fc08d;
}
 .AllContainer {
  width: 45%;
   height: 30px;
   margin: 0 auto;
   font-weight: 600;
   border-radius: 1em;
  padding: 0.5em;
  cursor: pointer;
  border: 1px solid;
  color: #4fc08d;
  border: 1.5px solid;
 
  }
   .FavoriteContainer {
    width: 45%;
    height: 30px;
    margin: 0 auto;
    font-weight: 600;
    border-radius: 1em;
   padding: 0.5em;
   cursor: pointer;
   border: 1px solid;
   color: #4fc08d;
    border: 1.5px solid;
  }
.favoriteBtn {
    color: rgb(255, 215, 50);
  }
.modify{
  font-size:14px;
  padding: 0.3em;
  padding-right: 0.35em;
  padding-left: 0.35em;
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
.addContainer {
 font-size: 10px;
  margin: 0.5em;
  font-weight: 800;
  border-radius: 2em;
  padding: 0.5em 1.2em;
  cursor: pointer;
  border: 1.2px solid;
  letter-spacing: 1px;
  color: #4fc08d;
  transition: 250ms ease-out;

}
.addContainer:hover{
    background:#4fc08d;
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

