<template>
  <div class="sourceselection">
    <div>
      <div class="jumbotron">
        <h2><span class="fas fa-newspaper"></span>News</h2>
        <h4>Select News Source</h4>
        <select class="form-control" v-on:change="sourceChanged">
          <option value="">Please select news source ...</option>
          <option v-for="source in sources" v-bind:value="source.id">{{source.name}}</option>
        </select>
        <div v-if="source">
          <h6>{{source.description}}</h6>
          <a v-bind:href="source.url" class="btn btn-primary" target="_blank">Go To {{source.name}} Website</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sourceselection',
  data () {
    return {
      sources: [],
      source: ''
    }
  },
  methods: {
    sourceChanged: function(e) {
     for (var i=0; i<this.sources.length; i++) {
       if (this.sources[i].id == e.target.value) {
         this.source = this.sources[i];
       }
     }
     this.$emit('sourceChanged', e.target.value);
    }
  },
  created: function () {
    this.$http.get('https://newsapi.org/v1/sources?language=')
      .then(response => {
        this.sources = response.data.sources;
      });
  }
}
</script>

<style>
h2{
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
h4{
  font-weight: 600;
  font-size:22px;
}
.sourceselection{
  display:block;
  justify-content:center;
  background-color:#E7E7E7;
   margin:20px;
   height:110%;
    border-radius: 1em;
}
.form-control{
  width: 90%;
  font-weight: 600;
  height:30px;
}
.btn-primary{
    width: 45%;
    height: 30px;
    margin: 0 auto;
    font-weight: 600;
    border-radius: 2em;
    background-color:#4fc08d;
  padding: 0.5em;
  cursor: pointer;
  color: white;
    margin-left:10px;
}
</style>

