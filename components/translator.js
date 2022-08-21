const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  useTranslation(translation, arr, aTB) {
    arr.forEach((word, i) => {
      for (const [key, value] of Object.entries(translation)) {
        if (aTB) {
          if (word.toLowerCase() == key) {
            if (translation == americanToBritishTitles) {
              arr[i] =
                '<span class="highlight">' +
                value.charAt(0).toUpperCase() +
                value.slice(1) +
                "</span>";
            } else {
              arr[i] = '<span class="highlight">' + value + "</span>";
            }
          }
          if (/\d+\:\d+/g.test(word)) {
            let first = word.slice(0, word.indexOf(":"));
            let last = word.slice(word.indexOf(":") + 1);
            arr[i] =
              '<span class="highlight">' + first + "." + last + "</span>";
          }
        } else {
          if (word.toLowerCase() == value) {
            if (translation == americanToBritishTitles) {
              arr[i] =
                '<span class="highlight">' +
                key.charAt(0).toUpperCase() +
                key.slice(1) +
                "</span>";
            } else {
              arr[i] = '<span class="highlight">' + key + "</span>";
            }
          }
          if (/\d+\.\d+/g.test(word)) {
            let first = word.slice(0, word.indexOf("."));
            let last = word.slice(word.indexOf(".") + 1);
            arr[i] =
              '<span class="highlight">' + first + ":" + last + "</span>";
          }
        }
      }
    });
    return arr;
  }
  translate(text, locale) {
    let arr = text.split(" ");
    let copy = text.split(" ");
    let aTB;
    if (locale == "american-to-british") {
      aTB = true;
    } else if (locale == "british-to-american") {
      aTB = false;
    }
    arr = this.useTranslation(americanOnly, arr, aTB);
    arr = this.useTranslation(americanToBritishSpelling, arr, aTB);
    arr = this.useTranslation(americanToBritishTitles, arr, aTB);
    arr = this.useTranslation(britishOnly, arr, aTB);

    if (arr.join() == copy.join()) {
      return "Everything looks good to me!";
    }

    return arr.join(" ");
  }
}

module.exports = Translator;
