const express=require('express')
const app =express()
const path=require('path')
const compression = require('compression')
const speedUp=require('shrink-ray-current')
const serveStatic=require('serve-static')
const PORT =process.env.PORT || 5006
app.use(speedUp({ 
    brotli:{
        quality:11
    }
}))

app.use('/',serveStatic(path.resolve(__dirname+'/dist/')))

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname+'/dist/index.html'))
})


app.listen(PORT,()=>{
    console.log('Bk group listen on port '+PORT)
})