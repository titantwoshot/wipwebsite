const express = require('express');
const app = express();
const CoinRouter = express.Router();

CoinRouter.route('/').get(function (req, res) {
  res.render('index');
});

CoinRouter.route('/create').get(function (req, res) {
   res.render('create');
 });

module.exports = CoinRouter;
