const express = require("express");
const app = express();
const port = 5000;

var bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const requestLogger = (request, response, next) => {
    console.log(`method:: ${request.method} url:: ${request.url}`);
    next()
}
app.use(requestLogger)

// here requestLogger is to log method and route(url)

const requireJsonContent = (request, response, next) => {
    if (request.headers['content-type'] !== 'application/json') {
        response.status(400).send('Server requires application/json')
    } else {
        next()
    }
}

app.use(requireJsonContent)
// here requireJsonContent is middleware and middleware used globally for all routes
app.get('/order',(req,res)=>{
    console.log(req.body)
    console.log(req.headers)

    res.send("Order Placed");
})

app.get('/listOrder',(req,res)=>{
    console.log(req.body)
    console.log(req.headers)

    res.send("Orders listed");
})

app.listen(port,()=>{
   console.log(`server is up  on port ${port}`)
})