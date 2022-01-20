const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const passport = require("passport");

const path = require('path');

const users = require("./routes/api/users");

const products = require("./routes/api/addproducts");

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true}
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/products", products);
app.use('/public', express.static('public'));

// //server static assets if in production
if(process.env.NODE_ENV == "production"){
  app.use(express.static('bechdey-front/build'));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname+"./../bechdey-front/build/index.html"));
  });
}

const port = process.env.PORT || 3000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
