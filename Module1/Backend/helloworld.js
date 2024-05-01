console.log('Hello World')
console.log('Second Line')

// this is the structure of a function
// function ThisIsTheName(Signature) {
// Body
// }
function PrintLinesOnConsole() 
{
    console.log('Hello World')
    console.log('Second Line')
}

PrintLinesOnConsole()
const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze('I hate run');
console.dir(result);


function PrintSentiment(text)
{
    const Sentiment = require('sentiment');
    const sentiment = new Sentiment();
    const result = sentiment.analyze('I hate run');
    return result.score;
}

console.log(PrintSentiment("Dog are Great"))

