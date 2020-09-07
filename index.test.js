const romanNumeralTranslator = require("./index.js");

test("roman numerals", () => {
  expect(romanNumeralTranslator("MCMLIV")).toBe(1954);
  expect(romanNumeralTranslator("MCCLXXVIII")).toBe(1278);
});
