<template>
  <div class="home">
    <div id="bg" class="uk-position-cover  uk-background-cover uk-light" data-src="/img/b.jpeg" uk-img>
     <div id="bgs" class="uk-position-center">
        <h1 class="uk-text-uppercase font-weight-bold">
      PARTENAIRE DU DÉVELOPPEMENT ET DE L'INNOVATION
    </h1>

  <v-btn to="/accueil" dark large round color="red">
    Entrer dans notre univers
  </v-btn>
     </div>
    </div>
 
  </div>
</template>

<script>

export default {
  layout:'header'
  
}
</script>


<style lang="css" scoped>
#bg::after{
 position: absolute;
  content: " ";
  background:rgba(0, 0, 0, 0.473);
  height: 100%;
  left:0;
  width:100%;
}

#bgs{
position: absolute;
z-index: 11;
 
}
</style>
