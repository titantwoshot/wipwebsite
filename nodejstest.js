const express = require('express');
const app = express();
const port = 8080;
const CoinRouter = require('./routes/CoinRouter');

app.listen(port, function(req, res) {
  console.log('Your server is running at localhost' + ':' + port);
});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/coins', CoinRouter);
