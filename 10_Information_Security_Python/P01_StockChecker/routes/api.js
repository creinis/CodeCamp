"use strict";

const app = require("../server");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

/* You should set the content security policies to only allow loading of scripts and CSS from your server.*/
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(cors());
app.use(express.static("public"));

app.use(
  helmet({
    frameguard: {
      // configure
      action: "deny",
    },
    contentSecurityPolicy: {
      // enable and configure
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "style.com"],
      },
    },
    dnsPrefetchControl: false, // disable
  }),
);

/* You can send a GET request to /api/stock-prices, passing a NASDAQ stock symbol to a stock query parameter. The returned object will contain a property named stockData. */
app.get("/api/stock-prices", (req, res) =>

module.exports = function (app) {
  app.route("/api/stock-prices").get(function (req, res) {});
};
