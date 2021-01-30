const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes")

// var admin = require("firebase-admin");
// var serviceAccount = require("path/to/serviceAccountKey.json");

const port = 3000;

async function run() {
  const app = express()
  app.use(bodyParser.json())
  app.use("/api", routes)
  app.listen(port, () => {
    console.log("Server has started!")
  })
}

run();

// mongoose
//   .connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
//   .then(() => run())



// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();