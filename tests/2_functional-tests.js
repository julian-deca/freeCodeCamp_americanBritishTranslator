const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  test("#Create an issue with every field: POST request to /api/issues/{project}", (done) => {
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
});
