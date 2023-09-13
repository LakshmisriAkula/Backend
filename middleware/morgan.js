const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 5000;

var bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('tiny'))
//using morgan(third party middleware) to log method and status

const requireJsonContent = (request, response, next) => {
    if (request.headers['content-type'] !== 'application/json') {
        response.status(400).send('Server requires application/json')
    } else {
        next()
    }
}
// here requireJsonContent is middleware( own middleware )
app.get('/order', requireJsonContent,(req,res)=>{
    console.log(req.body)
    console.log(req.headers)

    res.send("Order Placed");
})
app.listen(port,()=>{
   console.log(`server is up  on port ${port}`)
})