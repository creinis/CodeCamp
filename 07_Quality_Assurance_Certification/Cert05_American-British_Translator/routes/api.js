"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    console.log(req.body);
    const { text, locale } = req.body;
    if (!locale || text == undefined) {
      res.json({ error: "Required field(s) missing" });
      return;
    }
    if (text == "") {
      res.json({ error: "No text to translate" });
      return;
    }
    let translation = "";
    if (locale == "american-to-british") {
      translation = translator.translateAmericanToBritish(text);
    } else if (locale == "british-to-american") {
      translation = translator.translateBritishToAmerican(text);
    } else {
      res.json({ error: "Invalid value for locale field" });
      return;
    }
    if (translation == text || !translation) {
      res.json({ text, translation: "Everything looks good to me!" });
    } else {
      res.json({ text, translation: translation[1] });
    }
  });
};
