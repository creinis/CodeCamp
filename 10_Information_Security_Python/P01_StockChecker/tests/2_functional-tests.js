const chaiHttp = require("chai-http");
const chai = require("chai");
const assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  suite("GET /api/stock-prices => stockData object", function () {
    test("1 stock", function (done) {
      chai
        .request(server)
        .get("/api/stock-prices")
        .query({ stock: "goog" })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.isObject(res.body.stockData);
          assert.equal(res.body.stockData.stock, "GOOG");
          assert.isNumber(res.body.stockData.price);
          assert.isNumber(res.body.stockData.likes);
          done();
        });
    });

    test("1 stock with like", function (done) {
      chai
        .request(server)
        .get("/api/stock-prices")
        .query({ stock: "goog", like: "true" })
        .end(function (err, res) {
          done();
        });
    });

    test("1 stock with like again (ensure likes arent double counted)", function (done) {
      chai
        .request(server)
        .get("/api/stock-prices")
        .query({ stock: "goog", like: "true" })
        .end(function (err, res) {
          assert.equal(res.body.stockData.likes, 1);
          done();
        });
    });

    test("2 stocks", function (done) {
      chai
        .request(server)
        .get("/api/stock-prices")
        .query({ stock: ["goog", "msft"] })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.isArray(res.body.stockData);
          res.body.stockData.forEach((stock) => {
            assert.property(stock, "stock");
            assert.property(stock, "price");
            assert.property(stock, "rel_likes");
          });
          done();
        });
    });

    test("2 stocks with like", function (done) {
      chai
        .request(server)
        .get("/api/stock-prices")
        .query({ stock: ["goog", "msft"], like: "true" })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.isArray(res.body.stockData);
          res.body.stockData.forEach((stock) => {
            assert.property(stock, "stock");
            assert.property(stock, "price");
            assert.property(stock, "rel_likes");
          });
          done();
        });
    });
  });
});
