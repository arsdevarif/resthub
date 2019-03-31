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
//mongoose.connect('mongodb+srv://arsdev:<Wellcom3>@arsdevdb-hpvyx.mongodb.net/test?retryWrites=latihan');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://arsdev:<password>@arsdevdb-hpvyx.mongodb.net/latihan?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("latihan").collection("devices");
  // perform actions on the collection object
  client.close();
});

var MongoClient = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});