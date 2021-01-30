const http = require('http');
var admin = require("firebase-admin");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var app = express();


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://CUHacking:<password>@cluster0.kepz2.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use(function(req, res, next){
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
})

app.use(function(err, req,res,next){
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


