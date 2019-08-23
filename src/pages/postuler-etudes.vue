<template>
<div>
    <div class="uk-height-small uk-background-cover uk-position-relative" data-src="/img/school.jpeg" uk-img>

    <div class="uk-position-cover uk-overlay uk-overlay-primary">
<div class="uk-position-center">
    <br>
   <h1 class="font-weight-bold"> 
       Etudier en chine , avec SICAS
       
   </h1>
</div>
    </div>
    </div>
    <div class="align-left main container ui segment basic">
<h1 class="uk-h2">
   Pièce à fournir
</h1>

<div id="pieces ">

     <div style="display:none" id="licence">
      <h1>CANDIDAT POUR LA LICENCE EN CHINE</h1>
     <div class="uk-card uk-card-large uk-card-default uk-card-body">
         <h3 class="uk-card-title">Documents à fournir</h3>
         <p>
             <ul>
                 <li>Le baccalauréat (Toute série , Original + une copie couleur )</li>
                 <li>Les trois derniers bulletins de terminal (Original + Copie couleurs )</li>
                 <li>La photocopie couleur de la première page du passport</li>
                 <li>UN CV rédigé en anglais</li>
                 <li>Un casier judiciaire</li>
                 <li>Poids </li>
                 <li>Groupe Sanguin</li>
                 <li>Les informations sur les parents (nom et prénom , fonction , contact, adresse-email)</li>
            
            
            <li>3 Photos d'identités de meme tirage format passeport , fond blanc</li>
            <li>La fiche d'inscription à rétirer à BK group (2.000 Fcfa ) </li>
              <li>Age limite : 24 ans</li>

             </ul>

             
         </p>
         <div class="ui segment">
            Le candidat doit lui-meme choisir sa spécialité (BK Group)
             se charge de trouver une université d'accueil pour le candidat.
         </div>
     </div>
    </div>


     <div style="display:none" id="master">
      <h1>CANDIDAT POUR LE MASTER EN CHINE</h1>
     <div class="uk-card uk-card-large uk-card-default uk-card-body">
         <h3 class="uk-card-title">Documents à fournir</h3>
         <p>
             <ul>
                 <li>Le licence (Toute série , Original + une copie couleur )</li>
                 <li>Les trois derniers relevés de note de la licence(Original + Copie couleurs )</li>
                 <li>La photocopie couleur de la première page du passport</li>
                 <li>UN CV rédigé en anglais</li>
                 <li>Un casier judiciaire</li>
                 <li>Poids </li>
                 <li>Groupe Sanguin</li>
                 <li>Les informations sur les parents (nom et prénom , fonction , contact, adresse-email)</li>
            
            
            <li>3 Photos d'identités de meme tirage format passeport , fond blanc</li>
            <li>La fiche d'inscription à rétirer à BK group (2.000 Fcfa ) </li>
            <li>Le logo de son école sur une page word</li>
            <li>Les informations sur deux de ses professeurs ou assistants professeurs
                (Nom , prénoms , Spécialité , Téléphone, Adresse E-mail , adresse postale , Titre "Professeur , docteur , assistant"... )
                .
                Ces professeurs devront signer chacun une lettre de recommandation rédigé par BK 
                Groupe pour le candidat.


            </li>
            <li>Age limite : 34 ans</li>

             </ul>

             
         </p>
         <div class="ui segment">
           Le candidat doit lui-meme choisir sa spécialité (BK Group)
             se charge de trouver une université d'accueil pour le candidat.
         </div>
     </div>
    </div>

<v-btn @click="$htmlToPaper('licence')" color="red" dark>
    <v-icon>mdi-file-pdf</v-icon>
    DOCUMENTS LICENCE.PDF</v-btn>


<v-btn  @click="$htmlToPaper('master')" color="red" dark>
   <v-icon>mdi-file-pdf</v-icon>
    DOCUMENTS MASTER.PDF</v-btn>
</div>
<p>
    
</p>

    <h3>Faire une démande</h3>
    <span>Envoyez-nous votre requête via le formulaire en ligne ci-contre et nous vous répondrons sous 2 jours ouvrables.</span>
<br><br>
<div class="ui  inline field input">
<p><Input size="large" style="width: 333px" placeholder="Nom complet"/>&nbsp;
<Input size="large" style="width: 333px" placeholder="Adresse E-mail"/>
</p>
</div>
<br>
<div>
    <br>
    <p>
    <b>Votre message (Incluant votre parcours scolaire et votre demande )</b>

</p>
<p>
    <Input type="textarea" :autosize="{minRows: 4,maxRows: 9}" placeholder=""></Input>
</p>
<p>
    <v-btn dark color="red">
        <v-icon>send</v-icon> &nbsp;
        J'envoi ma demande
    </v-btn>
<h1 class="uk-h3">
    
    <span>les universités offrant des bourses d'études aux étudiants étrangers.</span>
    <br>
    <v-btn @click="$router.push('liste-university')" color="red" flat="">
        <v-icon>link</v-icon>&nbsp;
        Consulter la liste</v-btn>
</h1>
    
</p>

<div class="ui divider horizontal">Contacter nous</div>
<p>
    <i class="ui icon phone"></i> Téléphone : 71 69 25 38
</p>
<p>
    <i class="ui icon at"></i>Adresse E-mail : direction.generale@bkgroup-ci.org
</p>
</div>
<h1>&nbsp;</h1>

    </div>
</div>
</template>


<script>
export default {
    layout:"header"
}
</script>