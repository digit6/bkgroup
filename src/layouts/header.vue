<template>
    <div>
        <v-toolbar id="header" style="z-index:999"  dark  app>
            <v-toolbar-title>
              <span style="cursor:pointer" @click="$router.push('/')" class="font-weight-bold">  BKGROUP</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <Breadcrumb>
        <BreadcrumbItem  to="/accueil">
            <Icon type="md-home"></Icon> ACCUEIL
        </BreadcrumbItem>
        <BreadcrumbItem >
            <button  class="uk-button" type="button"> <Icon type="ios-book"></Icon> Etudier en chine</button>
       
<div uk-dropdown>
    <ul class="uk-nav uk-dropdown-nav">
         <li  class="uk-h1 uk-nav-header uk-text-danger">SICAS Côte d'Ivoire </li>
         <li @click="$router.push('/etudes')"><a >BOURSES </a></li>
        <li @click="$router.push('/postuler-etudes')"><a >POSTULER</a></li>
        <li @click="$router.push('/admission-etudes')"><a>ADMISSION</a></li>
          <li @click="$router.push('/liste-university')"><a >UNIVERSITES</a></li>
 
    </ul>
</div>
        </BreadcrumbItem>
         <BreadcrumbItem @click.prevent >
         <button  class="uk-button" type="button"> <Icon type="logo-buffer"></Icon> Formations</button>
       
<div uk-dropdown>
    <ul class="uk-nav uk-dropdown-nav">
         <li class="uk-h1 uk-nav-header uk-text-danger">NOS FORMATIONS</li>
      
        <li @click="$router.push('/formations/')"><a >Formations qualifiantes</a></li>
        <li @click="$router.push('/formations/installations')"><a href="#">Formations d'insertion</a></li>

         <li @click="$router.push('/formations/couts')"><a>Cout de formations</a></li>
    </ul>
</div>
           
        </BreadcrumbItem>
        <BreadcrumbItem>
            <button  class="uk-button" type="button"> <Icon type="logo-buffer"></Icon> ONG</button>
       
<div uk-dropdown>
    <ul class="uk-nav uk-dropdown-nav">
         <li class="uk-h1 uk-nav-header uk-text-danger"> FORMATIONS ONG</li>
       
        <li @click="$router.push('/ong')" class="uk-active"><a >ONG PDA   </a></li>
        <li @click="$router.push('/ong/formations')"><a >FORMATIONS</a></li>
        <li><a href="#">VOLUME HORAIRE</a></li>
      
    </ul>
</div>
        </BreadcrumbItem>
        <BreadcrumbItem to="/contact">
            <Icon type="md-call"></Icon> Contact
        </BreadcrumbItem>
        
    </Breadcrumb>
        </v-toolbar>

        <router-view></router-view>
        <br>
         <v-footer  v-if="$route.path!=='/'"
    dark
    flat

    height="auto"
    class="pa-0"
  >

    
        <v-card-text class="white--text">
              <div class="ui segment basic">
      <div class="ui uk-light three column grid stackable">
          <div class="column">
              <p class="uk-h4 uk-text-uppercase">Nous contacter</p>
              <p classs="uk-text-left uk-text-justify">
                  <i class="ui icon phone"></i> + 225 30 640 648 / 43 51 22 80 <br>
                  <i class="ui icon at"></i>  info@bkgroup-ci.org <br>
                   <i class="ui icon point"></i> YAMOUSSOUKRO 220 LOGEMENTS CARREFOUR ECOLE ZAHER
              </p>

          </div>
           <div class="column">
              <p class="uk-h4 uk-text-uppercase">à propos</p>
              <p>
                  <ul>
                      <li>Qui sommes nous</li>
                      <li>Directeur générale</li>
                      <li>Partenaires</li>

                  </ul>
                 
                 
              </p>
          </div>

          <div class="column">
              <p class="uk-h4 uk-text-uppercase">Nous suivre</p>
              <p>
                  <i class="ui icon facebook big"></i>
              </p>
          </div>
      </div>
  </div>
        &copy;2019 — <strong>bkgroup</strong> Propulsé par cert6.ltd | Hébergé sur LWS
      </v-card-text>
  </v-footer>
    </div>
</template>


<style scoped>
button{
    padding:0;
    margin:0%;
}
li a.ivu-breadcrumb-item-link{
    color:white;
    display: none;
}

li a:hover{
    color:#ED213A;
}

button.uk-button{
    color:white;
}

button.uk-button:hover{
      color:#ED213A;
}

ul li{
    list-style: none;
}
</style>
