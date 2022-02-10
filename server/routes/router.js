const express = require('express');
const route = express.Router();

const getData = (req,res)=>{
    res.send("hello crud");
}

module.exports = route;