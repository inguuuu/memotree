<template>
    <section>
        <div v-show="!isLoading" class="loading">{{ errorMsg }}</div>
        <div v-show="isLoading" class="ap" v-bind:style="styleObject">
          <notifications group="notice" position="top center" width="60%"/>
           
            <div class="headbox">
                <custom-icon name="cloud" base-class="custom-icon"></custom-icon>
                {{cloud}}

                <custom-icon name="droplet" base-class="custom-icon"></custom-icon>
                {{humidity}}

                <custom-icon name="wind" base-class="custom-icon"></custom-icon>
                {{wind}}
            </div>

            <div class="temperature">
                {{ temperature }}
            </div>

            <div class="city">
                {{ city }}
            </div>

            <div class="description">
                {{ description }}
            </div>

            <div class="weatherIcon">
                <custom-icon :name="weatherIconName" base-class="custom-icon"></custom-icon>
            </div>

        </div>
    </section>
</template>



<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'

export default{
    name:'Weather',
    components: {
    customIcon
    },
    data(){
        return{
            dataObj: null,
            latitude: 0.0,
            longitude: 0.0,
            cloud: null,
            humidity: null,
            wind: null,
            temperature: null,
            city: '',
            description: '',
            errorMsg: 'Loading...',
            baseClass: 'v-icon',
            styleObject: {
                background: ''
            },
            isLoading: false,
            apikey :'3445e74edf57254685fdd645003e4005' ,
            pushnotifyon:true,
            notifyon:true
        }
    },
    computed: {
          
            weatherIconName: function() {
                if (this.dataObj != null){
                    var weatherID = this.dataObj.weather[0].id;
                    if (weatherID >= 200 && weatherID <= 232) {
                        this.styleObject.background = 'linear-gradient(45deg, #00ECBC, #007ADF)';
                         this.rainnotify();
                        return 'cloud-lightning';
                    } else if (weatherID >= 300 && weatherID <= 321) {
                        this.styleObject.background = 'linear-gradient(45deg, #89F7FE, #66A6FF)';
                        this.umbrella_notice();
                         this.rainnotify();
                        return 'cloud-drizzle';
                    } else if (weatherID >= 500 && weatherID <= 531) {
                        this.styleObject.background = 'linear-gradient(45deg, #00C6FB, #005BEA)';
                          this.umbrella_notice();
                           this.rainnotify();
                        return 'cloud-rain';
                    } else if (weatherID >= 600 && weatherID <= 622) {
                        this.styleObject.background = 'linear-gradient(45deg, #7DE2FC, #B9B6E5)';
                        this.umbrella_notice();
                         this.cloudnotify();
                        return 'cloud-snow';
                    } else if (weatherID >= 701 && weatherID <= 781) {
                        this.styleObject.background = 'linear-gradient(45deg, #D7D2CC, #304352)';
                        this.cloud_notice();
                        this.cloudnotify();
                        return 'cloud';
                    } else if(weatherID == 800) {
                        this.sun_notice();
                        this.styleObject.background = 'linear-gradient(45deg, #FEF253, #FF7300)';
                          this.sunnotify();
                        return 'sun';
                    } else if (weatherID >= 801 && weatherID <= 804) {
                        this.styleObject.background = 'linear-gradient(45deg, #17ead9, #6078ea)';
                        this.cloud_notice();
                         this.cloudnotify();
                        return 'cloud';
                    } else{
                        this.styleObject.background = 'linear-gradient(45deg, #17ead9, #6078ea)'
                        return 'alert-circle'
                    }
                }
                this.styleObject.background = 'linear-gradient(45deg, #17ead9, #6078ea)'
                return 'alert-circle';
            }
    },
    methods:{
        // 이건그냥 notification
      umbrella_notice:function(){
          if(this.notifyon==true){
         this.$notify({
        group: 'notice',
        title: '오늘의 날씨 TIP',
        text: '  우산을 챙기세요  ', 
        duration: 5000,
        type:'success'
        })    
        this.notifyon=false;
       }
        },
         sun_notice:function(){
          if(this.notifyon==true){
         this.$notify({
        group: 'notice',
        title: '오늘의 날씨 TIP',
        text: ' 날씨가 맑습니다. 즐거운 하루', 
        duration: 5000,
        type:'success'
        })    
        this.notifyon=false;
       }
        },
          cloud_notice:function(){
          if(this.notifyon==true){
         this.$notify({
        group: 'notice',
        title: '오늘의 날씨 TIP',
        text: ' 구름이 많이 낍니다. 감기 조심', 
        duration: 5000,
        type:'success'
        })    
        this.notifyon=false;
       }
        },
        //push notification
        rainnotify () {
      if(this.pushnotifyon==true){
      this.$notification.show('WeatherNotice', {
        body: '비가 옵니다. 우산을 챙기세요'
      }, {})
      this.pushnotifyon=false;
      }
    },
      cloudnotify () {
      if(this.pushnotifyon==true){
      this.$notification.show('WeatherNotice', {
        body: '날씨가 흐립니다. 바람을 조심하세요.'
      }, {})
      this.pushnotifyon=false;
      }
    },
    sunnotify () {
      if(this.pushnotifyon==true){
      this.$notification.show('WeatherNotice', {
        body: '오늘 하늘이 맑습니다. '
      }, {})
      this.pushnotifyon=false;
      }
    },
    
        getLocation: function () {
            if (!navigator.geolocation) {
                this.errorMsg = "Geolocation is not supported by your browser";
                this.city = this.errorMsg;
                console.warn(this.errorMsg);
                return;
            }
            var options = { timeout: 10000 };
            navigator.geolocation.getCurrentPosition(this.success, this.error, options);
        },
        success: function (position) {
            console.log(position);
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.latitude = parseFloat(this.latitude).toFixed(2);
            this.longitude = parseFloat(this.longitude).toFixed(2);

            this.getWeather();
        },
        error: function (err) {
            this.errorMsg = "Unable to retrieve your location";
            this.city = this.errorMsg;

            console.warn(`ERROR(${err.code}): ${err.message}`);
            console.warn(this.errorMsg);
        },
        getWeather: function(){
            var reqURL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&APPID=' + this.apikey;

            this.$http.get(reqURL, {headers: {'x-requested-with': 'XMLHttpRequest'}}).then(function (response) {
                this.dataObj = response.data;
                this.cloud = (this.dataObj.clouds.all) + '%';
                this.wind = (this.dataObj.wind.speed.toFixed(1)) + 'm/s';
                this.humidity = (this.dataObj.main.humidity) + '%';
                this.temperature = (this.dataObj.main.temp - 273.15).toFixed(0) + 'º';
                this.city = this.dataObj.name + ', ' + this.dataObj.sys.country;
                this.description = this.dataObj.weather[0].main;
                this.isLoading = true;
                console.log(response);
            }, function (response) {
                console.log('error');
                console.log(response);
                this.errorMsg = "Unable to retrive weather information.";
            });
        }
    },
    created(){
        this.getLocation();
      
    },
     mounted(){
       
     }
    
}
  
</script>


<style>    
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    
  .loading{
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: rgba(0, 0, 0, 0.9);
  width:100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .ap{        
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  height: 100vh;
  width: 100vw; 
  display:flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #17ead9, #6078ea);
  border-radius: 5px;
  box-shadow: 0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22);
  } 
  
@media (min-width: 450px) {
  .ap{
  width: 100%;
  height: 600px;
  border-radius: 5px;
  }
}

  .headbox{
  width:75%;
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  padding-top:30px;
  text-transform: lowercase;
  }

  .headbox svg{      
  vertical-align: top;
  margin-right: -10px;
  }

  .temperature{      
  font-size: 6em;
  padding-top:30px;
  }

  .city{
  font-size: 1.2em;
  }

  .description{
  padding-top:30px;
  font-size: 2em;
  text-transform:lowercase;
  }

  .description::first-letter{
  text-transform:uppercase;
  }

  .weatherIcon{
  padding-top:30px;
  }
  
  .weatherIcon svg{
  width: 10em;
  height: 10em;
  }

  .v-icon, .custom-icon {
  width:25px;
  height:25px;
  color: rgba(255, 255, 255, 0.9);
  }
</style>


