'use strict';
const axios = require("axios");
const mongoose = require('mongoose');


// db Schema
const stockSchema = new mongoose.Schema({
  name: {type: String, required: true},
  likes: {type: [String], default: []}
});
// creating a model based on the defined Schema
const Stock = mongoose.model("Stock", stockSchema);

// function to save stockData in db
async function saveStock(name, like, ip) {
  try {
    let stock = await Stock.findOne({name}); // first search if the stock already exists in db
    if(!stock) {
      //if the stock doesn't exists in db => the function will create it
      stock = new Stock({ name, likes: like ? [ip]:[]});
    } else {
      //if the stock already exists in db => manage like only
      if(like && !stock.likes.includes(ip)) {
        stock.likes.push(ip);
      }
    }
    // Save changes in db
    await stock.save();
    return stock;
  } catch (error) {
    throw new Error(`Saving Error: ${name}: ${error.message}`);
  }
}

// function to GET stockData from API using axios libraries
async function getStockData(name) {
  try {
    const response = await axios.get(`https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${name}/quote`);
    return response.data;
  } catch (error) {
    throw new Error(`Fetch Error: Couldn't get stock ${name} data from the API. ${error.message}`);
  }
}

// function to analyse the data from the API
function parseData(data, like) {
  const stockData = [];

  for (let i = 0; i < data.length; i += 2) {
    const stock = {
      stock: data[i+1].symbol,
      price: parseFloat(data[i + 1].close),
      likes: parseInt(data[i].likes.length),
    };
    if(like) {
      stock.likes++;
    }
    // The stockData property includes the stock symbol as a string, the price as a number, and likes as a number.
    //console.log(data[i+1].symbol, "typeof stock", typeof(data[i+1].symbol));
    //console.log(data[i + 1].close, "typeof price", typeof(parseFloat(data[i + 1].close)));
    //console.log(data[i].likes, "typeof likes", typeof(parseInt(data[i].likes)));
    stockData.push(stock);
  }
  if (stockData.length === 2) {
    const likesDiff = stockData[0].likes - stockData[1].likes;
    stockData[0].rel_likes = likesDiff;
    stockData[1].rel_likes = -likesDiff;
    delete stockData[0].likes;
    delete stockData[1].likes;
  }
  // Returns only one object when there is only one item in the array stockData
  return stockData.length === 1 ? stockData[0] : stockData;
}

module.exports = function (app) {

  app.get('/api/stock-prices', async function (req, res) {
    try {
      let names = req.query.stock || "";
      if(!Array.isArray(names)) {
        names = [names];
      }
      const promises = [];
      for (let name of names) {
        promises.push(saveStock(name.toUpperCase(), req.query.like, req.ip));
        promises.push(getStockData(name.toUpperCase()));
      }
      const data = await Promise.all(promises);
      const stockData = parseData(data, req.query.like);
      res.json({ stockData });
    } catch (error) {
      res.status(500).json({error: `Error processing the request: ${error.message}`});
    }
  })
};
