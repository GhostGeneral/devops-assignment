const os = require("os");
const http = require("http");
const url = require("url");

// Write a function that takes a roman numeral as input,
// and returns the number as an integer
// Don't remember roman numerals? Check https://www.mathsisfun.com/roman-numerals.html
const romanNumeralTranslator = (str) => {
  // code goes here
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
