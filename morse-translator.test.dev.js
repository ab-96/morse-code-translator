"use strict";

var _morseTranslator = require("./morse-translator.js");

var _globals = require("@jest/globals");

(0, _globals.it)("should translate x to -..-", function () {
  var result = (0, _morseTranslator.translator)("x");
  (0, _globals.expect)(result).toBe("-..-");
});
(0, _globals.it)("should translate a to .-", function () {
  var result = (0, _morseTranslator.translator)("a");
  (0, _globals.expect)(result).toBe(".-");
});
(0, _globals.it)("should translate h to ....", function () {
  var result = (0, _morseTranslator.translator)("h");
  (0, _globals.expect)(result).toBe("....");
});
(0, _globals.it)("should translate yes to -.--/./...", function () {
  var result = (0, _morseTranslator.translateWords)("yes");
  (0, _globals.expect)(result).toBe("-.--/./...");
});