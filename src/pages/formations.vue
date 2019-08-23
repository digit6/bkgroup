<template>
    <div >
        <div id="nav" class="uk-card uk-card-small uk-card-default uk-card-body align-left ">
              <Breadcrumb separator="/">
        <BreadcrumbItem to="/formations">
            Formations qualifiantes
        </BreadcrumbItem>
        <BreadcrumbItem to="/formations/installations">
            Formations d'installation
        </BreadcrumbItem>
          <BreadcrumbItem to="/etudes">
            Volume horaire
        </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <router-view></router-view>
    </div>
</template>



<script>
export default {
    layout:'header'
    
}
</script>


<style lang="css" scoped>
#nav a{
    color:white;
}
</style>
