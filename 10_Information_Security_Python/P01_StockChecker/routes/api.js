'use strict';

var expect = require('chai').expect;
const { request } = require('express');
let mongodb = require('mongodb')
let mongoose = require('mongoose')
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest


// db schema model
let stockSchema = new mongoose.Schema({
  code: String,
  likes: {type: [String], default: []}
})

let stock = mongoose.model('stock', stockSchema)

// save stock
function saveStock(code, like, ip) {
  return stock.findOne({ code: code})
  .then(stock => {
    if(!stock) {
      let newStock = new Stock({ code: code, likes: like ? [ip]:[]})
      return newStock.save()
    } else {
      if(like && stock.likes.indexOf(ip) === -1) {
        stock.likes.push(ip)
      }
      return stock.save()
    }
  })
}

// Parse Data
function parseData(data){
  let i = 0;
  let stockData = [];
  let likes = [];
  while (i < data.length) {
    let stock = { stock: data[i].code, price: parseFloat(data[i+1])};
    likes.push(data[i].likes.length);
    stockData.push(stock);
    i += 2;
  }
  if(likes.length > 1) {
    stockData[0].rel_likes = likes[0] - likes[1];
    stockData[1].rel_likes = likes[1] - likes[0];
  } else {
    stockData[0].likes = likes[0];
    stockData = stockData[0];
  }
  return stockData;
}



module.exports = function (app) {
  
  app.get('/api/testing', (req, res) => {
    res.json({ IP: req.ip })
  })


  app.route('/api/stock-prices')
    .get(function (req, res){
    
      let code = req.query.stock || '';
      if (!Array.isArray(code)) {
        code = [code];
      }
      let promise = [];
      code.forEach(code => {
        promises.push(saveStock(code.toUpperCase(), req.query.like, req.ip));
        let url = ''
        promises.push(request(url))
      });
      Promise.all(promises).then(data => {
        let stockData = parseData(data);
        res.json({ stockData })
      })
      .catch

      })
    };
