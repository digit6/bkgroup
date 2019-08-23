const express=require('express')
const app =express()
const PORT =process.env.PORT || 5006

app.use('/',express.static(__dirname+'/dist/'))
app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/dist/index.html')
})

app.listen(PORT,()=>{
    console.log('Bk group listen on port '+PORT)
})