const os = require("os");
const http = require("http");
const url = require("url");



const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};


// Write a function that takes a roman numeral as input,
// and returns the number as an integer
// Don't remember roman numerals? Check https://www.mathsisfun.com/roman-numerals.html
const romanNumeralTranslator = (str) => {
  // code goes here
  let result = 0;
  let splitedArr = str.split("");
  for (let i = 0; i < splitedArr.length; i++) {
    if (
      i < splitedArr.length - 1 &&
      DIGIT_VALUES[splitedArr[i]] < DIGIT_VALUES[splitedArr[i + 1]]
    ) {
      result -= DIGIT_VALUES[splitedArr[i]];
    } else {
      result += DIGIT_VALUES[splitedArr[i]];
    }
  }
  return result;
};

const handleRequest = (req, res) => {
  try {
    const { roman } = url.parse(req.url, true).query;
    res.write(`Hi there! I'm being served from ${os.hostname()} \n\n`);
    
      if (typeof roman !== 'string') {
        res.write('You should pass a string query parameter');
      }
    
    res.write(
      `The result of ${roman} conversion is ${romanNumeralTranslator(roman)}`
    );
  
      
  } catch (error) {
    res.write(`${error}`);
  }finally{
    res.end();
  }
};

http.createServer(handleRequest).listen(3000);

module.exports = romanNumeralTranslator;
