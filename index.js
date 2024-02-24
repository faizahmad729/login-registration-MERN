//const express = require("express");
import express from 'express';
import Mongoose  from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
// const URl =`mongodb://user:allen@crud-shard-00-00.elj1x.mongodb.net:27017,crud-shard-00-01.elj1x.mongodb.net:27017,
// crud-shard-00-02.elj1x.mongodb.net:27017/CRUD?ssl=true&replicaSet=atlas-mskqxa-shard-0
// &authSource=admin&retryWrites=true&w=majority`;

const app = express();


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/users',route);

const PORT = 8080;
const URL = `mongodb+srv://user:allen@crud.elj1x.mongodb.net/CRUD?retryWrites=true&w=majority`;

Mongoose.connect(URL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running sucessfully on ${PORT} port`);
    
    });
}).catch(error =>{
    console.log('error :',error.message);
})

