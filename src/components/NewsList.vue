<template>
  <div class="newslist">
    <div class="container">

      <ul class="media-list">
        <li class="media" v-for="article in articles">
          <div class="media-left">
            <a class="newstitle" v-bind:href="article.url" target="_blank">
              <img class="media-object" v-bind:src="article.urlToImage">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
            <h5><i>by {{article.author}}</i></h5>
            <p>{{article.description}}</p>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'newslist',
  props: ['source'],
  data () {
    return {
      articles: []
    }
  },
  methods: {
    updateSource: function (source) {
      this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=87de7a60f74646429af2addd7e23c961')
       .then(response => {
         this.articles = response.data.articles;
       });
    }
  },
  created: function () {
    this.updateSource(this.source);
  },
  watch: {
    source: function (val) {
      this.updateSource(val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media all and (max-width:599px){
  .media-object {
   float:left;
    list-style-type : none;
    background-color:#f5f5f5;
    width: 50%;
    padding: 10px;
    margin-right:10px;
  }
  .media {
    float:left;
    list-style-type : none;
    border-top: 1px solid lightgray;
    padding-top: 10px;
    margin-right:10px;
     font-size:12px;
  }
  .media-heading{
    font-size:12px;
  }
}
@media all and (min-width:600px){
  .media-object {
    float:left;
    list-style-type : none;
    background-color:#f5f5f5;
    width: 50%;
    padding: 10px;
  }
  .media {
    float:left;
    list-style-type : none;
    border-top: 1px solid lightgray;
    padding-top: 10px;
    
  }
  
}
</style>

