<template lang="html">
    <div>
         <div id="head"><i class="me">Memoº</i><i class="tree">Tree</i></div>
        </br>
        <div class="border">
        <i class="icon">
            <i class="fas fa-mobile-alt" @click="getMobileInfo"></i>
        </i>
        <i class="textt">  휴대폰 상태 </i>
        </div>
        <div>{{bat}}{{net}}</div>
        
        <div class="border">
        <i class="icon">
            <i class="fas fa-phone"></i>
        </i>
            <a href='tel:01090479700' id='aLink'>
                <i class="textt">고객센터 연결</i>
            </a>
        </div>

        <div class="border">
        <i class="icon">
            <i class="fas fa-bullhorn"></i>
        </i>
         <i class="textt" @click="notice"> 공지사항</i>
        </div>
       
        <div class="border2">
        <i class="icon">
            <i class="fas fa-info"> </i>
        </i>
        <i class="textt"> 버전정보 release v1.0.0</i>
        </div>
        
        </br>

        <div class="about">
            <i class="border">About us</i>  </br></br>
            <i class="headd">Application Name</i> </br>
            <i class="ctn">Memo Tree</i></br></br>
            <i class="headd">Developer</i></br>
            <i class="ctn">Kim Ki Woong, Jang In gyu</i></br></br>
            <i class="headd">Adderss</i></br>
            <i class="ctn">61, Daehak-ro, Gumi-si, Gyeongsangbuk-do, Republic of Korea</i></br></br>
            <a class="headd">Homepage</a></br>
            <a href="www.ospyapyap.firebaseapp.com">www.ospyapyap.firebaseapp.com</a></br></br>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
         bat:"",
         net:""
        }
    },
   methods:{

     getMobileInfo(){
      let batteryPromise = navigator.getBattery();
      batteryPromise.then(battery => {
        this.bat = "Battery Status : " + battery.level*100+"\n";
        //  + "충전상태" + battery.charging;
      });
        this.net = "Network Status : " + navigator.connection.effectiveType; 
    },
    notice(){
        this.$router.push('/notice');
    },
    back(){
      this.$router.push('/');
      this.$store.commit('refresh');
    }
  },
  created(){
    navigator.connection.addEventListener('change', this.getNetwork);
    this.getMobileInfo();
  }
}
function openInWebView(url){
    var anchor = document.createElement('a');
    anchor.setAttribute('href',url);
    anchor.setAttribute('target','_self');

    var dispatch = document.createEvent('HTMLEvents')
    dispatch.initEvent('click',true,true)
    anchor.dispatchEvent(dispatch)
}
</script>
<style>
 
  
    #head{
      padding-top: 10px;
    }
    
    .about{
        text-align:left;
        margin-left : 20px;
    }
   .textt{
              
   }
/* ///////위에 부분////////// */
    .icon{
        font-size: 20px;
    }
/* ////////////////////////////// */

    .back{
    float: left;
    font-size: 20px;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .me{
      color:#ffffff;
     background:#4fc08d;
     border-radius: 2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    padding-left:0.4em;
    padding-left:0.2em;
    font-family: Georgia , Times ,serif;
    font-weight: 900;
    font-size:25px;
  
  }
  .tree{
     font-family: Georgia , Times ,serif;
    font-weight: 900;
    font-size:25px;
   
  }

  @media all and (max-height:499px){

        .border{
        box-sizing: border-box 100%;
        width:100%;
        border-top: rgba(0, 0, 0, 0.336) 1.5px solid;
        padding:10px;
        height:20px;
        
        
    }
       .border2{
        box-sizing: border-box 100%;
        width:100%;
        border-top: rgba(0, 0, 0, 0.336) 1.5px solid;
        border-bottom: rgba(0, 0, 0, 0.336) 1.5px solid;
        padding:10px;
        height:20px;
        text-align:center;
        
    }
    .textt{
          font-size:10px;
    }
    .ctn{
        font-size:10px;
        font-weight: 800;
    }
    .headd{
        font-size:10px;
        border-bottom:1px solid;
    }
  }
  @media all and (min-height:500px){
    .border{
        box-sizing: border-box 100%;
        width:100%;
        border-top: rgba(0, 0, 0, 0.336) 1.5px solid;
        padding:10px;
        height:25px;
        
        
    }
       .border2{
        box-sizing: border-box 100%;
        width:100%;
        border-top: rgba(0, 0, 0, 0.336) 1.5px solid;
        border-bottom: rgba(0, 0, 0, 0.336) 1.5px solid;
        padding:10px;
        height:25px;
        text-align:center;
        
    }
    .textt{
          font-size:12px;
    }
    .ctn{
        font-size:12px;
        font-weight: 800;
    }
    .headd{
        font-size:12px;
        border-bottom:1px solid;
    }
  }
    @media all and (min-height:600px){

          .border{
        box-sizing: border-box 100%;
        width:100%;
        border-top: rgba(0, 0, 0, 0.336) 1.5px solid;
        padding:10px;
        height:35px;
        
        
    }
       .border2{
        box-sizing: border-box 100%;
        width:100%;
        border-top: rgba(0, 0, 0, 0.336) 1.5px solid;
        border-bottom: rgba(0, 0, 0, 0.336) 1.5px solid;
        padding:10px;
        height:35px;
        text-align:center;
        
    }
    .textt{
          font-size:13px;
    }
    .ctn{
        font-size:13px;
        font-weight: 800;
    }
    .headd{
        font-size:13px;
        border-bottom:1px solid;
    }
    
  }
    @media all and (min-height:750px){


          .border{
        box-sizing: border-box 100%;
        width:100%;
        border-top: rgba(0, 0, 0, 0.336) 1.5px solid;
        padding:10px;
        height:50px;
        
        
    }
       .border2{
        box-sizing: border-box 100%;
        width:100%;
        border-top: rgba(0, 0, 0, 0.336) 1.5px solid;
        border-bottom: rgba(0, 0, 0, 0.336) 1.5px solid;
        padding:10px;
        height:50px;
        text-align:center;
        
    }
    .textt{
          font-size:13px;
    }
     .ctn{
       
        font-weight: 800;
    }
    .headd{
        
        border-bottom:1px solid;
    }
  }
</style>