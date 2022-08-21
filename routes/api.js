"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const text = req.body.text;
    const locale = req.body.locale;

    if (!locale || text == undefined) {
      res.json({ error: "Required field(s) missing" });
      return;
    } else if (text == "") {
      res.json({ error: "No text to translate" });
      return;
    } else if (
      locale != "american-to-british" &&
      locale != "british-to-american"
    ) {
      res.json({ error: "Invalid value for locale field" });
      return;
    }

    res.json({ text, translation: translator.translate(text, locale) });
  });
};
