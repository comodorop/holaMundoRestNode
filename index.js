const express = require('express');

const app = express();


app.get('/', (req, resp)=>{
    resp.status(200).send({msg:"Hello world"})
})


app.listen(3001, ()=>{
    console.log('Server running in the por 3001')
})