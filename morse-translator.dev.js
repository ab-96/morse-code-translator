"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateWords = void 0;

var translateWords = function translateWords(message) {
  var morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
  };
  var word = message.split("");
  var translated = word.map(function (letter) {
    var newLetter = letter.toLowerCase();
    letter = morseCode[newLetter];
    return letter;
  });
  return translated.join("");
};

exports.translateWords = translateWords;