// "use strict" não foi alterado, mantendo o mesmo comportamento

const mongoose = require("mongoose");
const mongodb = require("mongodb");
const request = require("request-promise-native");

// Definição do Esquema do Banco de Dados
let stockSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  likes: { type: [Number], default: [] },
});

let Stock = mongoose.model("stock", stockSchema);

// Função para salvar ações
function saveStock(name, like, ip) {
  return Stock.findOne({ name: name }).then((stock) => {
    if (!stock) {
      let newStock = new Stock({ name: name, likes: like ? [ip] : [] });  
      return newStock.save();
    } else {
      if (like && stock.likes.indexOf(ip) === -1) {
        stock.likes.push(ip);
      }
      return stock.save();
    }
  });
}

// Função para analisar os dados recebidos
function parseData(data) {
  let i = 0;
  let stockData = [];
  let likes = [];
  while (i < data.length) {
    let stock = { stock: data[i].name, price: JSON.parse(data[i + 1]).close };
    likes.push(data[i].likes.length);
    stockData.push(stock);
    i += 2;
  }
  if (likes.length > 1) {
    stockData[0].rel_likes = likes[0] - likes[1];
    stockData[1].rel_likes = likes[1] - likes[0];
  } else {
    stockData[0].likes = likes[0];
    stockData = stockData[0];
  }
  console.log(stockData);
  return stockData;
}

module.exports = function (app) {
  app.get("/api/testing", (req, res) => {
    res.json({ IP: req.ip });
  });

  app.route("/api/stock-prices").get(function (req, res) {
    let name = req.query.stock || "";
    if (!Array.isArray(name)) {
      name = [name];
    }
    let promises = [];
    name.forEach((name) => {
      promises.push(saveStock(name.toUpperCase(), req.query.like, req.ip));
      let url = `https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${name.toUpperCase()}/quote`;
      promises.push(request(url));
    });
    Promise.all(promises)
      .then((data) => {
        let stockData = parseData(data);
        res.json({ stockData });
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
