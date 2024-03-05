const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

suite("Functional Tests", () => {
  // Test01 - Translation with text and locale fields: POST request to /api/translate
  test("Test01 - Translation with text and locale fields: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favourite</span> fruit.',
        );
        done();
      });
  });

  // Test02 - Translation with text and invalid locale field: POST request to /api/translate
  test("Test02 - Translation with text and invalid locale field: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-british-invalid",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "Invalid value for locale field");
        done();
      });
  });

  // Test03 - Translation with missing text field: POST request to /api/translate
  test("Test03 - Translation with missing text field: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });

  // Test04 - Translation with missing locale field: POST request to /api/translate
  test("Test04 - Translation with missing locale field: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });

  // Test05 - Translation with empty text: POST request to /api/translate
  test("Test05 - Translation with empty text: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "No text to translate");
        done();
      });
  });

  // Test06 - Translation with text that needs no translation: POST request to /api/translate
  test("Test06 - Translation with text that needs no translation: POST request to /api/translate", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "My car is blue.",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, "Everything looks good to me!");
        done();
      });
  });
});

