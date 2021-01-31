const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var session = require('express-session');

const routes = require("./routes")

// var admin = require("firebase-admin");
// var serviceAccount = require("path/to/serviceAccountKey.json");

const port = 5000;

async function run() {
  const app = express()

  app.use(bodyParser.json())
  app.use(cors());
  app.use(cookieParser());
  app.use(session({ secret: "Shh it's a secret" }));

  app.use("/api", routes)
  app.listen(port, () => {
    console.log("Server has started!")
  })
}

const uri = "mongodb+srv://fb-dev:dev123@cluster0.kepz2.mongodb.net/dev?retryWrites=true&w=majority"
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => run())



// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();
