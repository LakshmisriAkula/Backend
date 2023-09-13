const express = require('express');
const app = express();
const port = 5002;

const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form',(req,res)=>{
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    res.send("I read your data");
})

app.post('/submit',(req,res)=>{
    console.log(req.body.name);
    res.send("I read your data");
})

app.listen(port,()=>{
    console.log(`server is upon port ${port}`)
})
