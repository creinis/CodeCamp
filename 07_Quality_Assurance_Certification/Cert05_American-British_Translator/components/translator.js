const e = require("cors");
const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

const reverseDict = (obj) => {
  return Object.assign(
    {},
    ...Object.entries(obj).map(([key, val]) => ({ [val]: key })),
  );
};

class Translator {
  translateAmericanToBritish(text) {
    const dict = { ...americanOnly, ...americanToBritishSpelling };
    const titles = americanToBritishTitles;
    const timeRegex = /([1-9]|1[012]):[0-5][0-9]/g;
    const translated = this.translate(
      text,
      dict,
      titles,
      timeRegex,
      "AmericanToBritish",
    );
    if (!translated) {
      return text;
    }
    return translated;
  }

  translateBritishToAmerican(text) {
    const dict = { ...britishOnly, ...reverseDict(americanToBritishSpelling) };
    const titles = reverseDict(americanToBritishTitles);
    const timeRegex = /([1-9]|1[012]).[0-5][0-9]/g;
    const translated = this.translate(
      text,
      dict,
      titles,
      timeRegex,
      "BritishToAmerican",
    );
    if (!translated) {
      return text;
    }
    return translated;
  }

  translate(text, dict, titles, timeRegex, locale) {
    const lowerText = text.toLowerCase();
    const matchesMap = {};

    // Verificação de títulos
    Object.entries(titles)
      .sort((a, b) => b[0].length - a[0].length)
      .map(([key, val]) => {
        if (lowerText.includes(key)) {
          matchesMap[key] = val.charAt(0).toUpperCase() + val.slice(1);
        }
      });

    const wordsWithSpaces = Object.fromEntries(
      Object.entries(dict).filter(([key, val]) => key.includes(" ")),
    );

    Object.entries(wordsWithSpaces).map(([key, val]) => {
      if (lowerText.includes(key)) {
        matchesMap[key] = val;
      }
    });

    lowerText.match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g).forEach((word) => {
      if (dict[word]) {
        matchesMap[word] = dict[word];
      }
    });

    const matchedTimes = lowerText.match(timeRegex);

    if (matchedTimes) {
      matchedTimes.map((e) => {
        if (locale === "AmericanToBritish") {
          return (matchesMap[e] = e.replace(":", "."));
        }
        return (matchesMap[e] = e.replace(".", ":"));
      });
    }

    if (Object.keys(matchesMap).length === 0) return null;
    console.log("Translation", matchesMap);
    const translation = this.replaceAll(text, matchesMap);
    const translationWithHighlight = this.replaceAllWithHighlight(
      text,
      matchesMap,
    );
    return [translation, translationWithHighlight];
  }

  replaceAll(text, matchesMap) {
    const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
    return text.replace(re, (matched) => matchesMap[matched.toLowerCase()]);
  }

  replaceAllWithHighlight(text, matchesMap) {
    const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
    return text.replace(re, (matched) => {
      return `<span class="highlight">${
        matchesMap[matched.toLowerCase()]
      }</span>`;
    });
  }
}

module.exports = Translator;
