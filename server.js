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