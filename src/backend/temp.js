const express = require('express');
const app = express();
const bodyParser= require('body-parser')

app.use(bodyParser.json())

app.post('/backend/temp',function(req,res){
    console.log('in post')
    console.log(req.body)
    console.error();
    
})

app.listen(8000,()=>console.log('server is on 8000'));