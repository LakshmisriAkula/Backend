const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;


app.listen(port,()=>{
    console.log(`server is up  on port ${process.env.PORT}`)
 })