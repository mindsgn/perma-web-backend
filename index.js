const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const port = process.env.PORT || 3000;

const router = express.Router();
const app = express();

var http = require('http').createServer(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

app.listen(port, function () {
  console.log(`Example app listening on port !`);
});