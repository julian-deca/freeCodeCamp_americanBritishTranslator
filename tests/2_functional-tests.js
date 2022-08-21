const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  test("#1", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/json")
      .send({
        text: "favorite",
        locale: "american-to-british",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.text, "favorite");
        assert.equal(
          res.body.translation,
          '<span class="highlight">favourite</span>'
        );
        done();
      });
  });
  test("#2", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/json")
      .send({
        text: "favorite",
        locale: "americann-to-british",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "Invalid value for locale field");
        done();
      });
  });
  test("#3", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/json")
      .send({
        locale: "american-to-british",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });
  test("#4", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/json")
      .send({
        text: "favorite",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });
  test("#5", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/json")
      .send({
        text: "",
        locale: "american-to-british",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "No text to translate");
        done();
      });
  });
  test("#6", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/json")
      .send({
        text: "favourite",
        locale: "american-to-british",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, "Everything looks good to me!");

        done();
      });
  });
});
