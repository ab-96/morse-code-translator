"use strict";

var output = document.querySelector(".output");
var input = document.querySelector("input");
var translate = document.querySelector(".translate");
var reset = document.querySelector(".reset");

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
  return translated.join("/");
};

translate.addEventListener("click", function () {
  output.innerHTML = translateWords(input.value);
});
reset.addEventListener("click", function () {
  output.innerHTML = "";
  input.value = "";
});