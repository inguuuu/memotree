<template>
<div id="container" style="width:100%; height:180px;">
 
</div>

</template>

<script>

 
   export default {
  data(){
   return{ 
     complete:this.$store.state.completenum,
     total:this.$store.state.total
   }
  },
  

 
    mounted(){
      Highcharts.chart('container',{
        chart:{
          type:'bar'
         
        },
        title:{
          text:'Compelet Rate'
        },
        xAxis:{
          categories:['Complete']
        },
        yAxis:{
          max:100,
         
        },
        tooltip:{
          valueSuffix: '%'
        },
        series:[{
          name:'now',
          data:[{y:Number(this.complete) / Number(this.total) * 100.0,color:'#4fc08d'}]
        }]
    });
  }
  
}
</script>