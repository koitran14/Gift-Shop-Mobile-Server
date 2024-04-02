const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();

const cors = require("cors");

const port = process.env.PORT || 4000;

app.use(cors());

//CÁCH CONNECT
mongoose.connect(process.env.DATABASE_URL, {
  dbName: process.env.DATABASE_NAME
}).then(()=> {
    console.log('Database connected');
  }).catch((error)=> {
    console.log('Error connecting to database: '+ error);
});
app.use(bodyParser.json());

//Tạo routes ở đây
require('./views/user.view')(app);

app.listen(port, () => {
    console.log(`Server is running at site: http://localhost:${port}`);
});



