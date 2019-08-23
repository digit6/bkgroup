<template>
    <div class="align-left main container ui segment basic">
<h1>
    Nous contacter
</h1>
<p>
    <i class="ui icon phone"></i> Téléphone : 71 69 25 38
</p>
<p>
    <i class="ui icon at"></i>Adresse E-mail : direction.generale@bkgroup-ci.org
</p>
<p>
    <b>Encore besoin d'aide ?</b><br><br><br>
    <span>Envoyez-nous votre requête via le formulaire en ligne ci-contre et nous vous répondrons sous 2 jours ouvrables.</span>
<br><br>    
</p>
<div class="ui  inline field input">
<p><Input size="large" style="width: 333px" placeholder="Nom complet"/>&nbsp;
<Input size="large" style="width: 333px" placeholder="Adresse E-mail"/>
</p>
</div>
<br>
<div>
    <br>
    <p>
    <b>Votre message</b>

</p>
<p>
    <Input type="textarea" :autosize="{minRows: 4,maxRows: 9}" placeholder=""></Input>
</p> <br>
<p>
    <v-btn dark color="red">
        <v-icon>send</v-icon> &nbsp;
        Envoyer votre message
    </v-btn>
</p>
</div>
<h1></h1>
    </div>
</template>


<script>
export default {
    layout:"header"
}
</script>