const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())


app.get('/hello', (req, resp)=>{
    resp.status(200).send({msg:"Hello world in ci/cd"})
})


app.listen(3001, ()=>{
    console.log('Server running in the por 3001')
})