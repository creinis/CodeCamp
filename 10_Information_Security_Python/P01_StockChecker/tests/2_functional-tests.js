var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

// Test 01 - Viewing one stock: GET request to /api/stock-prices/
// Test 02 - Viewing one stock and liking it: GET request to /api/stock-prices/
// Test 03 - Viewing the same stock and liking it again: GET request to /api/stock-prices/
// Test 04 - Viewing two stocks: GET request to /api/stock-prices/
// Test 05 - Viewing two stocks and liking them: GET request to /api/stock-prices/

suite('Functional Tests', function() {
    suite("Functional get request tests", function(){
      test("Test 01 - Viewing one stock: GET request to /api/stock-prices/", function (done) {
        chai
          .request(server)
          .get("/api/stock-prices/")
          .query({ stock: "MSFT" })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.property(res.body.stockData, 'stock');
            assert.property(res.body.stockData, 'latestPrice');
            assert.property(res.body.stockData, 'likes');
            done();
          });
      });
      test("Test 02 - Viewing one stock and liking it: GET request to /api/stock-prices/", function (done) {
        chai
          .request(server)
          .get("/api/stock-prices/")
          .query({ stock: "COMP", like: true })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.stockData.stock, "COMP");
            assert.equal(res.body.stockData.likes, 1);
            assert.exists(res.body.stockData.price, "COMP has a price");
            done();
          });
      });
      test("Test 03 - Viewing the same stock and liking it again: GET request to /api/stock-prices/", function (done) {
        chai
          .request(server)
          .get("/api/stock-prices/")
          .query({ stock: "COMP", like: true })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.stockData.stock, "COMP");
            assert.equal(res.body.stockData.likes, 1);
            assert.exists(res.body.stockData.price, "COMP has a price");
            done();
          });
      });
      test("Test 04 - Viewing two stocks: GET request to /api/stock-prices/", function (done) {
        chai
          .request(server)
          .get("/api/stock-prices/")
          .query({ stock: ["GME", "AMC"] })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.stockData[0].stock, "GME");
            assert.equal(res.body.stockData[1].stock, "AMC");
            assert.exists(res.body.stockData[0].price, "GME has a price");
            assert.exists(res.body.stockData[1].price, "AMC has a price");
            done();
          });
      });
      test("Test 05 - Viewing two stocks and liking them: GET request to /api/stock-prices/", function (done) {
        chai
          .request(server)
          .get("/api/stock-prices/")
          .query({ stock: ["GME", "AMC"], like: true })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.stockData[0].stock, "GME");
            assert.equal(res.body.stockData[1].stock, "AMC");
            assert.exists(res.body.stockData[0].price, "GME has a price");
            assert.exists(res.body.stockData[1].price, "AMC has a price");
            assert.exists(res.body.stockData[0].rel_likes, "has relational likes");
            assert.exists(res.body.stockData[1].rel_likes, "has relational likes");
            done();
          });
      });
    })
});
