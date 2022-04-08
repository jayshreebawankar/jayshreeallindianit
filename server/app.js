require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const empRoute = require('./Routes/empRoute')
const cors = require("cors")
 
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/employee',empRoute);

mongoose
  .connect(
    `mongodb+srv://jayshreeaiit:12345@cluster0.lkb2r.mongodb.net/aiittest?retryWrites=true&w=majority`
  )
  .then(() => { 
    console.log('server connected at port 5001');
    app.listen(5001);
  })
  .catch(err => {
    console.log(err);
  });
