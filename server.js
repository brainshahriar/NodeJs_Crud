const express = require('express');

const app = express();

const dotenv = require('dotenv');

const morgan = require('morgan');

const bodyParser = require('body-parser');

//log request

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({extended:true}))

dotenv.config({path:'.env'});

const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("hello crud");
})

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});