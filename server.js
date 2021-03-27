const mongoose = require('mongoose');
const gallerySchema = require('./routes/api/v0');
const env = require('./routes/api');
const MONGODB_URL = require('./routes/env');



const db = process.env.MONGODB_URL;

const connectDB = async (router) => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(connectDB);

    corsOptions = {
      origin: "Your FrontEnd Website URL",
      optionsSuccessStatus: 500
    };
    app.use(cors(gallerySchema));


  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
  origin: "mongodb+srv:b-290:<MongoBruk-52>@cluster0.vqp1y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority//<username>:<password>@cluster0<some-gibberish>.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));










// mongoose.connect(
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// )
//   //process.env.uri,{ useUnifiedTopology: true, useNewUrlParser: true }
  
//   .then(function(){
//     console.log(process.env.uri)
//   })

  //   .catch(function(err){
  //   console.log(err)
  // });


  // module.exports = mongoose;

// //use middle-ware to join with ./public
// app.use(function(request, response) {
//   response.send();
//   //send the array to respond with json lateron
// })

// app.get('/',(req, res) => {
//  res.json({newArray});
// })
   
// console.log(require);
// console.log(response);

// app.use(function(req,res){
//   res.status(404).end();
//   response.send('custom-404')
// })

// //send to localhost:3000 because every app does a GET request at a beginning of every session 

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, function() {

// console.log(`Listening on port ${PORT}.`)
// });
  

// const path = require('path');
// const express = require('express');
// const app = Mongoose();
// const newArray = require('./data/gallery');

// const { response } = require('express');
// const { Mongoose } = require('mongoose');
// const router = express.Router()


// //declare variables
// app.use(express.static(path.join(__dirname,'./public')));
// //use middle-ware to join with ./public
// app.use(function(request, response) {
//   response.send();
//   //send the array to respond with json lateron
// })

// app.get('/',(req, res) => {
//  res.json({newArray});
// })
   
// console.log(require);
// console.log(response);

// app.use(function(req,res){
//   res.status(404).end();
//   response.send('custom-404')
// })

// //send to localhost:3000 because every app does a GET request at a beginning of every session 

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, function() {

// console.log(`Listening on port ${PORT}.`)
// });




