const express = require('express');
const app = express();
const port = 5001;

app.get('/',(req,res)=>{
    res.send('Hello World! 123');
})

app.post('/postApi',(req,res)=>{
    res.send('post api called');
})

app.put('/putApi',(req,res)=>{
    res.send('put api called');
})

app.delete('/deleteApi',(req,res)=>{
    res.send('delete api called');
})

app.patch('/patchApi',(req,res)=>{
    res.send('patch api called');
})

app.get('/callMyApi',(req,res)=>{
    res.send('Hey Thanks for calling!');
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
