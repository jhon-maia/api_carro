require('dotenv').config({path:'variaveis.env'});

const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");




const routes=require('./routes.js');
const app= express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',routes);


app.listen(process.env.PORT,()=>{console.log(`${process.env.PORT}`);});