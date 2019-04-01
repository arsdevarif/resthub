 // Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./api-routes")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
//mongoose.connect('mongodb://localhost/resthub');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://arsdev:<dYvEPlKacyHqERVr>@arsdevdb-hpvyx.mongodb.net/arsdevdb?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("arsdevdb").collection("latihan");
  // perform actions on the collection object
  
  client.close();

 console.log(collection);
});


//var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 3000;
// Send message for default URL
app.get('/', (req, res) => res.send('<h1>some html</1>'));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});